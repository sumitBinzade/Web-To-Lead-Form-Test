function before_submit() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");
  console.log("inputdate.value--->>", inputdate.value); //String date---->date (en_IN)

  let formateDate = new Date(inputdate.value).toLocaleDateString("en-In");
  outputdate.value = formateDate;
}
