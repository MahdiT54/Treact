document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("click", () => {
      const button = item.querySelector(".accordion-header__outer");
      const chevron = button.querySelector(".fa-chevron-up");
      const accordionContent = button.nextElementSibling;
      const currentlyActive = document.querySelector(".accordion-header__outer.active");
  
      if (currentlyActive && currentlyActive !== button) {
        currentlyActive.classList.remove("active");
        currentlyActive.nextElementSibling.style.maxHeight = "0";
        currentlyActive.querySelector(".fa-chevron-up").classList.remove("up");
      }
  
      button.classList.toggle("active");
      chevron.classList.toggle("up");
  
      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = "1000px";
      } else {
        accordionContent.style.maxHeight = "0";
      }
    });
  });