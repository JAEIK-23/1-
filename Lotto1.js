let creatNumberButton1 = document.querySelector(".ball.ball1");
let creatNumberButton2 = document.querySelector(".ball.ball2");
let creatNumberButton3 = document.querySelector(".ball.ball3");
let creatNumberButton4 = document.querySelector(".ball.ball4");
let creatNumberButton5 = document.querySelector(".ball.ball5");
let creatNumberButton6 = document.querySelector(".ball.ball6");
let pushButton = document.querySelector(".button");
let pushButton1 = document.querySelector(".button1");
let price = document.getElementById("total")
let ballColors = ['#FBC400', '#69C8F2', '#FF7272', '#AAAAAA', '#B0D840', '#FBC400'];
let winningNumber = []; 
let isTextShown = false;



function randomNumber() {
    return Math.floor(Math.random() * 45) + 1; 
    
}

pushButton.addEventListener('click', function () {
    for (let i = 1; i <= 6; i++) {
        let num = randomNumber();
        if (!winningNumber.includes(num)) {

            winningNumber.push(num);
        }
        let ball = document.querySelector(`.ball.ball${i}`);
        ball.textContent = num; 
        winningNumber.push(num);
        
    }
});

pushButton1.addEventListener('click', function() { 
    let amount = document.querySelector('[name = "name"]').value;
    let calculate = amount * 1000;
    price.textContent = calculate;
    let exchange = parseInt(amount);
    let addnumber = document.querySelector(".result");
    let title = document.createElement('div');
    title.classList.add('titles');

    if (!isTextShown) {
        title.textContent = "당첨 결과 확인"; 
        addnumber.appendChild(title);
        isTextShown = true;

        let winningTitle = document.createElement('p');
        winningTitle.textContent = "당첨 번호:";
        addnumber.appendChild(winningTitle);
    
        
        let winningSet = document.createElement('div');
        winningSet.classList.add('ballsetting');
    
        for (let i = 0; i < 6; i++) {
            let winningBall = document.createElement('span');
            winningBall.classList.add('balls');
            winningBall.textContent = winningNumber[i];
            winningBall.style.backgroundColor = ballColors[i];
            winningSet.appendChild(winningBall);
        }
    
        addnumber.appendChild(winningSet);
    }
    
    let mynumbertitle = document.createElement('p');
    mynumbertitle.classList.add('mynumbertitlecss')
    mynumbertitle.textContent = "내가 구매한 번호:";
    addnumber.appendChild(mynumbertitle); 



    for(let i = 0; i < exchange; i++) {
        let ballset = document.createElement('div');
        ballset.classList.add('ballsetting');

        let tempNumber = [];
        while (tempNumber.length < 6) {
            let n = randomNumber();
            if (!tempNumber.includes(n)) {
                tempNumber.push(n);
            }
        }

        let matchCount = 0;

        for( let j = 0; j < 6; j++) {
            let creatball = document.createElement('span');
            creatball.classList.add('balls');
            creatball.textContent = tempNumber[j];
            
            creatball.style.backgroundColor = ballColors[j];
            ballset.appendChild(creatball);



            if(winningNumber.includes(tempNumber[j])) {
                matchCount++;
            }
        }

        addnumber.appendChild(ballset);

        let resultText = document.createElement('p');
        resultText.classList.add('resultTextcss')
        if (matchCount == 6) {
            resultText.textContent = `결과: 6개 일치 - 당첨`;
          
        } else {
            resultText.textContent = `결과: ${matchCount}개 일치치`;
        }
        addnumber.appendChild(resultText);


    }
})