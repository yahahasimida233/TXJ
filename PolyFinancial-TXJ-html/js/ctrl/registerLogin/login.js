app.controller("loginCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);

    vm.login = function(){
        var info = {
            phoneNum: vm.userName,
            pwd:vm.passWord
        };
        serviceHTTP.loginHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                sessionStorage.setItem("login","true");
                sessionStorage.setItem('userName',vm.userName);
                $state.go('home.mine')
            }
            else if(response.data.code === 5005){
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">密码错误请重新输入密码</div>' });
                vm.passWord = undefined;
                return false;
            }
            else if(response.data.code === 5000){
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">该账号已被冻结，若有疑问请电询8008208820</div>' });
                vm.passWord = undefined;
                return false;
            }
            else if(response.data.code === 2003){
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">该手机号还未注册账号，请前往注册</div>' });
                vm.passWord = undefined;
                return false;
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
});