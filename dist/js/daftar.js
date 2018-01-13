function start() {
  $.ajax({
    type: "POST",
    url: "daftar.php",
    dataType: "html",
    success: function(response) {
      document.getElementById("daftar").innerHTML = response;
    },
    error: function(response) {
      alert("Terjadi error pada website. Cek koneksi anda atau contact panitia Alkafest.");
    }
  });
}
