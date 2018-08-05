app.controller("homeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout,$interval) {
    var vm = this;
    vm.homeTitle = (sessionStorage.getItem('homeTitle'))? (sessionStorage.getItem('homeTitle')):'首页';

   

    // 启动页面定时消失
    $timeout(function(){
        $(".indexLoading").hide(500);

    },1000);

    // $interval(function(){
    //     var canvas = document.getElementById('myCanvas');
    //     var ctx = canvas.getContext('2d');
    //     //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
    //     window.requestAnimFrame = (function(){
    //         return  window.requestAnimationFrame   ||
    //             window.webkitRequestAnimationFrame ||
    //             window.mozRequestAnimationFrame    ||
    //             function( callback ){
    //                 window.setTimeout(callback, 1000 / 60);
    //             };
    //     })();
    //     //初始角度为0
    //     var step = 0;
    //     //定义三条不同波浪的颜色
    //     var lines = ["rgb(219,168,84)",
    //         "rgb(230,190,128)"];
    //     function loop(){
    //         ctx.clearRect(0,0,canvas.width,canvas.height);
    //         step++;
    //         //画3个不同颜色的矩形
    //         for(var j = lines.length - 1; j >= 0; j--) {
    //             ctx.fillStyle = lines[j];
    //             //每个矩形的角度都不同，每个之间相差45度
    //             var angle = (step+j*90)*Math.PI/180;
    //             var deltaHeight   = Math.cos(angle) * 15;
    //             var deltaHeightRight   = Math.sin(angle) * 15;
    //             ctx.beginPath();
    //             ctx.moveTo(0, canvas.height*9/10);
    //             ctx.bezierCurveTo(canvas.width /2, canvas.height*9/10+deltaHeight-30, canvas.width / 2, canvas.height*9/10+deltaHeightRight-30, canvas.width, canvas.height*9/10+deltaHeightRight);
    //             ctx.lineTo(canvas.width, canvas.height);
    //             ctx.lineTo(0, canvas.height);
    //             ctx.lineTo(0, canvas.height/2+deltaHeight);
    //             ctx.closePath();
    //             ctx.fill();
    //         }
    //         requestAnimFrame(loop);
    //     }
    //     loop();
    // },6000);

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