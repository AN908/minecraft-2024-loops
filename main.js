// Functionize Minecraft Fishing Start Code

//Html variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let displayInventory = document.getElementById("fishDisplay");
let sortInventory = document.getElementById("sortInv");

//Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
sortInventory.addEventListener("click", sortingFish);
document.getElementById("FishInput").addEventListener("change", fishInputBox);

function fishBtnClicked() {
  //Determine selected character
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "steve") {
    //Fishing with steve
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      displayInventory.innerHTML += `<img src="img/Raw-Cod.png" alt="">`;
    } else if (randNum < 0.9) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      displayInventory.innerHTML += `<img src="img/Raw-Salmon.png" alt="">`;
    } else if (randNum < 0.95) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      displayInventory.innerHTML += `<img src="img/Tropical-Fish.png" alt="">`;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      displayInventory.innerHTML += `<img src="img/Pufferfish.png" alt="">`;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      displayInventory.innerHTML += `<img src="img/Raw-Cod.png" alt="">`;
    } else if (randNum < 0.2) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      displayInventory.innerHTML += `<img src="img/Raw-Salmon.png" alt="">`;
    } else if (randNum < 0.5) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      displayInventory.innerHTML += `<img src="img/Tropical-Fish.png" alt="">`;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      displayInventory.innerHTML += `<img src="img/Pufferfish.png" alt="">`;
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      displayInventory.innerHTML += `<img src="img/Raw-Cod.png" alt="">`;
    } else if (randNum < 0.5) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      displayInventory.innerHTML += `<img src="img/Raw-Salmon.png" alt="">`;
    } else if (randNum < 0.75) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      displayInventory.innerHTML += `<img src="img/Tropical-Fish.png" alt="">`;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      displayInventory.innerHTML += `<img src="img/Pufferfish.png" alt="">`;
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function fishInputBox() {
  let num = +document.getElementById("FishInput").value;
  for (x = 0; x < num; x++) {
    fishBtnClicked();
    console.log(x);
  }
}

function sortingFish() {
  let x = 0;
  let v = 0;
  let y = 0;
  let o = 0;

  displayInventory.innerHTML = "";

  while (true) {
    if (x <= numCod) {
      displayInventory.innerHTML += `<img src="img/Raw-Cod.png" alt="">`;
      x++;
    } else {
      break;
    }
  }

  while (true) {
    if (v <= numSalmon) {
      displayInventory.innerHTML += `<img src="img/Raw-Salmon.png" alt="">`;
      v++;
    } else {
      break;
    }
  }

  while (true) {
    if (y <= numTropical) {
      displayInventory.innerHTML += `<img src="img/Tropical-Fish.png" alt="">`;
      y++;
    } else {
      break;
    }
  }

  while (true) {
    if (o <= numPuffer) {
      displayInventory.innerHTML += `<img src="img/Pufferfish.png" alt="">`;
      o++;
    } else {
      break;
    }
  }
}
