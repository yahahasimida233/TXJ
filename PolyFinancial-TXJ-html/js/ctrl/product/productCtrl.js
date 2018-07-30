app.controller("productCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    // 隐藏动画
    $timeout(function () {
        $(".indexLoading").hide(500);
    }, 0);
    var vm = this;
    // 通过路由拿到产品ID
    var productId = $stateParams.productId;
    //初始化列表
    getList();

    function getList(){
        // 请求产品详情
        var data = {
            productId: productId,
            pageNum: vm.page
        }
        serviceHTTP.productHTTP(data).then(function (res) {
            console.log(res);
            vm.product = res.data.productInfo;
            // 产品名称
            vm.productName = vm.product.productName;
            if (vm.productName == "新手礼") {
                vm.new = true;
            }
            // 年利率
            vm.annualRate = vm.product.annualRate;
            //投资周期
            vm.productTerm = vm.product.productTerm;
            // 起投金额
            vm.startAmount = vm.product.startAmount;
            // 最小增减金额
            vm.minAmount = vm.product.minAmount;
            // 默认为产品简介
            vm.introduceP = true;
            // 更多信息
            vm.more = vm.product.more;
            // 还款方式
            if (vm.product.repaymentMode == 0) {
                vm.repay = "本息返还";
            }
            else{
                vm.repay = "先息后本";
            };
            // 投资记录列表
            vm.lists = res.data.dealRecord.list;
        })
    }

    // 产品详情
    vm.introduce = function () {  //简介
        vm.introduceP = true;
        vm.moreP = false;
        vm.recordP = false;
    }
    vm.moreInfo = function () { //更多
        vm.moreP = true;
        vm.introduceP = false;
        vm.recordP = false;
    }
    vm.recode = function () { //投资记录
        vm.recordP = true;
        vm.moreP = false;
        vm.introduceP = false;
    }
    //下拉加载
    // var miniRefresh = new MiniRefresh({
    //     container: '#minirefresh',
    //     // down: {
    //     //     callback: function () {
    //     //         // 下拉事件

    //     //         miniRefresh.endDownLoading();
    //     //     }
    //     // },
    //     up: {
    //         callback: function () {
    //             // 上拉事件
    //              location.reload();
    //             // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
    //             miniRefresh.endUpLoading(true);
    //         }
    //     }
    // });
    // 购买
    vm.buy = function () {
        
    }
    
})