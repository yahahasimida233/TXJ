app.directive('pushImg', function () {
    return {
        restrict: 'AE',
        scope: {
            option: '='
        },
        templateUrl: 'js/directive/pushimg/push-img.html',
        link: function (scope, element, attrs, controller) {

            var option = scope.option

            // 选择图片
            scope.chooseImage = function () {
                var file = document.getElementById("file").files[0]
                scope.imgName = file.name
                scope.imgSize = (file.size / 1000000) + 'MB'
                scope.$apply()
            }
            // 上传图片
            scope.pushImage = function () {
                var proBar = setInterval(Time, 50) //设置进度条事件
                var file = document.getElementById("file").files[0]
                var imgDate = new FormData()
                imgDate.append('file', file)
                option.click(imgDate)
                //进度条
                function Time() {
                    var progress = $("#progress")
                    progress.css('width', (option.pro + '%'))
                    if (option.pro < 90) {
                        option.pro += 1
                    } else if (option.pro == 100) {
                        scope.$apply(scope.imgTxt = 'OK')
                        clearInterval(proBar)
                    }
                }
            }

            scope.delete = function () {
                angular.element(document.querySelector('#readimg')).attr('src', '')
                $("#file").val('')
                scope.imgName = null
                scope.imgSize = null
                scope.imgTxt = null
                $("#progress").css('width', '0')
            }
        }
    }
})