import "./style.css";

export function makeDropDownMenu(node) {
  if (node && node instanceof HTMLElement) {
    dropDownMenu(node);
  } else {
    console.error("Provided node is not a valid HTML element.");
  }
}

function dropDownMenu(menu) {
  menu.classList.add("menu");
  const list = menu.querySelector("ul");
  const btn = menu.querySelector("button");
  btn.classList.add("dropMenu");
  btn.addEventListener("click", () => {
    list.classList.toggle("active");
  });
}

// Testing
// const menuContainer = document.querySelector("div");
// dropDownMenu(menuContainer);
