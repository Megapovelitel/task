const links = document.querySelectorAll(".link-wrapper");
let prevParent = document.querySelector(".link-wrapper_active");

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    if (
      (e.target.tagName === "A" || e.target.tagName === "IMG") &&
      prevParent.id !== e.target.parentNode.id
    ) {
      const parentDiv = e.target.parentNode;

      parentDiv.children[0].src = `/assets/images/icon/active/${parentDiv.id.substring(5,)}.svg`;
      parentDiv.classList.add("link-wrapper_active");
      document.querySelector(".header__title").textContent =
        parentDiv.children[1].textContent;

      prevParent.classList.remove("link-wrapper_active");
      prevParent.children[0].src = `/assets/images/icon/default/${prevParent.id.substring(5,)}.svg`;
      prevParent = parentDiv;
    }
  })
);