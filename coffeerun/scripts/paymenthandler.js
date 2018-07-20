(function(window) {
  "use strict";
  var PAYMENT_FORM = "[data-payment=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(PAYMENT_FORM);

  formHandler.addPaymentSubmitHandler();
})(window);
