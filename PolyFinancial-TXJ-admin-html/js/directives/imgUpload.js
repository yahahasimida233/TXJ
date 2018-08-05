angular.module('myApp').directive('myPic', function ($http, $rootScope) {
    return{
        restrict: 'EA',
        templateUrl: 'directives/my-pic/my-pic.html',
        replace: true,
        scope: {
            imageSrc: "="
        },
        link: function (scope, element, attr) {
            scope.isShow = false; // 默认隐藏上传信息，点击选择文件后显示

            // 选择文件按钮
            scope.fileChanged = function (ele) {
                scope.$apply(function () {
                    scope.files = ele.files[0]; // 保存要上传的图片信息到files
                    scope.input = ele; // 保存input：file这个dom节点
                    scope.fileName = scope.files.name; // 图片名字
                    scope.fileSize = scope.files.size; // 图片大小
                    scope.isShow = true;
                })
            }

            // 上传图片
            scope.upload = function () {
                var formData = new FormData(); // 创建一个FormData实例，用来存放要上传的参数
                scope.fileReader = new FileReader(); // 创建一个FileReader实例
                scope.fileReader.onprogress = function (ev) { // 读取中会触发这个事件
                    scope.progress = Math.round(ev.lengthComputable ? ev.loaded * 100 / ev.total : 0);
                }
                if (scope.fileSize <= 5242880){
                    scope.fileReader.readAsArrayBuffer(scope.files); // 用于启动读取指定的scope.files内容并触发时事件，否则无法触发progress事件
                    formData.append('file', scope.files); // 要上传的参数以键值对的形式存入formData
                    $http ({
                        method: 'POST',
                        url: '/carrots-admin-ajax/a/u/img/task',
                        data: formData,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity // 不对formData进行序列化
                    }).then(function (res) {
                        if (res.data.code === 0){
                            scope.okIcon = true;
                            scope.imgSrc = res.data.data.url;
                        }else {
                            $rootScope.alert('上传失败');
                        }
                    },function (reason) {
                        scope.removeIcon = true; // 上传失败显示X
                    })
                } else {
                    $rootScope.alert('不能上传大于5MB的文件')
                }

                // // 删除按钮
                scope.delete = function () {
                    scope.fileReader.abort(); // 中断读取
                    scope.removeIcon = false;
                    scope.isShow = false;
                    scope.okIcon = false;
                    scope.progress = 0;
                    scope.imageSrc = undefined;
                    // angular.element('#preview').attr('src', ''); // 删除预览图
                    scope.input.value = ''; // 防止删除一个文件后不能再次上传同一个文件的问题
                }
            }
        }
    }
});