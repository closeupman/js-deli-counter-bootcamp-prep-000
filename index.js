var katzDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(let i=0;i<katzDeliLine.length;i++) {
    if (name === katzDeliLine[i]) {
      return `Welcome, ${katzDeliLine[i]}. You are number ${i+1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length ==0) {
    return 'The line is empty';
  } else {
    let name = katzDeliLine.shift();
    return `Now serving ${name}`;
  }
}
