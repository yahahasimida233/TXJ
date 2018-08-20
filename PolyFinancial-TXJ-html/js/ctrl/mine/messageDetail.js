app.controller("messageDetailCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    var info  = {
        id:$stateParams.id,
        articleType : $stateParams.articleType
    };



    serviceHTTP.messageDetailHTTP(info).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.code == 0) {
            vm.list = response.data.data;
            vm.imgSrc = (vm.list.articlePicture)?vm.list.articlePicture: "img/lucky.gif";
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});