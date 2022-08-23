
var string0 = Array("Donkey", "Leopard", "Salamander", "Ostrich", "Antelope", "Lioness");
var nums00 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums01 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums02 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")

var string1 = Array("Caravan", "Helicopter", "Airplane", "Battleship", "Minivan", "Cruiseship");
var nums03 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums04 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums05 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")

var string2 = Array("Hawthorn", "Juniper", "Willow", "Birchtree", "Oaktree", "Ashtree");
var nums06 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums07 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var nums08 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")


function btnfun0() {
  var btnfun0 = string0[Math.floor(Math.random() * string0.length)];
  var btnfun01 = nums00[Math.floor(Math.random() * nums00.length)];
  var btnfun02 = nums01[Math.floor(Math.random() * nums01.length)];
  var btnfun03 = nums02[Math.floor(Math.random() * nums02.length)];
  document.getElementById('btn0').value = btnfun0 + btnfun01 + btnfun02 + btnfun03;
}

function btnfun1() {
  var btnfun1 = string1[Math.floor(Math.random() * string1.length)];
  var btnfun11 = nums03[Math.floor(Math.random() * nums03.length)];
  var btnfun12 = nums04[Math.floor(Math.random() * nums04.length)];
  var btnfun13 = nums05[Math.floor(Math.random() * nums05.length)];
  document.getElementById('btn1').value = btnfun1 + btnfun11 + btnfun12 + btnfun13;
}

function btnfun2() {
  var btnfun2 = string2[Math.floor(Math.random() * string2.length)];
  var btnfun21 = nums06[Math.floor(Math.random() * nums06.length)];
  var btnfun22 = nums06[Math.floor(Math.random() * nums07.length)];
  var btnfun23 = nums06[Math.floor(Math.random() * nums08.length)];
  document.getElementById('btn2').value = btnfun2 + btnfun21 + btnfun22 + btnfun23;
}
