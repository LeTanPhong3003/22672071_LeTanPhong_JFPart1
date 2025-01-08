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
