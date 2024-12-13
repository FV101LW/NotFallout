let player = {
    name: "Vault Dweller",
    strength: 5,
    perception: 5,
    endurance: 5,
    charisma: 5,
    intelligence: 5,
    agility: 5,
    luck: 5,
    health: 100,
};

let enemy = {
    name: "Raider",
    health: 30,
    attack: 5,
};

function startGame() {
    player = {
        name: "Vault Dweller",
        strength: Math.floor(Math.random() * 10) + 1,
        perception: Math.floor(Math.random() * 10) + 1,
        endurance: Math.floor(Math.random() * 10) + 1,
        charisma: Math.floor(Math.random() * 10) + 1,
        intelligence: Math.floor(Math.random() * 10) + 1,
        agility: Math.floor(Math.random() * 10) + 1,
        luck: Math.floor(Math.random() * 10) + 1,
        health: 100,
    };
    updateStats();
    updateStory("Welcome to the wasteland! Choose an action to begin.");
}

function updateStats() {
    const statsText = `
        Strength: ${player.strength} | 
        Perception: ${player.perception} | 
        Endurance: ${player.endurance} | 
        Charisma: ${player.charisma} | 
        Intelligence: ${player.intelligence} | 
        Agility: ${player.agility} | 
        Luck: ${player.luck} | 
        Health: ${player.health}
    `;
    document.getElementById("stats").innerText = statsText;
}

function updateStory(text) {
    document.getElementById("story-text").innerText = text;
}

function explore() {
    let randomEvent = Math.random();
    if (randomEvent < 0.3) {
        updateStory("You encounter a friendly NPC who offers you advice.");
    } else if (randomEvent < 0.7) {
        updateStory("You find a hidden stash of supplies!");
    } else {
        updateStory("Dangerous enemies lurk nearby. Prepare for combat!");
    }
}

function combat() {
    if (player.health <= 0) {
        updateStory("You are too weak to fight. Please rest and heal.");
        return;
    }

    let attackSuccess = Math.random() < (player.agility + player.luck) / 20;
    let damage = attackSuccess ? player.strength * 2 : 0;
    enemy.health -= damage;

    if (enemy.health <= 0) {
        updateStory(`You defeated the ${enemy.name}!`);
    } else {
        let enemyAttack = Math.floor(Math.random() * enemy.attack) + 1;
        player.health -= enemyAttack;
        updateStory(`
            You attacked the ${enemy.name} and dealt ${damage} damage. 
            The enemy retaliated, and you took ${enemyAttack} damage. 
            Your health: ${player.health}, Enemy health: ${enemy.health}.
        `);
    }

    updateStats();
}

function endGame() {
    updateStory("Thanks for playing! Restart to play again.");
    player = {
        name: "Vault Dweller",
        strength: 5,
        perception: 5,
        endurance: 5,
        charisma: 5,
        intelligence: 5,
        agility: 5,
        luck: 5,
        health: 100,
    };
    updateStats();
}
