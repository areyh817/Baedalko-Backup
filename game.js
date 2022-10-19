"use strict"
// 캔버스 생성
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let CharacterCheck = false;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let grade = document.getElementById("grade").value; 

let Fgrade, Sgrade, Tgrade; 
let imgArray; 

if(grade == "first") { 
    Fgrade = new Image(); 

    imgArray = new Array();
    imgArray[0] = "fgrade/fgrade_1.png";
    imgArray[1] = "fgrade/fgrade_2.png";
    imgArray[2] = "fgrade/fgrade_3.png";
    imgArray[3] = "fgrade/fgrade_4.png";
    imgArray[4] = "fgrade/fgrade_5.png";
    imgArray[5] = "fgrade/fgrade_6.png";
    imgArray[6] = "fgrade/fgrade_7.png";
    imgArray[7] = "fgrade/fgrade_8.png";
    
    function showImage() { //캐릭터 gif
        let imgNum = Math.round(Math.random()*7);
        Fgrade = document.getElementById("introimg");
        Fgrade.src = imgArray[imgNum];
        setTimeout(showImage, 100);
    }
    showImage();
}

if(grade == "second") { 
    Sgrade = new Image(); 

    imgArray = new Array();
    imgArray[0] = "sgrade/sgrade_1.png";
    imgArray[1] = "sgrade/sgrade_2.png";
    imgArray[2] = "sgrade/sgrade_3.png";
    imgArray[3] = "sgrade/sgrade_4.png";
    imgArray[4] = "sgrade/sgrade_5.png";
    imgArray[5] = "sgrade/sgrade_6.png";
    imgArray[6] = "sgrade/sgrade_7.png";
    imgArray[7] = "sgrade/sgrade_8.png";
    
    function showImage() { //캐릭터 gif
        let imgNum = Math.round(Math.random()*7);
        Sgrade = document.getElementById("introimg");
        Sgrade.src = imgArray[imgNum];
        setTimeout(showImage, 100);
    }
    showImage();
}

if(grade == "third") { 
    Tgrade = new Image(); 

    imgArray = new Array();
    imgArray[0] = "tgrade/tgrade_1.png";
    imgArray[1] = "tgrade/tgrade_2.png";
    imgArray[2] = "tgrade/tgrade_3.png";
    imgArray[3] = "tgrade/tgrade_4.png";
    imgArray[4] = "tgrade/tgrade_5.png";
    imgArray[5] = "tgrade/tgrade_6.png";
    imgArray[6] = "tgrade/tgrade_7.png";
    imgArray[7] = "tgrade/tgrade_8.png";
    
    function showImage() { 
        let imgNum = Math.round(Math.random()*7);
        Tgrade = document.getElementById("introimg");
        Tgrade.src = imgArray[imgNum];
        setTimeout(showImage, 100);
    }
    showImage();
}

let Character = {
    x : 180,
    y : 100,
    width : 170, 
    height : 210, 
    score : 0, 
    size : false, 
    item_time : 5, 
    speed : false,  

    draw() {
        if(grade == "first") { 
            ctx.drawImage(Fgrade, this.x, this.y, this.width, this.height);
        }
        else if(grade == "second") { 
            ctx.drawImage(Sgrade, this.x, this.y, this.width, this.height);
        }
        else if(grade == "third") { 
            ctx.drawImage(Tgrade, this.x, this.y, this.width, this.height);
        }
    }
}

let c = new Image();    
c.src = 'obstacle/c.png';

let cc = new Image(); 
cc.src = 'obstacle/cc.png';

let js = new Image(); 
js.src = 'obstacle/js.png';

let error = new Image();
error.src = 'obstacle/error.png';

let coin = new Image();
coin.src = 'obstacle/coin.png';

let java = new Image(); 
java.src = 'obstacle/java.png';

class C { 
    constructor() {
        this.id = 1;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(c, this.x, this.y, this.width, this.height);
    }
}

class CC { 
    constructor() {
        this.id = 2;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(cc, this.x, this.y, this.width, this.height);
    }
}

class JS { 
    constructor() {
        this.id = 3;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(js, this.x, this.y, this.width, this.height);
    }
}

class ERROR {
    constructor() {
        this.id = 4;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(error, this.x, this.y, this.width, this.height);
    }
}

