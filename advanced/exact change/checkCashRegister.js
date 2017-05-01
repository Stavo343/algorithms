function checkCashRegister(price, cash, cid) {
  var changeDue = arguments[1] - arguments[0];
  
  var change = [];
  
  var hundred = 0;
  var twenty = 0;
  var ten = 0;
  var five = 0;
  var one = 0;
  var quarter = 0;
  var dime = 0;
  var nickel = 0;
  var penny = 0;
  var drawerInventory = [];
  
  for (var z = 0; z < 9; z++) {
    drawerInventory.push(cid[z][1]);
  }
  
  
  function hundreds() {
    changeDue = Math.round((changeDue - 100)*100)/100;
    cid[8][1] = Math.round((cid[8][1] - 100)*100)/100;
    hundred = Math.round((hundred + 100)*100)/100;
  }
  
  function twenties() {
    changeDue = Math.round((changeDue - 20)*100)/100;
    cid[7][1] = Math.round((cid[7][1] - 20)*100)/100;
    twenty = Math.round((twenty + 20)*100)/100;
  }
  
  function tens() {
    changeDue = Math.round((changeDue - 10)*100)/100;
    cid[6][1] = Math.round((cid[6][1] - 10)*100)/100;
    ten = Math.round((ten + 10)*100)/100;
  }
  
  function fives() {
    changeDue = Math.round((changeDue - 5)*100)/100;
    cid[5][1] = Math.round((cid[5][1] - 5)*100)/100;
    five = Math.round((five + 5)*100)/100;
  }
  
  function ones() {
    changeDue = Math.round((changeDue - 1)*100)/100;
    cid[4][1] = Math.round((cid[4][1] - 1)*100)/100;
    one = Math.round((one + 1)*100)/100;
  }
  
  function quarters() {
    changeDue = Math.round((changeDue - 0.25)*100)/100;
    cid[3][1] = Math.round((cid[3][1] - 0.25)*100)/100;
    quarter = Math.round((quarter + 0.25)*100)/100;
  }
  
  function dimes() {
    changeDue = Math.round((changeDue - 0.10)*100)/100;
    cid[2][1] = Math.round((cid[2][1] - 0.10)*100)/100;
    dime = Math.round((dime + 0.10)*100)/100;
  }
  
  function nickels() {
    changeDue = Math.round((changeDue - 0.05)*100)/100;
    cid[1][1] = Math.round((cid[1][1] - 0.05)*100)/100;
    nickel = Math.round((nickel + 0.05)*100)/100;
  }
  
  function pennies() {
    changeDue = Math.round((changeDue - 0.01)*100)/100;
    cid[0][1] = Math.round((cid[0][1] - 0.01)*100)/100;
    penny = Math.round((penny + 0.01)*100)/100;
  }
  
  for (var a = 0; a < drawerInventory[8]/100; a++) {
    if (changeDue >= 100) {
      hundreds();
    }
  }
  
  if (hundred !== 0) {
    change.push(["ONE HUNDRED", hundred]);
  }
  
  for (var b = 0; b < drawerInventory[7]/20; b++) {
    if (changeDue >= 20) {
      twenties();
    }
  }
  
  if (twenty !== 0) {
    change.push(["TWENTY", twenty]);
  }
  
  for (var c = 0; c < drawerInventory[6]/10; c++) {
    if (changeDue >= 10) {
      tens();
    }
  }
  
  if (ten !== 0) {
    change.push(["TEN", ten]);
  }
  
  for (var d = 0; d < drawerInventory[5]/5; d++) {
    if (changeDue >= 5) {
      fives();
    }
  }
  
  if (five !== 0) {
    change.push(["FIVE", five]);
  }
  
  for (var e = 0; e < drawerInventory[4]/1; e++) {
    if (changeDue >= 1) {
      ones();
    }
  }
  
  if (one !== 0) {
    change.push(["ONE", one]);
  }
  
  for (var f = 0; f < drawerInventory[3]/0.25; f++) {
    if (changeDue >= 0.25) {
      quarters();
    }
  }
  
  if (quarter !== 0) {
    change.push(["QUARTER", quarter]);
  }
  
  for (var g = 0; g < drawerInventory[2]/0.10; g++) {
    if (changeDue >= 0.10) {
      dimes();
    }
  }
  
  if (dime !== 0) {
    change.push(["DIME", dime]);
  }
  
  for (var h = 0; h < drawerInventory[1]/0.05; h++) {
    if (changeDue >= 0.05) {
      nickels();
    }
  }
  
  if (nickel !== 0) {
    change.push(["NICKEL", nickel]);
  }
  
  for (var i = 0; i < drawerInventory[0]/0.01; i++) {
    if (changeDue >= 0.01) {
      pennies();
    }
  }
  
  if (penny !== 0) {
    change.push(["PENNY", penny]);
  }
  
  
  //return changeDue;
  
  
  if (changeDue === 0) {
    if (cid[8][1] === 0 && cid[7][1] === 0 && cid[6][1] === 0 && cid[5][1] === 0 && cid[4][1] === 0 && cid[3][1] === 0 && cid[2][1] === 0 && cid[1][1] === 0 && cid[0][1] === 0) {
      return "Closed";
    } else {
      return change;
    }
  } else {
    return "Insufficient Funds";
  }
  
}