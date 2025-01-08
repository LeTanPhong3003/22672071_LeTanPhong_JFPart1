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

function compareBMI(markBMI, johnBMI, dataset) {
    if (markBMI > johnBMI) {
      console.log(`${dataset}: Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else {
      console.log(`${dataset}: John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
  }
  
  compareBMI(markBMI1, johnBMI1, "Data 1");
  compareBMI(markBMI2, johnBMI2, "Data 2");
  