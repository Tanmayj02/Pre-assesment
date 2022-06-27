var input = ['1 imported bottle of perfume at 270.99', '1 bottle of perfume at 180.99', '1 packet of headache pills at 19.75', '1 box of imported chocolates at 210.25'];
//let input: string[] = ['1 book at 124.99', '1 music CD at 149.99', '1 chocolate bar at 40.85'];
//let input: string[] = ['1 imported box of chocolates at 100.00','1 imported bottle of perfume at 470.50'];
var items = input.length;
var checkImported = /imported/;
var importTaxValue = 0.05;
var basicTaxValue = 0.1;
var totalTax = 0;
var TotalBill = 0;
//console.log(items);
function findBill(quantity, product, price) {
    var result = '';
    var importTax = 0;
    var basicTax = 0;
    // importTax calculator
    if (checkImported.test(product)) {
        importTax += price * importTaxValue;
        importTax = parseFloat((Math.ceil(importTax * 20) / 20).toFixed(2));
        totalTax += importTax * quantity;
    }
    // basicTax calculator
    if (!(product.match(/food/) || product.match(/chocolate/) || product.match(/medicines/) || product.match(/book/) || product.match(/headache/))) {
        basicTax = price * basicTaxValue;
        basicTax = parseFloat((Math.ceil(basicTax * 20) / 20).toFixed(2));
        totalTax += basicTax * quantity;
    }
    price = price + basicTax + importTax;
    price = price * quantity;
    TotalBill += price;
    result = result.concat(quantity.toString(), ' ', product, ':', ' ', price.toFixed(2).toString());
    return result;
}
function findTax() {
    console.log('Tax: ' + totalTax.toFixed(2));
    console.log('TotalBill: ' + TotalBill.toFixed(2));
}
for (var i = 0; i < items; i++) {
    //let str: string = '123';
    //let num: number = parseFloat(str);
    var currQuantity = '';
    var product = '';
    var currPrice = '';
    // for finding the quantity of the product purchased
    var j = 0;
    while (input[i][j] != ' ') {
        currQuantity += input[i][j];
        j++;
    }
    // i = i+1 to skip ' '
    j++;
    // for finding the name of the product purchased
    while (!(input[i][j] == ' ' && input[i][j + 1] == 'a' && input[i][j + 2] == 't')) {
        product += input[i][j];
        j++;
    }
    // to skip ' at '
    j = j + 4;
    // for finding the Price of the product purchased
    while (j < input[i].length) {
        currPrice += input[i][j];
        j++;
    }
    var Quantity = parseFloat(currQuantity);
    var Price = parseFloat(currPrice);
    console.log(findBill(Quantity, product, Price));
}
findTax();
