const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

function sendWhatsAppMessage(event) {
  event.preventDefault(); // Mencegah formulir dikirim secara default

  // Mendapatkan nilai dari input
  var name = document.querySelector('input[name="name"]').value;
  var phone = document.querySelector('input[name="phone"]').value;
  var message = document.querySelector('textarea[name="message"]').value;

  // Membuat URL pesan WhatsApp dengan parameter yang ditambahkan
  var url = "https://api.whatsapp.com/send?phone=" + phone + "&text=Halo " + name + ", " + message;

  // Membuka jendela baru dengan URL WhatsApp
  window.open(url, "_blank");
}