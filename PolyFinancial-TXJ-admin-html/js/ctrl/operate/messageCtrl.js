app.controller("messageCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;


    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };

    serviceHTTP.messageHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list = response.data.data.articleList;
            vm.createByList = response.data.data.createByList;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});