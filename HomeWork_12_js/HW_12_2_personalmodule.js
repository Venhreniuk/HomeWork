
function getGreetingTime(hour) {
    if (hour >= 5 && hour < 12) {
        return "Доброго ранку";
    } else if (hour >= 12 && hour < 18) {
        return "Доброго дня";
    } else if (hour >= 18 && hour < 22) {
        return "Доброго вечора";
    } else {
        return "Доброї ночі";
    }
}

function greetUser(userName) {
    const currentHour = new Date().getHours();
    const greeting = getGreetingTime(currentHour);
    return `${greeting}, ${userName}!`;
}

module.exports = {
    greetUser: greetUser
};
