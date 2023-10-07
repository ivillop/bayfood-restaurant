import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { listRestaurantCard } from '../templates/template-restaurant';

const Favorite = {
  async render() {
    return `
          <h2>Restoran Kesukaanmu</h2>
          <div class="card" id="data-kuliner"></div>
          `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#data-kuliner');

    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += listRestaurantCard(resto);
    });
  },
};

export default Favorite;
