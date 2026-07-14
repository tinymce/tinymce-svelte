import { Assertions } from '@ephox/agar';
import { describe, it } from '@ephox/bedrock-client';

import * as Loader from '../alien/Loader';
import { VALID_API_KEY, VERSIONS } from '../alien/TestHelpers';
import { TinyAssertions } from '@ephox/mcagar';

describe('BindingTest', () => {
  VERSIONS.forEach((version) =>
    Loader.withVersion(version, (render) => {
      const defaultProps: Loader.EditorProps = { apiKey: VALID_API_KEY };

      it('TINYINT-3435: value prop is bound to the editor\'s content', async () => {
        const initialValue = '<p>Hello, World!</p>';
        const newValue = '<p>New Content</p>';
        using ctx = await render({ ...defaultProps, value: initialValue });
        TinyAssertions.assertContent(ctx.editor, initialValue);
        ctx.editor.execCommand('mceSetContent', false, newValue);
        Assertions.assertEq('value prop should be updated', newValue, ctx.getProps('value'));
      });
    })
  );
});
