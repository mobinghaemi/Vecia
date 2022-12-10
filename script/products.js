
const yieldEl = $('.yield')
const products = [
    {
        price : 'ویژه',
        imgsrc : 'tumbler-dead.gif',
        productName : 'لیوان مرده'
    },
    {
        price : 'رایگان',
        imgsrc : 'tumbler-ride.gif',
        productName : 'لیوان درود'
    },
    {
        price : 'ویژه',
        imgsrc : 'tumbler-digital.gif',
        productName : 'لیوان سایبری'
    }
]

products.map((index) => {
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
    `
})