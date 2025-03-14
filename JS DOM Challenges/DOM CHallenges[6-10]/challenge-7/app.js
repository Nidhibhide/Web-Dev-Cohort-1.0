const accordionbutton = document.querySelectorAll(".accordion-button");

accordionbutton.forEach((val) => {
  val.addEventListener("click", () => {
    const accordionItem = val.parentElement;

    accordionItem.classList.toggle("active");

    console.log(accordionItem);
  });
});
