import { Assertions } from '@ephox/agar';
import { context, describe, it } from '@ephox/bedrock-client';
import { TinyAssertions } from '@ephox/mcagar';

import * as Loader from '../alien/Loader';
import { VALID_API_KEY, VERSIONS } from '../alien/TestHelpers';

const assertProperty = (obj: object, propName: string, expected: unknown) => {
  Assertions.assertEq(`${propName} should be ${expected}`, expected, (obj as Record<string, unknown>)[propName]);
};

describe('EditorInitTest', () => {
  VERSIONS.forEach((version) =>
    Loader.withVersion(version, (render) => {
      const defaultProps: Loader.EditorProps = { apiKey: VALID_API_KEY };

      context('inline prop controls element tag', () => {
        it('TINYINT-3437: Uses textarea by default (iframe mode)', async () => {
          using ctx = await render(defaultProps);
          assertProperty(ctx.DOMNode, 'tagName', 'TEXTAREA');
        });

        it('TINYINT-3437: Uses div for inline mode', async () => {
          using ctx = await render({ ...defaultProps, inline: true });
          assertProperty(ctx.DOMNode, 'tagName', 'DIV');
        });
      });

      context('id prop', () => {
        it('TINYINT-3437: Is set when provided', async () => {
          using ctx = await render({ ...defaultProps, id: 'test-editor' });
          assertProperty(ctx.DOMNode, 'id', 'test-editor');
        });

        it('TINYINT-3437: Is auto-generated as uuid when not provided', async () => {
          using ctx = await render(defaultProps);
          Assertions.assertEq(
            'id should be a uuid starting with tinymce-svelte',
            true,
            typeof ctx.DOMNode.id === 'string' && ctx.DOMNode.id.startsWith('tinymce-svelte_')
          );
        });
      });

      it('TINYINT-3437: Value prop sets initial content', async () => {
        using ctx = await render({ ...defaultProps, value: '<p>Hello World</p>' });
        TinyAssertions.assertContent(ctx.editor, '<p>Hello World</p>');
      });

      it('TINYINT-3437: Empty value prop results in empty editor', async () => {
        using ctx = await render({ ...defaultProps, value: '' });
        TinyAssertions.assertContent(ctx.editor, '');
      });

      it('TINYINT-3435: cssClass is set to the container if provided', async () => {
        using ctx = await render({ ...defaultProps, cssClass: 'test-class' });
        Assertions.assertEq('className of containershould contain test-class', true, ctx.DOMNode.parentElement?.className === 'test-class');
      });

      it('TINYINT-3435: conf is passed as options to the editor', async () => {
        using ctx = await render({ ...defaultProps, conf: { branding: false }});
        Assertions.assertEq('branding option should be false', false, ctx.editor.options.get('branding'));
      });
    })
  );
});
