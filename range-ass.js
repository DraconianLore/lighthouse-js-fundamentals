function range(start, end, step){
  var finalRange = [];
  if (start == undefined || end == undefined || step == undefined){
    return finalRange;
  }
  else if(start > end){
    return finalRange;
  }
  else if(step < 0){
    return finalRange;
  }
  else {
    for(i = start; i <= end; i = (i + step)){
      finalRange.push(i);
    }
    return finalRange;
  }
}

