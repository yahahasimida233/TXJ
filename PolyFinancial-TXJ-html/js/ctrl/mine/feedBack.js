app.controller("feedBackCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }

    vm.change = function(){
        var info = {
            opinionContent:vm.feedBackContent
        };
        serviceHTTP.feedBackHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if (response.data.message === "新增意见成功") {
                bootbox.alert('提交成功，将返回我的页面');
                $state.go('home.mine');
                sessionStorage.setItem("homeTitle",'我的')

            }
            else if (response.data.code !== 0) {
                bootbox.alert(response.data.message);

            }
        })
    }
});