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

function header(){
    document.querySelector("header").innerHTML += `
        <div class="left-header">
            <img src="img/icon.png" width="40px">
            <h2 class="main-title"><strong>De Todo</strong></h2>
        </div>
        <div class="center">
            <button href="#" class="hover-underline-animation">Home</button>
            <button href="#" class="hover-underline-animation">Shop</button>
            <button href="#" class="hover-underline-animation">Conctact</button>
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
}