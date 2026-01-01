// Terminal/Coding Style Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.terminal-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                        link.style.color = '#3fb950';
                    } else {
                        link.style.color = '';
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Terminal typing effect for hero section
    const typingCommand = document.querySelector('.typing-animation');
    if (typingCommand) {
        const text = typingCommand.textContent;
        typingCommand.textContent = '';
        typingCommand.style.borderRight = '2px solid #3fb950';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingCommand.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    typingCommand.style.borderRight = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Animate terminal windows on scroll
    const terminalWindows = document.querySelectorAll('.terminal-window');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    entry.target.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            }
        });
    }, observerOptions);
    
    terminalWindows.forEach(window => {
        window.style.opacity = '0';
        observer.observe(window);
    });
    
    // Terminal cursor blinking animation
    const cursors = document.querySelectorAll('.terminal-cursor');
    cursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 530);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card-terminal');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 24px rgba(63, 185, 80, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Animate tech tags on hover
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Terminal window button interactions (visual feedback)
    const terminalButtons = document.querySelectorAll('.terminal-btn');
    terminalButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.opacity = '0.5';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
    
    // Add typing effect to code blocks on scroll
    const codeBlocks = document.querySelectorAll('.code-block');
    const codeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const pre = entry.target.querySelector('pre');
                if (pre) {
                    const originalText = pre.innerHTML;
                    pre.innerHTML = '';
                    pre.style.opacity = '0';
                    
                    setTimeout(() => {
                        pre.innerHTML = originalText;
                        pre.style.opacity = '1';
                        pre.style.transition = 'opacity 0.5s ease';
                    }, 300);
                }
            }
        });
    }, { threshold: 0.3 });
    
    codeBlocks.forEach(block => {
        codeObserver.observe(block);
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.terminal-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(22, 27, 34, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#161b22';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Add glow effect to active section
    function addGlowEffect() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                const terminalWindow = section.querySelector('.terminal-window');
                if (terminalWindow) {
                    terminalWindow.style.boxShadow = '0 8px 32px rgba(63, 185, 80, 0.3)';
                }
            } else {
                const terminalWindow = section.querySelector('.terminal-window');
                if (terminalWindow) {
                    terminalWindow.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
                }
            }
        });
    }
    
    window.addEventListener('scroll', addGlowEffect);
    
    // Console welcome message
    console.log('%c╔═══════════════════════════════════════╗', 'color: #3fb950; font-family: monospace;');
    console.log('%c║   Welcome to Raj Chauhan\'s Portfolio  ║', 'color: #3fb950; font-family: monospace;');
    console.log('%c║   Backend Web Developer                ║', 'color: #58a6ff; font-family: monospace;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #3fb950; font-family: monospace;');
    console.log('%cType "help" for available commands', 'color: #8b949e; font-family: monospace;');
    
    // Easter egg: Konami code or special commands
    let commandBuffer = '';
    document.addEventListener('keydown', function(e) {
        commandBuffer += e.key.toLowerCase();
        if (commandBuffer.length > 20) {
            commandBuffer = commandBuffer.slice(-20);
        }
        
        // Check for "help" command
        if (commandBuffer.includes('help')) {
            console.log('%cAvailable commands:', 'color: #58a6ff; font-weight: bold;');
            console.log('%c  - help: Show this help message', 'color: #c9d1d9;');
            console.log('%c  - clear: Clear console', 'color: #c9d1d9;');
            console.log('%c  - about: Show about information', 'color: #c9d1d9;');
            commandBuffer = '';
        }
        
        // Check for "clear" command
        if (commandBuffer.includes('clear')) {
            console.clear();
            console.log('%cConsole cleared!', 'color: #3fb950;');
            commandBuffer = '';
        }
    });
    
    // Add ripple effect to clickable elements
    const clickableElements = document.querySelectorAll('.contact-link, .tech-tag, .project-card-terminal');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Initialize page
    console.log('%cPortfolio loaded successfully!', 'color: #3fb950; font-weight: bold;');
});
