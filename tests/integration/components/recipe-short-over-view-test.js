import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-recipe-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipe-short-over-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecipeShortOverView />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RecipeShortOverView>
        template block text
      </RecipeShortOverView>
    `);

    assert.dom().hasText('template block text');
  });
});
