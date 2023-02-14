// ========================= Auto Focus
let btnVerify = document.querySelector("#btn-verify");
btnVerify.disabled = true;
let container = document.querySelectorAll(".formInputs")[0];
container.onkeyup = function (e) {
  let target = e.srcElement;
  let maxLength = parseInt(target.attributes["maxlength"].value, 10);
  let myLength = target.value.length;
  console.log(maxLength, myLength);
  // console.log(e);
  if (e.keyCode == 8) {
    target.previousElementSibling.select().focus();
  } else {
    if (target.value !== "") {
      if (myLength >= maxLength) {
        let next = target;
        while ((next = next.previousElementSibling)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() == "input") {
            next.select().focus();
            break;
          }
        }
      }
      btnVerify.disabled = false;
    } else {
      target.value = "";
      btnVerify.disabled = true;
    }
  }
};

// ========================= Countdown Timer
let t = 0,
  m,
  s,
  m_text,
  s_text;
startTimer();
function startTimer() {
  if (t != 0) return;
  t = 120000;
  document.getElementById("btn-resend").innerText = getTime();
  document.getElementById("btn-resend").classList.add("disabled");
  var x = setInterval(function () {
    t -= 1000;
    document.getElementById("btn-resend").innerText = getTime();
    if (t == 0) {
      clearInterval(x);
      document.getElementById("btn-resend").innerText =
        "ارسال کد به صورت پیامک";
      document.getElementById("btn-resend").classList.remove("disabled");
    }
  }, 1000);
}
function getTime() {
  m = Math.floor(t / 60000);
  s = (t % 60000) / 1000;
  if (m < 10) m_text = m + " 0 ";
  else m_text = m;
  if (s < 10) s_text = s + " 0 ";
  else s_text = s;

  return s_text + " : " + m_text;
}
