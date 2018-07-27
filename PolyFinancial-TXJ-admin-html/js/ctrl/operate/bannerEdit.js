app.controller("bannerEditCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    if(id == 0){
        vm.title = "Banner新增"

    }else{
        vm.title= "Banner编辑";
        serviceHTTP.bannerDetailedHTTP(id).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                // vm.imgSrc = response.data.data.url;
                vm.list = response.data.bannerRecommend;

            }
            else {
                alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }




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
        form.append("file", vm.img);
        serviceHTTP.imgUploadURL(form).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.imgSrc = response.data.data.url;
                console.log("上传成功");
            }
            else {
                alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
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
    vm.change = function(id){
        var info = {};
        info.pictureName = vm.pictureName;
        info.carouselTime = vm.carouselTime;
        info.url = vm.url ;
        info.bannerPictureFile = vm.imgSrc ;

        if(id == 0){
            serviceHTTP.NewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("新增成功！");
                    $state.reload('backStage.banner');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });

        }else{
            info.id= id;
            serviceHTTP.bannerEditHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("修改成功!");
                    $state.reload('backStage.banner');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }
});