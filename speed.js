const marks = prompt('Enter your speed:');
SharedWorker(speedDetectors, marks);

function speedDetectors(speedinput) {
  let responses = [];
  let demerits = [];
  let preresponse = [];

  if (speedinput < 0 || speedinput === null || speedinput === undefined || speedinput === "") {
    responses = "invalid speed";
  } else if (speedInput >= 0 && speedInput <= 70) {
    response = "OK";
  } else {
    let perPoint = 5;
    let diff = speedInput - 70;
    demerits = Math.floor(diff / perPoint);
    preresponse = (demerits > 12)? "License suspended: " : "Points: ";

    response = preresponse + demerits;
  }
  return response;
}