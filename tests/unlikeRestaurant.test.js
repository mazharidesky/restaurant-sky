/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as tesFactories from './helpers/tesFactories';

describe('Unliking A Restaurant', () => {
  const addLikebuttonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikebuttonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await tesFactories.createLikeButtonRestaurantPresenter({ id: 1 });

    // Hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
