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
        it('uses textarea by default (iframe mode)', async () => {
          using ctx = await render(defaultProps);
          assertProperty(ctx.DOMNode, 'tagName', 'TEXTAREA');
        });

        it('uses div for inline mode', async () => {
          using ctx = await render({ ...defaultProps, inline: true });
          assertProperty(ctx.DOMNode, 'tagName', 'DIV');
        });
      });

      context('id prop', () => {
        it('is set when provided', async () => {
          using ctx = await render({ ...defaultProps, id: 'test-editor' });
          assertProperty(ctx.DOMNode, 'id', 'test-editor');
        });

        it('is auto-generated as uuid when not provided', async () => {
          using ctx = await render(defaultProps);
          Assertions.assertEq(
            'id should be a uuid starting with tinymce-svelte',
            true,
            typeof ctx.DOMNode.id === 'string' && ctx.DOMNode.id.startsWith('tinymce-svelte_')
          );
        });
      });

      it('value prop sets initial content', async () => {
        using ctx = await render({ ...defaultProps, value: '<p>Hello World</p>' });
        TinyAssertions.assertContent(ctx.editor, '<p>Hello World</p>');
      });

      it('empty value prop results in empty editor', async () => {
        using ctx = await render({ ...defaultProps, value: '' });
        TinyAssertions.assertContent(ctx.editor, '');
      });
    })
  );
});
