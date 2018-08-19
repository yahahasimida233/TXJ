app.controller("addCardCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    //请求该用户姓名、身份证
    serviceHTTP.personInfoHTTP().then(function (res) {
        console.log(res);
        vm.IdCard = res.data.user.cardId;
        vm.userName = res.data.user.userName;
    })
    // 下一步按钮
    vm.next = function (data) {
        if (data == true) {
            bootbox.alert({
                title: "<p>提示</p>",
                message: "<p style='text-align: center; color: red; font-weight: bold'>卡号格式错误，请重试！</p>",
                buttons: {
                    ok: {
                        label: "确认",
                        className: "btn-primary"
                    }
                }
            });
        }
        else{
            console.log(bankCardAttribution(vm.card));
            sessionStorage.setItem('step','addCard');
            sessionStorage.setItem('name',vm.userName);
            sessionStorage.setItem('idCard',vm.IdCard);
            // $state.go("home.RNStep2", { bankType: bankCardAttribution(vm.card).bankName });
            $state.go("home.RNStep2", { bankCard:vm.card })
        }
    }
})