import { $ } from "./utils.js";
// Pagination Buttons
const nextPageBtn = $("#nextPage");
const previousProductShowBtn = $("#previousProductShow");
const nextProductShowBtn = $("#nextProductShow");
// Div Show
const yieldEl = $(".yield");
// SearchBox
const searchForm = $('#searchForm')
const searchInput = $('#searchInput')
// Find Menu Btn
const newestProductBtn = $('#newest');
const popularProductBtn = $('#popular');
const premiumProductBtn = $('#premium');
const freeProductBtn = $('#free');
// What Show Products?
const paginationState = {
  page: 0,
  limit: 3,
};
// Current (Active) Page :)
let currentPage = 1;
const pageCurrentEl = $(".current-page");
// Products
const products = [
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-dead.gif",
    productName: "لیوان مرده",
  },
  {
    price: ["رایگان" , 'free'],
    imgsrc: "tumbler-ride.gif",
    productName: "لیوان درود",
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان سایبری",
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان موز",
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان خیاری",
  },
];
// Default Products
let newProducts = products.slice(paginationState.page * paginationState.limit , (paginationState.page + 1) * paginationState.limit);

// Funcs

// Append 3 Products
function appendNewProducts (newProducts) {
  // Clear
  yieldEl.innerHTML = ''
  // Add New Products
  newProducts.map(index => {
    const {price : [price , type] , imgsrc , productName} = index;
    yieldEl.innerHTML += `
        <div class="card" data-price="${type}">
            <div class="preview">
                <div class="price">
                    <i class="uil uil-unlock-alt"></i>
                    <span>${price}</span>
                </div>
                <img src="assets/picture/${imgsrc}" alt="">
                <div class="information">
                    <p>Name : <b>Tumbler</b></p>
                    <p>Format : <b>gif</b></p>
                    <p>Size : <b>500 * 500</b></p>
                    <p>Download Size : <b>0.7MB</b></p>
                    <p>Creator : <b>IDN</b></p>
                </div>
            </div>
            <div class="desc">
                <p class="product-name">${productName}</p>
                <a href="#">
                    دانلود
                    <i class="uil uil-download-alt"></i>
                </a>
            </div>
        </div>
      `;
  })
}
// Handle Back , Next Button
const getPage = (angle , filterProducts) => {
  const {page , limit} = paginationState;

  if (angle === 'right') {
    if (page > 1) return false
    paginationState.page++;
    // Edit Current Page
    currentPage++
  } else if (angle === 'left') {
    if (page * limit < newProducts.length) return false
    paginationState.page--;
    // Edit Current Page
    currentPage--
  } else if ('nothing' ){
    newProducts = filterProducts.slice(paginationState.page * paginationState.limit , (paginationState.page + 1) * paginationState.limit)
    appendNewProducts(newProducts);
    return false
  }
  // Show The User
  pageCurrentEl.textContent = currentPage;
  // // Create New Products
  newProducts = products.slice(paginationState.page * paginationState.limit , (paginationState.page + 1) * paginationState.limit)
  // Append To the Html
  appendNewProducts(newProducts);
}

const filterByPriceType = argType => {
  // Create New Products With User Search
  const filterProducts = products.filter(index => {
    const {price : [price , type]} = index;
    return type === argType
  })

  getPage('center' , filterProducts)
}

// Create Items By Default
appendNewProducts(newProducts)

// Events

nextPageBtn.addEventListener("click", _ => getPage('right'));
nextProductShowBtn.addEventListener("click", _ => getPage('right'));
previousProductShowBtn.addEventListener("click", _ => getPage('left'));

searchForm.addEventListener('submit' , e => {
  e.preventDefault();
  // Get User Search Value
  const searchValue = searchInput.value;
  // Create New Products With User Search
  const filterProducts = products.filter(index => {
    const {price , imgsrc , productName} = index;
    return productName.includes(searchValue)
  })
  // Slice
  getPage('center' , filterProducts)
})


freeProductBtn.addEventListener('click' , _ => filterByPriceType('free'))

premiumProductBtn.addEventListener('click' , _ => filterByPriceType('premium'))

newestProductBtn.addEventListener('click' , () => {
  getPage('center' , products)
})
popularProductBtn.addEventListener('click' , () => {
  getPage('center' , products.reverse())
})