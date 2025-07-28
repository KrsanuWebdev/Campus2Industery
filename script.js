//  <!-- Tailwind Config -->

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#7c3aed',
        'primary-light': '#8b5cf6',
        'primary-dark': '#6d28d9',
        secondary: '#10b981',
        accent: '#f59e0b',
        dark: '#0f172a',
        darker: '#020617',
        light: '#f8fafc',
        gray: '#94a3b8',
        'dark-gray': '#334155',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
};


// Main JavaScript functionality
// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = mobileMenuButton.querySelector("i");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Toggle icon
    if (mobileMenu.classList.contains("hidden")) {
      menuIcon.className = "fas fa-bars w-6 h-6";
    } else {
      menuIcon.className = "fas fa-times w-6 h-6";
    }
  });

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.className = "fas fa-bars w-6 h-6";
    });
  });

  // Parallax scrolling effect
  function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".parallax-bg");

    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || 0.5;
      const yPos = -(scrolled * Number.parseFloat(speed));
      element.style.transform = `translateY(${yPos}px)`;
    });

    // Add parallax to floating shapes
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape, index) => {
      const speed = 0.1 + index * 0.05;
      const yPos = scrolled * speed;
      shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1
        }deg)`;
    });
  }

  // Throttled scroll handler for better performance
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(handleParallax);
      ticking = true;
    }
  }

  function handleScroll() {
    requestTick();
    ticking = false;
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements =
    document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  // Course data
  const courses = [
    {
      id: 1,
      title: "Node.js Backend Development",
      description:
        "Master server-side JavaScript with Express, MongoDB, and REST APIs to build powerful backend services.",
      price: "$149.99",
      rating: 4.7,
      reviews: 1234,
      badge: "Bestseller",
      badgeColor: "bg-primary/20 text-primary-300",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Complete Power BI Mastery",
      description:
        "Transform raw data into compelling visual stories and business insights with Microsoft Power BI.",
      price: "$189.99",
      rating: 4.9,
      reviews: 876,
      badge: "Trending",
      badgeColor: "bg-secondary/20 text-secondary-300",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Modern React Development",
      description:
        "Build interactive user interfaces with React Hooks, Context API, and advanced state management.",
      price: "$129.99",
      rating: 4.8,
      reviews: 2345,
      badge: "Featured",
      badgeColor: "bg-primary-light/20 text-primary-light-300",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Data Science Foundations",
      description:
        "Learn Python, Pandas, NumPy, and Matplotlib for data analysis, visualization, and machine learning.",
      price: "$199.99",
      rating: 5.0,
      reviews: 543,
      badge: "",
      badgeColor: "",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "UX/UI Design Principles",
      description:
        "Master user-centered design, wireframing, prototyping, and usability testing for digital products.",
      price: "$159.99",
      rating: 4.6,
      reviews: 765,
      badge: "",
      badgeColor: "",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Cloud Architecture with AWS",
      description:
        "Learn to design, deploy, and manage scalable cloud solutions using Amazon Web Services.",
      price: "$179.99",
      rating: 4.9,
      reviews: 876,
      badge: "",
      badgeColor: "",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Generate course cards
  function generateCourseCards() {
    const coursesGrid = document.getElementById("courses-grid");

    courses.forEach((course, index) => {
      const courseCard = document.createElement("div");
      courseCard.className = `glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-on-scroll course-card hover-effect`;
      courseCard.style.animationDelay = `${index * 100}ms`;

      // Generate star rating
      const fullStars = Math.floor(course.rating);
      const hasHalfStar = course.rating % 1 !== 0;
      let starsHTML = "";

      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-yellow-400"></i>';
      }

      if (hasHalfStar) {
        starsHTML +=
          '<i class="fas fa-star-half-alt text-yellow-400"></i>';
      }

      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-gray-400"></i>';
      }

      courseCard.innerHTML = `
                <div class="relative h-48 overflow-hidden">
                    <img src="${course.image}" alt="${course.title
        }" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                    ${course.badge
          ? `
                        <div class="absolute top-4 left-4">
                            <span class="px-3 py-1 ${course.badgeColor} text-xs font-semibold rounded-full backdrop-blur-sm course-badge">
                                ${course.badge}
                            </span>
                        </div>
                    `
          : ""
        }
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div class="p-6">
                    <div class="flex items-center mb-3">
                        <div class="flex text-yellow-400 star-rating">
                            ${starsHTML}
                        </div>
                        <span class="text-gray-400 text-sm ml-2">
                            ${course.rating
        } (${course.reviews.toLocaleString()} reviews)
                        </span>
                    </div>

                    <h3 class="text-xl font-bold text-white mb-3">${course.title
        }</h3>
                    <p class="text-gray-300 mb-4 text-sm leading-relaxed">${course.description
        }</p>

                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-white">${course.price
        }</span>
                        <button class="glass-button-primary px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>
            `;

      coursesGrid.appendChild(courseCard);
    });

    // Re-observe new elements
    const newAnimatedElements =
      coursesGrid.querySelectorAll(".animate-on-scroll");
    newAnimatedElements.forEach((el) => observer.observe(el));
  }

  // Initialize course cards
  generateCourseCards();

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Enhanced button interactions
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });
  });

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Add resize event listener for responsive adjustments
  window.addEventListener("resize", () => {
    // Close mobile menu on resize
    if (window.innerWidth > 640) {
      mobileMenu.classList.add("hidden");
      menuIcon.className = "fas fa-bars w-6 h-6";
    }
  });

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Trigger initial animations
    setTimeout(() => {
      const heroElements = document
        .querySelector("#home")
        .querySelectorAll(".animate-on-scroll");
      heroElements.forEach((el) => el.classList.add("animate-in"));
    }, 300);
  });

  // Add intersection observer for navbar background
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const nav = document.querySelector(".glass-nav");
        if (!entry.isIntersecting) {
          nav.style.background = "rgba(2, 6, 23, 0.95)";
        } else {
          nav.style.background = "rgba(2, 6, 23, 0.9)";
        }
      });
    },
    { threshold: 0.1 }
  );

  const heroSection = document.querySelector("#home");
  if (heroSection) {
    navObserver.observe(heroSection);
  }

  // Add course card click handlers
  document.addEventListener("click", (e) => {
    if (e.target.textContent === "Enroll Now") {
      e.preventDefault();
      // Add enrollment logic here
      console.log("Enrollment clicked for course");

      // Add visual feedback
      const button = e.target;
      const originalText = button.textContent;
      button.textContent = "Processing...";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    }
  });

  // Performance optimization: Reduce animations on low-end devices
  if (
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency < 4
  ) {
    document.documentElement.style.setProperty(
      "--animation-duration",
      "0.3s"
    );
  }

  console.log("Campus2Industry platform loaded successfully! 🚀");
});

// Additional utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  // Additional scroll-based functionality can be added here
}, 16); // ~60fps

window.addEventListener("scroll", optimizedScrollHandler, {
  passive: true,
});