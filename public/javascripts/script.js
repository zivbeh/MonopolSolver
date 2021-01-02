function Random(){
    var numA = Math.floor(Math.random()*6+1)  
    var numB = Math.floor(Math.random()*6+1)
    var Num = (numB+numA)
    return Num
}

var RandomObj = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0};
for (var i=0; i<=100;i++){
    const RandomNumber = Random();
    RandomObj[RandomNumber] += 1;
}

var sortable = [];
for (var vehicle in RandomObj) {
    sortable.push([vehicle, RandomObj[vehicle]]);
}

var RandomObjSorted = {};
sortable.forEach(function(item){
    RandomObjSorted[item[0]]=item[1];
})

module.exports = {Random}