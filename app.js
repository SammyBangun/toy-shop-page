const wrapper = document.querySelector(".slides");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LEGO",
    price: 80000,
    desc: "Semua varian Lego yang terkenal",
    img: "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "JENGA",
    price: 52000,
    desc: "Jenga, permainan yang mengasah otak",
    img: "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/9d85e95bc7975ca23ae387ddb9dccd9d/mono-brands/01-HASBRO-GAMES-T81PYGSS0-Jenga-game-Multicolor.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 3,
    title: "PLAY-DOH",
    price: 30000,
    desc: "Play-Doh, permainan yang mengasah kreativitas",
    img: "https://th-thumbnailer.cdn-si-edu.com/kOR8c0nLm5G8VppygrM6GsxWvNw=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c8/de/c8de69b0-47ba-4ed2-b99f-1dae6bad409c/play_doh.jpg",
  },
  {
    id: 4,
    title: "NERF",
    price: 295000,
    desc: "Cocok untuk anak laki-laki yang ingin merasakan sensasi menggunakan senjata",
    img: "https://images.unsplash.com/photo-1591197805022-c8e3159e88cf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "HOTWHEELS",
    price: 32000,
    desc: 'Koleksi dan rasakan kualitas terbaik dari "Hotwheels"',
    img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/2/19/682dfb26-1efc-476c-a973-2e313cb0002c.jpg",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price.toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    );

    currentProductImg.src = choosenProduct.img;
    currentProductDesc.textContent = choosenProduct.desc;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
