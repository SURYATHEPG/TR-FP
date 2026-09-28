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

const nameNext =
    document.getElementById("nameNext");

const backBtn =
    document.getElementById("backBtn");

const form =
    document.getElementById("registrationForm");

const step1 =
    document.getElementById("step1");

const step2 =
    document.getElementById("step2");

const stepNumber =
    document.getElementById("stepNumber");

const progressBar =
    document.getElementById("progressBar");

const submitButton =
    document.getElementById("submitButton");

const loading =
    document.getElementById("loading");

const nameError =
    document.getElementById("nameError");

const foodError =
    document.getElementById("foodError");


let currentStep = 1;


/* =========================
   PARTICLES
========================= */

const particleContainer =
    document.querySelector(".particles");


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
   INTRO → REGISTRATION
========================= */

startBtn.addEventListener(
    "click",
    function () {

        intro.classList.add(
            "hidden"
        );

        registration.classList.remove(
            "hidden"
        );

    }
);


/* =========================
   STEP 1 → STEP 2
========================= */

nameNext.addEventListener(
    "click",
    function () {

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        nameError.style.display =
            "none";


        if (!name) {

            nameError.textContent =
                "⚠️ Tell us your name first.";

            nameError.style.display =
                "block";

            document
                .getElementById("name")
                .focus();

            return;

        }


        step1.classList.remove(
            "active"
        );

        step2.classList.add(
            "active"
        );


        currentStep = 2;


        stepNumber.textContent =
            "02";


        progressBar.style.width =
            "100%";

    }
);


/* =========================
   STEP 2 → STEP 1
========================= */

backBtn.addEventListener(
    "click",
    function () {

        step2.classList.remove(
            "active"
        );

        step1.classList.add(
            "active"
        );


        currentStep = 1;


        stepNumber.textContent =
            "01";


        progressBar.style.width =
            "50%";


        foodError.style.display =
            "none";

    }
);


/* =========================
   FORM SUBMIT
========================= */

form.addEventListener(
    "submit",
    function (event) {

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const food =
            document.querySelector(
                'input[name="food"]:checked'
            );


        foodError.style.display =
            "none";


        /*
         * Validate name.
         */

        if (!name) {

            event.preventDefault();

            step2.classList.remove(
                "active"
            );

            step1.classList.add(
                "active"
            );

            currentStep = 1;

            stepNumber.textContent =
                "01";

            progressBar.style.width =
                "50%";

            return;

        }


        /*
         * Validate food.
         */

        if (!food) {

            event.preventDefault();

            foodError.textContent =
                "⚠️ Choose your food preference.";

            foodError.style.display =
                "block";

            return;

        }


        /*
         * Disable submit button.
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
         * Google Apps Script receives
         * the POST request through the
         * hidden iframe.
         *
         * After a short delay,
         * show the final scene.
         */

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
            1800
        );

    }
);
