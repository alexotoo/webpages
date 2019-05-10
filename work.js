let isActive = false;

$(".menu").on("click", () => {
  if (isActive) {
    $(this).removeClass("active");
    $("body").removeClass("menu-open");
  } else {
    $(this).addClass("active");
    $("body").addClass("menu-open");
  }
  isActive = !isActive;
});
