function run(n, selector) {
  let tab = [];

  try {
    if (n.matches(selector)) {
      tab.push(n);
    }
  } catch (error) {
    console.info(`SAISIE du selecteur ${selector} : ${error}`);
  }

  for (let childElt of n.children) {
    tab = [...tab, ...run(childElt, selector)];
  }

  return tab;
}

let find = document.querySelector("[data-input]");
let src = document.querySelector("[data-src]");

const html = src.innerHTML;
// console.log(html);

find.addEventListener("input", function () {
  // to reset the class
  src.innerHTML = html;

  // console.log(this.value);

  let tab = run(src, this.value);

  this.nextElementSibling.dataset.containing = tab.length;

  for (let elt of tab) {
    elt.classList.add("selected");
  }
});
