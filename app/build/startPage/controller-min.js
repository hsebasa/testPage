"use strict";angular.module("musicApp.startPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["globalData","$mdDialog","$http","$scope",function(e,t,l,a){a.selectedItem=null,a.showView=function(e,l){a.selectedItem=e,t.show({clickOutsideToClose:!0,scope:a,preserveScope:!0,templateUrl:"templates/"+l+"Page.html"})}}]);