const iconbox = document.querySelector('.iconbox');
const menulist = document.querySelector('.menulist');

iconbox.addEventListener('click', function () {
    menulist.classList.toggle('show');
    document.body.classList.toggle("overflowhidden");
});
const accordionbtn = document.querySelectorAll(".accordionbtn")
accordionbtn.forEach((e) => {
    e.addEventListener("click", () => {
        const activeaccodion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeaccodion && activeaccodion.classList.remove("active")

    })

});

