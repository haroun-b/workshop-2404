function runTests(noTimout = false) {
  introductionEl.style.display = "none";
  mainEl.style.display = "block";
  runTestsBtn.disabled = true;
  console.log("Running tests...");
  setTimeout(() => {
    runTestsBtn.disabled = false;
  }, 2000);
}

testSuite.runTests = runTests;
