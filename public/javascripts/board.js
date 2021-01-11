function Random(player){
    var numA = Math.floor(Math.random()*6+1)  
    var numB = Math.floor(Math.random()*6+1)
    var Num = (numB+numA)
    if(numB==numA){
       double = {player: player, double: true} 
    } else {
        double = {player: player, double: false} 
    }
    return Num
}
var interval

const blocks = ['go', 'brown1', 'luck1', 'brown2', 'pay200', 'train1', 'cyan1', 'suprise1', 'cyan2', 'cyan3', 
'prison', 'pink1', 'factory1', 'pink2', 'pink3', 'train2', 'orange1', 'luck2', 'orange2', 'orange3', 
'parking', 'red1', 'suprise2', 'red2', 'red3', 'train3', 'yellow1', 'yellow2', 'factory2', 'yellow3', 
'goToPrison', 'green1', 'green2', 'luck3', 'green3', 'train4', 'suprise3', 'blue1', 'pay100', 'blue2']


const prices = {
    'brown1': [2, 10, 30, 90, 160, 250],
    'brown2': [4, 20, 60, 180, 320, 450],
    'cyan1': [6, 30, 90, 270, 400, 550],
    'cyan2': [6, 30, 90, 270, 400, 550],
    'cyan3': [8, 40, 100, 300, 450, 600],
    'pink1': [10, 50, 150, 450, 625, 750],
    'pink2' : [10, 50, 150, 450, 625, 750],
    'pink3' : [12, 60, 180, 500, 700, 900],
    'orange1' : [14, 70, 200, 550, 750, 950],
    'orange2' : [14, 70, 200, 550, 750, 950],
    'orange3' : [16, 80, 220, 600, 800, 1000],
    'red1' : [18, 90, 250, 700, 875, 1050],
    'red2': [18, 90, 250, 700, 875, 1050],
    'red3': [20, 100, 300, 750, 925, 11],
    'yellow1': [22, 110, 330, 800, 975, 1150],
    'yellow2': [22, 110, 330, 800, 975, 1150],
    'yellow3': [24, 120, 360, 850, 1025, 1200],
    'green1': [26, 130, 390, 900, 1100, 1275],
    'green2': [26, 130, 390, 900, 1100, 1275],
    'green3': [28, 150, 450, 1000, 1200, 1400], 
    'blue1': [35, 175, 500, 1100, 1300, 1500], 
    'blue2': [50, 200, 600, 1400, 1700, 2000]
}

const pay = {
    'brown1': [60, 1],
    'brown2': [60, 1],
    'cyan1': [100, 1],
    'cyan2': [100, 1],
    'cyan3': [120, 1],
    'pink1': [140, 2],
    'pink2' : [140, 2],
    'pink3' : [160, 2],
    'orange1' : [180, 2],
    'orange2' : [180, 2],
    'orange3' : [200, 2],
    'red1' : [220, 3],
    'red2': [220, 3],
    'red3': [240, 3],
    'yellow1': [260, 3],
    'yellow2': [260, 3],
    'yellow3': [280, 3],
    'green1': [300, 4],
    'green2': [300, 4],
    'green3': [320, 4],
    'blue1': [350, 4],
    'blue2': [400, 4],
    'train1': 200,
    'train2': 200,
    'train3': 200,
    'train4': 200,
    'factory1': 120,
    'factory2': 120
}

var bought1 = {}
var bought2 = {}
var profit1 = {}
var profit2 = {}

