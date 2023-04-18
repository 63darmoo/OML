let hasJob = false;
if (hasJob){
  // I have a Job
  document.writeln("Thanks for visiting, I'm currently employed");
}
else {
  // I need a Job
  document.writeln("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfweek = today.get