const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    console.error("Calculation error:", e);
    display.value = "Error";
  }
}

/* =============================
   Simple Software Testing Code
   ============================= */
function testCalculator() {
  const tests = [
    { expr: "2+2", expected: 4 },
    { expr: "10-3", expected: 7 },
    { expr: "5*6", expected: 30 },
    { expr: "8/2", expected: 4 },
    { expr: "3+5*2", expected: 13 },
  ];

  console.log("Running Calculator Tests...");
  tests.forEach((t, i) => {
    let result;
    try {
      result = eval(t.expr);
    } catch (e) {
      console.error(`Error evaluating expression "${t.expr}":`, e);
      result = "Error";
    }
    const status = result === t.expected ? "✅ PASS" : "❌ FAIL";
    console.log(`Test ${i + 1}: ${t.expr} = ${result} | Expected: ${t.expected} => ${status}`);
  });
}

// Run tests automatically on page load
testCalculator();
