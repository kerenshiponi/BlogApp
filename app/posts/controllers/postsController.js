(function() {
    'use strict';

    var app = angular.module('blogApp');


    app.controller('PostsController', ['postsService', '$routeParams', function (postsService, $routeParams) {
        var that = this;
        that.data = [];
        that.filterValue = postsService.filterValue;

        postsService.getData()
            .then(function (posts) {
                that.data = posts;
            })
            .catch(function (err) {

            });

        that.pageNumber = parseInt($routeParams.pageNumber);

        that.older = function() {
            return this.pageNumber + 1;
        };

        that.newer = function() {
            return this.pageNumber - 1;
        };

        that.dashTitle = function(title) {
            var regexp = /\W+/g;
            var newStr = title.replace(regexp, '-');

            return title;
        };

    }]);


}());
