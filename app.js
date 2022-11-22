let curretnPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");



allPath.forEach(currentPath => {
    currentPath.addEventListener("mouseover",_=>{
        allPath.forEach(c=>c.classList.remove("active"));
        currentPath.classList.add("active");
        curretnPlace.innerText = currentPath.getAttribute("name");
    })
})

document.querySelector("[name='Yangon']").classList.add("active");
curretnPlace.innerText = "Yangon";