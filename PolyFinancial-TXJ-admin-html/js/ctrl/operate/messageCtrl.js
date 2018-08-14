app.controller("messageCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;

    // 从URL获取参数
    vm.keyWord = $stateParams.articleTitle || undefined;
    vm.articleState = $stateParams.articleState || undefined;
    vm.createBy = $stateParams.createBy || undefined;
    vm.minTime = $stateParams.minTime || undefined;
    vm.maxTime = $stateParams.maxTime || undefined;
    vm.loanAtStart = new Date(Number( $stateParams.loanAtStart ))|| undefined;
    vm.loanAtEnd = new Date(Number( $stateParams.loanAtEnd ))|| undefined;
    vm.startHour = $stateParams.startHour || undefined;
    vm.endHour = $stateParams.endHour || undefined;
    vm.timePicker1 = $stateParams.timePicker1 || undefined;
    vm.timePicker2 = $stateParams.timePicker2 || undefined;


    // $("#timePicker1").hunterTimePicker();
    $("#timePicker2").hunterTimePicker({
        callback: function(e){
            vm.timePicker2 = $('#timePicker2').val();
            vm.endHour = Date.parse(new Date("1970-01-01 "+vm.timePicker2));
            console.log(vm.endHour)
        }
    });

    $('#timePicker1').hunterTimePicker({
        callback: function(e){
            vm.timePicker1 = $('#timePicker1').val();
            vm.startHour = Date.parse(new Date("1970-01-01 "+vm.timePicker1));
            console.log(vm.startHour)

        }
    });


    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false,
        opened2:false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };
    vm.open2 = function(){
        vm.popup.opened2 = true;
    };
    vm.today = new Date();

    // 获取消息列表
    vm.getList = function(){
        var info ={
            articleTitle: vm.keyWord,
            articleState: vm.articleState,
            createBy: vm.createBy,
            minTime:vm.minTime,
            maxTime:vm.maxTime,
            size: $stateParams.size || 10,
            page: $stateParams.page || undefined
        };
        serviceHTTP.messageHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data.articleList;
                vm.createByList = response.data.data.createByList;
                vm.totalItems = response.data.data.total;
                console.log(vm.list);
                vm.size = $stateParams.size || 10;
                vm.page = $stateParams.page || undefined;
            }
            else {
                bootbox.alert(response.data.message)
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();


    // 取消推送
    vm.cancel = function(id){
        serviceHTTP.messageCancelHTTP(id).then(function successCallback(response) {
            // 请求成功执行代码
            if(response.data.message === "success") {
                bootbox.alert("取消推送成功");
                $state.reload('backStage.article');
            }
            else {
                bootbox.alert(response.data.message)
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };


    // 清除按钮
    vm.reset = function(){
        vm.articleState= undefined;
        vm.keyWord = undefined;
        vm.createBy= undefined;

        // 清空起始时间
        vm.loanAtStart = undefined;
        vm.startHour = undefined;
        $('#timePicker1').val(undefined);

        // 清空截止时间
        vm.loanAtEnd = undefined;
        vm.endHour = undefined;
        $('#timePicker2').val(undefined);


        vm.size = 10;
        vm.page = 1;
        vm.search();
    };




    // 删除消息
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个消息？</p>",
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
                    serviceHTTP.messageDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "删除成功") {
                            bootbox.alert("删除成功，页面即将刷新");
                            $state.reload('backStage.article');
                        }
                        else {
                            bootbox.alert(response.data.message);
                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                    });

                }
            }
        })
    };




    // 把日历的时间转换为时间戳
    vm.changeTimeCode = function(){
        // 起始的日期还有小时分钟转化为时间戳
        console.log("star2:",vm.startHour);
        console.log("end2:",vm.endHour);
        if(isNaN(vm.loanAtStart)){
            vm.loanAtStart = undefined
        }else {
            vm.loanAtStart = (Date.parse(vm.loanAtStart) == undefined)? 0 : Date.parse(vm.loanAtStart);
        }
        if(!vm.loanAtStart){
            vm.minTime = undefined;
        }else if(!vm.startHour){
            vm.minTime = vm.loanAtStart;
        }else{
            vm.minTime = vm.loanAtStart + vm.startHour;
        }

        // 将截止时间的日期还有小时分钟转化为时间戳
        if(isNaN(vm.loanAtEnd ) ){
            vm.loanAtEnd  = undefined
        }else {
            vm.loanAtEnd = (!vm.loanAtEnd )? vm.loanAtEnd .getTime(): Date.parse(vm.loanAtEnd );
        }
        if(!vm.loanAtEnd){
            vm.maxTime = undefined
        }else if(!vm.endHour){
            vm.maxTime = vm.loanAtEnd
        }else{
            vm.maxTime =  vm.loanAtEnd + vm.endHour
        }


        console.log("star1:",vm.loanAtStart);
        console.log("star2:",vm.startHour);
        console.log("end1:",vm.loanAtEnd);
        console.log("end2:",vm.endHour);

        console.log('minTime:',vm.minTime);
        console.log('minTime:',vm.maxTime);
    };

    // 搜索功能
    vm.search = function(){
        vm.changeTimeCode();
        $state.go('backStage.article', {
            articleTitle: vm.keyWord,
            articleState: vm.articleState,
            createBy: vm.createBy,
            minTime: vm.minTime,
            maxTime: vm.maxTime,
            loanAtEnd: vm.loanAtEnd,
            loanAtStart: vm.loanAtStart,
            startHour: vm.startHour,
            endHour : vm.endHour,
            timePicker2:$('#timePicker2').val(),
            timePicker1:$('#timePicker1').val(),
            size: vm.size,
            page: vm.page
        })
    };

});