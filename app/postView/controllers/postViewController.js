(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('PostViewController', ['$routeParams' ,function ($routeParams) {
      //  console.log($routeParams.id);

        this.postUrl = 'data/posts/html/' + $routeParams.id + '.html';
      //  this.postUrl = 'data/posts/html/Grunt - Intro.html';
    }]);
}());

