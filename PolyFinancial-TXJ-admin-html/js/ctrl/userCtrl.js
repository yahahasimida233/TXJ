app.controller("userCtrl",function ($scope,$http,$state,serviceHTTP) {
    var vm = this;
    serviceHTTP.userListHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    vm.totalItems = 2;

    //搜索用户列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var userInfo = {
            userID: vm.userId,
            actualName:vm.userName,
            phoneNum:vm.phone,
            state:vm.status
        };
        serviceHTTP.userSearchHTTP(userInfo).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data.accountList;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    //查看用户详情
    vm.userDetailed = function(id){
        $state.go('backStage.userDetailed',{id:id});



        serviceHTTP.userDetailedHTTP(id).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
});