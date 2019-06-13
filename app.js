'use strict';

/*
A simple web application that showcases the application of a constructor & Object-Oriented Programing.

random number generator source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Collaborative Acknowledgement: Jack Kinne, Matt Stuhring, & Jackie
*/

var hoursOfOperationArr= ['6:00am ', '7:00am ','8:00am ','9:00am ', '10:00am ','11:00am ','12:00pm ', '1:00pm ','2:00pm ','3:00pm ', '4:00pm ','5:00pm ','6:00pm ', '7:00pm ','8:00pm ', 'Daily Location Total'];

// Holds all of our Stores' data
var allStoresArr = [];

//Our Constructor
var StoreLocation = function(name, minNumOfCustomers,maxNumOfCustomers,avgNumOfCookies) {
  this.name = name;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.avgNumOfCookies = avgNumOfCookies;
  this.numOfCookiesPurchasedArr = [];
  this.totalNumOfCookiesSold =[];

  // Adds newly created stores into allStorArr
  allStoresArr.push(this);

  //ensures each function operation occurs each time a new object is created
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

//Calculates total number of cookies per hour
StoreLocation.prototype.numOfCookiesPurchased = function(){

  return Math.ceil(this.randNumOfCustomers() * this.avgNumOfCookies);
};

//Places our number of cookies purchased per hour into an Array & calculates daily location total
StoreLocation.prototype.addsElToArr = function(){
  var total = 0;
  for (var i = 0; i < hoursOfOperationArr.length - 1; i++ ){

    var numOfCookies = this.numOfCookiesPurchased();

    this.numOfCookiesPurchasedArr.push(numOfCookies);
    total += this.numOfCookiesPurchasedArr[i];
  }
  this.total = total;
  return this.numOfCookiesPurchasedArr;

};


//Gets access to form via id
var salmonStore = document.getElementById('new-stores');

//Handles accepting user input & stores it into allStoresArr
var handleFormSubmit = function(submitEvent){
  // prevents default POST/GET request method of form
  submitEvent.preventDefault();

  var locationName = submitEvent.target.locationName.value;
  var minCustomer = submitEvent.target.minCustomer.value;
  var maxCustomer = submitEvent.target.maxCustomer.value;
  var avgCookies = submitEvent.target.avgCookies.value;

  new StoreLocation (locationName,minCustomer,maxCustomer,avgCookies);

};

salmonStore.addEventListener('submit', handleFormSubmit);


// //Adds newly created stores to table
// StoreLocation.prototype.addStoreForm = function (){
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.name;
//   trEl.appendChild(tdEl);

//   for (var i = 0; i < allStoresArr.length; i++ ){
//     trEl = document.createElement('tr');
//     tdEl = document.createElement('td');
//     tdEl.textContent = target.locationName.value;
//     trEl.appendChild(tdEl);

//   }
//   var storeContainer = document.getElementById('store-container');
//   storeContainer.appendChild(trEl);

// };


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
  //creates our totals table elements & writes them into the DOM
  var totalEl = document.createElement('td');
  totalEl.textContent = this.total;
  trEl.appendChild(totalEl);

  var storeContainer = document.getElementById('store-container');
  storeContainer.appendChild(trEl);

};

//Table header
StoreLocation.prototype.tableHeaderEl = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0; i < hoursOfOperationArr.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOperationArr[i];
    trEl.appendChild(thEl);
  }
  var storeContainer = document.getElementById('store-container');
  storeContainer.appendChild(trEl);
};

//table footer
StoreLocation.prototype.tableFooterEl = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals ';
  trEl.appendChild(tdEl);
  for (var i = 0; i < 16; i++){
    tdEl = document.createElement('th');
    trEl.appendChild(tdEl);
  }
  var storeContainer = document.getElementById('store-container');
  storeContainer.appendChild(trEl);
};



// First Store Location
var firstAndPike = new StoreLocation ('First & Pike', 23, 65, 6.3);
firstAndPike.tableHeaderEl();
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
alki.tableFooterEl();
