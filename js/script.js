fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => 
        {
            for (let i = 0; i <= 3; i++) {
                console.log(json.products[i]);
                
            }
        }
    )