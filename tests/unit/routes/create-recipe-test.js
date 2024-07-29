import { module, test } from 'qunit';
import { setupTest } from 'ember-recipe-app/tests/helpers';

module('Unit | Route | create-recipe', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:create-recipe');
    assert.ok(route);
  });
});
