let hasJob = false;
if (hasJob){
  // I have a Job
  showMessage("Thanks for visiting, I'm currently employed");
}
else {
  // I need a Job
  showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date("08/01/2021");
let dayOfweek = today.getDay();
if (dayOfweek === 0 || dayOfweek === 6) {
      showMessage("Since it is the weekend, please be patient with my returning your email.");
}

function showMessage (message) {
  document.writeln("<p>" + message + "</p>")
  document.writeln("<hr/>");
}