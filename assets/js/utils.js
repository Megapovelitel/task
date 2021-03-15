const openSideNav = () => {
  
  const nav = document.querySelector(".sidenav");
  nav.classList.add("sidenav_active");

  const header = document.querySelector(".header-and-main");
  header.classList.add("header-and-main_active");
}

const closeSideNav = () => {
  
  const nav = document.querySelector(".sidenav");
  nav.classList.remove("sidenav_active");

  const header = document.querySelector(".header-and-main");
  header.classList.remove("header-and-main_active");
}


export default  {
  openSideNav,
  closeSideNav
}