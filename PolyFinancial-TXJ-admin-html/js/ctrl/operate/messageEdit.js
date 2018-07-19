app.controller("messageEditCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;

    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };
});