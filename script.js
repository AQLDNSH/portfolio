// =========================
// NAVBAR SCROLL EFFECT
// =========================
const nav = document.querySelector("nav");

if (nav) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}


// =========================
// TOP BUTTON
// =========================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}


// =========================
// DATE & TIME
// =========================
function updateDateTime() {
    const datetime = document.getElementById("datetime");

    if (datetime) {
        const now = new Date();
        datetime.innerHTML =
            "Current Date & Time: " + now.toLocaleString();
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// =========================
// CONTACT FORM ALERT
// =========================
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});
const cards = document.querySelectorAll(".edu-card");

window.addEventListener("scroll", revealCards);
revealCards();

function revealCards() {
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show-card");
        }
    });
}