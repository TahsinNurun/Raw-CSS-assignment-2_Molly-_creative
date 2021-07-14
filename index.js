// responsive hamburger menu code
var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".x_Icon");
var menuIcon = document.querySelector(".menu_Icon");

ham.addEventListener("click",toggleMenu);

menu.classList.contains("showResMenu");

function toggleMenu(){
   
    if(menu.classList.contains("showResMenu")){
        menu.classList.remove("showResMenu");
        xIcon.style.display = "none";
        menuIcon.style.display="block";
    }else{
        menu.classList.add("showResMenu");
        xIcon.style.display = "block";
        menuIcon.style.display="none";
    }
}

var menuLinks = document.querySelectorAll(".nav_item_res");
console.log(menuLinks);
menuLinks.forEach(function(menuLink){
    menuLink.addEventListener("click", toggleMenu)
})


// Code for loading more blog text


function loadMoreText() {
    
    var blogArray = document.querySelectorAll(".read_more_btn");

    blogArray.forEach((item, index) => {
        item.addEventListener('click', () => {
            // console.log(index)
            var readMoreBtn = document.getElementById("id_read_more_btn_" + `${index}`);
            readMoreBtn.style.display = "none";
            var dots = document.getElementsByClassName("three_dots")[`${index}`];
            dots.style.display = "none";
            var showMoreText = document.getElementById("more_blog_text_" + `${index}`);
            showMoreText.style.display = "block";

        })
    });


    // var readMoreBtn = document.getElementById("id_read_more_btn_"+1);
    // readMoreBtn.style.display = "none";
    // var dots = document.getElementsByClassName("three_dots")[1];
    // dots.style.display = "none";
    // var showMoreText = document.getElementById("more_blog_text_1");
    // showMoreText.style.display = "block";
}

// code for loading more blog card
const moreBlogCard = document.getElementById("load_more_blog");
moreBlogCard.addEventListener("click", function () {
    const clickedButton = document.getElementById("load_more_blog");
    clickedButton.style.display = "none";
    const moreBlogArea = document.getElementById("more_blog");
    moreBlogArea.style.display = "block";
})

// code for loading more portfolio images

function addMoreImg() {
    var newImg = document.createElement("img");
    var imgContainer = document.querySelector("#new_img");
    newImg.src = "Images/portfolioIMG4.png";
    newImg.style.width = "30%";
    newImg.style.height = "30%";
    newImg.classList.add("port_img");

    var newImg1 = document.createElement("img");
    newImg1.src = "Images/portfolioIMG5.png";
    newImg1.style.width = "30%";
    newImg1.style.height = "30%";
    newImg1.classList.add("port_img");

    var newImg2 = document.createElement("img");
    newImg2.src = "Images/portfolioIMG6.png";
    newImg2.style.width = "30%";
    newImg2.style.height = "30%";
    newImg2.classList.add("port_img");

    imgContainer.append(newImg, newImg1, newImg2);
}

function loadAllImage(x) {
    var div = document.getElementById("new_img");
    div.innerHTML = ""; // clear images

    for (counter = 1; counter <= x; counter++) {
        var image = document.createElement("img");
        image.src = "Images/portfolioIMG" + counter + ".png";
        image.style.width = "30%";
        image.style.height = "30%";
        image.classList.add("port_img");
        div.appendChild(image);
    }
}

function loadThreeImage(x) {
    var div = document.getElementById("new_img");
    div.innerHTML = ""; // clear images

    for (counter = x-2 ; counter <= x; counter++) {
        var image = document.createElement("img");
        image.src = "Images/portfolioIMG" + counter + ".png";
        image.style.width = "30%";
        image.style.height = "30%";
        image.classList.add("port_img");
        div.appendChild(image);
    }
}



// TopBanner slider change code

function showSlider1(){
 var  shownDiv = document.querySelector("#slider1");
 shownDiv.style.display = "block";
 var removeDiv1 = document.querySelector("#slider0");
 removeDiv1.style.display = "none";
 var removeDiv2 = document.querySelector("#slider2");
 removeDiv2.style.display = "none";
}

function showSlider2(){
    var  shownDiv = document.querySelector("#slider2");
    shownDiv.style.display = "block";
    var removeDiv1 = document.querySelector("#slider0");
    removeDiv1.style.display = "none";
    var removeDiv2 = document.querySelector("#slider1");
    removeDiv2.style.display = "none";
}

function showSlider0(){
    var  shownDiv = document.querySelector("#slider0");
    shownDiv.style.display = "block";
    var removeDiv1 = document.querySelector("#slider1");
    removeDiv1.style.display = "none";
    var removeDiv2 = document.querySelector("#slider2");
    removeDiv2.style.display = "none";
}