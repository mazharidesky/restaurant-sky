const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('Liking A Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Favorite').first());
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Home').first());
  I.wait(3);

  I.seeElement('a .restaurant-title');
  const firstRestaurant = locate('a .restaurant-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Favorite').first());
  I.seeElement('.restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.wait(3);
});

Scenario('Unliking A Restaurant', ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Favorite').first());
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Home').first());
  I.wait(3);

  I.seeElement('a .restaurant-title');
  I.click(locate('a .restaurant-title').first());
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Favorite').first());
  I.wait(3);

  I.seeElement('#favorite-restaurants');
  I.click(locate('a .restaurant-title').first());
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.seeElement('#navbar-list');
  I.click(locate('.nav_item a').withText('Favorite').first());
  I.wait(3);
});
