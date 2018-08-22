app.controller("messageDetailCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 把需要请求的信息保存在对象中
    var info  = {
        id:$stateParams.id,
        articleType : $stateParams.articleType
    };


    // 信息的详情
    serviceHTTP.messageDetailHTTP(info).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.code == 0) {
            vm.list = response.data.data;
            vm.imgSrc = (vm.list.articlePicture)?vm.list.articlePicture: "img/lucky.gif";
        }
    });
});