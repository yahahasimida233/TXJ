app.controller("messageCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;


    // 验证是否登录，否则转跳到登陆页面
    // vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    // if(vm.loginOrNot === 0){
    //     $state.go('login');
    //     return false;
    // }


    vm.getList = function(){
        serviceHTTP.messageHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data;

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();

    $timeout(function(){
        var miniRefresh = new MiniRefresh({
            container: '#minirefresh',
            down: {
                callback: function() {
                    // 下拉事件

                    miniRefresh.endDownLoading();
                    vm.getList();
                },
                successAnim:{
                    isEnable : true,
                }
            },
            up: {

                callback: function() {
                    // 上拉事件

                    // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                    miniRefresh.endUpLoading(true);
                }
            }
        });
    },200);


});