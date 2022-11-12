document.querySelector(".slider").addEventListener("click", function (e) {
    if (e.target.classList.contains("arrow")) {
        const activeItem = document.querySelector(".active")
        let activeId = +(activeItem.id) + 1
        if (activeId === 3) {
            activeId = 1
        }
        activeItem.classList.remove("active")
        document.getElementById(activeId).classList.add("active")
    }

    console.log(e.target.classList.contains("arrow"))

})


const headerMenu1 = document.getElementById("a")
const headerMenu2 = document.getElementById("b")
const headerMenu3 = document.getElementById("c")


headerMenu1.addEventListener("click", event => {
    window.scrollTo({
        top: 1100,
        behavior: "smooth"
    });
});

headerMenu2.addEventListener("click", event => {
    window.scrollTo({
        top: 2200,
        behavior: "smooth"
    });
});
headerMenu3.addEventListener("click", event => {
    window.scrollTo({
        top: 3250,
        behavior: "smooth"
    });
});