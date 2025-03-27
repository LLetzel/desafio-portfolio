document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100, // Reduzindo a quantidade de partículas
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#11a3ae" // Usando sua cor secundária
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 80
                }
            },
            "opacity": {
                "value": 0.8, // Reduzindo a opacidade
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2, // Reduzindo o tamanho
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
                "color": "#11a3ae", // Usando sua cor secundária
                "opacity": 0.5, // Reduzindo a opacidade das linhas
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.8, // Velocidade mais suave
                "direction": "none",
                "random": false,
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
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
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
});


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });


    document.querySelectorAll('.section-sobre, .section-projetos, .section-servicos, .section-minhasskills').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            

            document.getElementById('menu-toggle').checked = false;


            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20; // -20 para um pequeno offset
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    document.querySelector('.overlay').addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });


    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });
});