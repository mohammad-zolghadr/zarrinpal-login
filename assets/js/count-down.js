var t = 0,
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
