(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('PostViewController', function ($routeParams) {
        console.log($routeParams.id);

        //this.postUrl = 'data/posts/html/' + $routeParams.id;
        this.postUrl = 'data/posts/html/Grunt - Intro.html';
    })
}());
