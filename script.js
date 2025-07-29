let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var cnc = document.getElementById("cnc").value;
  if (username !== "" && password !== "" && email !== ""&& cnc !== "") {
document.getElementById("cantainer").style.display="none";
document.getElementById("newpage").style.display="block";
  } else {
alert("hello")
  }
}


