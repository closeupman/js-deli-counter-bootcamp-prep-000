var katzDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(let i=0;i<katzDeliLine.length;i++) {
    if (name === katzDeliLine[i]) {
      return `Welcome, ${katzDeliLine[i]}. Youe are number ${i} in line.`
    }
  }
}
