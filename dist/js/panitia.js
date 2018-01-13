function start() {

}

function submitForm() {
  var tiket = document.getElementById("ticketBox").value;

  $("#waitModal").foundation('open');

  $.ajax({
    type: "POST",
    url: "cektiket.php",
    dataType: "html",
    data: {
      NoTiket: tiket
    },
    success: function(response) {
      if (response == "NORESULT")
      {
        $("#failModal").foundation('open');
      } else {
        document.getElementById("status").innerHTML = response;
        $("#checkModal").foundation('open');
      }
    },
    error: function(response) {
      alert("Terjadi error pada website. Cek koneksi anda atau contact panitia Alkafest.");
    }
  });
}

function updateTiket() {
  var tiket = document.getElementById("ticketBox").value;

  $("#waitModal").foundation('open');

  $.ajax({
    type: "POST",
    url: "updatetiket.php",
    dataType: "html",
    data: {
      NoTiket: tiket
    },
    success: function(response) {
      submitForm();
    },
    error: function(response) {
      alert("Terjadi error pada website. Cek koneksi anda atau contact panitia Alkafest.");
    }
  });
}
