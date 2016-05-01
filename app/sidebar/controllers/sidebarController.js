(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.controller('sidebarController', ['postsService', '$location', function (postsService, $location) {
        this.val = '';

        this.search = function () {
            if (this.val === '') {
                $location.path('/posts/1');
                $location.search({});
                postsService.filterValue = '';
            } else {
            //    //adding the sidebar term to the URL
                $location.path('/posts/1');
                $location.search({search: this.val});
                postsService.filterValue = this.val;
            }
        };

        this.showAll = function () {
            $location.path('/posts/1');
            $location.search({});
            postsService.filterValue = '';
            this.val = '';
        }
    }]);
}());