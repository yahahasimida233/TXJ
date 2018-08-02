app.controller("payCtrl",function ($state, $stateParams,$timeout, serviceHTTP) {
    var vm = this;
        // 隐藏动画
        $timeout(function () {
            $(".indexLoading").hide(500);
        }, 0);
        // 返回前一页
        vm.back = function () {
            $state.go("buy",{
                // 起投金额
                startAmount: $stateParams.start,
                // 最小增减金额
                minAmount: $stateParams.min,
                // 产品ID
                productId: $stateParams.productId,
                // 年利率
                rate: $stateParams.rate,
                // 投资周期
                time: $stateParams.time,
            })
        }
        // 注入数据
        vm.money = $stateParams.money;
        vm.bank = $stateParams.bank;
        vm.cardNum = $stateParams.cardNum;
        //请求该用户姓名、身份证
        serviceHTTP.personInfoHTTP().then(function (res) {
            console.log(res);
            vm.IdCard = res.data.user.cardId;
            vm.userName = res.data.user.userName;
        })
        // 支付按钮
        vm.pay = function () {
            var data = {
                amt: Number(vm.money),
                bankCard: JSON.parse(sessionStorage.getItem("cardIdAll")),
                bankCardId: $stateParams.cardId,
                name: vm.userName,
                idNo: vm.IdCard,
                productId: Number($stateParams.productId),
                productTerm: $stateParams.time,
            }
            console.log(data);
            serviceHTTP.payHTTP(data).then(function (res) {
                console.log(res);
                
            })
        }
})