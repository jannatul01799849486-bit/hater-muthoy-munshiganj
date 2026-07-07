// ১. ডিজিটাল ঘড়ি সচল করা
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    
    const now = new Date();
    // বাঙালি ফরম্যাটে সময় দেখানোর জন্য
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('bn-BD', options);
    const dateString = now.toLocaleDateString('bn-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    clockElement.innerHTML = `<i class="far fa-clock"></i> ${dateString} | ${timeString}`;
}
setInterval(updateClock, 1000);
updateClock();

// ২. ডার্ক মোড টগল (Local Storage সহ)
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
    // আগের সেভ করা থিম চেক করা
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = `<i class="fas fa-sun"></i> লাইট মোড`;
    }

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeBtn.innerHTML = `<i class="fas fa-sun"></i> লাইট মোড`;
        } else {
            localStorage.setItem('theme', 'light');
            darkModeBtn.innerHTML = `<i class="fas fa-moon"></i> ডার্ক মোড`;
        }
    });
}

// ৩. অটোমেটিক হিরো ইমেজ স্লাইডার 
const slides = document.querySelectorAll('.hero-slider .slide');
if (slides.length > 0) {
    let currentSlide = 0;
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, 5000); // প্রতি ৫ সেকেন্ড পর চেঞ্জ হবে
}
