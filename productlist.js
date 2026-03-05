const category = new URLSearchParams(window.location.search).get(
  "category",
); /*Tjek URL og hent data derfra, altså hent category derfra */

console.log(category);
("productlist.js is connected");

const container = document.querySelector(".cards");

const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=12&category=${category}&limit=30`; /*Hent data herfra */

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showData(allData);
    });
} /* Fetche betyder det bliver kastet. Computeren griber respons, then respons vises i json (browseren) */

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "All") {
    showData(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    showData(udsnit);
  }
}

function showData(data) {
  console.table(data);
  let markup = "";
  data.forEach((element) => {
    console.log(element);
    markup += `
  <div class="div_img ${element.soldout ? "soldOut" : ""}">
    <a href="productdetails.html?fisk=${element.id}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="${element.productdisplayname}">
    </a>

    <h2>${element.productdisplayname}</h2>
    <p>${element.brandname}</p>

   ${
     element.discount
       ? `<p class="p_streg">${element.price} DKK</p><p>${Math.round(element.price - (element.price * element.discount) / 100)} DKK</p>`
       : `<p>${element.price} DKK</p>`
   }

<div class="discound_soldout">
    ${element.discount ? `<p class="discount">-${element.discount}%</p>` : ""}
    ${element.soldout ? `<p class="udsolgt">Soldout</p>` : ""}
    </div>
  </div>
`;
  });
  container.innerHTML = markup;
} /* showData er en function der tjekker data */

getData();
