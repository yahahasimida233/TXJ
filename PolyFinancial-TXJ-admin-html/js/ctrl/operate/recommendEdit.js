app.controller("recommendEditCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    if(id == 0){
        vm.title = "鼎力推荐新增"

    }else{
        vm.title= "鼎力推荐编辑";
    }

    // 图片上传
    vm.imgUpload = function(files) {
        console.log(files);
        vm.reader = new FileReader();   //创建一个FileReader接口
        // vm.onload = false;
        vm.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64
        vm.reader.onload = function () {
            $scope.$apply(function () {
                vm.img = files[0];
                vm.imgSize = files[0].size > 1024 * 1024 ? (files[0].size / 1024 / 1024).toFixed(2) + 'MB' : (files[0].size / 1024).toFixed(2) + 'KB';
                vm.imgName = files[0].name;
                vm.onload = true;
            });
            if(vm.img.size > 5242880){
                bootbox.alert("换张图片吧，图片太大了服务器受不了呢，最大不能超过5mb哟");
                return false;
            }
            var form = new FormData();
            form.append("pictureFile", vm.img);
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
    };

    // 保存按钮
    vm.change = function(id){
        var info = {};
        info.pictureName = vm.pictureName;
        info.bannerPictureFile = vm.imgSrc ;

        if(id == 0){
            serviceHTTP.recommendNewHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("新增成功！");
                    $state.reload('backStage.recommend');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });

        }else{
            info.id= id;
            serviceHTTP.recommendEditHTTP(info).then(function successCallback(response) {
                // 请求成功执行代码
                console.log(response);
                if(response.data.message === "success") {
                    bootbox.alert("修改成功!");
                    $state.reload('backStage.recommend');
                }
                else {

                }
            }, function errorCallback(res) {
                // 请求失败执行代码
            });
        }

    }
});