app.controller("addCardCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    //请求该用户姓名、身份证
    serviceHTTP.personInfoHTTP().then(function (res) {
        console.log(res);
        vm.IdCard = res.data.user.cardId;
        vm.userName = res.data.user.userName;
    })

    vm.show = function (data) {
        let card2 = bankCardAttribution(data)
        console.log(card2.cardType,card2.bankName);
    }
    
    // 下一步按钮
    vm.next = function (data, card) {
        if (data == true) {
            tips();
        }
        // 验证银行卡类型
        let card2 = bankCardAttribution(card);
        if (data == false && card2.cardType != "DC") {
            tips();
        }
        else{
                $state.go("home.RNStep2", { bankType:  card2.bankName});
            }
        }
        // 银行卡格式错误提示
        function tips(){
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
    })