var p1 = 0
var p2 = 0
var money1 = 1500
var money2 = 1500
reset()
function reset() {
    bought1 = {
        'brown1': 0, 'brown2': 0, 'train1': false, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
        'pink1': 0,'factory1': false,  'pink2' : 0, 'pink3' : 0, 'train2' : false, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
        'red1' : 0, 'red2': 0, 'red3': 0, 'train3': false, 'yellow1': 0, 'yellow2': 0, 'factory2': false, 'yellow3': 0, 
        'green1': 0, 'green2': 0, 'green3': 0, 'train4': false, 'blue1': 0, 'blue2': 0
    }
    bought2 = {
        'brown1': 0, 'brown2': 0, 'train1': false, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
        'pink1': 0,'factory1': false,  'pink2' : 0, 'pink3' : 0, 'train2' : false, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
        'red1' : 0, 'red2': 0, 'red3': 0, 'train3': false, 'yellow1': 0, 'yellow2': 0, 'factory2': false, 'yellow3': 0, 
        'green1': 0, 'green2': 0, 'green3': 0, 'train4': false, 'blue1': 0, 'blue2': 0
    }
    profit1 = {
        'brown1': 0, 'brown2': 0, 'train1': 0, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
        'pink1': 0, 'pink2' : 0, 'pink3' : 0, 'train2' : 0, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
        'red1' : 0, 'red2': 0, 'red3': 0, 'train3': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3': 0, 
        'green1': 0, 'green2': 0, 'green3': 0, 'train4': 0, 'blue1': 0, 'blue2': 0, 'factory': 0
    }
    profit2 = {
        'brown1': 0, 'brown2': 0, 'train1': 0, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
        'pink1': 0, 'pink2' : 0, 'pink3' : 0, 'train2' : 0, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
        'red1' : 0, 'red2': 0, 'red3': 0, 'train3': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3': 0, 
        'green1': 0, 'green2': 0, 'green3': 0, 'train4': 0, 'blue1': 0, 'blue2': 0, 'factory': 0
    }

    p1 = 0
    p2 = 0
    money1 = 1500
    money2 = 1500
    double = {}

    const cash1 = document.getElementById(`money1`)
    const cash2 = document.getElementById(`money2`)
    cash1.textContent = '1500$'
    cash2.textContent = '1500$'
    const list1 = document.getElementById(`list-player1`);
    const list2 = document.getElementById(`list-player2`);
    list1.innerHTML = ''
    list2.innerHTML = ''
    clearInterval(interval)
    
    let place2 = document.getElementById("player1");
    if(place2 != null) {
        place2.remove();
    }
    let place1 = document.getElementById("player2");
    if(place1 != null) {
        place1.remove();
    }
    const block = document.getElementById('go');
    block.innerHTML += '<div class="player1" id="player1"></div>';
    block.innerHTML += '<div class="player2" id="player2"></div>';
}

var tp1
var tp2
var double
function move(player) {
    if (player == 1) {
        var randomNum = Random(1);
        p1 += randomNum;
        p1 %= 40;
        place(1, randomNum);
        buy(1, randomNum);
        tp1 = p1
    } else {
        var randomNum = Random(2);
        p2 += randomNum;
        p2 %= 40
        place(2, randomNum);
        buy(2, randomNum);
        tp2 = p2
    }
}

