// Player stats and initial state
let player = {
  coins: 100,
  dragons: [],
  dragonCount: 0
};

// A simple dragon object
class Dragon {
  constructor(name) {
    this.name = name;
    this.happiness = 50; // Happiness starts at 50
  }

  feed() {
    this.happiness = Math.min(this.happiness + 10, 100);
  }
}

// Function to update stats
function updateStats() {
  document.getElementById('coins').textContent = player.coins;
  document.getElementById('dragonCount').textContent = player.dragonCount;
}

// Function to buy a new dragon
function buyDragon() {
  if (player.coins >= 50) {
    player.coins -= 50;
    const newDragon = new Dragon("Dragon " + (player.dragonCount + 1));
    player.dragons.push(newDragon);
    player.dragonCount++;
    alert("You bought a new dragon!");

    // Display new dragon
    const dragonDiv = document.createElement("div");
    const dragonImage = document.createElement("img");
    dragonImage.src = "https://www.pngitem.com/pimgs/m/207-2071395_dragon-png-image-free-download-searchpng-royalty-free.png"; // Placeholder Dragon Image URL
    dragonDiv.appendChild(dragonImage);
    document.getElementById("dragons").appendChild(dragonDiv);

    updateStats();
  } else {
    alert("Not enough coins!");
  }
}

// Function to feed a dragon
function feedDragon() {
  if (player.dragons.length > 0) {
    const dragon = player.dragons[Math.floor(Math.random() * player.dragons.length)];
    dragon.feed();
    alert(dragon.name + " is now happier! Happiness: " + dragon.happiness);
  } else {
    alert("You have no dragons to feed.");
  }
}

updateStats();
