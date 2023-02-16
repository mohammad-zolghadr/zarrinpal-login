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
const timeProgress = document.querySelector("#timeProgress");
let t = 0,
  m,
  s;
let timerInterval;
const startTimer = () => {
  if (t !== -1) {
    t = 120000;
    const resendField = document.querySelector("#resendField");
    resendField.innerText = `${getTime()}  تا ارسال مجدد کد `;
    resendField.classList.add("disabled");
    timeProgress.max = t / 1000;
    timerInterval = setInterval(() => {
      t -= 1000;
      timeProgress.value = t / 1000;
      resendField.innerText = `${getTime()}  تا ارسال مجدد کد `;
      if (t == 0) {
        clearInterval(timerInterval);
        resendField.innerText = "ارسال کد به صورت پیامک";
        resendField.classList.remove("disabled");
        timeProgress.style.display = "none";
      }
    }, 1000);
  }
};
const getTime = () => {
  m = Math.floor(t / 60000).toString();
  s = ((t % 60000) / 1000).toString();
  return `${s.padStart(2, "0")}  :  ${m.padStart(2, "0")}`;
};

// ========================= Show and Hide Forms Handle
const cardSmsPasswordBody = document.querySelector(".cardSmsPasswordBody");
const cardGetNumberOrEmailBody = document.querySelector(
  ".cardGetNumberOrEmailBody"
);
const NumberOrEmailForm = document.querySelector("#NumberOrEmailForm");
const verifingNumber = document.querySelector(".verifingNumber");
const btnEditNumber = document.querySelector(".btnEditNumber");

cardSmsPasswordBody.style.display = "none";
NumberOrEmailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  startTimer();
  verifingNumber.innerText = e.target.firstElementChild.value;
  cardGetNumberOrEmailBody.style.display = "none";
  cardSmsPasswordBody.style.display = "flex";
});
btnEditNumber.addEventListener("click", () => {
  cardGetNumberOrEmailBody.style.display = "flex";
  cardSmsPasswordBody.style.display = "none";
  clearInterval(timerInterval);
});