function buy(player, steps) {
    let b
    let p
    let Up
    let Ub
    let money
    let Umoney
    let go = false
    if (player == 1) {
        b = bought1;
        Ub = bought2
        p = blocks[p1]
        Up = blocks[p2]
        money = money1
        Umoney = money2
        if (p1 < tp1) {
            go = true
        }
    } else if (player == 2){
        b = bought2
        Ub = bought1
        p = blocks[p2]
        Up = blocks[p1]
        money = money2
        Umoney = money1
        if (p2 < tp2) {
            go = true
        }
    }
    const list = document.getElementById(`list-player${player}`)
    const cash = document.getElementById(`money${player}`)

    if (b[p] == false && Ub[p] == false && pay[p] != undefined) {
        if (p == 'train1' || p == 'train2' || p == 'train3' || p == 'train4') {
            if (money >= pay[p]) {
                b[p] = true
                list.innerHTML += `<div class='train'>${p}</div>`
                money -= pay[p]
            }   
        } else if (p =='factory1' || p =='factory2') {
            if (money >= pay[p]) {
                b[p] = true
                list.innerHTML += `<div class='company'>${p}</div>`
                money -= pay[p]
            }
            
        }
    } 
    if (Ub[p] == 0 && b[p] < 5 && typeof(b[p]) == 'number') {
        b[p] ++
        if (b[p] == 1 && money >= pay[p][0]) {
            money -= pay[p][0]
        } else if (money >= pay[p][0] * 5) {
            money - pay[p][1] * 5
        }
        let color
        if (p == 'brown1' || p == 'brown2' || p == 'brown3') {
            color = 'brown'
        } else if (p == 'cyan1' || p == 'cyan2' || p == 'cyan3') {
            color = 'cyan'
        } else if (p == 'pink1' || p == 'pink2' || p == 'pink3') {
            color = 'pink'
        } else if (p == 'orange1' || p == 'orange2' || p == 'orange3') {
            color = 'orange'
        } else if (p == 'red1' || p == 'red2' || p == 'red3') {
            color = 'red'
        } else if (p == 'yellow1' || p == 'yellow2' || p == 'yellow3') {
            color = 'yellow'
        } else if (p == 'blue1' || p == 'blue2'|| p == 'blue3') {
            color = 'blue'
        } else if (p == 'green1' || p == 'green2'|| p == 'green3') {
            color = 'green'
        }
        if(b[p]<2){
            list.innerHTML += `<div class='${color}'>${p}: ${b[p]}</div>`
        } else {
            $(`div div div:contains('${p}: ${b[p]-1}')`).html(`${p}: ${b[p]}`);
        }
    } else if (Ub[p] > 0 && typeof(Ub[p]) == 'number' && pay[p] != undefined) {
        money -= prices[p][Ub[p] - 1]
        Umoney -= prices[p][Ub[p] - 1]
    } else if ((p == 'train1' || p == 'train2' || p == 'train3' || p == 'train4') && Ub[p] == true) {
        let trains = []
        if (Ub['train1'] == true) {
            trains.push('1')
        }
        if (Ub['train2'] == true) {
            trains.push('1')
        }
        if (Ub['train3'] == true) {
            trains.push('1')
        }
        if (Ub['train4'] == true) {
            trains.push('1')
        }
        money -= 25 * Math.pow(2, trains.length - 1) 
    } else if ((p == 'factory2' || p == 'factory1')  && Ub[p] == true){
        if (Ub['factory2'] == true && Ub['factory1'] == true){
            money -= steps * 10;
            Umoney += steps * 10;
            console.log(steps * 10)
        } else {
            money -= steps * 4;
            Umoney += steps * 4;
            console.log(steps * 4)
        }
    }
    
    if (player == 1) {
        dif = money1 - money
        if (dif > 0) {
            cash.innerHTML = `${money1}$ <label style="color: rgb(212, 68, 68);">-${dif}$</label>`
        } else if (dif < 0) {
            cash.innerHTML = `${money1}$ <label style="color: green;">+${dif}$</label>`
        } else {
            cash.innerHTML = `${money}$`
        }
        if (go) {
            cash.innerHTML += ` <label style="color: green;">+200$</label>`
            money += 200
        }
            
        bought1 = b;
        bought2 = Ub;
        money1 = money
        money2 = Umoney
    } else if (player == 2){
        dif = money2 - money
        if (dif > 0) {
            cash.innerHTML = `${money2}$ <label style="color: rgb(212, 68, 68);">-${dif}$</label>`
        } else if (dif < 0) {
            cash.innerHTML = `${money2}$ <label style="color: green;">+${dif}$</label>`
        } else {
            cash.innerHTML = `${money}$`
        }
        if (go) {
            cash.innerHTML += ` <label style="color: green;">+200$</label>`
            money += 200
        }
            
        bought2 = b;
        bought1 = Ub;
        money2 = money
        money1 = Umoney
    }

    let Uplayer
    if (player == 1) {
        Uplayer = 2
    } else {
        Uplayer = 1
    }
    if (money < 0) {
        //למשכן

        clearInterval(interval)
        console.log(`player ${Uplayer} won! ${p}`)
    }
}

