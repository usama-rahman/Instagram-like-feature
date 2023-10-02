const myPost = document.querySelector("#post");
const heart = document.querySelector("i");

myPost.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%,-50%) scale(1)"

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)"
    },2000)
    setTimeout(function(){
        heart.style.opacity = "0"
    },1700)
})

