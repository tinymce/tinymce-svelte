import { GeneralSteps, Logger, Pipeline, Assertions, Chain } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock-client';
import { cRender, cRemove } from '../alien/Loader';

UnitTest.asyncTest('ExampleTest', (success, failure) => {
  Pipeline.async({}, [
    GeneralSteps.sequence([
      Logger.t('First test', Chain.asStep({}, [
        cRender(),
        Chain.op((context) => {
          Assertions.assertEq('Editor should not be inline', false, context.editor.inline);
        }),
        cRemove
      ]))
    ])
  ], success, failure);
});