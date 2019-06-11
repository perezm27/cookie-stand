'use strict';

// Create 5 object literals which represent 5 cookie stores & calculate the number of cookies purchased at each location in a seperate array.

// random number generator source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Parts of code were completed in collaboration with Jack Kinne & Matt Stuhring

var hoursOfOperationArr= ['6AM: ', '7AM: ','8AM: ','9AM: ', '10AM: ','11AM: ','12PM: ', '1PM: ','2PM: ','3PM: ', '4PM: ','5PM: ','6PM: ', '7PM: ','8PM: '];

//First store Location
var firstAndPike = {
  minNumOfCustomers: 23,
  maxNumOfCustomers: 65,
  avgNumOfCookies: 6.3,
  numOfCookiesPurchasedArr: [],

  //Generates Randum Number of Customers
  randNumOfCustomers : function (){
    var min = Math.ceil(this.minNumOfCustomers);
    var max = Math.floor(this.maxNumOfCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //Handles the calculation of Number of cookies purchased per hour.
  numOfCookiesPurchased : function(){

    return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
  },
  //loops through number of cookies & stores them into an Array
  addsElToArr : function(){
    for (var i = 0; i < hoursOfOperationArr.length; i++ ){

      this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

    }
    return this.numOfCookiesPurchasedArr;

  },
  //Combines values inside array
  combineArrs : function (){
    for (var j = 0; j < hoursOfOperationArr.length; j++){
      var message = hoursOfOperationArr[j] + ': ' + this.addsElToArr()[j] + ' cookies';

      console.log(message);

    }
  }
};
firstAndPike.combineArrs();


//DOM Manipulation to add data to website
for (var g = 0; g < hoursOfOperationArr.length; g++){
  var pikeSales = document.getElementById('store-container');
  var test = document.createElement('li');
  test.textContent = hoursOfOperationArr[g] + firstAndPike.numOfCookiesPurchasedArr[g];
  pikeSales.appendChild(test);

}



//Second store Location
var seaTacAirport = {
  minNumOfCustomers: 3,
  maxNumOfCustomers: 24,
  avgNumOfCookies: 1.2,
  numOfCookiesPurchasedArr: [],

  //Generates Randum Number of Customers
  randNumOfCustomers : function (){
    var min = Math.ceil(this.minNumOfCustomers);
    var max = Math.floor(this.maxNumOfCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //Handles the calculation of Number of cookies purchased.
  numOfCookiesPurchased : function(){

    return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
  },
  //loops through number of cookies & stores them into an Array
  addsElToArr : function(){
    for (var i = 0; i < hoursOfOperationArr.length; i++ ){

      this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

    }
    return this.numOfCookiesPurchasedArr;

  },
  //Combines values inside array
  combineArrs : function (){
    for (var j = 0; j < hoursOfOperationArr.length; j++){
      var message = hoursOfOperationArr[j] + ': ' + this.addsElToArr()[j] + ' cookies';

      console.log(message);

    }
  }
};
seaTacAirport.combineArrs();

//DOM Manipulation to add data to website
for (var h = 0; h < hoursOfOperationArr.length; h++){
  var seaTacSales = document.getElementById('store-container2');
  var testc = document.createElement('li');
  testc.textContent = hoursOfOperationArr[h] + seaTacAirport.numOfCookiesPurchasedArr[h];
  seaTacSales.appendChild(testc);

}


//Third store Location
var seattleCenter = {
  minNumOfCustomers: 11,
  maxNumOfCustomers: 38,
  avgNumOfCookies: 3.7,
  numOfCookiesPurchasedArr: [],

  //Generates Randum Number of Customers
  randNumOfCustomers : function (){
    var min = Math.ceil(this.minNumOfCustomers);
    var max = Math.floor(this.maxNumOfCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //Handles the calculation of Number of cookies purchased.
  numOfCookiesPurchased : function(){

    return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
  },
  //loops through number of cookies & stores them into an Array
  addsElToArr : function(){
    for (var i = 0; i < hoursOfOperationArr.length; i++ ){

      this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

    }
    return this.numOfCookiesPurchasedArr;

  },
  //Combines values inside array
  combineArrs : function (){
    for (var j = 0; j < hoursOfOperationArr.length; j++){
      var message = hoursOfOperationArr[j] + ': ' + this.addsElToArr()[j] + ' cookies';

      console.log(message);

    }
  }
};
seattleCenter.combineArrs();


//DOM Manipulation to add data to website
for (var k = 0; k < hoursOfOperationArr.length; k++){
  var centerSales = document.getElementById('store-container3');
  var testd = document.createElement('li');
  testd.textContent = hoursOfOperationArr[k] + seattleCenter.numOfCookiesPurchasedArr[k];
  centerSales.appendChild(testd);

}


//Fourth store Location
var capitolHill = {
  minNumOfCustomers: 20,
  maxNumOfCustomers: 38,
  avgNumOfCookies: 2.3,
  numOfCookiesPurchasedArr: [],

  //Generates Randum Number of Customers
  randNumOfCustomers : function (){
    var min = Math.ceil(this.minNumOfCustomers);
    var max = Math.floor(this.maxNumOfCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //Handles the calculation of Number of cookies purchased.
  numOfCookiesPurchased : function(){

    return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
  },
  //loops through number of cookies & stores them into an Array
  addsElToArr : function(){
    for (var i = 0; i < hoursOfOperationArr.length; i++ ){

      this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

    }
    return this.numOfCookiesPurchasedArr;

  },
  //Combines values inside array
  combineArrs : function (){
    for (var j = 0; j < hoursOfOperationArr.length; j++){
      var message = hoursOfOperationArr[j] + ': ' + this.addsElToArr()[j] + ' cookies';

      console.log(message);

    }
  }
};
capitolHill.combineArrs();


//DOM Manipulation to add data to website
for (var l = 0; l < hoursOfOperationArr.length; l++){
  var capHillSales = document.getElementById('store-container4');
  var teste = document.createElement('li');
  teste.textContent = hoursOfOperationArr[l] + capitolHill.numOfCookiesPurchasedArr[l];
  capHillSales.appendChild(teste);

}

//Fifth store Location
var alki = {
  minNumOfCustomers: 2,
  maxNumOfCustomers: 16,
  avgNumOfCookies: 4.6,
  numOfCookiesPurchasedArr: [],

  //Generates Randum Number of Customers
  randNumOfCustomers : function (){
    var min = Math.ceil(this.minNumOfCustomers);
    var max = Math.floor(this.maxNumOfCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  //Handles the calculation of Number of cookies purchased.
  numOfCookiesPurchased : function(){

    return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
  },
  //loops through number of cookies & stores them into an Array
  addsElToArr : function(){
    for (var i = 0; i < hoursOfOperationArr.length; i++ ){

      this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

    }
    return this.numOfCookiesPurchasedArr;

  },
  //Combines values inside array
  combineArrs : function (){
    for (var j = 0; j < hoursOfOperationArr.length; j++){
      var message = hoursOfOperationArr[j] + ': ' + this.addsElToArr()[j] + ' cookies';

      console.log(message);

    }
  }
};
alki.combineArrs();

//DOM Manipulation to add data to website
for (var n = 0; n < hoursOfOperationArr.length; n++){
  var alkiSales = document.getElementById('store-container5');
  var testa = document.createElement('li');
  testa.textContent = hoursOfOperationArr[n] + alki.numOfCookiesPurchasedArr[n];
  alkiSales.appendChild(testa);

}


// console.log('Number of Customers: ' + firstAndPike.randNumOfCustomers());
// console.log('Number of Cookies purchased: ', firstAndPike.numOfCookiesPurchased());
// console.log('Adds Element to arrray: ',firstAndPike.addsElToArr());
// console.log(firstAndPike.addsElToArr());
// console.log(firstAndPike.combineArrs());
