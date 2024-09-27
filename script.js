// Fungsi untuk toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById("darkmode");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    body.style.backgroundColor = "#1a1a1a";
    body.style.color = "#fff";
    darkModeIcon.classList.remove("fa-toggle-on");
    darkModeIcon.classList.add("fa-toggle-off");
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    darkModeIcon.classList.remove("fa-toggle-off");
    darkModeIcon.classList.add("fa-toggle-on");
  }
}

// Event listener untuk tombol dark mode
document.getElementById("darkmode").addEventListener("click", toggleDarkMode);

// Fungsi untuk toggle menu navbar
document.getElementById("menu-icon").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

// Fungsi pengiriman form
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  alert("Pesan terkirim!"); // Simulasi pengiriman

  // Mengosongkan form setelah pengiriman
  document.getElementById("contactForm").reset();
});
