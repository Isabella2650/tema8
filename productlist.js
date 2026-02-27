console.log;

const container = document.querySelector(".cards");

const endpoint = "https://kea-alt-del.dk/t7/api/products"; /*Hent data herfra */

function getData() {
  fetch(endpoint).then((respons) => respons.json().then(showData));
} /* Fetche betyder det bliver kastet. Computeren griber respons, then respons vises i json (browseren) */

function showData(data) {
  let markup = "";
  data.forEach((element) => {
    console.log(element);
    markup += `<div class="div_img">
                    <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" /></a>
                    <h2>${element.productdisplayname}</h2>
                    <p>Malene birger Clutch</p>
                    <p>Gucci solbriller <br><br></p>
                    <p class="p_streg">699 kr ${element.price}</p>
                    <p> Nu 559 kr</p>
                </div>`;
  });
  container.innerHTML = markup;
} /* showData er en function der tjekker data */

getData();
