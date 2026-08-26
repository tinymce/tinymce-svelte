import { Assertions } from '@ephox/agar';
import { describe, it } from '@ephox/bedrock-client';
import { Attribute, SugarElement } from '@ephox/sugar';

import * as Loader from '../alien/Loader';
import { VERSIONS } from '../alien/TestHelpers';

/*
  This test requires the targeted Svelte version provided via custom route
*/
describe('VerifyIntegrationTest', () => {
  VERSIONS.forEach((version) =>
    Loader.withVersion(version, (render) => {

      it(`TINYINT-3443: Should load TinyMCE ${version} with the specified Svelte version`, async () => {
        const integrationInfo = await window.fetch('/custom/integration/info').then(
          (resp) => resp.json()
        ).catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Failed to fetch integration info at /custom/integration/info', err);
        });
        using ctx = await render();

        Assertions.assertEq(
          `Loaded TinyMCE version should be ${version}`,
          version,
          ctx.editor.editorManager.majorVersion
        );
        Assertions.assertEq(
          `Bundled Svelte version should be ${integrationInfo.version}`,
          integrationInfo.version,
          Attribute.get(SugarElement.fromDom(ctx.DOMNode.parentElement as HTMLElement), 'data-framework-version')
        );
      });
    })
  );
});
