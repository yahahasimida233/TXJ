app.controller("homeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout,$location) {
    var vm = this;
    vm.homeTitle = (sessionStorage.getItem('homeTitle'))? (sessionStorage.getItem('homeTitle')):'首页';
    // console.log($location.$$path);
    // 启动页面定时消失
    $timeout(function(){
        $(".indexLoading").hide(500);
    },1000);

    vm.btn1 = function(){
        vm.homeTitle ='首页';
        sessionStorage.setItem('homeTitle','首页');
    };

    vm.btn2 = function(){
        vm.homeTitle ='理财';
        sessionStorage.setItem('homeTitle','理财')
    };

    vm.btn3 = function(){
        vm.homeTitle ='我的';
        sessionStorage.setItem('homeTitle','我的')
    };


    // 画布启动函数
    vm.yahaha = function(){
         // 设置轮播图图片间隔
        $("#myCarousel").carousel({
            pause: true,
            interval: 4000
        });



        $timeout(function(){
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame   ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
            //初始角度为0
            var step = 0;
            //定义两条不同波浪的颜色
            var lines = ["rgb(219,168,84)",
                "rgb(230,190,128)"];
            function loop(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                step++;
                //画3个不同颜色的矩形
                for(var j = lines.length - 1; j >= 0; j--) {
                    ctx.fillStyle = lines[j];
                    //每个矩形的角度都不同，每个之间相差45度
                    var angle = (step+j*90)*Math.PI/180;
                    var deltaHeight   = Math.cos(angle) * 15;
                    var deltaHeightRight   = Math.sin(angle) * 15;
                    ctx.beginPath();
                    ctx.moveTo(0, canvas.height*9/10);
                    ctx.bezierCurveTo(canvas.width /2, canvas.height*9/10+deltaHeight-30, canvas.width / 2, canvas.height*9/10+deltaHeightRight-30, canvas.width, canvas.height*9/10+deltaHeightRight);
                    ctx.lineTo(canvas.width, canvas.height);
                    ctx.lineTo(0, canvas.height);
                    ctx.lineTo(0, canvas.height/2+deltaHeight);
                    ctx.closePath();
                    ctx.fill();
                }
                requestAnimFrame(loop);
            }
            loop();
        },200);
    };

    // 延迟200ms执行，让画布加载完再执行函数避免报错
    if($location.$$path == '/home'){
        vm.yahaha();
    }

    // vm.path = $location.$$path;
    //
    // console.log(vm.path);
    // $scope.$watch('vm.path',function(newValue,oldValue){
    //     // 延迟200ms执行，让画布加载完再执行函数避免报错
    //     console.log(vm.path);
    //     if(vm.path == '/home'){
    //         vm.yahaha();
    //     }
    // });

    // 当从设置返回时，开始画波浪
    $scope.$on('backFS',function(event,data) {
        if(data == 'go'){
            vm.yahaha()
        }
    });

    // 点击首页，启动画布
    vm.home = function(){
        vm.homeTitle ='首页';
        sessionStorage.setItem('homeTitle','首页');
        if($location.$$path != '/home'){
            vm.yahaha();
        }
    };

    vm.trade = function(){
        vm.homeTitle ='理财';
        sessionStorage.setItem('homeTitle','理财');
    };

    vm.mine = function(){
        vm.homeTitle ='我的';
        sessionStorage.setItem('homeTitle','我的');
    };

    vm.pay = function(){
        vm.homeTitle ='理财';
        sessionStorage.setItem('homeTitle','理财');
        // 验证是否登录，否则转跳到登陆页面
        vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
        if(vm.loginOrNot === 0){
            $state.go('login');
            return false;
        }
        $state.go('product',{productId: vm.list.product_url})
    };

    // $timeout(function(){
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
    //     //定义两条不同波浪的颜色
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
    // },200);



    serviceHTTP.indexHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.code == 0) {
            vm.list = response.data.recommend[0];
            vm.imgList = response.data.banner;
            console.log(vm.list);
            if(vm.list){
                var data = {
                    productId: vm.list.id,

                };
                serviceHTTP.productHTTP(data).then(function (res) {
                    console.log(res);
                    vm.product = res.data.productInfo;
                    console.log(vm.product)

                })
            }

        }
        else if(response.data.code !==  0) {
            bootbox.alert(response.data.message);

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });



});