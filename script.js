$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  //Email functions for contact
  $("#submit-button").on("click", function (event) {
    event.preventDefault();
    var userEmail = $("#user-email").val().trim();
    var userMessage = $("#user-message").val().trim();
    sendEmail();

    function sendEmail() {
      Email.send({
        SecureToken: "4f7c11b9-5aee-4ecc-9ca6-7583e2fd8d74",
        To: "bash7325@gmail.com",
        From: "bash7325@gmail.com",
        Subject: "Message from my portfolio",
        Body: userMessage + "\n" + userEmail,
      }).then((message) => $("#submit-button").text("Message Sent"));
    }
  });
  AOS.init({
    offset: 200,
    duration: 1000
  })
});
