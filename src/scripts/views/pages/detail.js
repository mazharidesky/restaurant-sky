import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
// eslint-disable-next-line import/named
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class= "detail-restaurant">
      <h1 class= "title-detail">Detail Restaurant</h1>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // eslint-disable-next-line no-undef
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const heroElement = document.querySelector('.hero');
    heroElement.style.display = 'none';
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
