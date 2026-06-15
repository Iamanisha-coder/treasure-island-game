const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

function updateGame(text, choices) {
    storyText.innerText = text;
    choicesContainer.innerHTML = ""; // Clear old buttons

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.className = "btn";
        button.onclick = () => choice.action();
        choicesContainer.appendChild(button);
    });
}

function makeChoice(direction) {
    if (direction === 'left') {
        updateGame(
            "You come to a lake. There is an island in the middle of the lake.",
            [
                { text: "Wait for a boat", action: () => arriveAtIsland() },
                { text: "Swim across", action: () => gameOver("You got attacked by an angry trout. Game Over.") }
            ]
        );
    } else {
        gameOver("You fell into a hole. Game Over.");
    }
}

function arriveAtIsland() {
    updateGame(
        "You arrive at the island unharmed. There is a house with 3 doors: Red, Yellow, and Blue.",
        [
            { text: "Red door", action: () => gameOver("It's a room full of fire. Game Over.") },
            { text: "Yellow door", action: () => winGame() },
            { text: "Blue door", action: () => gameOver("You enter a room of beasts. Game Over.") }
        ]
    );
}

function winGame() {
    updateGame("🏆 You found the treasure! You Win!", [{ text: "Play Again", action: () => location.reload() }]);
}

function gameOver(message) {
    updateGame(`☠️ ${message}`, [{ text: "Try Again", action: () => location.reload() }]);
}
