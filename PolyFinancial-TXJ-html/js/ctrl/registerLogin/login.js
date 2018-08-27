app.controller("loginCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;


    vm.back = function(){
        sessionStorage.setItem('homeTitle','我的');
        $state.go('home.mine');

    };

    vm.show = function(){
        console.log($scope.loginForm);
    };

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);

    // 登陆功能
    vm.login = function(){
        var info = {
            phoneNum: vm.userName,
            pwd: vm.passWord
        };

        // 登陆请求
        serviceHTTP.loginHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                sessionStorage.setItem("login","true");
                sessionStorage.setItem('userName',vm.userName);
                $state.go('home');
                sessionStorage.setItem('homeTitle','首页');
            }
            else if(response.data.code === 5005){
                alertt('密码错误请重新输入密码');
                vm.passWord = undefined;
                return false;

            }
            else if(response.data.code === 5000){
                alertt('该账号已被冻结，若有疑问请电询8008208820');
                vm.passWord = undefined;
                return false;
            }
            else if(response.data.code === 2003){
                alertt('该手机号还未注册账号，请前往注册');
                vm.passWord = undefined;
                return false;
            }else{
                alertt(response.data.message);
            }

        });
    };
});