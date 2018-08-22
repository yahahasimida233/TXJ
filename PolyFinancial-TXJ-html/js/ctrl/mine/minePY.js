app.controller("minePYCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }

    // 返回按钮
    vm.back = function(){
        sessionStorage.setItem('homeTitle','我的');
        $state.go('home.mine');
    };

    // 获取我的理财列表
    vm.getList = function(){
        serviceHTTP.tradeListHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                vm.data = response.data.data;
                vm.dataLength = vm.data.length;

                // 创建一个数组用于存放部分数据，初始化为10条
                vm.list = vm.data.slice(0,9)

            }
            else if(response.data.code !==  0) {
                bootbox.alert(response.data.message);

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();

    // 每次下拉刷新触发这个函数
    vm.changeList = function(){
        var length = vm.list.length+10;
        if(vm.list.length < vm.dataLength){
            if(vm.list.length + 10 < vm.dataLength){
                vm.list = vm.list = vm.data.slice(0,length);
                return false;
            }
            vm.list = vm.data;
        }
    };

    $timeout(function(){
        var miniRefresh = new MiniRefresh({
            container: '#minirefresh',
            down: {
                callback: function() {
                    // 下拉事件
                    vm.getList();
                    miniRefresh.endDownLoading();
                },
                successAnim:{
                    isEnable : true,
                }
            },
            up: {
                isAuto: true,
                callback: function() {
                    // 上拉事件
                    $timeout(function() {
                        vm.changeList();
                        miniRefresh.endUpLoading(vm.list.length >= vm.dataLength ? true : false);
                    }, 500);
                    // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                    // miniRefresh.endUpLoading(true);
                }
            }
        });
    },200);
});