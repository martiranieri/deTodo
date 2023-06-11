function sideBarShow() {
    document.querySelector(".side-menu").style.display = "grid";
    document.querySelector("header").style.display = "none";
    document.querySelector("html").style.background = "#312E4B";
    document.querySelector("main").style.display = "none";
}

function sideBarClose() {
    document.querySelector(".side-menu").style.display = "none";
    document.querySelector("header").style.display = "grid";
    document.querySelector("html").style.background = "none";
    document.querySelector("main").style.display = "initial";
}

function headerAndFooter(){
    document.querySelector("header").innerHTML += `
        <div class="left-header">
        <a href="index.html" class="none">
            <img src="img/icon.png" width="40px">
        </a>
        <a href="index.html" class="none">
            <h2 class="main-title"><strong>De Todo</strong></h2>
        </a>
        
        </div>
        <div class="center">
            <a href="index.html"> <button class="hover-underline-animation">Home</button> </a>
            <a href="shop.html"><button class="hover-underline-animation">Shop</button></a>
            <a href="contact.html"> <button class="hover-underline-animation">Conctact</button> </a>
            <button href="#" class="hover-underline-animation">About us</button>
        </div>
        <div class="right">
            <span class="material-symbols-outlined">
                search
            </span>
            <span class="material-symbols-outlined">
                person
            </span>
            <span class="material-symbols-outlined">
                notifications
            </span>
        </div>
        <div class="menu-icon">
            <button class="material-symbols-outlined" onclick="sideBarShow()">
                menu
            </button>
        </div>
    `

    document.querySelector("footer").innerHTML += `
    <div class="footer">
        <div class="text-center p-3">
        © 2023 Copyright:
        <a class="text-light" href="https://github.com/martiranieri/deTodo">github.com/martiranieri</a>
        </div>
    </div>
    `
}