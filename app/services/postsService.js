(function () {
    'use strict';

    var app = angular.module('blogApp');

    app.factory('postsService', ['$http', function ($http) {
        var data = [];
        var filterValue = '';
        var filterKey = '$';

        function getData() {
            return $http({method: 'GET', url: 'server/data/posts.json'}).then(function (res) {
                return res.data.posts;
            });
        }

        //function filterData(arr, value, key) {
        //    var retArr = [];
        //    var filterKey = key || 'search';
        //
        //    switch (filterKey) {
        //        case 'search':
        //            console.log('filterData: search');
        //            retArr = $filter('filter')(arr, value, false);
        //            console.dir(retArr);
        //            break;
        //    }
        //    return retArr;
        //};

        return {
            getData: getData,
        //    //filterData: filterData,
            filterValue: filterValue
        };
    }]);

}());
