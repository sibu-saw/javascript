function addProduct(name, description, price, sku) {
    // $('td')
    //document.getElementsByName('td')
    //document.getElementById('abcd')
    //document.getElementsByClassName('w-75')

    let productName = $('<td>').append(name);
    let productDescription = $('<td>').append(description);
    let productPrice = $('<td>').append(price);
    let productSku = $('<td>').append(sku);

    $('#productItems')
    .append('<tr>')
    .append(productName)
    .append(productDescription)
    .append(productPrice)
    .append(productSku);
}

$(function() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let uri = 'http://localhost:8080/api/product';
    fetch(uri, {
        method: 'GET',
        headers:headers
    })
    .then(res => res.json())
    .then(productArray => {
        productArray.forEach(product => {
            addProduct(product.name, product.description, product.price, product.skuCode);
        });
    }).catch();
});