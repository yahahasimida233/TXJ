app.controller("buyCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 隐藏动画
    $timeout(function () {
        $(".indexLoading").hide(500);
    }, 0);
    // 产品ID
    vm.productId = $stateParams.productId
    // 起投金额
    vm.start = $stateParams.startAmount;
    console.log(vm.start);
    // 最小增减金额
    vm.min = $stateParams.minAmount
    console.log(vm.min);
    // 投资周期
    vm.time = $stateParams.time;
    // 年利率
    vm.rate = $stateParams.rate;
    // 利息
    vm.result = 0.00;  //避免未输入时，页面出错
    // 利息的实时计算
    vm.change = function () {  //将结果四舍五入保留为两位小数
        vm.result = vm.money ? (vm.money * (vm.time / 360) * (vm.rate / 100)).toFixed(2) : 0.00; //有金额时，为相应计算、无值时赋值为0.00
    }
    // vm.showTips = true;

    // console.log('wuhaidong很牛逼的'.replace(/.(?=.)/g, '*'));
    console.log('wuhaidong很牛逼的'.replace(/.(?=.)/, '*'));
    // console.log('wuhaidong很牛逼的'.replace(/./g, '*'));

    
    // var a = "师阿萨德";    
    // var b = a.slice(1).replace(/./g, '*');
    // var c = a[0].concat(b);
    // console.log(c);


    var a = "1234567890123456789";
    // var b = a.slice(15);
    // var c = "**** **** **** ***" + b;
    // console.log(c);
    vm.a = a;

    userId = 2
    serviceHTTP.bankCardListHTTP(userId).then(function (res) {
        console.log(res);
        
    })

})