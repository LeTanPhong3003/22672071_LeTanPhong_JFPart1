function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
  
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
  