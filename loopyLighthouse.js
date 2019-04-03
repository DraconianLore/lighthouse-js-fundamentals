


for (var i = 100; i <= 200; i++){
  var result = "";
  if(i % 3 == 0){
    if(i % 4 == 0){
      result = "LoopyLighthouse";
    }
    else result = "Loopy";
  }
  else if(i % 4 == 0){
    result = "Lighthouse";
  }
  else result = i;

  console.log(result);
}

