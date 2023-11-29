import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `

<div class="detail_restaurant">
    <img class= "restaurant_image" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt=${restaurant.name} />
    <div class= "restaurant_info">
    <h4>Nama Restaurant</h4>
    <p>${restaurant.name}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota </h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi </h4>        
    <p>${restaurant.description}</p>
    <div class="menu_makanan">
    <h4>Menu makanan </h4>
    <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
    <h4>Menu minuman </h4>
    <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
    </div>
    <h4 class="review_customer" >Review kostumer</h4>
    <ul>
    ${restaurant.customerReviews.map((review) => `
      <li>
        <p>Nama     : ${review.name}</p>
        <p>Review Restorant ${restaurant.name}  : ${review.review}</p>
        <p>Tanggal  : ${review.date}</p>
      </li>
    `).join('')}
  </ul>
    </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class= "restaurant-card">
    <img  class= "restaurant-image lazyload" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
    alt="${restaurant.name}" 
    loading="lazy">
    <p class= "rating">Rating: ⭐️ ${restaurant.rating}</p>
    <a href="/#/detail/${restaurant.id}"><h3 class="restaurant-title">${restaurant.name}</h3></a>
    <p>City : ${restaurant.city}</p>
    <p>Description : ${restaurant.description}</p>
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>

`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
