export const $ = Q => document.querySelector(Q);

export const products = [
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-dead.gif",
    productName: "لیوان مرده",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["رایگان" , 'free'],
    imgsrc: "tumbler-ride.gif",
    productName: "لیوان درود",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان سایبری",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان موز",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "لیوان الکی",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
  {
    price: ["ویژه" , 'premium'],
    imgsrc: "tumbler-digital.gif",
    productName: "کاشمری",
    information : {
      format : "GIF" , 
      size : '500 * 500',
      downloadSize : '0.7MB',
      creator : 'IDN'
    }
  },
];

export const overlay = $('.overlay');
const modals = document.querySelectorAll('.modal')

// Func : Kill Every Open Window | Feature Like Mobile Menu | Modal ...
export function killEverything () {
  overlay.classList.add('hidden')
  modals.forEach(element => {
    element.classList.add('hidden')
  });
}
