---
layout: post
title:  "HTML5 geolocation functions"
date:   2015-02-05 16:09:15
categories: jekyll update
---
Today, I've been working on an application using Ionic (with Angular & Cordova) and the Google Maps API. One of the most exciting parts of this project has been getting to learn to use the geolocation object in HTML5. In particular, I wrote a couple methods that would set a marker that follows the user on the map. 

```
/* 
* This Angular method uses HTML5 to find your location.
* Then, it creates a marker at this location with a custom icon at the location.
* Finally, it invokes the watchPosition method to update call $scope.moveUser whenever it senses a change in location.
*/
$scope.placeUser = function() {
  navigator.geolocation.getCurrentPosition(function (pos) {
    $rootScope.pos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    $scope.userMarker = new google.maps.Marker({
      position: $rootScope.pos,
      map: $scope.map,
      title: 'You are here',
      icon: '/img/jaunty_tiny.png',
    });

    $scope.watchId = navigator.geolocation.watchPosition($scope.moveUser); 
  });
};

/* 
* This method uses getCurrentPosition again and updates one's position on the map.
*/
$scope.moveUser = function() {
  navigator.geolocation.getCurrentPosition(function (pos) {
    $rootScope.pos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    $scope.userMarker.setPosition($rootScope.pos); 

    $scope.checkForStop();
  });
};
```

These were a fun use of asynchronous callback functions. I also tried invoking moveUser after a constant period of time, using setInterval. I set the interval to be 2 seconds, and it seemed to work without any problem. Depending on the sensitivity of watchProvider in the geolocation object, I would think still that using watchProvider would be optimal.

After the creation of these methods, I just had to invoke this function in the `initialize` of the map's controller.
