//modal click to connect

function applyIdo(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox
    .find(".yes")
    .unbind()
    .click(function () {
      confirmBox.hide();
    });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}

//link redirection
function linkPro() {
  location.href = "sales.html";
}
function applyIdo() {
  location.href = "wallet.html";
}

//connect automatically
$(document).ready(function () {
  $("#hide").show(6000).fadeOut(7000);
});

$(document).ready(function () {
  $("#error").delay(9000).fadeIn(9000);
});
