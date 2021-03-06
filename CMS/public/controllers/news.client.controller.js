/**
 * 新闻-客户端-控制器
 * Created by mohong on 2016/10/31.
 */

angular.module('webapp')
    .controller('NewsController',['$scope','NewsService',NewsController]);

function NewsController($scope,NewsService) {
    $scope.list = [];
    $scope.current = [];
    
    $scope.openNewsDetail = function (id) {
        $scope.loadDetail(id);
        $("#modal-detail").modal('show');
    }

    $scope.loadDetail= function (id) {
        NewsService.detail(id).then(
            function (data) {
                $scope.current = data;
            },
            function (err) {
                
            }
        )
    }

    $scope.formatTime = function (time) {
        return moment(time).format('l');
    }

    $scope.loadNews = function () {
        NewsService.list().then(
            function (data) {
                $scope.list = data;
            },
            function (err) {
                
            }
        );
    };

    $scope.loadNews();
}