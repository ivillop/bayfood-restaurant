/* eslint-disable no-unused-vars */
import CONFIG from '../../global/config';

const listRestaurantCard = (resto) => `
<a href="#/detail/${resto.id}" class="cards">
<div class="cards">
<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
<div class="card-body">
<p tabindex="0">Rating: ${resto.rating}</p>
  <h3 tabindex="0">${resto.name}</h3>
  <p tabindex="0">${resto.city}</p>
</div>
</div>
</a>
`;

const listRestaurantDetail = (resto) => `
<div class="detail-header">
<div class="detail-img">
<h2>${resto.name}</h2>
<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
</div>
<div class="detail-info">
<p>Alamat: ${resto.address}</p>
<p>Kota: ${resto.city}</p>
<p>${resto.description}</p>
</div>
</div>
<h3>Menu Makanan</h3>
<div class="detail-menu">
${resto.menus.foods
    .map(
      (food) => `
<div class="detail-item">
<i class="fa-solid fa-burger"></i>
<p>${food.name}</p>
</div>
`,
    )
    .join('')}
    </div>
<h3>Menu Minuman</h3>
<div class="detail-menu">
${resto.menus.drinks
    .map(
      (drink) => `
<div class="detail-item">
<i class="fa-solid fa-beer-mug-empty"></i>
<p>${drink.name}</p>
</div>
  `,
    )
    .join('')}
    </div>
<h3>Review Customer</h3>
<div class="detail-review">
${resto.customerReviews
    .map(
      (customer) => `
  <div class=detail-customer>
  <p>Nama: ${customer.name}</p>
  <p>Review: ${customer.review}</p>
  <p>Tanggal Review: ${customer.date}</p>
  </div>
  `,
    )
    .join('')}
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
  listRestaurantCard,
  listRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
