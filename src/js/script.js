// Отримуємо посилання на кнопку
var scrollToTopBtn = document.getElementById("up");

// Додаємо обробник події для кнопки
scrollToTopBtn.addEventListener("click", function() {
  // Прокручуємо сторінку до верхньої частини з плавною анімацією
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Показуємо або приховуємо кнопку в залежності від положення сторінки
window.addEventListener("scroll", function() {
  // Відстань, на яку прокручена сторінка
  var scrollDistance = window.pageYOffset;

  // Встановлюємо поріг прокрутки, після якого кнопка буде показана
  var scrollThreshold = 900;

  // Перевіряємо, чи треба показати або приховати кнопку
  if (scrollDistance > scrollThreshold) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
