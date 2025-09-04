const gameForm = document.getElementById("GameForm");
const modForm = document.getElementById("ModForm");
const modsList = document.getElementById("ModsList");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

let currentGame = "";
let mods = [];

// Show popup with a custom message
function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "flex";
}

// Close popup
function closePopup() {
  popup.style.display = "none";
}

// Handle Game form submission
gameForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const gameInput = document.getElementById("GameName").value.trim();

  if (gameInput) {
    currentGame = gameInput;
    showPopup(`Game set to: ${currentGame}`);
    gameForm.reset();
  } else {
    showPopup("Please enter a game name.");
  }
});

// Handle Mod form submission
modForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const modName = document.getElementById("ModName").value.trim();
  const modLink = document.getElementById("ModLink").value.trim();

  if (!currentGame) {
    showPopup("Please set a game first!");
    return;
  }

  if (modName && modLink) {
    mods.push({ game: currentGame, modName, modLink });
    displayMods();
    modForm.reset();
  } else {
    showPopup("Please fill in both fields.");
  }
});

// Display mods
function displayMods() {
  modsList.innerHTML = "";
  mods.forEach((mod) => {
    const div = document.createElement("div");
    div.className = "mod-card";
    div.innerHTML = `
      <strong>${mod.modName}</strong> <em>(for ${mod.game})</em><br>
      <a href="${mod.modLink}" target="_blank">Download Link</a>
    `;
    modsList.appendChild(div);
  });
}
