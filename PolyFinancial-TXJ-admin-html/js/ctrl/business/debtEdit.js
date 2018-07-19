app.controller("debtEditCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;
    if(id == 0){
        vm.title = "债权新增"

    }else{
        vm.title= "债权编辑";

    }

    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };

    vm.change = function(id){
        var info = {};
        info.id = vm.id;
        info.enterpriseName = vm.enterpriseName;
        info.creditor = vm.creditor;
        info.phoneNum = vm.phoneNum;
        info.cardID = vm.cardID;
        info.loanTime= vm.loanTime;
        info.loanAmount= vm.loanAmount;
        info.introduction = vm.loanPeriod;
        info.more = vm.more;
        if(id == 0){
            serviceHTTP.debtNewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("新增成功！");
                    $state.reload('backStage.debt');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });

        }else{
            serviceHTTP.debtEditHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("修改成功!");
                    $state.reload('backStage.debt');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }

});