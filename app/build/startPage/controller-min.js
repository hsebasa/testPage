"use strict";angular.module("musicApp.startPage",["ngRoute"]).config(["$routeProvider",function(t){t.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["globalData","$mdDialog","$http","$scope","$timeout",function(t,e,s,o,a){var r=this;r.spotifyApi=t,r.searchText=null,r.progress=0,r.progressUpdate=function(t){r.progress=100*t.loaded/t.total},r.search=function(){$("html,body").animate({scrollTop:$("#results").offset().top},"slow"),t.search_item(r.searchText,r.progressUpdate)},r.focus=function(){document.getElementById("searchBarInput").focus()},r.pressedKey=function(t){13===t.which&&r.search()},o.showView=function(t,s){var a={selectedItem:t,selectedItemInfo:new function(){this.data={},this.call=function(t){200==t.status?this.data=t.data:console.log("Ha ocurrido algun error, status: "+response_status)}},percentLoaded:0},l=o.$new(!0);console.log(t.id),"artist"==s&&r.spotifyApi.get_albums_by_artist(t.id,a.selectedItemInfo,r.progressUpdate),l.info=a,console.log("templates/"+s+"Page.html"),e.show({clickOutsideToClose:!0,scope:l,preserveScope:!1,plain:!0,templateUrl:"templates/"+s+"Page.html"})}}]);