let captcha_checked = false;
function before_submit(event) {
  if (captcha_checked) {
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdate.value--->>", inputdate.value); //String date---->date (en_IN)

    let formateDate = new Date(inputdate.value).toLocaleDateString("en-In");
    outputdate.value = formateDate;
  } else {
    alert("Please Fill the Captcha First!!!");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captcha_success() {
  captcha_checked = true;
}
