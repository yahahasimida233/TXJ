app.controller("messageCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;


    serviceHTTP.messageHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;

        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    var miniRefresh = new MiniRefresh({
        container: '#minirefresh',
        down: {
            callback: function() {
                // 下拉事件

                miniRefresh.endDownLoading();
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
});