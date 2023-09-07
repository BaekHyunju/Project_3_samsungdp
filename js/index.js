var mbNavList = document.querySelector(".mb-nav-list");
var mbBt = document.querySelector(".mb-bt");
mbBt.addEventListener("click", function () {
    mbNavList.classList.toggle("active");
    mbBt.classList.toggle("active");
})