function profitHelper(Ub,p,pr,Upr, randomNum, playerTurn) {
    if(Ub[p] != undefined){
        if(Ub[p] != 0 && typeof(Ub[p]) == "number"){
            pr[p] -= prices[p][Ub[p]]; 
            Upr[p] += prices[p][Ub[p]];
        } else if(Ub[p] == true && typeof(Ub[p]) == "boolean"){
            if (p =='train2' || p =='train1' || p =='train3' || p =='train4'){ // train
                var numbers = 12.5;
                if(Ub[p] == 'train1'){ 
                    numbers = numbers*2;
                }
                if (Ub[p] == 'train2') {
                    numbers = numbers*2;
                }
                if (Ub[p] == 'train3') {
                    numbers = numbers*2;
                }
                if (Ub[p] == 'train4') {
                    numbers = numbers*2;
                }
                if (numbers == 12.5) {
                    numbers = 0;
                }
                pr[p] -= numbers;
                Upr[p] += numbers;
            } else if (p == 'factory2' || p == 'factory1') { // company
                if (Ub['factory2'] == true && Ub['factory1'] == true){
                    pr[p] -= randomNum*10;
                    Upr[p] += randomNum*10;
                } else if (Ub['factory2'] == true || Ub['factory1'] == true) {
                    pr[p] -= randomNum*4;
                    Upr[p] += randomNum*4;
                }
            } else {
            }
        } else {
        }
    } else {
    }
    if (playerTurn == p1) {
        profit2 = Upr;
        profit1 = pr;
    } else {
        profit1 = Upr;
        profit2 = pr;
    }
}

function profit(playerTurn, randomNum) {
    let Ub
    let pr
    let b
    let Upr
    let p = blocks[playerTurn]
    const cash = document.getElementById(`money${playerTurn}`)
    if (playerTurn == p1) {
        b = bought1
        Ub = bought2
        if(Ub[p] == true || Ub[p] >= 1){
            return;
        } else if(b[p] == true || b[p] >= 1) {
            pr = profit1
            Upr = profit2
        } else {
            return;
        }
    } else if (playerTurn == p2){
        b = bought2
        Ub = bought1
        if(Ub[p] == true || Ub[p] >= 1){
            return;
        } else if(b[p] == true || b[p] >= 1) {
            pr = profit2
            Upr = profit1
        } else {
            return;
        }
    }
    profitHelper(Ub,p,pr,Upr, randomNum, playerTurn);
}

function sizer() {
    //var widthW = $(window).width();
    // console.log(widthW)
    // var cons4 = document.getElementById('height');
    // cons4.style.maxHeight = cons4.style.width+'px';
    // console.log(cons4.maxWidth, cons4.style.maxWidth)
}
sizer()
$(window).on('resize', function() {
    sizer()
});

function place(player, randomNum) {
    const cash = document.getElementById(`money${player}`)
    if (player == 1) {
        let place = document.getElementById("player1");
        if(place != null) {
            place.remove();
        }
        profit(p1, randomNum)
        const block = document.getElementById(blocks[p1]);
        if (blocks[p1] == 'goToPrison'){
            p1 = 10
            const block = document.getElementById(blocks[p1]);
            block.innerHTML += '<div class="player1" id="player1"></div>';
            clearInterval(interval)
            money1 -= 50
            cash.innerHTML = `${money1}$ <label style="color: rgb(212, 68, 68);">-50$$</label>`
        } else {
            block.innerHTML += '<div class="player1" id="player1"></div>';
        }
    }
    if (player == 2){
        let place = document.getElementById("player2");
        if(place != null) {
            place.remove();
        }
        profit(p2, randomNum)
        const block = document.getElementById(blocks[p2]);
        if (blocks[p2] == 'goToPrison'){
            p2 = 10
            const block = document.getElementById(blocks[p2]);
            block.innerHTML += '<div class="player2" id="player2"></div>';
            money2 -= 50
        } else {
            block.innerHTML += '<div class="player2" id="player2"></div>';
        }
    }
}

function profitConsole() {
    console.log(profit1,profit2)
}

var playerTurn = 1;
function moveAll() {
    clearInterval(interval)
    interval = setInterval(() => {
        if(double.double == true){
            move(double.player);
        }
        if(playerTurn == 1) {
            move(playerTurn);
            playerTurn = 2;
        } else {
            move(playerTurn);
            playerTurn = 1;
        }
    }, 100)
}