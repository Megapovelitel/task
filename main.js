const links = document.querySelectorAll(".link-wrapper");
let prevParent = document.querySelector(".link-wrapper--active");

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    if (
      (e.target.tagName === "A" || e.target.tagName === "IMG") &&
      prevParent.id !== e.target.parentNode.id
    ) {
      const parentDiv = e.target.parentNode;

      parentDiv.children[0].src = `/images/icon/active/${parentDiv.id}.svg`;
      parentDiv.classList.add("link-wrapper--active");
      document.getElementById("header-title").textContent =
        parentDiv.children[1].textContent;

      prevParent.classList.remove("link-wrapper--active");
      prevParent.children[0].src = `/images/icon/default/${prevParent.id}.svg`;
      prevParent = parentDiv;
    }
  })
);

const btnOpen = document.getElementById("open-btn");

btnOpen.addEventListener("click", () => {
  const nav = document.querySelector(".sidenav");
  nav.classList.add("sidenav--active");

  const header = document.querySelector(".header-and-main");
  header.classList.add("header-and-main--active");
});

const btnClose = document.getElementById("close-btn");

btnClose.addEventListener("click", () => {
  const nav = document.querySelector(".sidenav");
  nav.classList.remove("sidenav--active");

  const header = document.querySelector(".header-and-main");
  header.classList.remove("header-and-main--active");
});

