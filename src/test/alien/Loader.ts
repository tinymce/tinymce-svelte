import { Chain } from '@ephox/agar';
import { Fun } from '@ephox/katamari';
import { Attribute, SugarBody, SugarElement, Insert, Remove, SelectorFind } from '@ephox/sugar';
import Editor from 'dist/index.mjs';
import { render } from '@testing-library/svelte';

export interface Context {
  editor: any;
  component: any;
}

const getRoot = () => SelectorFind.descendant(SugarBody.body(), '#root').getOrThunk(() => {
  const root = SugarElement.fromTag('div');
  Attribute.set(root, 'id', 'root');
  Insert.append(SugarBody.body(), root);
  return root;
});

const cRender = (data: Record<string, any> = {}, _template: string = '<Editor {init} />') =>
  Chain.async<Context, Context>((_value, next, _die) => {
    const root = getRoot();
    const mountPoint = SugarElement.fromTag('div');
    Insert.append(root, mountPoint);

    const originalInit = data.init || {};
    const originalSetup = originalInit.setup || Fun.noop;

    const component = render(Editor, {
      ...data,
      conf: {
        ...originalInit,
        setup: (editor: any) => {
          originalSetup(editor);
          editor.on('SkinLoaded', () => {
            setTimeout(() => {
              next({ editor, component });
            }, 0);
          });
        }
      }
    });
  });

const cRemove = Chain.op(() => {
  Remove.remove(getRoot());
});

export { cRender, cRemove };