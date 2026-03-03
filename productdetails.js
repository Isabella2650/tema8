const fisk = new URLSearchParams(window.location.search).get(
  "fisk",
); /*Tjek URL og hent data derfra, altså hent category derfra */

const container = document.querySelector("main");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${fisk}`; /*Hent data herfra */

function getData() {
  fetch(endpoint).then((respons) => respons.json().then(showData));
} /* Fetche betyder det bliver kastet. Computeren griber respons, then respons vises i json (browseren) */

function showData(data) {
  console.log(data);
  container.innerHTML = `<div><img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"></div>
        <section>
            <div class="div_tekst">
                <h2>Product information${data.productdisplayname}</h2><br>
                <p><b>Model name: </b></p>
                <p>${data.variantname}<br><br>
                <p><b>Color</b></p>
                <p>grey${data.basecolour}<br><br>
                <p><b>Production year</b></p>
                <p>${data.productionyear}<br><br>
                <p class="p_streg">${data.discount}</p>
                <p>${data.price}
                </p>
                <p class="udsolgt">Udsolgt${data.soldout}</p>
            </div>
            <div>
                <div class="div_sizes">
                    <p class="size">S</p>
                    <p class="size">M</p>
                    <p class="size">L</p>
                </div>
                <div class="div_button"><button>Tilføj</button></div>
            </div>
        </section>`;
}

getData();
