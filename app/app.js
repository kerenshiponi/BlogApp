(function () {
    'use strict';

    var app = angular.module('blogApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/posts/1'
            })
            .when('/posts/:pageNumber', {
                templateUrl: 'app/posts/templates/posts.html',
                controller: 'PostsController as posts'
            })
            .when('/post/:id', {
                templateUrl: 'app/postView/templates/post.html',
                controller: 'PostViewController as postView'
            })
            .when('/admin', {
                templateUrl: 'app/admin/templates/admin.html',
                controller: 'AdminController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });


    //app.factory('PostsService', function () {
    //    var data = [
    //        {
    //            "title": "AngularJS - Controllers",
    //            "author": "Ilan Cohen",
    //            "date": "1421186400000",
    //            "tags": ["JavaScript", "AngularJS"],
    //            "mdPath": "data/posts/md/AngularJS - Controllers.md",
    //            "htmlPath": "data/posts/html/AngularJS - Controllers.html",
    //            "description": "In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope."
    //        },
    //        {
    //            "title": "AngularJS - Modules",
    //            "author": "Ilan Cohen",
    //            "date": "1421186400000",
    //            "tags": ["JavaScript", "AngularJS"],
    //            "mdPath": "data/posts/md/AngularJS - Modules.md",
    //            "htmlPath": "data/posts/html/AngularJS - Modules.html",
    //            "description": "You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc. Most applications have a main method that instantiates and wires together the different parts of the application. Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped."
    //        }];
    //
    //    return data;
    //});
}());
