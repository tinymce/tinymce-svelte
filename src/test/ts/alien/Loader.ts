import { after, before, context } from '@ephox/bedrock-client';
import { Remove, SugarElement } from '@ephox/sugar';
import { VersionLoader } from '@tinymce/miniature';
import { flushSync, mount, unmount } from 'svelte';
import type { Editor as TinyMCEEditor } from 'tinymce';
import type { Version } from './TestHelpers';

// @ts-expect-error Remove when dispose polyfill is not needed
Symbol.dispose ??= Symbol('Symbol.dispose');
// @ts-expect-error Remove when dispose polyfill is not needed
Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose');

const Editor: any = (require('!!../../../../scripts/svelte-loader.js!../../../main/component/Editor.svelte')).default;
// proxy() is the runtime equivalent of $state({}) for objects — mutations trigger reactive updates
// in the mounted component exactly as $state would inside a .svelte file.
const { proxy }: { proxy: <T extends object>(val: T) => T } = require('svelte/internal/client');


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
  componentInstance: Record<string, any>;
  /** Update any props on the live component instance and flush Svelte reactivity synchronously. */
  setProps(patch: Partial<EditorProps>): void;
  remove(): void;
}

export type RenderFn = (props?: EditorProps) => Promise<SvelteEditorContext>;


export const render = async (props: EditorProps = {}): Promise<SvelteEditorContext> => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const userConf = (props.conf as Record<string, unknown>) ?? {};
  const userSetup = typeof userConf.setup === 'function' ? userConf.setup as (editor: TinyMCEEditor) => void : undefined;

  // Reactive proxy — mutations via setProps() propagate into the mounted component.
  const reactiveProps = proxy({
    ...props,
    licenseKey: props.licenseKey ?? 'gpl',
  }) as Record<string, unknown>;

  let componentInstance!: Record<string, any>;

  const { editor, DOMNode } = await new Promise<{ editor: TinyMCEEditor; DOMNode: HTMLElement }>((resolve, reject) => {
    reactiveProps.conf = {
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
    };

    componentInstance = mount(Editor, { target: container, props: reactiveProps });
  });

  const setProps = (patch: Partial<EditorProps>) => {
    Object.assign(reactiveProps, patch);
    flushSync();
  };

  const remove = () => {
    unmount(componentInstance);
    Remove.remove(SugarElement.fromDom(container));
  };

  return {
    editor,
    DOMNode,
    componentInstance,
    setProps,
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
