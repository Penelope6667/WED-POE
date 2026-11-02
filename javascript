
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ABOUT US: Crown Beauty</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* ============================================================
       RESPONSIVE & INTERACTIVE STYLES
       ============================================================ */

    /* --- Mobile toggle button (hidden on desktop) --- */
    .nav-toggle {
      display: none;
      background: none;
      border: 2px solid #6b3e7d;
      border-radius: 6px;
      color: #6b3e7d;
      font-size: 1.6rem;
      padding: 4px 12px;
      cursor: pointer;
      line-height: 1;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .nav-toggle:hover,
    .nav-toggle:focus {
      background: #6b3e7d;
      color: #fff;
      outline: none;
    }

    /* --- Back-to-top button --- */
    #backToTop {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #6b3e7d;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 52px;
      height: 52px;
      font-size: 1.6rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease,
                  background 0.2s ease, transform 0.2s ease;
      z-index: 999;
    }
    #backToTop.show {
      opacity: 1;
      visibility: visible;
    }
    #backToTop:hover {
      background: #9b59b6;
      transform: translateY(-3px);
    }

    /* --- Fade-in reveal for cards and boxes --- */
    .reveal {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============================================================
       MEDIA QUERIES — MOBILE RESPONSIVENESS
       ============================================================ */

    /* ---- Tablets and small laptops (≤ 900px) ---- */
    @media (max-width: 900px) {
      .content {
        padding: 28px 24px;
      }
      .header-content h1 {
        font-size: 2rem;
      }
      .image-gallery {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      }
    }

    /* ---- Mobile devices (≤ 700px) ---- */
    @media (max-width: 700px) {
      /* Header */
      .main-header {
        padding: 30px 16px;
      }
      .header-content h1 {
        font-size: 1.6rem;
      }
      .header-content p {
        font-size: 1rem;
      }

      /* Navigation becomes vertical & collapsible */
      .horizontal-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 12px 16px;
      }
      .horizontal-nav h2 {
        font-size: 1.1rem;
      }
      .nav-toggle {
        display: inline-block;
        position: absolute;
        right: 16px;
        top: 12px;
      }
      .horizontal-nav {
        position: relative;
        padding-right: 60px;
      }
      .horizontal-nav ul {
        flex-direction: column;
        width: 100%;
        gap: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease;
      }
      .horizontal-nav ul.open {
        max-height: 300px;
      }
      .horizontal-nav ul li {
        width: 100%;
        border-top: 1px solid #eee;
      }
      .horizontal-nav ul li a {
        display: block;
        padding: 12px 4px;
        font-size: 1rem;
      }

      /* Content area */
      .container {
        margin: 16px auto;
        padding: 0 12px;
      }
      .content {
        padding: 20px 16px;
      }
      .intro-box h2 {
        font-size: 1.4rem;
      }
      .intro-box p {
        font-size: 0.98rem;
      }

      /* Gallery becomes a single column */
      .image-gallery {
        grid-template-columns: 1fr;
        gap: 18px;
      }
      .image-card img {
        height: 200px;
      }

      /* Footer */
      .site-footer {
        padding: 35px 16px 16px 16px;
      }
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 22px;
        padding-bottom: 22px;
      }
      .footer-col h3 {
        font-size: 1rem;
      }

      /* Back-to-top button slightly smaller */
      #backToTop {
        bottom: 18px;
        right: 18px;
        width: 44px;
        height: 44px;
        font-size: 1.35rem;
      }
    }

    /* ---- Very small phones (≤ 400px) ---- */
    @media (max-width: 400px) {
      .header-content h1 {
        font-size: 1.35rem;
      }
      .intro-box h2 {
        font-size: 1.25rem;
      }
      .image-card img {
        height: 180px;
      }
    }

    /* ---- Respect reduced-motion preference ---- */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        transition-duration: 0.001ms !important;
        animation-duration: 0.001ms !important;
      }
      .reveal {
        opacity: 1;
        transform: none;
      }
    }
  </style>
