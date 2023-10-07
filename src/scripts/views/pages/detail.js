import Restaurant from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { listRestaurantDetail } from '../templates/template-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="data-kuliner" class="detail"></div>
        <div id="likeButtonContainer"></div>
        <h2>Tambahkan Review Restoran Menurut Kamu</h2>
        <form id="review-form">
          <div class="form-element">
            <label for="review-name">Nama: </label>
            <input type="text" id="review-name" name="review-name" autocomplete="off" />
          </div>
          <div class="form-element">
            <label for="review-name">Review: </label>
            <textarea
              id="review-text"
              name="review-text"
              rows="6"
              ></textarea>
          </div>
          <div class="form-element">
            <button id="submit-review" type="submit">Kirim Review Anda</button>
          </div>
          </form>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Restaurant.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#data-kuliner');
    restaurantContainer.innerHTML = listRestaurantDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
