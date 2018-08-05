app.controller("realNameCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 第一步确认操作
    vm.step1Click = function(){
        // 判断用户名的格式是否正确
        if (!vm.userName.match(/^[\u4e00-\u9fa5]{2,4}$/)){
            bootbox.alert("请输入正确的姓名");
            vm.userName = undefined;
            return false;

            // 判断身份证号码是否输入正确
        }else if(!vm.cardId.match(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/)){
            bootbox.alert("请输入正确身份证号码");
            vm.cardId = undefined;
            return false;

            // 判断银行卡号码是否输入正确（应该使用luhn算法来进行验证）
        }else if(!vm.bankCard.match(/^([1-9]{1})(\d{14}|\d{18})$/)){
            bootbox.alert("请输入正确的银行卡号");
            vm.bankCard = undefined;
            return false;
        }

        var info ={
            userName: vm.userName,
            cardId: vm.cardId,
            bankCard:vm.bankCard
        };

        // 发送实名认证第一步的请求
        serviceHTTP.realNameStep1HTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            vm.message = response.data.message;
            if(response.data.message === "success") {
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854">提交成功，请输入您办卡时的预留卡号</div>' });
                $state.go('home.RNStep2');
            }
            else {
                bootbox.alert(vm.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码

        });
    };


});