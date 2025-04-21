// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ==================== THEME TOGGLE ====================
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use user's system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // ==================== SCROLL ANIMATIONS ====================
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    
    function activateNavOnScroll() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav ul li a[href*="${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav ul li a[href*="${sectionId}"]`).classList.remove('active');
            }
        });
    }
    
    // Add visible class to sections on scroll
    function showSectionsOnScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Animate skills on scroll
    const skills = document.querySelectorAll('.skill');
    let skillsAnimated = false;
    
    function animateSkillsOnScroll() {
        const skillsSection = document.querySelector('#skills');
        
        if (isInViewport(skillsSection) && !skillsAnimated) {
            skillsAnimated = true;
            
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add('animate');
                }, index * 150);
            });
        }
    }
    
    // Add skills progress bars dynamically
    function addSkillsProgress() {
        skills.forEach(skill => {
            // Create progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress';
            
            // Create progress indicator
            const progress = document.createElement('div');
            progress.className = 'progress-bar';
            
            // Generate random progress between 75% and 95%
            const randomProgress = Math.floor(Math.random() * (95 - 75 + 1)) + 75;
            
            // Append to DOM
            progressBar.appendChild(progress);
            skill.appendChild(progressBar);
            
            // Animate progress when in viewport
            if (isInViewport(skill)) {
                setTimeout(() => {
                    progress.style.width = `${randomProgress}%`;
                }, 500);
            }
        });
    }
    
    // Add 3D tilt effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateY = (mouseX / (cardRect.width / 2)) * 5;
            const rotateX = -((mouseY / (cardRect.height / 2)) * 5);
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Add floating animation to timeline icons
    const timelineIcons = document.querySelectorAll('.timeline-icon');
    
    function animateTimelineIcons() {
        timelineIcons.forEach(icon => {
            if (isInViewport(icon)) {
                icon.style.animation = 'pulse 2s infinite';
            }
        });
    }
    
    // Add typing animation to hero section
    function initTypeAnimation() {
        const heroTitle = document.querySelector('.hero-content h2');
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                heroTitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            }
        }
        
        setTimeout(typeText, 1000);
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    function headerScrollEffect() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initialize functions
    headerScrollEffect();
    showSectionsOnScroll();
    activateNavOnScroll();
    addSkillsProgress();
    animateSkillsOnScroll();
    animateTimelineIcons();
    initTypeAnimation();
    
    // Add event listeners for scroll
    window.addEventListener('scroll', function() {
        headerScrollEffect();
        showSectionsOnScroll();
        activateNavOnScroll();
        animateSkillsOnScroll();
        animateTimelineIcons();
    });
    
    // Scroll to section when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop;
            
            window.scrollTo({
                top: offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // ==================== PARTICLES BACKGROUND ====================
    // Add particles background to hero section
    function createParticlesBackground() {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        
        hero.appendChild(particlesContainer);
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 5 + 1;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            
            // Apply styles
            particle.style.cssText = `
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                opacity: ${opacity};
                animation: float ${duration}s infinite ease-in-out;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add CSS for particles
        const style = document.createElement('style');
        style.textContent = `
            .particles-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
            }
            
            .particle {
                position: absolute;
                background-color: #fff;
                border-radius: 50%;
                pointer-events: none;
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                }
                25% {
                    transform: translateY(-30px) translateX(15px);
                }
                50% {
                    transform: translateY(-15px) translateX(30px);
                }
                75% {
                    transform: translateY(-30px) translateX(15px);
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // ==================== ANIMATED SKILL BARS ====================
    // Function to create animated skill bars
    function createSkillBars() {
        // Skills data with percentage values
        const skillsData = [
            { name: 'HTML5', value: 95 },
            { name: 'CSS3', value: 90 },
            { name: 'JavaScript', value: 85 },
            { name: 'React', value: 80 },
            { name: 'Responsive Design', value: 95 },
            { name: 'Git', value: 85 }
        ];
        
        // Get the skills container
        const skillsContainer = document.querySelector('.skills-container');
        
        // Clear existing content
        skillsContainer.innerHTML = '';
        
        // Create skill elements
        skillsData.forEach((skillData, index) => {
            // Create skill element
            const skill = document.createElement('div');
            skill.className = 'skill';
            skill.setAttribute('data-aos', 'flip-up');
            skill.setAttribute('data-aos-delay', index * 100);
            
            // Get icon class based on skill name
            let iconClass = '';
            switch(skillData.name) {
                case 'HTML5':
                    iconClass = 'fab fa-html5';
                    break;
                case 'CSS3':
                    iconClass = 'fab fa-css3-alt';
                    break;
                case 'JavaScript':
                    iconClass = 'fab fa-js';
                    break;
                case 'React':
                    iconClass = 'fab fa-react';
                    break;
                case 'Responsive Design':
                    iconClass = 'fas fa-mobile-alt';
                    break;
                case 'Git':
                    iconClass = 'fab fa-git-alt';
                    break;
                default:
                    iconClass = 'fas fa-code';
            }
            
            // Create skill inner HTML
            skill.innerHTML = `
                <i class="${iconClass}"></i>
                <h3>${skillData.name}</h3>
                <div class="skill-progress">
                    <div class="progress-bar" data-value="${skillData.value}%"></div>
                </div>
                <div class="skill-percentage">${skillData.value}%</div>
            `;
            
            // Add to container
            skillsContainer.appendChild(skill);
            
            // Add staggered animation
            setTimeout(() => {
                skill.classList.add('animate');
                const progressBar = skill.querySelector('.progress-bar');
                progressBar.style.width = skillData.value + '%';
            }, index * 200);
        });
        
        // Add CSS for skill percentage
        const style = document.createElement('style');
        style.textContent = `
            .skill-percentage {
                font-weight: bold;
                margin-top: 5px;
                color: var(--primary-color);
                transition: var(--transition);
            }
            
            .skill:hover .skill-percentage {
                color: var(--white);
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // ==================== ANIMATED COUNTER ====================
    // Function to animate counters in about section
    function animateCounters() {
        // Create counters section
        const aboutSection = document.querySelector('.about-content');
        const countersSection = document.createElement('div');
        countersSection.className = 'counters-section';
        
        // Counter data
        const counterData = [
            { icon: 'fas fa-code', title: 'Lines of Code', value: 250000 },
            { icon: 'fas fa-coffee', title: 'Cups of Coffee', value: 1275 },
            { icon: 'fas fa-project-diagram', title: 'Projects Completed', value: 36 },
            { icon: 'fas fa-users', title: 'Happy Clients', value: 25 }
        ];
        
        // Create counter elements
        counterData.forEach(counter => {
            const counterElem = document.createElement('div');
            counterElem.className = 'counter';
            
            counterElem.innerHTML = `
                <i class="${counter.icon}"></i>
                <div class="counter-value" data-target="${counter.value}">0</div>
                <h3>${counter.title}</h3>
            `;
            
            countersSection.appendChild(counterElem);
        });
        
        // Add to DOM after about section
        const aboutSectionParent = aboutSection.parentNode;
        aboutSectionParent.insertBefore(countersSection, aboutSection.nextSibling);
        
        // Add CSS for counters
        const style = document.createElement('style');
        style.textContent = `
            .counters-section {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 30px;
                margin-top: 50px;
                text-align: center;
            }
            
            .counter {
                background-color: var(--white);
                border-radius: 15px;
                padding: 30px 20px;
                box-shadow: var(--box-shadow);
                transition: var(--transition);
            }
            
            body.dark-mode .counter {
                background-color: #2c3035;
            }
            
            .counter:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            }
            
            .counter i {
                font-size: 2.5rem;
                color: var(--primary-color);
                margin-bottom: 15px;
            }
            
            .counter-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--secondary-color);
                margin-bottom: 10px;
            }
            
            .counter h3 {
                font-size: 1.1rem;
                font-weight: 500;
            }
            
            @media (max-width: 768px) {
                .counters-section {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            
            @media (max-width: 480px) {
                .counters-section {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Animation function for counters
        function startCounterAnimation() {
            const counters = document.querySelectorAll('.counter-value');
            const speed = 200; // Lower is faster
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                
                // Calculate increment based on target value
                const increment = target / speed;
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count).toLocaleString();
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                
                const counterSection = counter.closest('.counters-section');
                
                // Start animation when in viewport
                window.addEventListener('scroll', function() {
                    if (isInViewport(counterSection) && !counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        updateCount();
                    }
                });
                
                // Check on initial load
                if (isInViewport(counterSection)) {
                    counter.classList.add('animated');
                    updateCount();
                }
            });
        }
        
        // Initialize counter animation
        startCounterAnimation();
    }
    
    // ==================== ANIMATED TYPING EFFECT ====================
    // Function to create an animated typing effect for the hero
    function createTypingEffect() {
        const heroTitle = document.querySelector('.hero-content h2');
        const text = heroTitle.textContent;
        
        // Clear text and prepare for animation
        heroTitle.innerHTML = '';
        heroTitle.style.borderRight = '0.08em solid var(--primary-color)';
        
        let charIndex = 0;
        const typingSpeed = 100;
        
        function typeChar() {
            if (charIndex < text.length) {
                heroTitle.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                // Reset cursor style when done
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 2000);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeChar, 1000);
    }
    
    // ==================== INITIALIZE ALL ANIMATIONS ====================
    // Function to initialize all animations
    function initAnimations() {
        createParticlesBackground();
        createSkillBars();
        animateCounters();
        createTypingEffect();
    }
    
    // Initialize all animations when the page is fully loaded
    initAnimations();
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a scroll to top button
    function addScrollTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-top-btn';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        
        document.body.appendChild(scrollBtn);
        
        // Add CSS for scroll top button
        const style = document.createElement('style');
        style.textContent = `
            .scroll-top-btn {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--gradient);
                color: var(--white);
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                opacity: 0;
                visibility: hidden;
                transition: var(--transition);
                z-index: 999;
                box-shadow: var(--box-shadow);
            }
            
            .scroll-top-btn.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .scroll-top-btn:hover {
                transform: translateY(-5px);
            }
        `;
        
        document.head.appendChild(style);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add scroll to top button
    addScrollTopButton();
    
    // Add page loading animation
    function addPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        
        loader.innerHTML = `
            <div class="loader-spinner">
                <div class="spinner"></div>
            </div>
            <h2>Loading...</h2>
        `;
        
        document.body.appendChild(loader);
        
        // Add CSS for loader
        const style = document.createElement('style');
        style.textContent = `
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--dark-color);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.5s ease, visibility 0.5s ease;
            }
            
            .loader-spinner {
                margin-bottom: 20px;
            }
            
            .spinner {
                width: 50px;
                height: 50px;
                border: 5px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: var(--primary-color);
                animation: spin 1s ease-in-out infinite;
            }
            
            .page-loader h2 {
                color: var(--white);
                letter-spacing: 2px;
            }
            
            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Hide loader after page is loaded
        window.addEventListener('load', function() {
            setTimeout(function() {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                
                // Remove loader from DOM after transition
                setTimeout(function() {
                    loader.remove();
                }, 500);
            }, 1000);
        });
    }
    
    // Add page loader
    addPageLoader();
});