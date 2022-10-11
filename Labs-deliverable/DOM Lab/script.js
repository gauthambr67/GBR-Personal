// 3.0

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// 1.0

let mainEl = document.querySelector("main");

// 1.1

mainEl.style.backgroundColor = "var(--main-bg)";

// 1.2

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// 1.3

mainEl.classList.add("flex-ctr");

// 2.0

let topMenuEl = document.querySelector("#top-menu");

// 2.1

topMenuEl.style.height = "100%";

// 2.2

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 2.3

topMenuEl.classList.add("flex-around");

// 3.1

menuLinks.forEach(function (link) {
  let newEl = document.createElement("a");
  newEl.setAttribute("href", link.href);
  newEl.innerHTML = link.text;
  topMenuEl.appendChild(newEl);
});
