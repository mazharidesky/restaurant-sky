import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="list__restaurant">
        <h1>Your Liked Restaurant</h1>
        <div id="favorite-restaurants" class="favorite-restaurants">
        <div class= "nothing-like">Nothing Liked Restaurant</div>
        </div>
      </div>
        `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#favorite-restaurants');
    const notLikeRestaurant = document.querySelector('.nothing-like');
    if (restaurants.length > 0) {
      notLikeRestaurant.style.display = 'none'; // Menyembunyikan elemen
    }
    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Like;
