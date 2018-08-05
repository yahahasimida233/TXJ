app.controller("productEditCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;

    if(id == 0){
        vm.title = "产品新增"

    }else{
        vm.title= "产品编辑";
        var info = {
            id: id
        }
        serviceHTTP.productHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.productList.list[0];
                console.log(vm.list);
                vm.productId = vm.list.productId;
                vm.productName = vm.list.productName;
                vm.annualRate = vm.list.annualRate;
                vm.productTerm = vm.list.productTerm;
                vm.startMoney = vm.list.startAmount;
                vm.minMoney = vm.list.minAmount;
                vm.repaymentMode = parseInt(vm.list.repaymentMode);
                console.log(vm.repaymentMode);
                vm.introduction = vm.list.introduction;
                vm.more = vm.list.more;
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });


    }



    vm.save = function(){
        var info = {};
        info.id = id;
        info.productName = vm.productName;
        info.annualRate = vm.annualRate;
        info.productTerm = vm.productTerm;
        info.startMoney = vm.startMoney;
        info.minMoney = vm.minMoney;
        info.repaymentMode = vm.repaymentMode;
        info.introduction = vm.introduction;
        info.more = vm.more;
        if(id == 0){
            serviceHTTP.productNewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("新增成功！");
                    $state.reload('backStage.product');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });

        }else{
            serviceHTTP.productEditHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("修改成功！");
                    $state.reload('backStage.product');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }
});