import { $ , products , overlay , killEverything} from "./utils.js";
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
// Download Modal
const downloadModal = $('.modal.download');
const downloadModalImage = downloadModal.querySelector('img')
// Download Products Links
let downloadEl;
// What Show Products?
const paginationState = {
  page: 0,
  limit: 3,
};
// Current (Active) Page :)
let currentPage = 1;
const pageCurrentEl = $(".current-page");
// Default Products
let newProducts = products.slice(paginationState.page * paginationState.limit , (paginationState.page + 1) * paginationState.limit);

// Funcs

// Append 3 Products
const appendNewProducts = newProducts => {
  // Clear
  yieldEl.innerHTML = ''
  // Add New Products
  newProducts.map(index => {
    const {price : [price , type] , imgsrc , productName , information} = index;
    const {format , size , downloadSize , creator} = information;
    yieldEl.innerHTML += `
        <div class="card" data-price="${type}">
            <div class="preview">
                <div class="price">
                    <i class="uil uil-unlock-alt"></i>
                    <span>${price}</span>
                </div>
                <img src="assets/picture/${imgsrc}" alt="">
                <div class="information">
                    <p>نام محصول : <b>${productName}</b></p>
                    <p>فرمت : <b>${format}</b></p>
                    <p>سایز : <b>${size}</b></p>
                    <p>حجم : <b>${downloadSize}</b></p>
                    <p>سازنده : <b>${creator}</b></p>
                </div>
            </div>
            <div class="desc">
                <p class="product-name">${productName}</p>
                <a href="assets/picture/${imgsrc}" id='download'>
                    دانلود
                    <i class="uil uil-download-alt"></i>
                </a>
            </div>
        </div>
      `;
  })
}
// Show Download Modal And Download Files
const downloadProduct = (elements) => {
  downloadModalImage.src = ''
  let product;
  const cancelDownload = $('#cancelDownload');
  const continueDownload = $('#continueDownload');
  elements.forEach(index => {
    index.addEventListener('click' , e => {
      e.preventDefault()
      product = e.target.href;
      downloadModalImage.src = product;
      downloadModal.classList.remove('hidden')
      overlay.classList.remove('hidden')
    })
  })
  cancelDownload.addEventListener('click' , killEverything)
  continueDownload.addEventListener('click' , e => {
    const dd = document.createElement('a');
    dd.href = product;
    dd.download = product.split('/')[5];
    dd.click()
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
  // Handle Download Event
  downloadEl = document.querySelectorAll("#download");
  downloadProduct(downloadEl)
}
// Filter Product By Everything :)
const filterByPriceType = argType => {
  // Create New Products With User Search
  const filterProducts = products.filter(index => {
    const {price : [price , type]} = index;
    return type === argType
  })

  getPage('center' , filterProducts)
}

// Search Product And Show Result
const searchProduct = e => {
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
}

// Default Call Funcs

// Create Items By Default
appendNewProducts(newProducts)
// Find Default Links
downloadEl = document.querySelectorAll('#download')
// Create Default Link onClick
downloadProduct(downloadEl)

// Events

// Pagination Buttons
nextPageBtn.addEventListener("click", _ => getPage('right'));
nextProductShowBtn.addEventListener("click", _ => getPage('right'));
previousProductShowBtn.addEventListener("click", _ => getPage('left'));
// Search Handle
searchForm.addEventListener('submit' , searchProduct)
// Filter Buttons
freeProductBtn.addEventListener('click' , _ => filterByPriceType('free'))
premiumProductBtn.addEventListener('click' , _ => filterByPriceType('premium'))
newestProductBtn.addEventListener('click' , _ => getPage('center' , products))
popularProductBtn.addEventListener('click' , _ => getPage('center' , products.reverse()))