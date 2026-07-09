import { TestStore } from '@ephox/agar';
import { before, describe, it } from '@ephox/bedrock-client';

import * as Loader from '../alien/Loader';
import { VALID_API_KEY, VERSIONS } from '../alien/TestHelpers';

describe('EventTest', () => {
  VERSIONS.forEach((version) =>
    Loader.withVersion(version, (render) => {
      const store = TestStore<string>();
      const eventHandlers = {
        init: () => {
          store.add('init');
        },
        loadcontent: () => {
          store.add('loadcontent');
        }
      };
      const defaultProps: Loader.EditorProps = { apiKey: VALID_API_KEY, ...eventHandlers };

      before(() => {
        store.clear();
      });

      it('TINYINT-3435: init and loadcontent events should be fired', async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        using ctx = await render({ ...defaultProps });
        store.assertEq('Events should be fired', [
          'loadcontent',
          'init',
        ]);
      });
    })
  );
});
