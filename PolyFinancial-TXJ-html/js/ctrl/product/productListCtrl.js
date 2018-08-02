app.controller("productListCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 请求产品列表数据
    serviceHTTP.productListHTTP().then(function (res) {
        console.log(res);
        vm.lists = res.data.productList.list;

    })

    // 跳转至产品页
    vm.product = function (id) {
        vm.login = sessionStorage.getItem("login"); //验证是否登录
        console.log(vm.login);
        
        if (vm.login !== "true") {
            $state.go('login');
        }
        else{
            $state.go("product", {productId: id} )
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