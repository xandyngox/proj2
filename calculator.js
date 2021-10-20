let total = 0; //total
let strbuffer = "0"; //current number shown
let operator = ""; //current operator

function calculations() {
  const intBuffer = parseInt(strbuffer);
  if (operator === "+") {
    total += intBuffer;
  }
  if (operator === "x") {
    total *= intBuffer;
  }
  if (operator === "-") {
    total -= intBuffer;
  }
  if (operator === "÷") {
    total /= intBuffer;
  }
}

/*   FUNC DESCRIPTION: If user input is a number, create the function. */
function makesNumber(value) {
  if (strbuffer === "0") {
    strbuffer = value.toString();
  } else {
    strbuffer += value.toString();
  }
}

/*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

function makesSymbol(symbol) {
  //make functionality for symbol C
  //make functionality for symbol ← Hint: .substring might be helpful!
  //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
  if (symbol === "C") {
    strbuffer = "0";
    total = 0;
    operator = "";
  } else if (symbol === "←") {
    strbuffer = strbuffer.substring(0, strbuffer.length - 1);
    if (strbuffer === "") {
      strbuffer = "0";
    }
  } else if (symbol === "=") {
    calculations();
    strbuffer = total.toString();
  } else {
    operator = symbol;
    total = parseInt(strbuffer);
    strbuffer = "0";
  }
}

/*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
          This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
function setListeners() {
  //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
  let listeners = document.querySelectorAll(".buttons");
  for (item of listeners) {
    item.addEventListener("click", () => {
      buttonClicked(event.target.innerHTML);
    });
  }
}

function buttonClicked(valueClicked) {
  if (isNaN(parseInt(valueClicked))) {
    makesSymbol(valueClicked);
  } else {
    makesNumber(valueClicked);
  }
  document.querySelector(".result-screen").innerHTML = strbuffer;
}

setListeners();
