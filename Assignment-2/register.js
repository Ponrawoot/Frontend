function validateForm() {
  var companyName = document.getElementById("companyName").value;
  var numChairs = document.getElementById("numChairs").value;
  var contactName = document.getElementById("contactName").value;
  var contactNumber = document.getElementById("contactNumber").value;

  if (
    companyName === "" ||
    numChairs === "" ||
    contactName === "" ||
    contactNumber === ""
  ) {
    alert("Please fill out all required fields.");
    return false;
  }

  if (numChairs < 1 || numChairs > 10) {
    alert("Please enter a number of chairs between 1 and 10.");
    return false;
  }

  setTimeout(function () {
    window.location.href = "index.html";
  }, 10);
}
