"use strict";angular.module("musicApp",["ngRoute","musicApp.version","musicApp.startPage"]).config(["$locationProvider","$routeProvider",function(r,e){r.hashPrefix(""),e.otherwise({redirectTo:"/start"})}]);