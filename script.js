function rollSingleDie() {
  return Math.floor(Math.random() * 6) + 1;
}
 
function rollDice() {
  const die1 = document.getElementById("die1");
  const die2 = document.getElementById("die2");
  const disSum = document.getElementById("sum");
 
  const result1 = rollSingleDie();
  const result2 = rollSingleDie();
 
  const sum = result1 + result2;
 
  die1.innerHTML = result1;
  die2.innerHTML = result2;
  disSum.innerHTML = "Sum: " + sum;
  // add animation class
 
  die1.classList.add("roll");
  die2.classList.add("roll");
 
  setTimeout(() => {
    die1.classList.remove("roll");
    die2.classList.remove("roll");
  }, 500);
 
  // Remove animation class
  die1.classList.remove("roll");
  die2.classList.remove("roll");
 
  // Trigger reflow
  void die1.offsetWidth;
  void die2.offsetWidth;
 
  // Add animation class
  die1.classList.add("roll");
  die2.classList.add("roll");
}
