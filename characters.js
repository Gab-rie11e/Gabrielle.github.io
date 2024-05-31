document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.info1, .info2, .info3, .info4');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('info1')) {
                    entry.target.classList.add('slide-in-right');
                } else if (entry.target.classList.contains('info2')) {
                    entry.target.classList.add('slide-in-left');
                } else if (entry.target.classList.contains('info3')) {
                    entry.target.classList.add('slide-in-right');
                } else if (entry.target.classList.contains('info4')) {
                    entry.target.classList.add('slide-in-left');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});