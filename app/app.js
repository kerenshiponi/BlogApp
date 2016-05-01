(function () {
    'use strict';

    var app = angular.module('blogApp', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/posts/1'
            })
            .when('/posts/:pageNumber', {
                templateUrl: 'app/posts/templates/posts.html',
                controller: 'PostsController as posts',
                reloadOnSearch: true
            })
            .when('/post/:id', {
                templateUrl: 'app/postView/templates/post.html',
                controller: 'PostViewController as postView'
            })
            //.when('/posts/:pageNumber\?:query', {
            //    templateUrl: 'app/posts/templates/filteredPosts.html',
            //    controller: 'filterController as filters'
            //})
            .when('/admin', {
                templateUrl: 'app/admin/templates/admin.html',
                controller: 'AdminController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);
}());
