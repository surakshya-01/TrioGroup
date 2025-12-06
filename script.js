<script>
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Enter Website Button Functionality
        document.getElementById('enterWebsite').addEventListener('click', () => {
            // Scroll to features section
            document.querySelector('.features').scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Add a visual effect
            const btn = document.getElementById('enterWebsite');
            btn.innerHTML = '<i class="fas fa-check"></i> Welcome!';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-arrow-right"></i> Enter Website';
                btn.style.background = '';
            }, 2000);
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                this.reset();
            }, 3000);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Animate stats counter
        function animateStats() {
            const stats = [
                { element: document.getElementById('donorCount'), target: 15248 },
                { element: document.getElementById('livesSaved'), target: 42736 },
                { element: document.getElementById('bloodDrives'), target: 127 }
            ];
            
            stats.forEach(stat => {
                let current = 0;
                const increment = stat.target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if(current >= stat.target) {
                        current = stat.target;
                        clearInterval(timer);
                    }
                    stat.element.textContent = Math.floor(current).toLocaleString();
                }, 20);
            });
        }
        
        // Trigger stats animation when scrolled into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.stats'));
        
        // Scroll indicator functionality
        window.addEventListener('scroll', () => {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if(window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
        
        // Add hover effect to donor cards
        document.querySelectorAll('.donor-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const bloodGroup = card.querySelector('.donor-blood-group');
                bloodGroup.style.transform = 'scale(1.1)';
                bloodGroup.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                const bloodGroup = card.querySelector('.donor-blood-group');
                bloodGroup.style.transform = 'scale(1)';
            });
        });
        
        // Initialize with stats animation
        setTimeout(() => {
            // Start with a small animation for the welcome banner
            document.querySelector('.banner-content').style.animation = 'fadeInUp 1s ease-out';
        }, 100);
    </script>
>