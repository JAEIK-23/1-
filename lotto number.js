function randomNumber() {
    let Numbers = [];
    while (Numbers.length < 6) {
        let rand = Math.floor(Math.random() * 45) + 1;
        if(!Numbers.includes(rand)) {
            Numbers.push(rand);

        }
    }
    return Numbers;
}

function madeNumber() {
    let result = randomNumber();

    document.getElementById("lottoResult").innerText = result.join(", ");
}
