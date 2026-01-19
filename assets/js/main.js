const words = ["Video Editor.", "Graphic Designer.", "Creative Technologist."];
const typingElement = document.getElementById("typing");

let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeLoop() {
    const word = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = word.slice(0, ++charIndex);
        if (charIndex === word.length) setTimeout(() => isDeleting = true, 1200);
    } else {
        typingElement.textContent = word.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeLoop, isDeleting ? 60 : 90);
}

typeLoop();

let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animateGlow() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    document.documentElement.style.setProperty("--x", `${currentX}px`);
    document.documentElement.style.setProperty("--y", `${currentY}px`);

    requestAnimationFrame(animateGlow);
}

let activeSection = document.querySelector("section.section:not(.hidden)");
const navLinks = document.querySelectorAll(".nav-link");
let isTransitioning = false;

function showSection(id, push = true) {
    const target = document.getElementById(id);
    if (!target || target === activeSection) return;

    isTransitioning = true;

    if (push) {
        history.pushState(null, "", `#${id}`)
    }
    
    activeSection.classList.add("opacity-0", "translate-y-4");

    setTimeout(() => {
        activeSection.classList.add("hidden");
        activeSection.classList.remove("opacity-100", "translate-y-0");

        
        target.classList.remove("hidden");
        requestAnimationFrame(() => {
            target.classList.remove("opacity-0", "translate-y-4");
            target.classList.add("opacity-100", "translate-y-0");
        });

        activeSection = target;
        isTransitioning = false;
    }, 500);

    navLinks.forEach(l =>
        l.classList.remove("text-text-purple", "font-semibold")
    );
    document.querySelector(`.nav-link[data-section="${id}"]`)
        ?.classList.add("text-text-purple", "font-semibold");
}

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        showSection(link.dataset.section);

        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
        }
    });
});

animateGlow();

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", () => {
    const hash = location.hash.replace("#", "");
    showSection(hash || "home", false);
});

window.addEventListener("popstate", () => {
    const hash = location.hash.replace("#", "");
    showSection(hash || "home", false);
});