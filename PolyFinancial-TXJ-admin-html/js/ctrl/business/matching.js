app.controller("matchingCtrl",function ($http,$state,serviceHTTP,$stateParams,data) {
    var vm = this;
    let id = $stateParams.id;
    // vm.data = data;


    vm.detail = false;

    vm.over = function (data) {//鼠标划入
        vm.detail = true;
        vm.data2 = data;
    };
    vm.leave = function () {//鼠标划出
        vm.detail = false;
        vm.data2 = {};
    };

    vm.dataThree = [];
    serviceHTTP.matchingHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;
            vm.data = response.data.data[1].contractList;
            vm.sruplusMoney = vm.list[0].waitMatchAmount;
            for(var i =0;i<2;i++){
                if(vm.data[i]){
                    vm.dataThree.push(vm.data[i])
                }
            }
            //将数组前三位单独遍历展示出来
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    vm.all = false;//查看所有默认隐藏，点击事件才会让其显示，如下
    vm.allOpen = function () {
        vm.all = true;
    };
    vm.close = function () {
        vm.all = false;
    };

    vm.selected = [];//所有被选取的投资数组
    vm.sum = 0;
    vm.select = function (e) {//将选取的投资加入数组
        if(vm.selected.indexOf(e) >= 0){//当投资已经被选过时不进行操作
            console.log(vm.selected.indexOf(e));
            console.log(vm.selected);
            return false;
        }
        if(vm.sum+e.investment > vm.sruplusMoney){
            bootbox.confirm({
                title: '操作提示',
                message: "<p style='text-align: center'>目前选中的投资总额度超过了债权金额，您要拆分选中的这个投资么？</p>",
                buttons: {
                    cancel: {
                        label: '取消'
                    },
                    confirm: {
                        label: '确认'
                    }
                },
                callback: function(result) {
                    if(result === true){
                        vm.selected.push(e);
                        vm.selected[-1].investment = e.investment-vm.sruplusMoney ;
                        console.log(vm.selected);
                        vm.sum = vm.sum + e.investment;
                        vm.sruplusMoney = vm.sruplusMoney -e.investment;
                        return false;
                    }else{
                        return false;
                    }
                }
            })
        }
        if(vm.sruplusMoney < 0){
            bootbox.alert("已经匹配好了，不用再选择投资了，快去点击匹配吧");
            return false;
        }
        vm.selected.push(e);
        vm.sum = vm.sum + e.investment;
        vm.sruplusMoney = vm.sruplusMoney -e.investment;
        console.log(vm.selected);
        console.log("sum"+vm.sum);
    };

    vm.remove = function (e) {//移除投资
        console.log(e);
        vm.index = vm.selected.indexOf(e);
        vm.selected.splice(vm.index,1);
        vm.sum = vm.sum - e.investment;
        vm.sruplusMoney = vm.sruplusMoney + e.investment;
        console.log("sum"+vm.sum);
    };

    // 点击匹配按钮
    vm.matching = function(){
        var info = {};
        info.creditorId = id;
        info.sruplusMoney = (vm.sruplusMoney < 0)?0: vm.sruplusMoney;
        info.investList = JSON.parse(JSON.stringify(vm.selected).replace("investment","matched"));
        // 把字段名称替换成和接口文档一致
        // info.investList.forEach(function(item){
        //     item.matched = item.investment;
        //     delete item.investment
        // });
        console.log(info);
        if(vm.sruplusMoney < 0){
            info.investList[-1].matched = info.investList[-1].matched + vm.sruplusMoney;
        }
        if(vm.sruplusMoney > 0){
            
        }
        serviceHTTP.matchOverHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
            }
            else {
                bootbox.alert(response.data.message)
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
});


app.constant('data',[
    {
        id : 'TZHT000002',
        money:10000
    },
    {
        id : 'TZHT000003',
        money:30000
    },
    {
        id : 'TZHT000004',
        money:40000
    },
    {
        id : 'TZHT000005',
        money:60000
    },
    {
        id : 'TZHT000007',
        money:80000
    },
    {
        id : 'TZHT000008',
        money:90000
    },
    {
        id : 'TZHT0000010',
        money:199000
    },
    {
        id : 'TZHT0000022',
        money:22222000
    }
]);
