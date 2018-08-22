app.controller("productListCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 请求产品列表数据
    vm.getList = function(){
        serviceHTTP.productListHTTP().then(function (res) {
            console.log(res);
            vm.data = res.data.productList.list;
            vm.dataLength = vm.data.length;

            // 创建一个数组用于存放部分数据，初始化为10条
            vm.lists = vm.data.slice(0,9)
        });
    };
    vm.getList();

    // 每次下拉刷新触发这个函数
    vm.changeList = function(){
        var length = vm.lists.length + 10;
        if(vm.lists.length < vm.dataLength){
            if(vm.lists.length + 10 < vm.dataLength){
                vm.lists = vm.data.slice(0,length);
                return false;
            }
            vm.lists = vm.data;
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
                        miniRefresh.endUpLoading(vm.lists.length >= vm.dataLength ? true : false);
                    }, 500);
                    // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                    // miniRefresh.endUpLoading(true);
                }
            }
        });
    },200);

    // 跳转至产品页
    vm.product = function (id) {
        vm.logo = sessionStorage.getItem("login"); //验证是否登录
        console.log(!vm.logo);
        if (vm.logo !== "true"  ||  !vm.logo) {
            sessionStorage.setItem('homeTitle','我的');
            $state.go('login');
        }
        else{
            $state.go("product", {productId:id} )
        }
    }


    // 下拉刷新
    // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
    // $timeout(function () {
    //     var miniRefresh = new MiniRefresh({
    //         container: '#minirefresh',
    //         down: {
    //             callback: function () {  // 下拉事件
    //                 // $state.reload($state.current.name);
    //                 location.reload();
    //                 miniRefresh.endDownLoading(true); //结束上拉刷新
    //             }
    //         }
            
    //     });
    // },2000 ) 

    // var miniRefresh = new MiniRefresh({
    //     container: '#minirefresh',
    //     down: {
    //         callback: function () { // 下拉事件
    //             $state.reload($state.current.name); 
    //             miniRefresh.endDownLoading(true); //结束上拉刷新
    //         }
    //     }
    // });
})