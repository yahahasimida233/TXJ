app.controller("RNStep2Ctrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.cardType = $stateParams.bankType;

    vm.back = function(){
        window.history.back(-1);
    };

    vm.step = sessionStorage.getItem("step");
    vm.title = (vm.step == "addCard")? "添加银行卡":"实名认证";
    vm.step2Click = function(){
        // 验证手机号码是否输入正确
        if (!vm.userName.match(/^(((\+86)|(86))?1[0-9]{10})$/)) {
            bootbox.alert("请输入正确的手机号");
            vm.userName = undefined;
            return false;
        }
        var info={
            bankPhone: vm.userName
        };
        // 提交手机号码获取验证码的请求
        serviceHTTP.RGetCodeHTTPL(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            vm.message = response.data.message;
            if(response.data.message === "success") {
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">提交成功，请输入您验证码进行最后一步验证</div>' });
                $state.go('home.RNStep3');
            }
            else {
                bootbox.alert(vm.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码

        });
    }
});