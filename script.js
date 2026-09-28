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

const nameInput =
    document.getElementById("name");

const nameError =
    document.getElementById("nameError");

const foodError =
    document.getElementById("foodError");

const hiddenFrame =
    document.getElementById("hiddenFrame");

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
   NAME → FOOD
========================= */

nameNext.addEventListener(
    "click",
    function () {

        const name =
            nameInput.value.trim();


        nameError.style.display =
            "none";


        if (!name) {

            nameError.textContent =
                "⚠️ Tell us your name first.";

            nameError.style.display =
                "block";

            nameInput.focus();

            return;

        }


        step1.classList.remove(
            "active"
        );

        step2.classList.add(
            "active"
        );


        stepNumber.textContent =
            "02";


        progressBar.style.width =
            "100%";

    }
);


/* =========================
   FOOD → NAME
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


        stepNumber.textContent =
            "01";


        progressBar.style.width =
            "50%";


        foodError.style.display =
            "none";

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


        const food =
            document.querySelector(
                'input[name="food"]:checked'
            );


        nameError.style.display =
            "none";

        foodError.style.display =
            "none";


        /* NAME CHECK */

        if (!name) {

            event.preventDefault();

            step2.classList.remove(
                "active"
            );

            step1.classList.add(
                "active"
            );

            stepNumber.textContent =
                "01";

            progressBar.style.width =
                "50%";

            nameError.textContent =
                "⚠️ Please enter your name.";

            nameError.style.display =
                "block";

            nameInput.focus();

            return;

        }


        /* FOOD CHECK */

        if (!food) {

            event.preventDefault();

            foodError.textContent =
                "⚠️ Choose Veg or Non-Veg.";

            foodError.style.display =
                "block";

            return;

        }


        /*
         * At this point:
         *
         * name = valid
         * food = valid
         *
         * The browser will now submit
         * the POST request to Google Apps Script.
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
         * We use a hidden iframe so the
         * current website does not leave
         * the page when submitting to
         * Google Apps Script.
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
            2000
        );

    }
);
