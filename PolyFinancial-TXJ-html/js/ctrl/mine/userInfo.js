app.controller("userInfoCtrl",function ($http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    serviceHTTP.userInfoHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.code == 0) {
            vm.list = response.data.user;
            console.log(vm.list)

        }
        else if(response.data.code !==  0) {
            bootbox.alert(response.data.message);

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });


    vm.checkRealName = function(){
        if(vm.list.realnameState == 1){
            $state.go('home.realName')
        }

    }
});