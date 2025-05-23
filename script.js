const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Close the menu when a link is clicked (optional)
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 500); // Delay each item's appearance
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const animateSkills = () => {
        skillBars.forEach(skill => {
            const progress = skill.style.getPropertyValue("--progress-width");
            skill.style.width = progress; // Start the animation to the percentage
        });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const skillsSection = document.querySelector("#skills");

    const handleScroll = () => {
        if (isInViewport(skillsSection)) {
            animateSkills();
            window.removeEventListener("scroll", handleScroll); // Remove listener after animation
        }
    };

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation for visible skill bars
                skillBars.forEach(skill => {
                    const progress = skill.style.getPropertyValue("--progress-width");
                    skill.style.width = progress; // Start the animation to the percentage
                });
            } else {
                // Reset animation when the section is out of view
                skillBars.forEach(skill => {
                    skill.style.width = "0";
                });
            }
        });
    };

    const observerOptions = {
        threshold: 0.5, // Trigger when at least 50% of the section is visible
    };

    const observer = new IntersectionObserver(animateSkills, observerOptions);

    const skillsSection = document.querySelector("#skills");
    observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".certificate-img");
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "×";
    const fullscreenImg = document.createElement("img");
    fullscreenImg.classList.add("fullscreen-img");

    overlay.appendChild(fullscreenImg);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    images.forEach(image => {
        image.addEventListener("click", () => {
            fullscreenImg.src = image.src;
            overlay.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });
});

document.querySelectorAll('.project-item .toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const projectItem = button.closest('.project-item');
        const moreText = projectItem.querySelector('.more-text');
        const dots = projectItem.querySelector('.dots');

        if (moreText.style.display === "none" || !moreText.style.display) {
            moreText.style.display = "inline";
            dots.style.display = "none";
            button.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            button.textContent = "Read More";
        }
    });
});

document.addEventListener('contextmenu', e => e.preventDefault());


document.addEventListener('keydown', function(e) {
  if (
    e.key === 'F12' || 
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});
