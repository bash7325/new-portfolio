$(document).ready(function () {
  //clear local storage on page load
  localStorage.clear();
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    $(".navbar-menu").slideDown("slow", function () {
      // Animation complete.
    });

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  //Email functions for contact
  $("#submit-button").on("click", function (event) {
    event.preventDefault();
    var userEmail = $("#user-email").val().trim();
    var userMessage = $("#user-message").val().trim();

    localStorage.setItem("user email", userEmail);
    localStorage.setItem("user message", userMessage);

    console.log(userEmail);
    console.log(userMessage);
    sendEmail();

    function sendEmail() {
      Email.send({
        SecureToken: "18546a48-7b1a-453f-a1ed-e2e5f9ab7473 ",
        To: "bash7325@gmail.com",
        From: userEmail,
        Subject: "Message from my portfolio",
        Body: userMessage,
      }).then((message) => alert(message));
    }
  });
});
