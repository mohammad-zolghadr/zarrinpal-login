// ========================= Auto Focus
let container = document.querySelectorAll(".formInputs")[0];
container.onkeyup = (e) => {
  const target = e.srcElement;
  const maxLength = 1;
  const currentLength = target.value.length;
  if (e.keyCode == 8) {
    target.nextElementSibling.select().focus();
  } else {
    if (target.value !== "" && e.keyCode >= 96 && e.keyCode <= 105) {
      if (currentLength >= maxLength) {
        let nextInput = target;
        while ((nextInput = nextInput.previousElementSibling)) {
          if (nextInput == null) break;
          if (nextInput.tagName.toLowerCase() == "input") {
            nextInput.select().focus();
            break;
          }
        }
      }
    } else target.value = "";
  }
};

// ========================= Countdown Timer
let t = 0,
  m,
  s;
const startTimer = () => {
  if (t != 0) return;
  t = 120000;
  const resendField = document.querySelector("#resendField");
  resendField.innerText = getTime();
  resendField.classList.add("disabled");
  var x = setInterval(() => {
    t -= 1000;
    resendField.innerText = getTime();
    if (t == 0) {
      clearInterval(x);
      resendField.innerText = "ارسال کد به صورت پیامک";
      resendField.classList.remove("disabled");
    }
  }, 1000);
};
const getTime = () => {
  m = Math.floor(t / 60000).toString();
  s = ((t % 60000) / 1000).toString();
  return `${s.padStart(2, "0")}  :  ${m.padStart(2, "0")}`;
};

startTimer();
