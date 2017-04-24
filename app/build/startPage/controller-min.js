"use strict";angular.module("musicApp.startPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["globalData","$mdDialog","$http","$scope","$timeout","$scope",function(e,t,s,a,o,r){var n=this;n.spotifyApi=e,n.searchText="",n.progress=0,n.firstSearch=!1,n.States={noSearch:"noSearch",noResults:"noResults",searching:"searching",showingResults:"showingResults"},n.state=n.States.noSearch,n.progressUpdate=function(e){n.progress=100*e.loaded/e.total},n.search=function(){n.state=n.States.searching,n.firstSearch=!0,$("html,body").animate({scrollTop:$("#results").offset().top},"slow"),e.search_item(n.searchText,n.progressUpdate,n.finishedSearch)},n.finishedSearch=function(e){Object.keys(e.artists).length>0||Object.keys(e.albums).length>0||Object.keys(e.tracks).length>0?n.state=n.States.showingResults:n.state=n.States.noResults},n.focus=function(){document.getElementById("searchBarInput").focus()},n.pressedKey=function(e){13===e.which&&n.search()},a.showView=function(e,s){var o={selectedItem:e,selectedItemInfo:new function(){this.data={},this.call=function(e){200==e.status?this.data=e.data:console.log("Ha ocurrido algun error, status: "+response_status)}},percentLoaded:0},r=a.$new(!0);"artist"==s?(n.spotifyApi.get_albums_by_artist(e.id,o.selectedItemInfo,n.progressUpdate),r.get_traks_album=function(e){var s={selectedItem:e,selectedItemInfo:new function(){this.data={},this.call=function(e){200==e.status?this.data=e.data:console.log("Ha ocurrido algun error, status: "+response_status)}},percentLoaded:0},o=a.$new(!0);o.info=s,console.log("entreeee"),console.log(n),n.spotifyApi.get_tracks_by_album(e.id,s.selectedItemInfo,n.progressUpdate),t.show({clickOutsideToClose:!0,scope:o,preserveScope:!1,plain:!0,templateUrl:"templates/albumPage.html"})}):"album"==s&&n.spotifyApi.get_tracks_by_album(e.id,o.selectedItemInfo,n.progressUpdate),r.info=o,console.log("templates/"+s+"Page.html"),t.show({clickOutsideToClose:!0,scope:r,preserveScope:!1,plain:!0,templateUrl:"templates/"+s+"Page.html"})}}]);