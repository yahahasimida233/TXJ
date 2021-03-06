app.controller("mineCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 判断是否登陆
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;

    if(vm.loginOrNot === 1){
        // 当登陆时，获取用户的信息
        serviceHTTP.mineHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                vm.list = response.data.data;
                console.log(vm.list)
            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }

    vm.goSetting = function(){
        sessionStorage.setItem('step','mine');
    }

});