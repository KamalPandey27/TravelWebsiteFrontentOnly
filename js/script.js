// navbar

let navbarmenu = document.querySelector('.menu')
let navbarclose = document.querySelector('.closemenu')
let navlist = document.getElementById("navlist")

navbarmenu.addEventListener('click', () => {
    navlist.style.display = "flex";
    navbarclose.style.display = "block";
})

navbarclose.addEventListener('click', () => {
    navlist.style.display = "none";
    navbarclose.style.display = "none";
})


// Add a scroll event listener
let navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
    navbar.style.backgroundColor = "#041126";
});


// add image on home page
let home = document.getElementById('section_1')



// setInterval(() => {

//     let imgArr = [
//         "bg1.png",
//         "bg2.png",
//         "bg3.png",
//         "b4.png",
//         "bg5.png",
//         "bg6.png"
//     ]

//     let randomImage = Math.floor(Math.random() * 6)
//     home.style.backgroundImage = `url(/img/${imgArr[randomImage]})`;
// }, 1500);



