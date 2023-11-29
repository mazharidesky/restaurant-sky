import API_ENDPOINT from '../../globals/api-endpoint';

fetch(API_ENDPOINT.RESTAURANT_LIST)
  .then((response) => response.json())
  .then((data) => {
    // Now you can work with the data
    const restaurantsData = data;
    // eslint-disable-next-line no-use-before-define
    renderRestaurants(restaurantsData.restaurants);
  })
  .catch((error) => console.error('Error fetching JSON:', error));

// Function to render restaurant cards
function renderRestaurants(restaurants) {
  const container = document.getElementById('daftar-restaurant');

  restaurants.forEach((restaurant) => {
    const card = document.createElement('div');
    card.classList.add('restaurant-card');

    const restaurantImage = document.createElement('img');
    restaurantImage.src = restaurant.pictureId ? API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale';
    restaurantImage.alt = restaurant.name;
    restaurantImage.classList.add('restaurant-image');

    const restaurantRating = document.createElement('p');
    restaurantRating.textContent = `Rating: ⭐️ ${restaurant.rating}`;
    restaurantRating.classList.add('rating');

    const restaurantId = document.createElement('a');
    restaurantId.href = `/#/detail/${restaurant.id}}`;
    const restaurantName = document.createElement('h3');
    restaurantName.textContent = restaurant.name;

    restaurantId.appendChild(restaurantName);
    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = `Description : ${restaurant.description}`;

    const restaurantCity = document.createElement('p');
    restaurantCity.textContent = `City : ${restaurant.city}`;

    card.tabIndex = 0;
    card.appendChild(restaurantImage);
    card.appendChild(restaurantRating);
    card.appendChild(restaurantCity);
    card.appendChild(restaurantId);
    card.appendChild(restaurantDescription);
    container.appendChild(card);
  });
}
