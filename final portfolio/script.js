let linkedin = document.getElementById('linkedin');
linkedin.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/siva-sankar-sk/";
});

let github = document.getElementById('github');
github.addEventListener("click", () => {
    window.location.href = "https://github.com/devsivasankar";
});

let instagram = document.getElementById('instagram');
instagram.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/_sk.ig/";
});

let mail = document.getElementById('mail');
mail.addEventListener("click", () => {
    window.location.href = "mailto:mypostbox.sivasankar@gmail.com";
});




let linkedin1 = document.getElementById('linkedin1');
linkedin1.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/siva-sankar-sk/";
});

let mail1 = document.getElementById('mail1');
mail1.addEventListener("click", () => {
    window.location.href = "mailto:mypostbox.sivasankar@gmail.com";
});

let github1 = document.getElementById('github1');
github1.addEventListener("click", () => {
    window.location.href = "https://github.com/devsivasankar";
});

let whatsapp1 = document.getElementById('whatsapp1');
whatsapp1.addEventListener("click", () => {
    window.location.href = "https://wa.me/+917845529705";
});

let instagram1 = document.getElementById('instagram1');
instagram1.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/_sk.ig/";
});

let phone1 = document.getElementById('phone1');
phone1.addEventListener("click", () => {
    window.location.href = "tel:+917845529705";
});

let twitter1 = document.getElementById('twitter1');
twitter1.addEventListener("click", () => {
    window.location.href = "https://x.com/sivaX01";
});


document.getElementById('resumeButton').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'images/sivasankar_backend_2018_DME_python.pdf'; // Replace with the path to your resume
    link.download = 'sivasankar_backend_2018_DME_python.pdf'; // Optional: Set the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});






window.addEventListener('scroll', () => {
    const upArrow = document.querySelector('.uparrow');
    const scrollPosition = window.scrollY;

    // Show the arrow when the user scrolls down more than 100px
    if (scrollPosition > 100) {
        upArrow.style.opacity = '1'; // Fade in
    } else {
        upArrow.style.opacity = '0'; // Fade out
    }
});

document.querySelector('.uparrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});