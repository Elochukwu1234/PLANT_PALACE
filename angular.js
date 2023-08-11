var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "index.html",
        controller: 'IndexCtrl'
    })
    .when('/gallery', {
        templateUrl: "gallery.html",
        controller: 'GalleryCtrl'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('IndexCtrl', function($scope, $timeout) {
    $scope.images = [
        {
            src: 'assets/img/Home-Image-1.jpg',
            alt: 'Home-Image-1',
            title: 'ADD FALL COLOUR WITH',
            description: 'HYDRANGEAS'
        },
        {
            src: 'assets/img/Home-Image-2.jpg',
            alt: 'Home-Image-2',
            title: 'HALF-PRICED SHIPPING',
            description: 'USE CODE "SUMMER" AT CHECKOUT'
        },
    ];
    
    var currentIndex = 0;
    
    $scope.currentImage = $scope.images[currentIndex];
    
    var nextImage = function() {
        currentIndex += 1;
    
        if (currentIndex >= $scope.images.length) {
            currentIndex = 0;
        }
    
        $scope.currentImage = $scope.images[currentIndex];
    
        $timeout(nextImage, 4000);
    }
    
    $timeout(nextImage, 4000);
    });