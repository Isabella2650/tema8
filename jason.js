const endpoint =
  "https://kea-alt-del.dk/t7/api/categories"; /*Hent data herfra */

const container = document.querySelector(".div_buttons");

function getData() {
  fetch(endpoint).then((respons) => respons.json().then(showData));
} /* Fetche betyder det bliver kastet. Computeren griber respons, then respons vises i json (browseren) */

function showData(data) {
  console.log(data);
  data.forEach((kategori) => {
    container.innerHTML += `<a href="productlist.html">${kategori.category}</a>`;
  });
} /* showData er en function der tjekker data */

getData(); /* Kalder functionen get data*/
