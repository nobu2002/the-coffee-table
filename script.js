document.addEventListener("DOMContentLoaded", function () {

  // ── HAMBURGER MENU ──
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // ── EXISTING FORM VALIDATION ──
  const form = document.querySelector(".form-grid");

  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const feedback = document.createElement("p");
    feedback.style.marginTop = "10px";
    feedback.style.fontWeight = "600";
    form.appendChild(feedback);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      let errorMessage = "";

      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

      // Reset styles
      nameInput.style.border = "1.5px solid #e8ddd0";
      emailInput.style.border = "1.5px solid #e8ddd0";
      messageInput.style.border = "1.5px solid #e8ddd0";
      feedback.textContent = "";

      if (nameValue === "" || nameValue.length < 2) {
        isValid = false;
        errorMessage = "Please enter a valid name.";
        nameInput.style.border = "1.5px solid red";
      } else if (!emailPattern.test(emailValue)) {
        isValid = false;
        errorMessage = "Please enter a valid email address.";
        emailInput.style.border = "1.5px solid red";
      } else if (messageValue === "" || messageValue.length < 10) {
        isValid = false;
        errorMessage = "Message must be at least 10 characters long.";
        messageInput.style.border = "1.5px solid red";
      }

      if (!isValid) {
        feedback.textContent = errorMessage;
        feedback.style.color = "red";
      } else {
        feedback.textContent = "Your message has been sent successfully.";
        feedback.style.color = "green";
        form.reset();
      }
    });
  }

  // ── SERVICE FILTER BUTTONS ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        const filter = this.dataset.filter;

        serviceCards.forEach(function (card) {
          if (filter === 'all' || card.dataset.category.includes(filter)) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── NAV SHADOW ON SCROLL ──
  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) {
        header.style.boxShadow = '0 4px 20px rgba(73, 48, 31, 0.10)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});