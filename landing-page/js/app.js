/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let secId = 3;

//  End Global Variables

//  Start Helper Functions

// function adding more sections to the page

const addSection = function () {
  secId++;
  let mainSections = `<section id="section${secId}" data-nav="Section ${secId}" class="section${secId}">
        <div class="landing__container">
            <h2>Section ${secId}</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.
            </p>
            <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
            elementum tortor mollis non.
            </p>
        </div>
        </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", mainSections);
};

// function invocation build the sections for more sections just copy (addSection();) and paste it inb below.

addSection();

/**
 * End Helper Functions
 * Begin Main Functions
 **/

// build the navbar
const navigationBar = document.getElementById("navbar__list");
const navContent = function () {
  navigationBar.innerHTML = "";
  document.querySelectorAll("section").forEach(function (element) {
    const ulList = `<li class = "${element.id}"><a href = "#${element.id}" data-nav = "${element.id}" class = "menu__link"> ${element.dataset.nav}</a></li>`;
    navigationBar.insertAdjacentHTML("beforeend", ulList);
  });
};

// function invocation build the navbar

navContent();

// Add class 'active' to section when near top of viewport (dynamic styles)

const sec = document.querySelectorAll("section");
const links = document.querySelectorAll("li");
let curr = "";
window.addEventListener("scroll", function () {
  sec.forEach(function (section) {
    if (
      section.getBoundingClientRect().top <= 160 &&
      section.getBoundingClientRect().top >= -400
    ) {
      curr = section.getAttribute("id");
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
  links.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(curr)) {
      li.classList.add("active");
    }
  });
});

// Scroll to anchor ID using scrollTO event
// (Note we can easily make this by giving style : scroll-behavior: smooth; or write this few lines of code => )
navigationBar.addEventListener("click", (scroll) => {
  scroll.preventDefault();
  if (scroll.target.dataset.nav) {
    document
      .getElementById(`${scroll.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${scroll.target.id}`;
    }, 180);
  }
});
