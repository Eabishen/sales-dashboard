const root = document.documentElement;

// Dropdown Navigation
const dropdowncheck = document.querySelectorAll(".dropdown-group");
const dropbtn = document.querySelectorAll(".dropdown-group button");
const mainList = document.querySelectorAll(".mainlists");

// Top navigation
const mainNavigation = document.querySelectorAll(".navigation-dropdown");
const navbarlist = document.querySelectorAll(".dropdown-grouplist");

// Toggling sidebar
const mobNav = document.querySelector(".mobileclose");
const hamburgerButton = document.querySelector(".hambutton");
const sideBar = document.querySelector(".sidebar");

mobNav.onclick = function () {
  console.log("clicked");
  sideBar.classList.add("hide");
};

function sideBarmob() {
  if (window.innerWidth < 900) {
    sideBar.classList.add("hide");
  } else {
    sideBar.classList.remove("hide");
  }
}

window.addEventListener("resize", sideBarmob);
window.addEventListener("DOMContentLoaded", sideBarmob);

dropdowncheck.forEach((singlecheck, i) => {
  const etx = mainList[i].scrollHeight;
  root.style.setProperty("--my-size", `${etx}px`);

  dropbtn[i].addEventListener("blur", (e) => {
    if (e.target === mainList[i]) {
      return;
    } else {
      mainList[i].classList.add("active");
    }

    mainList[i].style.height = `${mainList[i].scrollHeight}px`;
    if (!mainList[i].classList.contains("active")) {
      mainList[i].style.height = `0px`;
    }
  });

  singlecheck.addEventListener("click", (e) => {
    if (e.target === mainList[i]) {
      return;
    } else {
      mainList[i].classList.toggle("active");
    }
    mainList[i].style.height = `${mainList[i].scrollHeight}px`;
    if (!mainList[i].classList.contains("active")) {
      mainList[i].style.height = `0px`;
    }
  });
});

// Displaying dropdown on clicking
mainNavigation.forEach((singleNav, i) => {
  singleNav.addEventListener("click", function () {
    if (navbarlist[i].classList.contains("show")) {
      navbarlist[i].classList.remove("show");
    } else {
      navbarlist.forEach((s) => s.classList.remove("show"));
      navbarlist[i].classList.toggle("show");
    }

    function isElementOverflowingViewport(element) {
      const boundingClientRect = element.getBoundingClientRect();
      console.log(boundingClientRect.right, window.innerWidth);
      return (
        boundingClientRect.top < 0 ||
        boundingClientRect.left < 0 ||
        boundingClientRect.right > window.innerWidth ||
        boundingClientRect.bottom > window.innerHeight
      );
    }

    const isOverflowing = isElementOverflowingViewport(navbarlist[i]);
    console.log(isOverflowing);
  });
});

document.addEventListener("click", (e) => {
  // Check if the clicked element is not within the dropdown or its parent
  if (
    !e.target.closest(".navigation-dropdown") &&
    !e.target.closest(".dropdown-grouplist")
  ) {
    // Close all dropdowns
    navbarlist.forEach((s) => s.classList.remove("show"));
  }
});

hamburgerButton.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
});
