import { Assertions, Waiter } from '@ephox/agar';
import { context, describe, it } from '@ephox/bedrock-client';

import * as Loader from '../alien/Loader';

describe('EditorDisabledTest', () => {
  context('with TinyMCE < 7.6', () => {
    Loader.withVersion('7.5', (render) => {
      it('TINYINT-3437: Updating disabled prop should toggle the editor\'s mode', async () => {
        using ctx = await render({
          disabled: true
        });
        Assertions.assertEq('mode is readonly', 'readonly', ctx.editor.mode.get());

        ctx.setProps({ disabled: false });
        await Waiter.pTryUntil('mode is changed to design', () => {
          Assertions.assertEq('mode is design', 'design', ctx.editor.mode.get());
        });
      });

      it('TINYINT-3437: Updating readonly prop should toggle the editor\'s mode', async () => {
        using ctx = await render({
          readonly: true
        });
        Assertions.assertEq('mode is readonly', 'readonly', ctx.editor.mode.get());

        ctx.setProps({ readonly: false });
        await Waiter.pTryUntil('mode is changed to design', () => {
          Assertions.assertEq('mode is design', 'design', ctx.editor.mode.get());
        });
      });
    });
  });

  context('with TinyMCE >= 7.6', () => {
    Loader.withVersion('7', (render) => {
      it('TINYINT-3437: Updating disabled prop should only change the editor\'s state', async () => {
        using ctx = await render({
          disabled: true
        });
        Assertions.assertEq('mode is design', 'design', ctx.editor.mode.get());
        Assertions.assertEq('editor is disabled', true, ctx.editor.options.get('disabled'));

        ctx.setProps({ disabled: false });
        await Waiter.pTryUntil('editor\'s state should be updated', () => {
          Assertions.assertEq('mode is design', 'design', ctx.editor.mode.get());
          Assertions.assertEq('editor is not disabled', false, ctx.editor.options.get('disabled'));
        });
      });

      it('TINYINT-3437: Updating readonly prop should only change the editor\'s mode', async () => {
        using ctx = await render({
          readonly: true
        });
        Assertions.assertEq('mode is readonly', 'readonly', ctx.editor.mode.get());
        Assertions.assertEq('editor is not disabled', false, ctx.editor.options.get('disabled'));

        ctx.setProps({ readonly: false });
        await Waiter.pTryUntil('editor\'s mode should be updated', () => {
          Assertions.assertEq('mode is design', 'design', ctx.editor.mode.get());
          Assertions.assertEq('editor is not disabled', false, ctx.editor.options.get('disabled'));
        });
      });
    });
  });
});