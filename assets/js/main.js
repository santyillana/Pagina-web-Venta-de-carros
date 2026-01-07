/* ================================
   RESET & BASE
   ================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: #111;
  color: #f5f5f5;
  display: block;
  overflow-x: hidden;
}

/* ================================
   CONTAINERS
   ================================ */

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ================================
   HEADER
   ================================ */

.site-header {
  background-color: #000;
  border-bottom: 1px solid #222;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

/* Logo */
.logo img {
  max-height: 60px;
  width: auto;
  display: block;
}

/* Navigation */
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 24px;
  padding: 0;
  margin: 0;
}

.main-nav a {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
}

.main-nav a:hover {
  color: #e10600;
}

/* CTA */
.header-cta .btn {
  white-space: nowrap;
}

/* ================================
   BUTTONS
   ================================ */

.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn-primary {
  background-color: #e10600;
  color: #fff;
}

.btn-primary:hover {
  background-color: #b90500;
}

.btn-secondary {
  border: 1px solid #e10600;
  color: #e10600;
}

.btn-secondary:hover {
  background-color: #e10600;
  color: #fff;
}

/* ================================
   HERO
   ================================ */

.hero {
  padding: 80px 0;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.1rem;
  color: #ccc;
}

.hero-buttons {
  margin-top: 24px;
  display: flex;
  gap: 16px;
}

/* ================================
   SECTIONS
   ================================ */

section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.section-subtitle {
  text-align: center;
  color: #bbb;
  margin-bottom: 60px;
}

/* ================================
   CARDS
   ================================ */

.vehicles-grid,
.why-grid,
.trust-grid {
  display: grid;
  gap: 30px;
}

.vehicles-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card {
  background-color: #1a1a1a;
  border-radius: 6px;
  overflow: hidden;
}

.card-body {
  padding: 20px;
}

.card-title {
  margin: 0 0 10px;
}

.card-price {
  color: #e10600;
  font-weight: bold;
  margin-bottom: 16px;
}

/* ================================
   WHY & TRUST
   ================================ */

.why-grid,
.trust-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.why-card,
.review-card {
  background-color: #1a1a1a;
  padding: 24px;
  border-radius: 6px;
}

.review-text {
  font-style: italic;
  color: #ccc;
}

.review-author span {
  color: #888;
  font-size: 0.9rem;
}

/* ================================
   FOOTER
   ================================ */

.site-footer {
  background-color: #000;
  border-top: 1px solid #222;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
}

.footer-bottom {
  border-top: 1px solid #222;
  text-align: center;
  padding: 20px;
  color: #777;
}

/* ================================
   RESPONSIVE
   ================================ */

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .header-container {
    flex-wrap: wrap;
    gap: 20px;
  }
}
/* ================================
   HARD RESET — REMOVE BACKGROUND LOGO
   ================================ */

html,
body {
  background-image: none !important;
  background-repeat: no-repeat !important;
  background-position: initial !important;
  background-size: auto !important;
}