</head>
<body>

  <header class="main-header">
    <div class="header-content">
      <h1>About Crown Beauty</h1>
      <p>The story and passion behind our luxury hair brand.</p>
    </div>
  </header>

  <div class="container">

    <nav class="horizontal-nav" aria-label="Main navigation">
      <h2>Navigation</h2>
      <button class="nav-toggle" id="navToggle"
              aria-expanded="false" aria-controls="navLinks"
              aria-label="Toggle navigation menu">
        ☰
      </button>
      <ul id="navLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

    <main class="content">

      <!-- Intro Section -->
      <section class="intro-box reveal">
        <h2>Who We Are</h2>
        <p>Founded with a vision to empower individuals through exceptional quality hair, Crown Beauty provides top-grade lace frontals and bundles designed to look natural, feel luxurious, and boost absolute confidence. We believe that everyone deserves to wear their crown proudly, and we don't settle for less because you deserve the best.</p>
      </section>

      <!-- Brand Story Section -->
      <section class="intro-box reveal" style="margin-top: 40px;">
        <h2>Our Journey &amp; Mission</h2>
        <p>Crown Beauty started out of a deep passion for redefining luxury hair standards in South Africa and beyond. We recognized a gap in the market for genuine, durable, and ethically sourced hair solutions that stand the test of time. Every bundle and frontal in our collection undergoes rigorous quality checks to ensure zero tangling, minimal shedding, and long-lasting volume.</p>
      </section>

      <!-- Core Values / Image Gallery Section -->
      <div class="image-gallery">
        <div class="image-card reveal">
          <img src="img/pexels-elsimage-4376133.jpg" alt="Our Mission">
          <div class="card-desc">
            <h3>Our Mission</h3>
            <p>To deliver premium, ethically sourced hair solutions that seamlessly blend with all skin tones and textures, giving you a flawless finish every single day.</p>
          </div>
        </div>

        <div class="image-card reveal">
          <img src="img/pexels-artbovich-7750124.jpg" alt="Our Quality">
          <div class="card-desc">
            <h3>Uncompromised Quality</h3>
            <p>We source only 100% human hair. Our rigorous quality control ensures soft, thick-from-root-to-tip bundles that maintain their natural luster over time.</p>
          </div>
        </div>

        <div class="image-card reveal">
          <img src="img/pexels-twinkles_photos-414046518-35777510.jpg" alt="Customer Confidence">
          <div class="card-desc">
            <h3>Empowering Confidence</h3>
            <p>Your hair is your statement. We are dedicated to providing products that make you look effortlessly radiant and feel unstoppable wherever you go.</p>
          </div>
        </div>
      </div>

    </main>

    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h3>Crown Beauty</h3>
          <p>Redefining luxury hair standards one bundle at a time.</p>
        </div>
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Visit Us</h3>
          <p>Mbombela, South Africa</p>
          <p>Email: support@crownbeauty.co.za</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Crown Beauty (Penny Web). All rights reserved.</p>
      </div>
    </footer>

  </div>

  <!-- Back to top button -->
  <button id="backToTop" title="Back to top" aria-label="Back to top">↑</button>

  <script>
    (function () {
      'use strict';

      /* ============================================================
         1. MOBILE NAVIGATION TOGGLE
         ============================================================ */
      const navToggle = document.getElementById('navToggle');
      const navLinks  = document.getElementById('navLinks');

      if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
          const isOpen = navLinks.classList.toggle('open');
          navToggle.setAttribute('aria-expanded', String(isOpen));

          // Change icon
          navToggle.innerHTML = isOpen ? '✕' : '☰';
        });

        // Close menu when a link is clicked (good UX on mobile)
        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            if (window.innerWidth <= 700) {
              navLinks.classList.remove('open');
              navToggle.setAttribute('aria-expanded', 'false');
              navToggle.innerHTML = '☰';
            }
          });
        });

        // Reset menu state on resize (desktop <-> mobile)
        window.addEventListener('resize', () => {
          if (window.innerWidth > 700) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.innerHTML = '☰';
          }
        });
      }

      /* ============================================================
         2. BACK TO TOP BUTTON
         ============================================================ */
      const backBtn = document.getElementById('backToTop');

      if (backBtn) {
        window.addEventListener('scroll', function () {
          if (window.scrollY > 300) {
            backBtn.classList.add('show');
          } else {
            backBtn.classList.remove('show');
          }
        }, { passive: true });

        backBtn.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      /* ============================================================
         3. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
         ============================================================ */
      const revealEls = document.querySelectorAll('.reveal');

      // If the browser doesn't support IntersectionObserver, reveal everything
      if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('visible'));
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // reveal only once
            }
          });
        }, {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px'
        });

        revealEls.forEach(el => observer.observe(el));
      }

      /* ============================================================
         4. SMOOTH SCROLL FOR SAME-PAGE ANCHORS (if added later)
         ============================================================ */
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href === '#' || href === '') return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      /* ============================================================
         5. FRIENDLY CONSOLE MESSAGE
         ============================================================ */
      console.log('%c👑 Crown Beauty — About Us loaded with responsive enhancements.',
                  'color:#6b3e7d; font-weight:bold;');
    })();
  </script>
</body>
</html>