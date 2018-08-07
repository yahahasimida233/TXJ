app.controller("sureUnCardCtrl",function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 用于返回上一级页面渲染信息
    vm.bankType = $stateParams.bankType;
    // 注入用户名信息
    vm.userName = sessionStorage.getItem("userName");
    // 初始化文字信息
    vm.countTime = "获取验证码";
    // 初始化定时器
    vm.countError = 0;

    vm.sendCode = function () {
        var phoneNum = vm.userName;
        //发送短信验证码
        serviceHTTP.getCodeHTTP(phoneNum).then(function (res) {
            console.log(res);
            if (res.data.code == 0) {
                // 定时器设置
                vm.countdown = 60;
                function setTime() {
                    if (vm.countdown == 0) {
                        vm.countTime = "获取验证码";
                        vm.countdown = 60;
                    } 
                    else {
                        vm.countTime = vm.countdown + "S后可重新机获取";
                        vm.countdown--;
                        $timeout(function () {
                            setTime()
                        }, 1000)
                    }
                }
                setTime(); //执行定时器
            }
            // 提示信息
            bootbox.alert(res.data.message);
        })
    };
    // 解绑按钮
    vm.unCard = function () {
        // 验证手机短信码是否一致
        var info = {
            phoneNum: vm.userName,
            verifyCode: vm.code
        };
        serviceHTTP.codeConfirmHTTP(info).then(function successCallback(res) {
            // 请求成功执行代码
            console.log(res);
            if (res.data.code == 0) {
                var card = JSON.parse(sessionStorage.getItem("unCardId"));
                // 银行卡解绑
                serviceHTTP.unCardHTTP(card).then(function (res) {
                    console.log(res);
                    if (res.data.code == 0) {
                        bootbox.alert({
                            message: res.data.message,
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        });
                        $state.go("home.mineCard")
                    }
                    else{
                        bootbox.alert({
                            message: res.data.message,
                            buttons: {
                                ok: {
                                    label: "确认",
                                    className: "btn-primary"
                                }
                            }
                        });
                    }
                })
            } 
            else{
                bootbox.alert({
                    message: res.data.message,
                    buttons: {
                        ok: {
                            label: "确认",
                            className: "btn-primary"
                        }
                }});
            }
        })
        

    }
    
})