// Function to indicate an error on a field
function indicateError(field) {
  field.classList.add("error");
}

// Function to remove error indication from a field
function removeErrorIndication(field) {
  field.classList.remove("error");
}

function emailSend() {
  // Get form fields
  var name = document.getElementsByName("name")[0];
  var email = document.getElementsByName("email")[0];
  var subject = document.getElementsByName("subject")[0];
  var message = document.getElementsByName("message")[0];

  // Remove any previous error indications
  removeErrorIndication(name);
  removeErrorIndication(email);
  removeErrorIndication(subject);
  removeErrorIndication(message);

  var errors = 0; // Track the number of errors

  // Perform form validation
  if (name.value.trim() === "") {
    indicateError(name);
    errors++;
  }

  if (email.value.trim() === "") {
    indicateError(email);
    errors++;
  } else if (!email.value.endsWith("@gmail.com")) {
    indicateError(email);
    alert("Please enter a valid gmail address.");
    return;
  }

  if (subject.value.trim() === "") {
    indicateError(subject);
    errors++;
  }

  if (message.value.trim() === "") {
    indicateError(message);
    errors++;
  }

  // Display error message if there are validation errors
  if (errors > 0) {
    alert("Please fill in all the required fields.");
    return;
  }

  // If all fields are valid, send the form data
  $.ajax({
    url: "https://formspree.io/f/xzbqqadl", // Update the URL to your PHP script
    type: "post",
    dataType: "json",
    data: $("#cform").serialize(),
    success: function (data) {
      $("#cform").fadeOut();
      $(".alert-success").delay(1000).fadeIn();
    },
  });
}

// Add event listeners to input fields to remove error indication on input
document.getElementsByName("name")[0].addEventListener("input", function () {
  removeErrorIndication(this);
});

document.getElementsByName("email")[0].addEventListener("input", function () {
  removeErrorIndication(this);
});

document.getElementsByName("subject")[0].addEventListener("input", function () {
  removeErrorIndication(this);
});

document.getElementsByName("message")[0].addEventListener("input", function () {
  removeErrorIndication(this);
});
