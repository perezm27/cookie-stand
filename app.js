'use strict';

// Create 5 object literals which represent 5 cookie stores & calculate the number of cookies purchased at each location in a seperate array.

// random number generator source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Parts of code were completed in collaboration with Jack Kinne, Matt Stuhring, & Jackie

var hoursOfOperationArr= ['6AM: ', '7AM: ','8AM: ','9AM: ', '10AM: ','11AM: ','12PM: ', '1PM: ','2PM: ','3PM: ', '4PM: ','5PM: ','6PM: ', '7PM: ','8PM: '];

// Holds all of our Stores' data
var allStoresArr = [];

//First store Location
var StoreLocation = function(name, minNumOfCustomers,maxNumOfCustomers,avgNumOfCookies) {
  this.name = name;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.avgNumOfCookies = avgNumOfCookies;
  this.numOfCookiesPurchasedArr = [];

  // Adds new stores into allStorArr
  allStoresArr.push(this);

  this.randNumOfCustomers();
  this.numOfCookiesPurchased();
  this.addsElToArr();

};

//Generates Random Number of Customers
StoreLocation.prototype.randNumOfCustomers = function(){
  var min = Math.ceil(this.minNumOfCustomers);
  var max = Math.floor(this.maxNumOfCustomers);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Total number of cookies per hour
StoreLocation.prototype.numOfCookiesPurchased = function(){

  return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
};
//loops through number of cookies & stores them into an Array
StoreLocation.prototype.addsElToArr = function(){
  for (var i = 0; i < hoursOfOperationArr.length; i++ ){

    this.numOfCookiesPurchasedArr.push(this.numOfCookiesPurchased());

  }
  return this.numOfCookiesPurchasedArr;

};
// DOM Manipulation & table row/data creation
StoreLocation.prototype.addsElToDom = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.numOfCookiesPurchasedArr.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.numOfCookiesPurchasedArr[i];
    trEl.appendChild(tdEl);
  }
  var storeContainer = document.getElementById('store-container');
  storeContainer.appendChild(trEl);

};

// First Store Location
var firstAndPike = new StoreLocation ('First & Pike', 23, 65, 6.3);
firstAndPike.addsElToDom();

//Second Store Location
var seaTac = new StoreLocation ('SeaTac Airport', 3, 24, 1.2);
seaTac.addsElToDom();

//Third store location
var seaCenter = new StoreLocation ('Seattle Center', 11, 38, 3.7);
seaCenter.addsElToDom();

//Fourth Store Location
var capHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
capHill.addsElToDom();

//Fifth Store Location
var alki = new StoreLocation('Alki', 2, 16, 4.6);
alki.addsElToDom();
