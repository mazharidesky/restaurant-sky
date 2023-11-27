/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as tesFactories from './helpers/tesFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('Should not show the like button when the restaurant has not been liked before', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="ulike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like a restaurant', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('clikc'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a movie when it has no id', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
