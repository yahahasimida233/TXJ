app.controller("messageEditCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    if(vm.id == 0){
        vm.messageTitle = "消息新增"

    }else{
        vm.messageTitle= "消息编辑";
        serviceHTTP.messageDetailedHTTP(vm.id).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == "0") {
                vm.list = response.data.data;
                vm.articleTitle = vm.list.articleTitle;
                vm.introduction = vm.list.articleContent;
                vm.imgSrc = vm.list.articlePicture;
                vm.success = 'success';
                vm.onload = true;
                vm.setTime = (vm.list.sendTime == 0)?0:1;
                if(vm.setTime == 1){
                    vm.bigDate = new Date(Number( vm.list.sendTime));
                    console.log(vm.bigDate);
                    // console.log((vm.date+"").slice(-26,-21));

                    $('#timePicker').val((vm.bigDate+"").slice(-26,-21));
                    vm.date = Number(vm.list.sendTime) - Date.parse(new Date("1970-01-01 "+(vm.bigDate+"").slice(-26,-21)))
                    debugger
                }
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });

    }


    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };

    $('#timePicker').hunterTimePicker({
        callback: function(e){
            vm.timePicker = $('#timePicker').val();
            vm.startHour = Date.parse(new Date("1970-01-01 "+vm.timePicker));
            console.log(vm.startHour)

        }
    });


    // 图片上传
    vm.imgUpload = function(files) {
        vm.reader = new FileReader();   //创建一个FileReader接口
        // vm.onload = false;
        vm.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64
        vm.reader.onload = function () {
            $scope.$apply(function () {
                vm.img = files[0];
                vm.imgSize = files[0].size > 1024 * 1024 ? (files[0].size / 1024 / 1024).toFixed(2) + 'MB' : (files[0].size / 1024).toFixed(2) + 'KB';
                vm.imgName = files[0].name;
                vm.onload = true;
                console.log(vm.img)
            });
        };

    };

    vm.upLoad = function () {//上传图片
        if(vm.img.size > 5242880){
            bootbox.alert("换张图片吧，图片太大了服务器受不了呢，最大不能超过5mb哟");
            return false;
        }
        var form = new FormData();
        form.append("pictureFile", vm.img);
        serviceHTTP.imgUploadURL(form).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "文件上传成功") {
                vm.imgSrc = response.data.url;
                vm.success = 'success';
                bootbox.alert("上传成功");
                console.log(vm.imgSrc)
            }
            else {
                alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    // 图片删除按钮
    vm.delete = function () {
        vm.onload = false;
        vm.success = undefined;
        vm.imgSrc = undefined;
        vm.img = undefined;
        vm.progress = 0;
        document.getElementById('upLoadImg').value = "";
        document.getElementById('upLoadImg').files[0] = "";


    };

    // 保存按钮
    vm.change = function(){
        var info = {};
        info.articleTitle = vm.articleTitle;
        info.articleContent = vm.introduction;
        info.articlePicture = vm.imgSrc;
        info.sendTarget = 0;
        if(vm.setTime == 0){
            info.sendTime = 0
        }else if(!vm.setTime){
            bootbox.alert("您好，请选择消息推送的方式再提交。");
            return false;
        }else{

            vm.startHour = Date.parse(new Date("1970-01-01 "+ $('#timePicker').val()));
            console.log(vm.startHour);
            if(!vm.date || !vm.startHour ){
                bootbox.alert("您好，请选择推送消息的时间再推送消息");
                return false;
            }else{
                if(!Date.parse(vm.date)){
                    info.sendTime= vm.date + vm.startHour
                }else {
                    console.log(vm.date);
                    info.sendTime= Date.parse(vm.date) + vm.startHour
                }

            }
        }


        if(vm.id == 0){
            console.log(info);
            serviceHTTP.messageNewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.code == 0) {
                    bootbox.alert("新增成功！");
                    $state.go('backStage.article');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });

        }else{
            info.id= vm.id;
            console.log(info);
            serviceHTTP.messageEditHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.code == 0) {
                    bootbox.alert("修改成功!");
                    $state.go('backStage.article');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }
});


