document.addEventListener('DOMContentLoaded', () => {
        const the_animation = document.querySelectorAll('.animation');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation');
                } else {
                    entry.target.classList.remove('scroll-animation');
                }
            });
        }, { threshold: 0.5 });

        the_animation.forEach((element) => {
            observer.observe(element);
        });
    });