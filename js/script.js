    // Index
    fetch('https://dummyjson.com/products/?limit=4&skip=5&select=images,discountPercentage,price,title')
    .then(res => res.json())
    .then(json => 
        {
            json.products.forEach(computadora => {
                console.log(computadora)
                
                document.querySelector('.cards-1').innerHTML +=
                ` 
                <div class="card text-center" >
                    <div class="card-body">
                        <h5 class="card-title">¡No te lo podes perder!</h5>
                        <img class="card-img-top" src="${computadora.images[0]}" alt="product">
                        <p class="price"><strong>${computadora.title}</strong></p>
                        <p class="price"><strong>$${computadora.price}</strong></p>
                        <p class="discount"><strong>Descuento del ${computadora.discountPercentage}%</strong></p>
                        <button class="button">Ver</button>
                    </div>
                </div>
                `
            }); {
                
            }
        }
    )

    fetch('https://dummyjson.com/products/?limit=4&skip=15&select=images,discountPercentage,price,title')
    .then(res => res.json())
    .then(json => 
        {
            json.products.forEach(computadora => {
                document.querySelector('.cards-2').innerHTML +=
                ` 
                <div class="card text-center" >
                    <div class="card-body">
                        <h5 class="card-title">¡No te lo podes perder!</h5>
                        <img class="card-img-top" src="${computadora.images[0]}" alt="product">
                        <p class="price"><strong>${computadora.title}</strong></p>
                        <p class="price"><strong>$${computadora.price}</strong></p>
                        <p class="discount"><strong>Descuento del ${computadora.discountPercentage}%</strong></p>
                        <button class="button">Ver</button>
                    </div>
                </div>
                `
            }); {
                
            }
        }
    )
    
