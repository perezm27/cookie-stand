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

  //Handles the calculation of Number of cookies purchased.
  numOfCookiesPurchased : function(){

    return this.randNumOfCustomers() * this.avgNumOfCookies;
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

// var pikeSales = document.getElementById('parent');
// var test = document.createElement('li');
// test.dataset = firstAndPike.combineArrs();
// pikeSales.appendChild(test);


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

    return this.randNumOfCustomers() * this.avgNumOfCookies;
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

    return this.randNumOfCustomers() * this.avgNumOfCookies;
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

    return this.randNumOfCustomers() * this.avgNumOfCookies;
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

    return this.randNumOfCustomers() * this.avgNumOfCookies;
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

// console.log('Number of Customers: ' + firstAndPike.randNumOfCustomers());
// console.log('Number of Cookies purchased: ', firstAndPike.numOfCookiesPurchased());
// console.log('Adds Element to arrray: ',firstAndPike.addsElToArr());
// console.log(firstAndPike.addsElToArr());
// console.log(firstAndPike.combineArrs());
