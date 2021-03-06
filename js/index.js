const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector("#memory-board").innerHTML = html;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      let card1;
      let card2;

      card.classList.toggle("turned");

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        if (memoryGame.checkIfPair(card1, card2)) {
          memoryGame.pickedCards = [];
          document.getElementById("pairs-guessed").innerHTML =
            memoryGame.pairsGuessed;
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach((cardPicked) => {
              cardPicked.classList.toggle("turned");
            });
            memoryGame.pickedCards = [];
          }, 1000);
        }
        document.getElementById("pairs-clicked").innerHTML =
          memoryGame.pairsClicked;
      }
      if (memoryGame.isFinished()) {
        setTimeout(() => {
          alert("You won the game!");
        }, 1000);
      }
    });
  });
});
