// Function to handle smooth page transition
window.addEventListener('load', function () {
    document.body.classList.add('fade-in'); // Apply fade-in animation

    // Ensure the transition is smooth and prevent rapid clicks
    setTimeout(function () {
        document.body.classList.remove('fade-in'); // Allow fade-out on page unload
    }, 500); // Match the duration of the fade-in animation (500ms)
});

// Disable multiple clicks during animation to prevent interruptions
let navigating = false;
document.querySelector("nav").addEventListener('click', function (event) {
    if (navigating) {
        event.preventDefault(); // Prevent multiple clicks during transition
    } else {
        navigating = true;
        setTimeout(function () {
            navigating = false; // Allow navigation after transition is done
        }, 500); // Match the fade-in duration
    }
});





// Ensure the fade-in class is removed before a new page is loaded
window.addEventListener('beforeunload', function () {
    document.body.classList.remove('fade-in');
});




// Lightbox Functionality with Description and Date
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const closeButton = document.createElement("span");
    closeButton.classList.add("lightbox-close");
    closeButton.textContent = "×";
    lightbox.appendChild(closeButton);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    const caption = document.createElement("div");
    caption.classList.add("lightbox-caption");
    lightbox.appendChild(caption);

    const links = document.querySelectorAll('[data-lightbox="gallery"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            img.src = link.href;
            const description = link.getAttribute("data-description");
            const date = link.getAttribute("data-date");
            caption.innerHTML = `<p>${description}</p><p>${date}</p>`;
            lightbox.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== img && e.target !== closeButton) {
            lightbox.style.display = "none";
        }
    });
});

