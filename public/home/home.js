document.querySelectorAll("nav a").forEach((element)=>{
    element.addEventListener("mouseover", ()=>{
        document.querySelector(".imgContainer").classList.remove("animationImg");
        setTimeout(()=> document.querySelector(".imgContainer").classList.add("animationImg"), 10);
    })
})