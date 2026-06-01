// Contact Form

document.getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");
    });


// Typing Animation

const text = [
    "Full Stack Developer",
    "Web Designer",
    "Python Developer",
    "AI/ML Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing")
        .textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1200);

    }

    else {

        setTimeout(type, 100);
    }

})();


// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";
    }

    else {

        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Dark/Light Mode Toggle

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Change icon

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");
    }

    else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");
    }
});
// Active Navbar Highlight

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
            === `#${current}`){

            link.classList.add("active");
        }
    });
});