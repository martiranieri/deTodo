    // Promociones
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(json => {
    json.forEach(categoria => {
        document.querySelector(".categorias").innerHTML += `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              ${categoria}
            </label>
        </div>
        `
    });
    document.querySelector(".categorias").innerHTML += `
    <button type="submit" class="button"> Aplicar </button>
    `
    }
);
