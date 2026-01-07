document.addEventListener("DOMContentLoaded", () => {
  /* ================================
     WhatsApp Links
     ================================ */

  const whatsappNumber = "15551234567"; // ← cambia luego
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in one of your vehicles."
  );

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const whatsappLinks = document.querySelectorAll(
    'a[href="#"], .footer-whatsapp'
  );

  whatsappLinks.forEach(link => {
    if (
      link.textContent.toLowerCase().includes("whatsapp") ||
      link.classList.contains("footer-whatsapp")
    ) {
      link.setAttribute("href", whatsappURL);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  /* ================================
     Smooth Scroll (future-proof)
     ================================ */

  const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  internalLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ================================
     Console helper (dev only)
     ================================ */

  console.log("Autos Prime — main.js loaded");
});
