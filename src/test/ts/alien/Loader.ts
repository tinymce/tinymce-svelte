import { after, before, context } from '@ephox/bedrock-client';
import { Remove, SugarElement } from '@ephox/sugar';
import { VersionLoader } from '@tinymce/miniature';
import { mount, unmount } from 'svelte';
import type { Editor as TinyMCEEditor } from 'tinymce';
import type { Version } from './TestHelpers';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Editor = require('../../compiled/Editor.js').default;

// // @ts-expect-error Polyfill for `using` syntax in environments that don't have it yet
// Symbol.dispose ??= Symbol('Symbol.dispose');
// // @ts-expect-error
// Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose');

export interface EditorProps {
  id?: string;
  inline?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  apiKey?: string;
  licenseKey?: string;
  channel?: string;
  scriptSrc?: string;
  conf?: Record<string, unknown>;
  modelEvents?: string;
  value?: string;
  cssClass?: string;
  [key: string]: unknown;
}

export interface SvelteEditorContext extends Disposable {
  editor: TinyMCEEditor;
  DOMNode: HTMLElement;
  remove(): void;
}

export type RenderFn = (props?: EditorProps) => Promise<SvelteEditorContext>;


export const render = async (props: EditorProps = {}): Promise<SvelteEditorContext> => {
  // Create a fresh container per render so that remove() can delete the whole element,
  // leaving the DOM clean for bedrock's post-test DOM validation.
  const container = document.createElement('div');
  document.body.appendChild(container);

  let componentInstance: Record<string, unknown>;

  const { editor, DOMNode } = await new Promise<{ editor: TinyMCEEditor; DOMNode: HTMLElement }>((resolve, reject) => {
    const userConf = (props.conf as Record<string, unknown>) ?? {};
    const userSetup = typeof userConf.setup === 'function' ? userConf.setup as (editor: TinyMCEEditor) => void : undefined;

    const finalProps: EditorProps = {
      ...props,
      licenseKey: props.licenseKey ?? 'gpl',
      conf: {
        ...userConf,
        setup: (editor: TinyMCEEditor) => {
          if (userSetup) userSetup(editor);
          editor.on('SkinLoaded', () => {
            setTimeout(() => {
              const DOMNode = editor.targetElm as HTMLElement;
              if (DOMNode) {
                resolve({ editor, DOMNode });
              } else {
                reject(new Error('Could not find DOMNode after SkinLoaded'));
              }
            }, 0);
          });
        }
      }
    };

    componentInstance = mount(Editor, { target: container, props: finalProps }) as Record<string, unknown>;
  });

  const remove = () => {
    unmount(componentInstance);
    Remove.remove(SugarElement.fromDom(container));
  };

  return {
    editor,
    DOMNode,
    remove,
    [Symbol.dispose]: remove
  };
};

const unloadTinymce = () => {
  const win = window as Window & { tinymce?: unknown };
  if (win.tinymce && typeof (win.tinymce as any).remove === 'function') {
    (win.tinymce as any).remove();
  }
  document.querySelectorAll('script[src*="/node_modules/tinymce"]').forEach((el) => el.remove());
  document.querySelectorAll('link[href*="/node_modules/tinymce"]').forEach((el) => el.remove());
  delete win.tinymce;
};

export const withVersion = (version: Version, fn: (render: RenderFn) => void): void => {
  context(`TinyMCE (${version})`, () => {
    before(async () => {
      await VersionLoader.pLoadVersion(version);
    });

    after(() => {
      unloadTinymce();
    });

    fn(render);
  });
};
