app.controller("passwordCtrl", function ($scope, $state, serviceHTTP, $stateParams,$timeout) {
    var vm = this;
    vm.changePassword = function (params) {
        if (vm.surePassword != vm.newPassword){
            vm.sureTips = true;     //显示提示
            $timeout(function () {  //让提示消失
                vm.sureTips = false;
            },2000)
        }
        else{
            var password = {
                oldPassword: vm.oldPassword,
                newPassword: vm.surePassword
            };
            serviceHTTP.changePwHTTP(password).then(function (res) {
                console.log(res.data.code);
                if (res.data.code == 0) {
                    $state.go( "backStage.password", {}, { reload: true })
                }
                if (res.data.code == -5005) {
                    alert("旧密码输入错误，请重试。")
                }                
            })
        }
    }
})