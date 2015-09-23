angular.module('starter.controllers', [])

.controller('HomeController', function($scope) {})

.controller('ContentController', ['$scope', function($scope) {

    // contenidos de la app
    $scope.contentList = [{
        title: 'Quienes Somos?',
        image: 'http://olinterislas.com/attachments/Image/OFICINA_4.jpg'
    }, {
        title: 'Que Hacemos?',
        image: 'http://gloimg.gearbest.com/gb/2015/201502/goods-img/1423590378422-P-2424314.jpg'
    }, {
        title: 'Por que elegirnos?',
        image: 'http://www.xperteducation.co.uk/wp-content/uploads/2014/10/Testimonial_Callout-400x400.jpg'
    }];

}])

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
