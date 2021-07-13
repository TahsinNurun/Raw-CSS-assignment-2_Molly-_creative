
// Code for loading more blog text


document.getElementsByClassName("read_more_btn")[0].addEventListener("click", function(){
    var readMoreBtn = document.querySelector(".read_more_btn");
    readMoreBtn.style.display = "none";
    var showMoreText = document.querySelector(".more_blog_text");
    showMoreText.style.display = "block";
})


// code for loading more blog card
const moreBlogCard = document.getElementById("load_more_blog");
moreBlogCard.addEventListener("click", function(){
    const clickedButton = document.getElementById("load_more_blog");
    clickedButton.style.display = "none";
    const moreBlogArea = document.getElementById("more_blog");
    moreBlogArea.style.display = "block";
})

// code for loading more portfolio images

function addMoreImg(){
    var newImg = document.createElement("img");
    var imgContainer = document.querySelector("#new_img");
    newImg.src = "Images/portfolioIMG4.png";
    newImg.style.width ="30%";
    newImg.style.height = "30%";
    newImg.classList.add("port_img");

    var newImg1 = document.createElement("img");
    newImg1.src = "Images/portfolioIMG5.png";
    newImg1.style.width ="30%";
    newImg1.style.height = "30%";
    newImg1.classList.add("port_img");

    var newImg2 = document.createElement("img");
    newImg2.src = "Images/portfolioIMG6.png";
    newImg2.style.width ="30%";
    newImg2.style.height = "30%";
    newImg2.classList.add("port_img");

    imgContainer.append(newImg,newImg1,newImg2);
}

function loadThreeImage(x)
{
    var div = document.getElementById("new_img");
    div.innerHTML = ""; // clear images

    for (counter=1;counter<=x;counter++) {
        var imagem=document.createElement("img");
        imagem.src="Images/portfolioIMG"+counter+".png";
        imagem.style.width ="30%";
        imagem.style.height = "30%";
        imagem.classList.add("port_img");
        div.appendChild(imagem);
    }
}

function loadThreeGraphicImage(x)
{
    var div = document.getElementById("new_img");
    div.innerHTML = ""; // clear images

    for (counter=1;counter<=x;counter++) {
        var imagem=document.createElement("img");
        imagem.src="Images/graphic"+counter+".png";
        imagem.style.width ="30%";
        imagem.style.height = "30%";
        imagem.classList.add("port_img");
        div.appendChild(imagem);
    }
}


// TopBanner slider change code

const slides = document.querySelectorAll(".slides");
const nextBtn = document.querySelectorAll(".nextBtn");
const prevBtn = document.querySelectorAll(".prevBtn");

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})

let counter = 0;
nextBtn.addEventListener("click",function(){
    counter++;
    carousel();
})
prevBtn.addEventListener("click",function(){
    counter--;
    carousel();
})

function carousel(){
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

