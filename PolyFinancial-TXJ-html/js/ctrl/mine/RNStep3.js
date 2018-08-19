app.controller("RNStep3Ctrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.userName = $stateParams.phone;
    vm.name = sessionStorage.getItem('name');
    vm.idCard = sessionStorage.getItem('idCard');
    vm.bankCard = $stateParams.bankCard;

    // 获取验证码
    vm.countTime = "获取验证码";
    vm.sendCode = function(){

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


        var info={
            phoneNum: vm.userName,
            bankCard:vm.bankCard,
            vCode: vm.code,
            userName: vm.name,
            cardId :vm.idCard

        };
        console.log(info);
        // 提交手机号码获取验证码的请求
        serviceHTTP.RGetCodeHTTPL(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            vm.message = response.data.message;
            if(response.data.code == 0) {
                setTime();
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">获取验证码成功！</div>' });
                $timeout(function(){
                    $(".fade").css('opacity','0');
                    $timeout(function(){
                        $(".fade").hide();
                    },500)
                },3000);
            }
            else {
                bootbox.alert(vm.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码

        });
    };

    // 初始化错误计数器
    vm.countError = 0;

    // 初始化图形验证
    var verifyCode = new GVerify("v_container");

    // 最后一步核对验证码是否正确
    vm.step3Click = function(){
        var info={
            phoneNum: vm.userName,
            bankCard:vm.bankCard,
            vCode: vm.code,
            userName: vm.name,
            cardId :vm.idCard

        };

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
                vm.imgCode = undefined;
                return false;
            }
        }

        serviceHTTP.RCheckCodeHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">实名认证成功！将回到个人信息页面！</div>' });
                $state.go('home.userInfo')
            }
            else {
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