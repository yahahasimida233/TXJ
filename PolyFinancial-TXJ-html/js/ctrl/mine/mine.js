app.controller("mineCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;

    if(vm.loginOrNot === 1){
        serviceHTTP.userInfoHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.user;
                console.log(vm.list)

            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }


});