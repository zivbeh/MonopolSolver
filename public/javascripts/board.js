const fun = require('./script')

const blocks = ['go', 'brown1', 'luck1', 'brown2', 'pay200', 'train1', 'cyan1', 'suprise1', 'cyan2', 'cyan3', 
'prison', 'pink1', 'factory1', 'pink2', 'pink3', 'train2', 'orange1', 'luck2', 'orange2', 'orange3', 
'parking', 'red1', 'suprise2', 'red2', 'red3', 'train3', 'yellow1', 'yellow2', 'factory2', 'yellow3', 
'goToPrison', 'green1', 'green2', 'luck3', 'green3', 'train4', 'suprise3', 'blue1', 'pay100', 'blue2']


const houses = {
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

//

const bought1 = {
    'brown1': 0, 'brown2': 0, 'train1': false, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
    'pink1': 0,'factory1': false,  'pink2' : 0, 'pink3' : 0, 'train2' : false, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
    'red1' : 0, 'red2': 0, 'red3': 0, 'train3': false, 'yellow1': 0, 'yellow2': 0, 'factory2': false, 'yellow3': 0, 
    'green1': 0, 'green2': 0, 'green3': 0, 'train4': false, 'blue1': 0, 'blue2': 0
}
const bought2 = {
    'brown1': 0, 'brown2': 0, 'train1': false, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
    'pink1': 0,'factory1': false,  'pink2' : 0, 'pink3' : 0, 'train2' : false, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
    'red1' : 0, 'red2': 0, 'red3': 0, 'train3': false, 'yellow1': 0, 'yellow2': 0, 'factory2': false, 'yellow3': 0, 
    'green1': 0, 'green2': 0, 'green3': 0, 'train4': false, 'blue1': 0, 'blue2': 0
}


const profit = {
    'brown1': 0, 'brown2': 0, 'train1': 0, 'cyan1': 0, 'cyan2': 0, 'cyan3': 0, 
    'pink1': 0, 'pink2' : 0, 'pink3' : 0, 'train2' : 0, 'orange1' : 0, 'orange2' : 0, 'orange3' : 0, 
    'red1' : 0, 'red2': 0, 'red3': 0, 'train3': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3': 0, 
    'green1': 0, 'green2': 0, 'green3': 0, 'train4': 0, 'blue1': 0, 'blue2': 0
}

var p1 = 0
var p2 = 0



function move(player) {
    if (player == 1) {
        p1 += fun.Random()
        p1 %= 40
        const bolean = check(bought1[blocks[p1]], 1)
        if(bolean){
            console.log('already Bought')
        } else {
            buy(bought1[blocks[p1]], 1)
            console.log(bought1)
        }
    } else {
        p2 += fun.Random()
        p2 %= 40

        // const bolean = check(bought2[blocks[p1]], 1)
        // if(bolean){
        //     console.log('already Bought')
        // } else {
        //     buy(bought2[blocks[p1]], 1)
        //     console.log(bought2)
        // }
    }
    
}

function buy(p, player) {
    let place
    let bought
    if (player == 1) {
        bought = bought1;
        place = p1
    } else if (player == 2){
        bought = bought2;
        place = p2
    }
    if (p == 'train1') {
        bought[blocks[place]] = true
    } else if (p == 'train4') {
        bought[blocks[place]] = true
    } else if (p == 'train2') {
        bought[blocks[place]] = true
    } else if (p == 'train3') {
        bought[blocks[place]] = true
    } else if (p != undefined || p != 5) {
        bought[blocks[place]] ++
    }
}

function check(p, player) {
    let bought
    if (player == 1) {
        bought = bought1;
        place = p1
    } else if (player == 2){
        bought = bought2;
        place = p2
    }


    if (p == 'train1') {
        bought[blocks[place]] = true
    } else if (p == 'train4') {
        bought[blocks[place]] = true
    } else if (p == 'train2') {
        bought[blocks[place]] = true
    } else if (p == 'train3') {
        bought[blocks[place]] = true
    } else if (p != undefined || p != 5) {
        bought[blocks[place]] ++
    } else {
        return true
    }
}


for (let i = 0; i < 3; i++) {
    move(1)
    move(2)
}