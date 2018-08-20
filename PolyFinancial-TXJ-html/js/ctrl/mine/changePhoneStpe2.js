app.controller("changePhoneStep2Ctrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 获取验证码按钮文本初始化
    vm.countTime = "获取验证码";

    // 初始化错误计数器
    vm.countError = 0;

    // 初始化图形验证
    var verifyCode = new GVerify("v_container");

    // 获取新手机验证码
    vm.sendCode = function () {
        vm.countdown = 60;

        function setTime() {
            if (vm.countdown == 0) {
                vm.countTime = "获取验证码";

                vm.countdown = 60;
            } else {
                vm.countTime = "重新发送(" + vm.countdown + "S)";

                vm.countdown--;

                $timeout(function () {
                    setTime()
                }, 1000)
            }

        }
        setTime();

        // 获取新手机验证码的请求
        serviceHTTP.verificationCodeHTTP(vm.userName).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);

            if(response.data.code == 0) {

            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });

    };




    // 提交更换手机的请求
    vm.step2Click = function(){
        // 当出错3次时增加人机验证首先判断图形验证码是否正确
        if(vm.countError > 2){
            if(!vm.imgCode){
                bootbox.alert("请输入图形验证码");
                return false;
            }
            var res = verifyCode.validate(vm.imgCode);
            console.log(vm.imgCode);
            console.log(res);
            if(!res){
                bootbox.alert("图形验证码错误");
                return false;
            }
        }

        var info = {
            newPhoneNum: vm.userName,
            newCode: vm.code
        };

        serviceHTTP.newNumberHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.message = 'success';
            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);
                vm.imgCode = undefined;
                verifyCode.refresh();
                vm.countError ++;
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }
});