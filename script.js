fetch('https://dummyjson.com/carts/3')
.then(res => res.json())
.then(json => 
    {
        console.log(json)
        json.products.forEach(producto => {
            //document.querySelector('#productos').innerHTML += '<div>' + producto.brand + ' <img src=" ' + producto.images[0] + ' "> </div>'
            document.querySelector('#productos').innerHTML += `<div> ${producto.brand} <img src="${producto.images[0]}"> </div>`
        });
        
    }
    )

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