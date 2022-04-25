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
    desc: `Interchange 5th Edition ဟာ level ၄ ခုရှိပြီး ကမ္ဘာတစ်ဝန်းမှာ
            ကျောင်းသား သန်း ၅၀ ကျော် အသုံးပြုခဲ့တဲ့ အမေရိကန်
            အင်္ဂလိပ်သင်တန်းလေးခုပါ။ Interchangeကို ထောင်နှင့်ချီသော ဆရာများမှ
            အတွေ့အကြုံပေါ်အခြေခံပြီး ထိုးထွင်းသိမြင်မှုဖြင့်
            အဆင့်ဆင့်ဖွံ့ဖြိုးတိုးတက်အောင် မွမ်းမံထားသည်။`,
  },
  {
    id: 2,
    title: "Headway Fifth Edition",
    category: "textbook",
    price: 2800,
    level: "All-level",
    type: "textbook-audio",
    link: "./textbook/headway.html",
    img: "./images/headway.jpg",
    desc: `Headway 5th Edition ထုတ်ဝေမှုက ယနေ့ခေတ် အောင်မြင်ဖို့အတွက်
            လိုအပ်သောအင်္ဂလိပ်စာကို ညွှန်ကြားချက်အသစ်ဖြင့်
            လေ့လာနိုင်အောင်ထောက်ပံ့ပေးထားသည်။`,
  },
  {
    id: 3,
    title: "English File",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "textbook-audio",
    img: "./images/english-file.jpeg",
    link: "./textbook/english-file.html",
    desc: `တို့ဆီမှာတော့ Interchange, Headway, cutting Edge
            တို့အများဆုံးသုံးကြပေမယ့် international
            မှာကျောင်းတက်ကြတဲ့သူတွေအများစု ကတော့ English File နဲ့ American
            English file ကို Beginner to advanced ထိ လေ့လာကြပါတယ်။`,
  },
  {
    id: 4,
    title: "Speakout 2nd Edition",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "textbook-audio",
    img: "./images/speakout2.jpg",
    link: "./textbook/speakout2.html",
    desc: `Speakout 2nd Edition ဟာ BBCကနေ ထုတ်ဝေတဲ့ video content များပါဝင်လို့
            ကျောင်းသားများအတွက်လေ့လာရန် အလယ်ကူဆုံးနှင့် အကောင်းဆုံး
            စီးရီးတစ်ခုဖြစ်ပါတယ်။`,
  },
  {
    id: 5,
    title: "American Speakout",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "textbook-audio",
    img: "./images/speakout1.jpg",
    link: "./textbook/speakout1.html",
    desc: `American Speakout ဟာ BBCကနေ ထုတ်ဝေတဲ့ video content များပါဝင်လို့
            ကျောင်းသားများအတွက်လေ့လာရန် အလယ်ကူဆုံးနှင့် အကောင်းဆုံး
            စီးရီးတစ်ခုဖြစ်ပါတယ်။`,
  },
  {
    id: 6,
    title: "American Think",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "textbook-audio",
    img: "./images/american-think.jpg",
    link: "./textbook/american-think.html",
    desc: `American Think ဟာ လူငယ်တွေအတွက်အဓိကရည်ရွယ်ထားတာဖြစ်ပြီး
            ဘာသာစကားသင်ပေးရုံသာ မဟုတ်ဘဲ စဉ်းစားတွေးခေါ်တတ်အောင်ပါ သင်ပေးတဲ့
            series ဖြစ်ပါတယ်။`,
  },
  {
    id: 7,
    title: "Cutting Edge",
    category: "textbook",
    price: 2800,
    level: "all-level",
    type: "textbook-audio",
    img: "./images/cutting-edge.jpg",
    link: "./textbook/cutting-edge.html",
    desc: `Cutting Edge ဟာ grammar and vocabulary ကို မှတ်မိရလယ်အောင်
            ထုတ်ဝေထားတာဖြစ်ပါတယ်။ သင်ခန်းစာများကိုလည်း ယခုခေတ်နဲ့ အညီ
            အကြောင်းအရာများကို တွင်တွင်ကျယ်ကျယ် ထည့်တွင်းပေးထားတာလည်းဖြစ်ပါတယ်။`,
  },
  {
    id: 8,
    title: "Master Present Tense Rules",
    category: "Udemy",
    price: 1700,
    level: "beginner",
    type: "grammar",
    img: "./images/master-present-tense-rules.jpg",
    desc: `Learn English Grammar with a native English teacher. Be more confident with use of present simple and continuous tenses`,
  },
  {
    id: "u-001",
    title: "Beginner to Advanced (A1-C1) GrammarPro",
    category: "Udemy",
    price: 1900,
    level: "beginner",
    type: "grammar",
    img: "./images/beginner-to-advanced(A1-C1)-GrammarPro.jpg",
    link: "./textbook/u-001-english-grammar-pro.html",
    desc: `Complete Grammar Course to FINISH studying English grammar + improve conversation and pronunciation`,
  },
  {
    id: 10,
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
