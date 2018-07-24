app.controller("homeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.homeTitle = "首页";
    // 启动页面定时消失
    $timeout(function(){
        $(".indexLoading").hide(500);
    },1000);


    // // 设置轮播图图片间隔
    $("#myCarousel").carousel('cycle');
    // $scope.myInterval = 2000;
    // $scope.noWrapSlides = false;
    // var slides = $scope.slides = [];
    // $scope.addSlide = function () {
    //     var newWidth = 600 + slides.length + 1;
    //
    //     slides.push({
    //         image: 'https://unsplash.it/400/800/?image=719',
    //         text: '狗蛋',
    //     });
    //     slides.push({
    //         image: 'https://unsplash.it/400/800/?image=718',
    //         text: '二狗',
    //     });
    //
    // };
    // $scope.addSlide();




});