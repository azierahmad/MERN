// 1

var example = "I'm the example!";
console.log(example);


//2


let example = "I'm the example!";    
console.log(example);


//3

var hello = 'world';
console.log(hello);

//4


var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
} 
console.log(needle);
test();



//5


var brendan = 'super cool';
function print(){
    var brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
print();



//6


var food = 'chicken';
function eat(){
		var food = 'gone';
    food = 'half-chicken';
    console.log(food);
    
}
console.log(food);
eat();


//7



var food = "fish";
var mean = function() {
    var food = "chicken";
    console.log(food);
    
}
console.log(food);
mean();



//8


var genre = "disco";
function rewind() {
    var genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();


//9



dojo = "san jose";
console.log(dojo);

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();



//10


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
