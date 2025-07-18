// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Testimonials rotator
    const testimonials = [
        {
            quote: "TechAcademy transformed my career. I landed a job as a frontend developer just 3 months after completing the course!",
            author: "Sarah Johnson",
            role: "Frontend Developer at TechCorp"
        },
        {
            quote: "The hands-on projects helped me build a strong portfolio that impressed my future employer.",
            author: "Miguel Rodriguez",
            role: "Data Analyst at DataInsights"
        },
        {
            quote: "I went from zero coding knowledge to deploying my first full-stack application in just 6 months!",
            author: "Emily Chen",
            role: "Full Stack Developer at AppWorks"
        }
    ];

    let currentIndex = 0;
    const testimonialElement = document.getElementById('testimonial');
    const authorElement = document.getElementById('testimonial-author');
    const roleElement = document.getElementById('testimonial-role');

    function rotateTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonialElement.classList.add('opacity-0');
        setTimeout(() => {
            testimonialElement.textContent = testimonials[currentIndex].quote;
            authorElement.textContent = testimonials[currentIndex].author;
            roleElement.textContent = testimonials[currentIndex].role;
            testimonialElement.classList.remove('opacity-0');
        }, 500);
    }

    setInterval(rotateTestimonial, 7000);

    // Button pulse effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('animate-pulse');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('animate-pulse');
        });
    });
});
