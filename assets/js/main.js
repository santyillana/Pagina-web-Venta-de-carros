document.addEventListener("DOMContentLoaded", () => {
  console.log("Autos Prime — main.js loaded");

  // WhatsApp link (si lo usas)
  const whatsappNumber = "15551234567";
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in one of your vehicles."
  );

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  document.querySelectorAll(".footer-whatsapp").forEach(link => {
    link.href = whatsappURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
