function start() {
  $('#header-content').fadeIn(750, function() {
    $('#nav-arrow').slideDown();
  });
}

function submitForm() {
  var name = document.getElementById("nameBox").value;
  var email = document.getElementById("emailBox").value;

  $("#waitModal").foundation('open');

  $.ajax({
    type: "POST",
    url: "register.php",
    dataType: "html",
    data: {
      userName: name,
      userEmail: email
    },
    success: function(response) {
      console.log(response);
      if (response == "SOLDOUT")
      {
        $("#soldModal").foundation('open');
      }
      else {
        $("#successModal").foundation('open');
      }
    },
    error: function(response) {
      alert("Terjadi error pada website. Cek koneksi anda atau contact panitia Alkafest.");
    }
  });
}
