
$('.top-bar-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  adaptiveHeight: true,

});



$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  adaptiveHeight: true,
  infinite: true,
  slidesToScroll: 3,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },]

});

// Fetching Products Through Fake Store API

const apiUrl = 'https://fakestoreapi.com/products';

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Function to render the product card
function renderProduct(product) {
  const card = document.createElement('div');
  card.className = 'card col-md-4 mb-3';

  const image = document.createElement('img');
  image.src = product.image;
  image.className = 'card-img-top shadow-lg p-3 bg-body';
  image.alt = product.title;
  card.appendChild(image);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title fw-bold';
  title.textContent = product.title;
  cardBody.appendChild(title);

  const bottomDetails = document.createElement('div');
  bottomDetails.className = 'bottom-details';

  const price = document.createElement('p');
  price.className = 'card-text';
  price.textContent = `${product.category}, Now: $${product.price}`;
  bottomDetails.appendChild(price);

  cardBody.appendChild(bottomDetails);
  card.appendChild(cardBody);

  return card;
}

// Function to display the products in the HTML
async function displayProducts() {
  const productsContainer = document.getElementById('products-container');

  // Fetch the products from the API
  const products = await fetchProducts();

  // Render and add each product card to the container
  products.forEach((product) => {
    const productCard = renderProduct(product);
    productsContainer.appendChild(productCard);
  });
}

// Call the function to display products when the page loads
displayProducts();
