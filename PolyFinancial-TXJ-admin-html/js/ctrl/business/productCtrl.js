app.controller("productCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.productHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    vm.stateChange = function(a,b){

        if(b == 0){
            vm.tip ="<p style='text-align: center'>是否要下架该产品？</p>"
        }else {
            vm.tip ="<p style='text-align: center'>是否要上架该产品？</p>"
        }
        bootbox.confirm({
            title: '操作提示',
            message: vm.tip,
            buttons: {
                cancel: {
                    label: '取消'
                },
                confirm: {
                    label: '确认'
                }
            },
            callback: function(result) {
                if(result === true){
                    serviceHTTP.porductGroundingHTTP(a).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.product');
                        }
                        else {

                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                    });

                }
            }
        })

    };

});