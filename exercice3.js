var user = ['Chuong', 'Nguyen','10/12/1989', 'Design', 'Architecture'];

console.log(user.length)

for(i = 0; i < user.length; i++){
// debugger;

// Within our loop, we'll log each array item to the console
// within this log statement, we'll concatenate (add) together
// the array item with the index number we're currently on
  console.log(i + " " + user[i]);
}
alert("done")