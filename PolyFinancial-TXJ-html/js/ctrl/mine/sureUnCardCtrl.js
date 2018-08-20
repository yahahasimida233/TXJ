app.controller("sureUnCardCtrl",function ($state, $stateParams, serviceHTTP) {
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

        vm.countdown = 60;
        
        function setTime() {
            if (vm.countdown == 0) {
                vm.countTime = "获取验证码";
                vm.countdown = 60;
            }   
            else {
                vm.countTime = "重新发送(" + vm.countdown + "S)";
                vm.countdown--;
                $timeout(function () {
                    setTime()
                }, 1000)
            }
        }
        
        // 获取验证码的请求
        serviceHTTP.getCodeHTTP(vm.userName).then(function successCallback(response) {
            console.log(response);
            
            // 请求成功执行代码
            if (response.data.code === 0) {
                setTime(); //开始倒计时
            } 
            else{
                bootbox.alert(response.data.message);
            }
        });
    };
    
    //下一步按钮
    vm.next = function (code) {
        // 验证短信验证码是否一致
        serviceHTTP.codeConfirmHTTP(code).then(function (res) {
            console.log(res);
            
        })
        // 银行卡解绑
        // serviceHTTP.unCardHTTP(card).then(function (res) {
        //     console.log(res);
        // })
    }    
})