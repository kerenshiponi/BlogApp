(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('PostsController', function ($http, $routeParams) {
        var that = this;
        that.pageNumber = parseInt($routeParams.pageNumber);

        that.next = function() {
            return that.pageNumber + 1;
        };

        that.prev = function() {
            return that.pageNumber - 1;
        };

        that.dashTitle = function(title) {
            //console.log(title);
            //var dashed = title.replace(/\s/, '');
            //console.log(dashed);

            return 'AngularJS-Modules';
        };
      //  console.log($routeParams.pageNumber);

        $http({method: 'GET', url: 'data/posts.json'}).then(function (data) {
            that.data = data.data.posts;
        });
    })
}());
