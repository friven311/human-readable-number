const edin = ["","one ","two ","three ","four ", "five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "];
const des = ["","","twenty ","thirty ","forty ","fifty ","sixty ","seventy ","eighty ","ninety "];
const sot = ["","hundred "];
var hrn;

module.exports = function toReadable (number) {

  if (number == 0){
    return hrn = "zero";
  }

  if (number == 20){
    return hrn = "twenty";
  }

  if (number == 100){
    return hrn = "one hundred";
  }

  if (number <=19){
    hrn = edin[number];
  }

  if (number >20 && number<=99){
    var numberstr = String(number);
    var numbersplit = numberstr.split("");
    var res = numbersplit.map(Number);
    hrn = des[res[0]]+ edin[res[1]];
  }
  if (number >100 && number<=999){
    var numberstr = String(number);
    var numbersplit = numberstr.split("");
    var res = numbersplit.map(Number);
    if (number >=110 && number <= 119){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=110 && number <= 119){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=210 && number <= 219){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=310 && number <= 319){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=410 && number <= 419){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=510 && number <= 519){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=610 && number <= 619){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=710 && number <= 719){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }

    if (number >=810 && number <= 819){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }
    if (number >=910 && number <= 919){
      hrn = edin[res[0]] + sot[1] + edin[res[2]+10]
      return hrn.trim();
    }
    hrn = edin[res[0]] + sot[1] + des[res[1]] + edin[res[2]];
  }
  return hrn.trim();
}
