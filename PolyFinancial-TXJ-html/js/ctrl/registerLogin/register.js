app.controller("registerCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    // vm.goOn = false;
    console.log(bootbox);

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);

    // 获取验证码
    vm.countTime = "获取验证码";
    vm.sendCode = function(){
        if(!vm.userName){
            bootbox.dialog({
                message: '<div class="text-center" style="color: #dca854;">输入手机号后再获取验证码拉</div>',
                callback: function(){
                    $timeout(function(){
                        this.aria_hidden = false;
                    },3000)
                },
            });
            return false;
        }
        if(vm.userName.match(/^(((\+86)|(86))?1[0-9]{10})$/) && vm.userName.length === 11){
        }else{
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">亲，手机号的格式不对请重新输入哦</div>' });
            vm.userName = undefined;
            return false;
        }

        vm.countdown=60;

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

            serviceHTTP.verificationCodeHTTP(vm.userName).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            vm.message = response.data.message;
            if(response.data.code == 0) {
                setTime();
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">验证码已发送请注意查收</div>' });
            }
            else {
                bootbox.alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">请求失败，请稍后重试</div>' });
        });
    };


    // 初始化错误计数器
    vm.countError = 0;

    // 初始化图形验证
    var verifyCode = new GVerify("v_container");
    // 提交表单，注册信息
    vm.confirm = function(){
        vm.goOn = false;
        // 表单验证手机号是否符合
        if(vm.userName.match(/^(((\+86)|(86))?1[0-9]{10})$/) && vm.userName.length === 11){
        }else{
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">亲，手机号的格式不对请重新输入哦</div>' });
            vm.userName = undefined;
            return false;
        }

        // 验证密码是否符合输入规则
        if(vm.oldP.match(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/) && vm.oldP.length <= 18 && vm.oldP.length >= 6){
        }else{
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">密码的格式不对呢，请重新输入</div>' });
            vm.oldP = vm.newP = undefined;
            return false;
        }


        var phone = {
            phoneNum :vm.userName,
            verifyCode:vm.code,
        };

        if(vm.newP !== vm.oldP){
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">两次密码不一致哦请重新输入</div>' });
            vm.newP = vm.oldP = undefined;
            return false;
        }

        // 当出错3次时增加人机验证
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
        serviceHTTP.codeConfirmHTTP(phone).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                vm.goOn = true;
            }
            else {
                bootbox.alert(response.data.message);
                verifyCode.refresh();
                vm.countError ++;
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });



    };

    $scope.$watch('vm.goOn',function(newValue,oldValue) {
        if (vm.goOn) {
            var info = {
                phoneNum:vm.userName,
                pwd:vm.newP
            };
            serviceHTTP.phoneRegisterHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.code == 200) {
                    bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">注册成功马上转跳到登陆页面哦</div>' });
                    $state.go('login');
                    return false;
                }
                else if(response.data.code !==  200) {
                    if(!vm.goOn){
                        return false;
                    }
                    bootbox.alert(response.data.message);
                    vm.imgCode = undefined;
                    verifyCode.refresh();
                    vm.countError ++;
                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }
    })


});