app.controller("debtEditCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    vm.id = $stateParams.id;
    if(vm.id == 0){
        vm.title = "债权新增"

    }else{
        vm.title= "债权编辑";
        serviceHTTP.debtDetailedHTTP(vm.id).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data;
                vm.enterpriseName = vm.list.enterpriseName;
                vm.creditor = vm.list.creditor;
                vm.phoneNum= vm.list.phoneNum;
                vm.cardID= vm.list.cardId;
                vm.loanAt= vm.list.loanAt;
                vm.loanAmount= vm.list.loanAmount;
                vm.loanPeriod= vm.list.loanPeriod;
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });

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

    vm.change = function(){
        var info = {};
        info.id = vm.id;
        info.enterpriseName = vm.enterpriseName;
        info.creditor = vm.creditor;
        info.phoneNum = vm.phoneNum;
        info.cardId = vm.cardID;
        info.loanAt= Date.parse(vm.loanAt);
        info.loanAmount= vm.loanAmount;
        info.loanPeriod = vm.loanPeriod;
        console.log(info);
        if(vm.id == 0){
            serviceHTTP.debtNewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("新增成功！");
                    $state.go('backStage.debt');
                }
                else {
                    bootbox.alert(response.data.message);
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
                    bootbox.alert(response.data.message);
                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }

});