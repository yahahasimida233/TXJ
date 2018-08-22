app.controller("RNStep2Ctrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.bankCard = $stateParams.bankCard;

    // 获取银行卡的类型
    vm.cardType = bankCardAttribution(vm.bankCard).bankName;

    vm.back = function(){
        window.history.back(-1);
    };


    vm.step2Click = function(){
        // 验证手机号码是否输入正确
        if (!vm.userName.match(/^(((\+86)|(86))?1[0-9]{10})$/)) {
            bootbox.alert("请输入正确的手机号");
            vm.userName = undefined;
            return false;
        }

        // 二要素认证的信息保存在对象中
        var info={
            bankCard:vm.bankCard,
            phoneNum: vm.userName
        };


        // 提交二要素的认证信息
        serviceHTTP.realNameStep1HTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            vm.message = response.data.message;
            if(response.data.code == 0) {

                $state.go("home.RNStep3", { phone:vm.userName ,bankCard:vm.bankCard})
            }
            else {
                bootbox.alert(vm.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码

        });

        // // 提交手机号码获取验证码的请求
        // serviceHTTP.RGetCodeHTTPL(info).then(function successCallback(response) {
        //     // 请求成功执行代码
        //     console.log(response);
        //     vm.message = response.data.message;
        //     if(response.data.message === "success") {
        //         // bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">提交成功，请输入您验证码进行最后一步验证</div>' });
        //         // $state.go('home.RNStep3');
        //     }
        //     else {
        //         bootbox.alert(vm.message);
        //     }
        // }, function errorCallback(res) {
        //     // 请求失败执行代码
        //
        // });
    }
});