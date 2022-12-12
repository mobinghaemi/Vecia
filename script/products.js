// Pagination Buttons
const nextPageBtn = $("#nextPage");
const previousProductShowBtn = $("#previousProductShow");
const nextProductShowBtn = $("#nextProductShow");
// Div Show
const yieldEl = $(".yield");
// What Show Products?
const paginationState = {
  startPostion: 0,
  endPostion: 3,
};
// Current (Active) Page :)
let currentPage = 1;
const pageCurrentEl = $(".current-page");
// Products
const products = [
  {
    price: "ویژه",
    imgsrc: "tumbler-dead.gif",
    productName: "لیوان مرده",
  },
  {
    price: "رایگان",
    imgsrc: "tumbler-ride.gif",
    productName: "لیوان درود",
  },
  {
    price: "ویژه",
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان سایبری",
  },
  {
    price: "ویژه",
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان موز",
  },
  {
    price: "ویژه",
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
  },
  {
    price: "ویژه",
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
  },
  {
    price: "ویژه",
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان خیاری",
  },
];
// Default Products
let newProducts = products.slice(paginationState.startPostion , paginationState.endPostion);

// Funcs

// Append 3 Products
function appendNewProducts (newProducts) {
  // Clear
  yieldEl.innerHTML = ''
  // Add New Products
  newProducts.map(index => {
    const {price , imgsrc , productName} = index;
    yieldEl.innerHTML += `
        <div class="card" data-price="free">
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
const getPage = angle => {
  if (angle === 'right') {
    if (newProducts.length < 3) return false;
    // Increase Pagination State
    paginationState.startPostion += 3;
    paginationState.endPostion += 3;
    // Increase Current Page Number
    currentPage++
    pageCurrentEl.textContent = currentPage;
  } else if (angle === 'left') {
    if (paginationState.startPostion === 0) return false;
    // Decrease Pagination State
    paginationState.startPostion -= 3;
    paginationState.endPostion -= 3;
    // Decrease Current Page Number
    currentPage--
    pageCurrentEl.textContent = currentPage;
  }
  // Create New Products
  newProducts = products.slice(paginationState.startPostion , paginationState.endPostion)
  // Append To the Html
  appendNewProducts(newProducts);
}

// Create Items By Default
appendNewProducts(newProducts)

// Events
nextPageBtn.addEventListener("click", _ => getPage('right'));
nextProductShowBtn.addEventListener("click", _ => getPage('right'));
previousProductShowBtn.addEventListener("click", _ => getPage('left'));