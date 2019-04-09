function loopyLighthouse(range, multiples, words) {
  let rangeStart = range[0];
  let rangeFinish = range[1];
  let multiOne = multiples[0];
  let multiTwo = multiples[1];

  for (let i = rangeStart; i <= rangeFinish; i++) {
    let toPrint = "";
    if (i % multiOne == 0) {
      toPrint = words[0];
    }
    if (i % multiTwo == 0) {
      toPrint += words[1];
    }
    if (toPrint == "") {
      toPrint = i;
    }
    console.log (toPrint);
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

