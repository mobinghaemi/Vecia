const yieldEl = $(".yield");
// What Show Products?
const paginationState = {
  startPostion: -3,
  endPostion: 0,
};
let pageCurrentNumber = 0;
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
];

const nextPageBtn = $("#nextPage");
const previousProductShowBtn = $("#previousProductShow");
const nextProductShowBtn = $("#nextProductShow");

// Append All Products To the HTML And Show 3 Product
const innerProducts = (_) => {
  // Distructing
  let { startPostion: start, endPostion: end } = paginationState;
  start += 3;
  end += 3;
  paginationState.startPostion = start;
  paginationState.endPostion = end;
  // Save Updated Array
  const newProducts = products.slice(start, end);
  // If No More Products : User Not Allowed Showing Next Page
  if (newProducts.length === 0) return false;
  // Clear Previous Product
  yieldEl.innerHTML = ``;
  // Add New Prodcuts
  newProducts.map((index) => {
    // Get Product Data
    const { price, imgsrc, productName } = index;
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
  });

  pageCurrentNumber++;
  pageCurrentEl.textContent = pageCurrentNumber;

  console.log(paginationState);
};
innerProducts();

nextPageBtn.addEventListener("click", innerProducts);
nextProductShowBtn.addEventListener("click", innerProducts);
previousProductShowBtn.addEventListener("click", () => {});
