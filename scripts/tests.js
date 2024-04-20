class Test {
  constructor(description, testFn) {
    this.description = description;
    this.runTest = testFn;
  }
}

const tests = [
  new Test("The secret to life is constant, and it's 42", () => {
    let success = false;
    try {
      success = secretToLife === 42;
    } catch (_) {
      return false;
    }

    try {
      secretToLife = 43;
      success = false;
    } catch (_) {}

    return success;
  })
];

testSuite.runTests = function (noTimout = false) {
  function displayTestResult(isSuccess, li) {
    li.classList.remove("pending");
    li.classList.add(isSuccess ? "success" : "failed");
  }

  introductionEl.style.display = "none";
  mainEl.style.display = "block";
  runTestsBtn.disabled = true;
  testsEl.innerHTML = null;

  const results = tests.map((test, i) => {
    const li = document.createElement("li");
    li.textContent = test.description;
    li.classList.add("test", "pending");
    testsEl.appendChild(li);

    const isSuccess = test.runTest();

    noTimout
      ? displayTestResult(isSuccess, li)
      : setTimeout(() => {
          displayTestResult(isSuccess, li);

          if (i === tests.length - 1) {
            runTestsBtn.disabled = false;
          }
        }, 1000 * (i + 1));

    return isSuccess;
  });

  return results.every((result) => result);
};
