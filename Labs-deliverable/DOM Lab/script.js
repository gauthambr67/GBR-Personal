var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

/* Task 1.0
Select and cache the <main> element in a variable named mainEl.
*/
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

/*Task 1.1
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
*/

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");
mainEl.classList.add("flex-ctr");

// Task 2.0
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Task 3.0
menuLinks.forEach((link) => {
  const newEl = document.createElement("el");
  newEl.setAttribute("href", link.href);
  newEl.innerHTML = link.text;
  topMenuEl.appendChild(newEl);
});
