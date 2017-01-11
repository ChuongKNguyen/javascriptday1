// part 1
var a=10, b=13;
console.log(a+b);

var c="hello";
var d="world";

alert(c+" "+d);
// part 2
var courses = [["Drawing", "Design", "Architecture"],["101","102","103"]] 


console.log("courses Drawing entry level:", courses[0][0], courses[1][0])
console.log("courses Design hi-level:", courses[0][1], courses[1][2])
console.log("courses Architecture mid-level:", courses[0][2], courses[1][1])

// part 3
function check(a){
	if (a<100){
	alert("your variable is smaller than 100 and your variable is ", a)
} else {
	alert("your variable is bigger than 100 and your variable is ", a)
}

}
// part 5
function checkString(word){
  alert(typeof word)
}

// part 6
function showyourName(name){
	console.log("Your name is ", name)
}

// part 7
function printsomething(){
	console.log("It is what it is")
}

// part 8
function chooseDoor(){
	var door= prompt("Pick a door from 1 to 3")
	if (door==1){
		alert("You pick door number"+ door+" and you are awesome")
	}
	else if (door==2){
		alert("You pick door number"+ door+" and you are bright")
	}
	else if (door==3){
		alert("You pick door number"+ door+" and it is not the door that you suppose to pick, pick another one")
	}
}
