app.controller("changePaCtrl",function ($http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }

    // 点击提交新旧密码
    vm.changePassword  = function(){
        // 首次输入新密码是否一致
        if(vm.sureP != vm.newP){
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">两次密码不一致哦请重新输入</div>' });
            vm.sureP = vm.newP =undefined;
            return false;
        }else if(vm.oldP == vm.newP){
            bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">新旧密码不能一样哦</div>' });
            vm.oldP =vm.newP =vm.sureP =undefined;
            return false;
        }
        var info = {
            oldPwd: vm.oldP,
            newPwd: vm.newP
        };

        // 提交新旧密码的请求
        serviceHTTP.settingCPHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                bootbox.dialog({ message: '<div class="text-center" style="color: #dca854;">修改成功，请重新登录</div>' });
                // bootbox3s后自动消失
                $timeout(function(){
                    $(".fade").css('opacity','0');
                    $timeout(function(){
                        $(".fade").hide();
                    },500)
                },3000);
                sessionStorage.clear();
                $state.go('login');
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }
});