/* =========================
   ELEMENTS
========================= */

const intro =
    document.getElementById("intro");

const registration =
    document.getElementById("registration");

const success =
    document.getElementById("success");

const startBtn =
    document.getElementById("startBtn");

const form =
    document.getElementById("registrationForm");

const stepNumber =
    document.getElementById("stepNumber");

const progressBar =
    document.getElementById("progressBar");

const submitButton =
    document.getElementById("submitButton");

const loading =
    document.getElementById("loading");

const nameInput =
    document.getElementById("name");

const nameError =
    document.getElementById("nameError");

const particleContainer =
    document.getElementById("particles");


/* =========================
   PARTICLES
========================= */

for (let i = 0; i < 50; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particleContainer.appendChild(
        particle
    );

}


/* =========================
   START
========================= */

startBtn.addEventListener(
    "click",
    function () {

        intro.classList.add("hidden");

        registration.classList.remove(
            "hidden"
        );

        nameInput.focus();

    }
);


/* =========================
   FORM SUBMISSION
========================= */

form.addEventListener(
    "submit",
    function (event) {

        const name =
            nameInput.value.trim();


        /* CLEAR PREVIOUS ERROR */

        nameError.style.display =
            "none";


        /* =========================
           NAME VALIDATION
        ========================= */

        if (!name) {

            event.preventDefault();

            nameError.textContent =
                "⚠️ Please enter your name.";

            nameError.style.display =
                "block";

            nameInput.focus();

            return;

        }


        /* =========================
           PREPARE SUBMISSION
        ========================= */

        /*
         * Only the following data
         * will be sent:
         *
         * name = user's name
         *
         * No Veg / Non-Veg data.
         */


        submitButton.disabled =
            true;


        submitButton
            .querySelector("span")
            .textContent =
            "SECURING YOUR SPOT...";


        loading.style.display =
            "block";


        /*
         * The form will now submit
         * normally to Google Apps Script
         * using the hidden iframe.
         */


        /* =========================
           SHOW SUCCESS
        ========================= */

        setTimeout(
            function () {

                registration.classList.add(
                    "hidden"
                );

                success.classList.remove(
                    "hidden"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            },
            2000
        );

    }
);
