// === Smooth Scrolling ===
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = document.querySelector('.header')?.offsetHeight || 80; // Get header height or default
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Optional: Add active class to clicked link and remove from others
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// === Add active class on scroll === (Optional but good UX)
const sections = document.querySelectorAll('section[id]');

function navHighlighter() {
  let scrollY = window.pageYOffset;
  const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - headerHeight - 50; // Adjust offset as needed
    let sectionId = current.getAttribute('id');

    /* If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add("active");
    } else {
      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove("active");
    }
  });
}

window.addEventListener('scroll', navHighlighter);

// === Header background change on scroll === (Optional)
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add background after scrolling 50px
            header.classList.add('scrolled'); // Need to define .scrolled class in CSS
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Add the corresponding CSS:
    // .header.scrolled { background-color: rgba(10, 15, 26, 0.9); backdrop-filter: blur(5px); }
}

// === Mobile Menu Toggle === (Placeholder - requires HTML button and CSS)
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');
// if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         menuToggle.classList.toggle('active'); // For styling the toggle itself (e.g., X icon)
//     });
// }

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Basic validation example - add more robust checks as needed
        const name = this.querySelector('#name');
        const email = this.querySelector('#email');
        const message = this.querySelector('#message');
        let isValid = true;

        if (name.value.trim() === '') {
            alert('Por favor, insira seu nome.');
            name.focus();
            isValid = false;
            e.preventDefault();
            return;
        }

        // Very basic email check
        if (email.value.trim() === '' || !email.value.includes('@')) {
            alert('Por favor, insira um email válido.');
            email.focus();
            isValid = false;
            e.preventDefault();
            return;
        }

        if (message.value.trim() === '') {
            alert('Por favor, escreva sua mensagem.');
            message.focus();
            isValid = false;
            e.preventDefault();
            return;
        }

        if (isValid) {
            // Optionally show a success message or disable button after submission
            alert('Mensagem enviada (simulação)!'); // Changed alert message
            // Note: This form doesn't actually send data anywhere without backend code or a service.
            e.preventDefault(); // Prevent actual submission for this example
        }
    });
}

// === Particle Animation (Step 6) ===
// Will be added later using a library like particles.js or tsParticles


// === Particle Animation (Step 6) ===
// Using particles.js library

// Check if particlesJS is loaded
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50, // Adjusted number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f0c0" // Accent color (teal)
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true, // Make opacity random
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0c0", // Accent color for lines
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1, // Slightly faster movement
                "direction": "none",
                "random": true, // Random direction
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Grab effect on hover
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Push particles on click
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
} else {
    console.error("particles.js not loaded");
}

