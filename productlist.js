const category = new URLSearchParams(window.location.search).get(
  "category",
); /*Tjek URL og hent data derfra, altså hent category derfra */

console.log(category);
("productlist.js is connected");

const container = document.querySelector(".cards");

const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=12&category=${category}`; /*Hent data herfra */

function getData() {
  fetch(endpoint).then((respons) => respons.json().then(showData));
} /* Fetche betyder det bliver kastet. Computeren griber respons, then respons vises i json (browseren) */

function showData(data) {
  console.table(data);
  let markup = "";
  data.forEach((element) => {
    console.log(element);
    markup += `<div class="div_img">
                    <a href="productdetails.html?fisk=${element.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" /></a>
                    <h2>${element.productdisplayname}</h2>
                    <p>${element.brandname} <br><br></p>
                    <p class="p_streg"> ${element.price}</p>
                    <p> ${element.discount}</p>
                    <p class="udsolgt">Udsolgt</p>
                </div>`;
  });
  container.innerHTML = markup;
} /* showData er en function der tjekker data */

getData();
