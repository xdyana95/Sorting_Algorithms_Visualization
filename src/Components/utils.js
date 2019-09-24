
var randomInt = function(maxInt, i){
    return (Math.floor(Math.random() * maxInt) + 1)*i;
}

var findMinimum = function(array){
    return(Math.min(...array));
}

exports.randomInt = randomInt;
exports.findMinimum = findMinimum;