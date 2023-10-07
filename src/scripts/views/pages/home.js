import Restaurant from '../../data/restaurant-source';
import { listRestaurantCard } from '../templates/template-restaurant';

const Home = {
  async render() {
    return `
    <h2 tabindex="0">Jelajahi Kuliner</h2>
    <div class="card" id="data-kuliner"></div>
          `;
  },

  async afterRender() {
    const restaurant = await Restaurant.listRestaurant();
    const restaurantContainer = document.querySelector('#data-kuliner');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += listRestaurantCard(resto);
    });
  },
};

export default Home;
