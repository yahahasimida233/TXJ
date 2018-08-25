app.controller("userDetailedCtrl",function ($http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    var id = $stateParams.id;
    // 获取用户具体信息
    serviceHTTP.userDetailedHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;
            console.log(vm.list);
            if(!vm.list.cardInfo){
                vm.card1 = vm.card2 ="没有绑定银行卡呢";
            }
            vm.card1 = (vm.list.cardInfo[0])?vm.list.cardInfo[0].bankCard:"没有绑定银行卡呢";
            vm.card2 = (vm.list.cardInfo[1])?vm.list.cardInfo[1].bankCard:"没有绑定银行卡呢";
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




    vm.countTime = "获取短信验证码";

    vm.getCode = function(){
        if(!vm.phoneNum){
            bootbox.alert("请先填写手机号码，再获取验证码");
            return false;
        }
        var info = {};
        info.phoneNum = vm.phoneNum;
        // 获取新手机验证码的请求

        vm.countdown = 60;
        function setTime() {
            if (vm.countdown == 0) {
                vm.countTime = "获取短信验证码";
                vm.countdown = 60;
            } else {
                vm.countTime = "重新发送(" + vm.countdown + "S)";
                vm.countdown--;
                $timeout(function () {
                    setTime()
                }, 1000)
            }

        }


        serviceHTTP.verificationCodeHTTP(info.phoneNum).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);

            if(response.data.code ==  0) {
                bootbox.alert('获取验证码成功！');
                setTime();
            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);

            }
        });
    };

    // 初始化错误计数器
    vm.countError = 0;

    // 初始化图形验证
    var verifyCode = new GVerify("v_container");


    // 提交手机号还有验证码
    vm.newPhoneNum = function(){
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
            uid: id,
            newPhoneNum: vm.phoneNum,
            newCode: vm.code
        };

        var phone = {
            phoneNum :vm.userName,
            verifyCode:vm.code,
        };

        // 验证 验证码的请求
        serviceHTTP.codeConfirmHTTP(phone).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                serviceHTTP.newNumberHTTP(info).then(function successCallback(response) {
                    // 请求成功执行代码
                    console.log(response);
                    if(response.data.code == 0) {
                        bootbox.alert('手机号码更换成功');
                        $state.reload('backStage.userDetailed',{id:id})
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
            else {
                bootbox.alert(response.data.message);
                verifyCode.refresh();
                vm.countError ++;
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });


    }


});