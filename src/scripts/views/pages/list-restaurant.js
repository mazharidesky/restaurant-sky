import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListResaturant = {
  async render() {
    return `
    <div class= "list-restaurant">
        <h1>Katalog Restaurant</h1>
        <div id= "daftar-restaurant" class= "daftar-restaurant"></div>
       </div> 
       `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.itemRestaurants();
    const restaurantsContainer = document.querySelector('#daftar-restaurant');
    // eslint-disable-next-line no-shadow
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default ListResaturant;
