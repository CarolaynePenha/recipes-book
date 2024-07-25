import { module, test } from 'qunit';
import { setupTest } from 'ember-recipe-app/tests/helpers';

module('Unit | Route | recipes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:recipes');
    assert.ok(route);
  });
});
