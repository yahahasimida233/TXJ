app.controller("userDetailedCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    // 获取用户具体信息
    serviceHTTP.userDetailedHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    vm.all = false;
    //查看所有默认隐藏，点击事件才会让其显示，如下
    vm.allOpen = function () {
        vm.all = true;
    };
    vm.close = function () {
        vm.all = false;
    };

    // 目前接口中没有银行卡的数据暂时先空着，正确的应该是从请求中获得
    vm.card1 = vm.card2 = "没有绑定银行卡呢";



    vm.getCode = function(){
        if(!vm.phoneNum){
            bootbox.alert("请先填写手机号码，再获取验证码");
            return false;
        }
        var info = {};
        info.phoneNum = vm.phoneNum;
        serviceHTTP.getCodeHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    // 提交手机号还有验证码
    vm.newPhoneNum = function(){
        var info = {};
        info.newPhoneNum = vm.phoneNum;
        info.newCode = vm.code;
        serviceHTTP.newPhoneNumHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }

});