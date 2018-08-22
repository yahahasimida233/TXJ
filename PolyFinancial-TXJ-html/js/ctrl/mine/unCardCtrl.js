app.controller("unCardCtrl", function ($state, $stateParams, serviceHTTP) {
    var vm = this;
    // 注入解绑银行卡信息
    vm.bankType = $stateParams.bankType;
    vm.bankCard = JSON.parse(sessionStorage.getItem("unCardId"));
    var card = vm.bankCard;
    // 解除绑定按钮
    vm.unCard = function (card) {
        bootbox.confirm({
            title: '<strong> 操作提示 </strong>',
            message: "<p style='text-align: center'>解除绑定后银行服务不可用，确认取消绑定？</p>",
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
                    $state.go('home.SureUnCard', 
                        {
                            bankType: vm.bankType, 
                            id: $stateParams.id
                        }
                    );
                }
                if (result == false) {
                    $state.go("home.mineCard");
                }
            }
        })
    }
})