class COIN { 
    constructor() {
        this.id = 5;
        this.coin_cnt = 0; 
        this.coin_bool = false;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(coin, this.x, this.y, this.width, this.height);
    }
}

class JAVA { 
    constructor() {
        this.id = 6;
        this.x = 1500;
        this.y = 530; 
        this.width = 55;
        this.height = 55;
    }
    draw() {
        ctx.drawImage(java, this.x, this.y, this.width, this.height);
    }
}


function itemQuestion(){
    let question = [
        "java는 무슨 언어일까요 ?",
        "Java의 상수 선언할 때 사용하는 단어는 ?",
        "기존의 클래스에 기능을 추가하거나 재정의 하여 새로운 클래스를 정의 하는 것은 ?",
        "C언어에서 int는 몇 byte인가요 ?",
        "프로그램이 실행하는데 영향을 주지 않는 언어 구성 요소이고\nJava에선 //, /**/ html에서는 <!-->이 기본적이다.",
        "javascript에서 엄격모드를 사용하기 위해 코드 최상단에 쓰는 것은 ?",
        "javascript에서는 예전에는 변수 선언할 때 var를 썼다. 최근들어서 변수를 선언할 때 쓰는 것은 ?",
        "같은 블록내에서 선언한 변수만 사용가능한 변수를 칭하는 것은 ?",
        "블록 밖에서 선언하여 어디서든 다 사용가능한 변수를 칭하는 것은 ?",
        "HTML이나 XML로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어를 칭하는 것은 ?",
        "C언어는 무슨 언어일까요?",
        "프로그래밍 언어에서 다른 변수, 혹은 그 변수의 메모리 공간 주소를 가리키는 변수를 말하며\n일반적으로 ◯◯◯는 메모리 주소로 바꿀 수 있다. ◯◯◯에 들어갈 말은 ?",
        "◯◯◯◯은 문장의 끝을 의미한다. 자바에서는 문장의 끝에 ◯◯◯◯을 사용하지 않으면 컴파일 에러가 발생한다. ◯◯◯◯에 들어갈 말은 ?",
        "◯◯◯는 이미 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없는 단어들을 칭한다.\n◯◯◯는 변수로 사용할 수 없으며 Java에서 continue는 ◯◯◯이다.",
        "c나 java언어에서는 '존재하지 않는 객체'에 대한 참조값을 의미하고 자바스크립트에서는 '존재하지 않거나, 비어있거나, 알 수 없는 값'을 나타내는 것은?",
        "자바스크립트에서 typeof null의 값은?",
        "자바스크립트에서 typeof alert의 값은?",
        "자바스크립트에서 undefined를 숫자로 변환한 값은?",
        "자바스크립트에서 null===undefined의 값은?",
        "문자로 이루어진 코드를 기계어로 변환하는 장치는?",
        "C++ 에서 여러 함수가 이름을 공유하는 것은?",
        "C++ 에서는 함수를 선언할 때 매개 변수에 초기값을 지정할 수 있다. 기본 인자로 설정된 변수는?",
        "외부에서는 객체의 멤버 접근을 금지하는 키워드는?",
        "C++ 에서 메모리 누수로부터 프로그램의 안전성을 보장하기 위해 사용이 끝난 메모리를 자동으로 해제하는 기능은? (영어로)"
    ];
    
    let rand = Math.floor(Math.random() * 23) + 1;
    let answer;
    
    switch(rand){
        case 1: answer = prompt(question[0]); break;
        case 2: answer = prompt(question[1]); break;
        case 3: answer = prompt(question[2]); break;
        case 4: answer = prompt(question[3]); break;
        case 5: answer = prompt(question[4]); break;
        case 6: answer = prompt(question[5]); break;
        case 7: answer = prompt(question[6]); break;
        case 8: answer = prompt(question[7]); break;
        case 9: answer = prompt(question[8]); break;
        case 10: answer = prompt(question[9]); break;
        case 11: answer = prompt(question[10]); break;
        case 12: answer = prompt(question[11]); break;
        case 13: answer = prompt(question[12]); break;
        case 14: answer = prompt(question[13]); break;
        case 15: answer = prompt(question[14]); break;
        case 16: answer = prompt(question[15]); break;
        case 17: answer = prompt(question[16]); break;
        case 18: answer = prompt(question[17]); break;
        case 19: answer = prompt(question[18]); break;
        case 20: answer = prompt(question[19]); break;
        case 21: answer = prompt(question[20]); break;
        case 22: answer = prompt(question[21]); break;
        case 23: answer = prompt(question[22]); break;
        case 24: answer = prompt(question[23]); break;
        case 25: answer = prompt(question[24]); break;
        case 26: answer = prompt(question[25]); break;

    }
    
    if(rand == 1){
        if(answer == "객체지향" || answer == "객체지향언어" || answer == "객체 지향 언어"){ alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 2){
        if(answer == "final") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 3){
        if(answer == "상속") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 4){
        if(answer == "4" || answer == "4byte") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 5){
        if(answer == "주석") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 6){
        answer = answer.toLowerCase();
        if(answer == "use strict" || answer == "usestrict") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 7){
        if(answer == "let") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 8){
        if(answer == "지역변수" || answer == "지역" || answer == "지역 변수") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 9){
        if(answer == "전역변수" || answer == "전역" || answer == "전역 변수") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    }  else if(rand == 10){
        answer = answer.toUpperCase();
        if(answer == "CSS") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 11){
        if(answer == "절차지향" || answer == "절차지향언어" || answer == "절차 지향 언어") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 12){
        answer = answer.toUpperCase();
        if(answer == "포인터" || answer == "POINTER") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 13){
        if(answer == "세미콜론" || answer == ";") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 14){
        if(answer == "예약어") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 15){
        answer = answer.toUpperCase();
        if(answer == "NULL") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 16){
        answer = answer.toUpperCase();
        if(answer == "OBJECT") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 17){
        answer = answer.toUpperCase();
        if(answer == "FUNCTION") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 18){
        answer = answer.toUpperCase();
        if(answer == "NAN") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 19){
        answer = answer.toUpperCase();
        if(answer == "FALSE") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 20){
        answer = answer.toUpperCase();
        if(answer == "COMPILER" || answer == "컴파일러") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 21){
        if(answer == "함수오버로딩" || answer == "함수 오버로딩") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 22){
        if(answer == "디폴트매개변수" || answer == "디폴트 매개변수" || answer == "디폴트 매개 변수") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 23){
        answer = answer.toUpperCase();
        if(answer == "PRIVATE") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    } else if(rand == 24){
        answer = answer.toUpperCase();
        if(answer == "SMARTPOINTER" || answer == "SMART POINTER") { alert("정답입니다. 아이템 효과가 발생됩니다."); return true; } 
        else {alert("오답입니다. 아이템 효과가 발생되지 않습니다."); return false; }
    }
}

let timer = 0;
let obstacleCount = [];
let jumpTimer = 0;
let animation;
let coin_cnt = 0; 
let score = 0; 
let coinAudio = new Audio('audio/coin.wav');  
let jumpAudio = new Audio('audio/Jump.wav');   
let pdAudio = new Audio('audio/Power down.wav');  
let puAudio = new Audio('audio/up.wav');  
let falseAudio = new Audio('audio/false.wav'); 
let trueAudio = new Audio('audio/true.wav'); 

function CoinCounter() {
    return function() {
        return ++coin_cnt;
    }
}
let coincounter1 = CoinCounter();
function frameExecution(){
    animation = requestAnimationFrame(frameExecution);
    timer++;

     if(timer % 2 == 0) { 
        Character.score += 1; 
        document.getElementById("score").value = Character.score; 
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(timer % 60 === 0) {
        let c = new C();
        let cc = new CC();
        let js = new JS();
        let error = new ERROR();
        let coin = new COIN();
        let java = new JAVA();

        let rand = Math.floor(Math.random() * 7) + 1; 

        switch(rand) {
            case 1 : obstacleCount.push(c); break;
            case 2 : obstacleCount.push(cc); break;
            case 3 : obstacleCount.push(js); break;
            case 4 : obstacleCount.push(error); break;
            case 5 : obstacleCount.push(coin); break;
            case 6 : obstacleCount.push(java); break;
        }
    }

    obstacleCount.forEach((a, i, o) => {
        if(a.x < 0) {
            o.splice(i, 1);
        }
        
        let ob_random = Math.floor(Math.random() * 4) + 1;

        switch(ob_random) {
            case 1 : a.x -= 3; break;
            case 2 : a.x -= 9; break;
            case 3 : a.x -= 22; break;
            case 4 : a.x -= 28; break;

        }
        if(Character.size == false && Character.speed == false) { 
            collision(Character, a); 
        }
        
        a.draw();
    })
    

    Jump();
    if (jumpSwitch == true) {
        if(Character.size == false) { 
            if(Character.y > 260) { 
                Character.y -= 17;   
            }
        }

        if(Character.size == true) {
            if(Character.y > 50) {
                Character.y -= 14;
            }
        }
       
        jumpTimer++;
    }

    if (jumpSwitch == false) {
        if(Character.size == false) { 
            if(Character.y < 385) { 
                Character.y += 15;
            }
        }
        else if(Character.size == true) {
            if(Character.y < 180) { 
                Character.y += 15;
            }
        }
    }

    if (jumpTimer > 20) {  
        jumpSwitch = false; 
        jumpTimer = 0; 
    }

    Character.draw();
}

frameExecution();

//충돌 확인
function collision(Character, obstacle) {
    let Ob_rx = obstacle.x + obstacle.width; 
    let Pl_rx = Character.x + Character.width;   

    let Ob_ry = obstacle.y + obstacle.height; 
    let Pl_ry = Character.y + Character.height; 
    
    if(Ob_rx > Character.x && obstacle.x < Pl_rx && Ob_ry > Character.y && obstacle.y < Pl_ry) { 
        switch(obstacle.id) { 
            case 1 : case 2 : case 4 : case 6 : 
                alert("장애물과 충돌!!");
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                moving.style.animation = "movebg 9000s linear infinite";
                let position = "student";
                location.href = "gameOver.html?" + Character.score + ":" + position;

                cancelAnimationFrame(animation); 
                break;

            case 3 :     
                alert("JS 아이템 획득!!");
                obstacleCount.forEach((a, i, o) => {
                    o.splice(i, 1);
                })
                
                let answer = itemQuestion();
                if(answer == true){
                    trueAudio.play();
                    let timerCh = setTimeout(() => { 
                        puAudio.play();
                        Character.y = 50;
                        Character.height = 400;
                        Character.width = 400;
                        Character.size = true;
                    }, );

                    document.getElementById("item").value = Character.item_time;
                
                    function Item_time() {
                        Character.item_time--;
                        document.getElementById("item").value = Character.item_time;
                    }

                   
                    let timerId = setInterval(Item_time, 1000);
                    setTimeout(() => {clearInterval(timerId);}, 5000);

                   let timerSmall = setTimeout(() => {
                    pdAudio.play();
                    Character.y = 100;
                    Character.height = 210;
                    Character.width = 170;
                    Character.size = false;
                    Character.item_time = 5;
                   }, 5000);
                
                } else {
                    falseAudio.play();
                }

                break;

      
            case 5 :    
                coinAudio.play();
                alert("COIN 아이템 획득!!");
                alert(`획득한 코인 개수 : ${coincounter1()}`);

                obstacleCount.forEach((a, i, o) => { 
                    o.splice(i, 1);
                })
                
                if(coin_cnt == 3) {
                    let moving = document.getElementById('moving');
                    coin_cnt = 0;  

                    let timerCh = setTimeout(() => {
                        moving.style.animation = "movebg 1s linear infinite";
                        Character.speed = true;
                    }, );

                    document.getElementById("item").value = Character.item_time;
                
                    function Item_time() {
                        Character.item_time--;
                        document.getElementById("item").value = Character.item_time;
                    }

                    let timerId = setInterval(Item_time, 1000);
                    setTimeout(() => {clearInterval(timerId); }, 5000);

                    let timerSmall = setTimeout(() => {
                        moving.style.animation = "movebg 5s linear infinite";
                        Character.speed = false;
                    }, 5000);

                }
                break;
        } 
    }
}

var jumpSwitch = false;
function Jump() {
    document.addEventListener('keydown', function(e) {
        jumpAudio.play();
        if(e.code === 'Space'){
            jumpSwitch = true;
        }
    })
}