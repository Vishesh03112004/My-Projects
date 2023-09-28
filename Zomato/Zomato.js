document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector("#show-signup").addEventListener("click",function(){
    document.querySelector(".popup1").classList.add("active");
});

document.querySelector(".popup1 .close-btn1").addEventListener("click",function(){
    document.querySelector(".popup1").classList.remove("active");
});

let container = document.getElementById("container");

function openContainer(){
    container.classList.add("open-container");
}

function closeContainer(){
    container.classList.remove("open-container");
}

let cuiscontainer = document.getElementById("cuiscontainer");

function opencuiscontainer(){
    cuiscontainer.classList.add("open-cuiscontainer")
}

function closecuiscontainer(){
    cuiscontainer.classList.remove("open-cuiscontainer")
}

const carouse1 = document.querySelector(".carouse1")
firstImg = carouse1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImg.clientWidth + 30;

arrowIcons.forEach(icon => {
    icon.addEventListener("click" , () => {
        carouse1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

let detect = document.getElementById("detect");

function openDetect(){
    detect.classList.add("open-detect");
}

function closeDetect(){
    detect.classList.remove("open-detect");
}

let eng = document.getElementById("eng");

function openEng(){
    eng.classList.add("open-eng");
}

function closeEng(){
    eng.classList.remove("open-eng");
}

let allcountry = document.getElementById("allcountry");

function openallcountry(){
    allcountry.classList.add("open-allcountry");
}

function closeallcountry(){
    allcountry.classList.remove("open-allcountry");
}