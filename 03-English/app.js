const menu = [
  {
    id: 1,
    title: "interchange fifth edition",
    category: "textbook",
    price: 2800,
    level: "All-level",
    type: "textbook-audio",
    img: "./images/interchange.jpg",
    link: "./textbook/interchange.html",
    desc: `beginner to advanced (all level) အစုံ ကိုမှ ၂၈၀၀ သာကျသင့်မှာ
            ဖြစ်ပါတယ်`,
  },
  {
    id: 2,
    title: "Headway Fifty Edition",
    category: "textbook",
    price: 2800,
    level: "All-level",
    type: "textbook-audio",
    link: "./textbook/headway.html",
    img: "./images/headway.jpg",
    desc: `beginner to advanced (all level) အစုံ ကိုမှ ၂၈၀၀ သာကျသင့်မှာ
            ဖြစ်ပါတယ်`,
  },
  {
    id: 3,
    title: "Face 2 Face",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "stextbook-audio",
    img: "./images/face2face.png",
    link: "./textbook/face2face.html",
    desc: `You Enjoy Speaking Clearly & Powerfully, Winning Better Jobs, Eliminating Fear, Becoming An Expert English Speaker…`,
  },
  {
    id: 4,
    title: "Master Present Tense Rules",
    category: "Udemy",
    price: 1700,
    level: "beginner",
    type: "grammar",
    img: "./images/master-present-tense-rules.jpg",
    desc: `Learn English Grammar with a native English teacher. Be more confident with use of present simple and continuous tenses`,
  },
  {
    id: 5,
    title: "Beginner to Advanced (A1-C1) GrammarPro",
    category: "Udemy",
    price: 1900,
    level: "beginner",
    type: "grammar",
    img: "./images/beginner-to-advanced(A1-C1)-GrammarPro.jpg",
    desc: `Complete Grammar Course to FINISH studying English grammar + improve conversation and pronunciation`,
  },
  {
    id: 6,
    title: "Complete Intermediate English Grammar Course (B1 CEFR)",
    category: "Udemy",
    price: 1700,
    level: "intermediate",
    type: "grammar",
    img: "./images/complete-intermediate-english-grammar-course(B1-CEFR).jpg",
    desc: `Learn all the tenses and morel!`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const containerBtn = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<a href="${item.link}" class="course-link">
            <articlt class="menu-item">
              <img src="${item.img}" class="photo" alt="${item.title}" />
              <div class="item-info">
                <header>
                  <h4 class="item-info-title">${item.title}</h4>
                  <h5 class=""></h5>
                </header>
                <header class="item-info-detail">
                  <h4 class="level">${item.level}</h4>
                  <h4 class="price">${item.price}-MMK</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
              </div>
            </articlt>
            </a>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      //console.log(values);
      return values;
    },
    ["all"]
  );
  //console.log("final", categories);
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");
  containerBtn.innerHTML = categoryBtns; // add element

  // you can select DOM added from JavaScript code, after added element
  const filterBtn = containerBtn.querySelectorAll(".filter-btn");
  //filter items
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category)
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory)
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
      //console.log(menuCategory);
    });
  });
}
