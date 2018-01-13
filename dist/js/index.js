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
        $("#ticket-number").html(response);
        $("#successModal").foundation('open');
      }
    },
    error: function(response) {
      alert("Telah terjadi kesalahan pada website. Coba refresh halaman ini atau hubungi panitia alkafest.");
      console.log(response);
    }
  });
}
