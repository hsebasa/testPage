angular.module("musicApp.directives").directive("adjustImage",["$timeout",function(e){function a(a,i){function t(e,i){a.isWiderImage=parseFloat(a.image2Draw.width)/parseFloat(a.image2Draw.height)>e/i,a.isHigherImage=parseFloat(a.image2Draw.width)/parseFloat(a.image2Draw.height)<e/i,a.sameRatioImage=!a.isWiderImage&&!a.isHigherImage,a.isWiderImage?(a.marginLeft=(e-parseFloat(a.image2Draw.width)*i/parseFloat(a.image2Draw.height))/2+"px",a.marginTop=0):(a.isHigherImage,a.marginLeft=0,a.marginTop=0)}a.pf=parseFloat,a.imageProperties?(a.image2Draw=a.imageProperties,a.isDefaultImage=!1):(a.isDefaultImage=!0,a.image2Draw=a.defaultImage),e(function(){var e=$(i).find(".adjustImage");t(e[0].offsetWidth,e[0].offsetHeight)})}return{scope:{imageProperties:"=",defaultImage:"=",draggable:"=?"},link:a,templateUrl:"templates/imageAdjust.html"}}]);