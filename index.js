const messages = [
    "Keep pushing forward!",
    "You're doing great!",
    "Every day is a new opportunity!",
    "Believe in yourself!",
    "Success is just around the corner!"
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

console.log(getRandomMessage());