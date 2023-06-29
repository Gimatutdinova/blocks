// Видимость блока с заголовком (Кнопка 1)

$(".btn-warning").on("click", function() {
    $(".blocks__top").toggle(500);
});	

// Изменение положения блоков (Кнопка 2)

$(".btn-success").on("click", function() {
    $(".center").toggleClass("_order");
});	

// Модальное окно

window.onload = function() {
    $(".modalWindow").addClass("_visible");
}

$(".modalWindow__close").on("click", function() {
    $(".modalWindow").removeClass("_visible");
});	