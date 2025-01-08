console.log('Coding Challenge #1')

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

function calculateBMI(weight, height) {
  return weight / (height * height);
}

const markBMI1 = calculateBMI(markWeight1, markHeight1);
const johnBMI1 = calculateBMI(johnWeight1, johnHeight1);

const markBMI2 = calculateBMI(markWeight2, markHeight2);
const johnBMI2 = calculateBMI(johnWeight2, johnHeight2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Does Mark have a higher BMI than John? ", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Does Mark have a higher BMI than John? ", markHigherBMI2);

console.log('Coding Challenge #2')

const markWeight21 = 78;
const markHeight21 = 1.69;
const johnWeight21 = 92;
const johnHeight21 = 1.95;

const markWeight22 = 95;
const markHeight22 = 1.88;
const johnWeight22 = 85;
const johnHeight22 = 1.76;

function calculateBMI(weight, height) {
  return weight / (height * height);
}

const markBMI21 = calculateBMI(markWeight21, markHeight21);
const johnBMI21 = calculateBMI(johnWeight21, johnHeight21);

const markBMI22 = calculateBMI(markWeight22, markHeight22);
const johnBMI22 = calculateBMI(johnWeight22, johnHeight22);

function compareBMI(markBMI, johnBMI, dataset) {
    if (markBMI > johnBMI) {
      console.log(`${dataset}: Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else {
      console.log(`${dataset}: John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
}
  
compareBMI(markBMI21, johnBMI21, "Data 1");
compareBMI(markBMI22, johnBMI22, "Data 2");
  
console.log('Coding Challenge #3')
 
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAvg = calculateAverage(...dolphinsScores);
    const koalasAvg = calculateAverage(...koalasScores);
  
    console.log(`Dolphin\'s average score: ${dolphinsAvg}`);
    console.log(`Koala\'s average score: ${koalasAvg}`);
  
    if (dolphinsAvg >= 100 && koalasAvg >= 100) {
      if (dolphinsAvg > koalasAvg) {
        console.log('Dolphins win the trophy!');
      } else if (koalasAvg > dolphinsAvg) {
        console.log('Koalas win the trophy!');
      } else {
        console.log('It\'s a draw!');
      }
    } else if (dolphinsAvg >= 100 && koalasAvg < 100) {
      console.log('Dolphins win the trophy!');
    } else if (koalasAvg >= 100 && dolphinsAvg < 100) {
      console.log('Koalas win the trophy!');
    } else {
      console.log('No team wins because both teams has a score least than 100!');
    }
}
  
console.log("Test Data 1:");
determineWinner([96, 108, 89], [88, 91, 110]);
  
console.log("\nTest Data Bonus 1:");
determineWinner([97, 112, 101], [109, 95, 123]);
  
console.log("\nTest Data Bonus 2:");
determineWinner([97, 112, 101], [109, 95, 106]);
  
console.log('Coding Challenge #4')

function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    const total = bill + tip;
    
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

calculateTip(275);
calculateTip(40);
calculateTip(430);
