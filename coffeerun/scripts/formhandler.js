(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function (event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);

      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function (fn) {
    console.log("Setting input handler for form");
    this.$formElement.on("input", "[name=\"emailAddress\"]", function (event) {
      var emailAddress = event.target.value;
      var message = "";
      if (fn(emailAddress)) {
        event.target.setCustomValidity("");
      } else {
        message = emailAddress + " is not an authorized email address!";
        event.target.setCustomValidity(message);
      }
    });
  };

  FormHandler.prototype.addPaymentSubmitHandler = function() {
    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      var nameOfUser = document.getElementById("name").value;
      var title;
      if (document.getElementById("title_2").checked) {
        title = document.getElementById("title_2").value;
      } else {
        title = document.getElementById("title_1").value;
      }
      var name = "Thank you for your payment, " + title + " " + nameOfUser;
      console.log(name);
      document.getElementById("displayDialogBox").innerHTML = name;
      $("#dialogBox").show();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
