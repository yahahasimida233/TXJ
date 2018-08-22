app.controller("mineCardCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }
    // 用户银行卡列表信息
    serviceHTTP.bankCardListHTTP().then(function (res) {
        console.log(res);
        vm.cardLists = res.data.data;
    });

    //添加银行卡
    vm.addCard = function () {
        // 验证该用户是否实名认证
        serviceHTTP.personInfoHTTP().then(function (res) {
            console.log(res);
            if (res.data.user.realnameState == 0) {
                if ((vm.cardLists).length == 2) {  //已绑卡上限
                    bootbox.alert({
                        title: '<strong> 操作提示 </strong>',
                        message: "<p style='text-align: center'>您已达到2张银行卡绑卡上限。若想继续添加银行卡，请您先解绑。</p>",
                        buttons: {
                            ok: {
                                label: '确认'
                            }
                        }
                    })
                }
                else{
                    $state.go("home.addCard")
                }
            } 
            else {
                bootbox.confirm({
                    title: '<strong> 操作提示 </strong>',
                    message: "<p style='text-align: center'>您还未实名认证，绑卡前需要完成实名认证，请您先前往实名认证。</p>",
                    buttons: {
                        confirm: {
                            label: '确认'
                        },
                        cancel: {
                            label: '取消'
                        }
                    },
                    callback: function (result) {
                        if (result == true) {
                            $state.go('home.realName');
                        }
                        if (result == false) {
                            $state.go("home.mineCard");
                        }
                    }
                })
            };
        })
    }
    // 点击对应银行卡进入解绑银行卡页面
    vm.chose = function (bankCard, bankType) {
        var unCardId = bankCard;
        sessionStorage.setItem("unCardId", JSON.stringify(unCardId));
        $state.go("home.unCard", {bankType: bankType})
    }

});