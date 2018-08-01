app.controller("loginCtrl",function ($http,$state,serviceHTTP) {
    var vm = this;
    
    vm.login = function() {
        var user = {
            account: vm.name,
            password: vm.password
        };
        console.log(user);
        
        serviceHTTP.loginHTTP(user).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);

            console.log(response.data.message);
            if(response.data.message === "success") {
                var arr = response.data.data;
                // 给模块添加是否勾选属性
                angular.forEach(arr, function (data) {
                    data.ifChecked = false
                });
                // 处理数据结构为层级关系
                var sideBar = []; //用于存储处理过后的数组对象
                function change(e) {
                    for (var i = 0; i < e.length; i++) { //遍历每一个元素
                        if (e[i].parentModuleId === 0) { //当为父级元素时开始判断
                            var obj = {}; //创建一个对象用于存储父级标签名，子级标签的信息
                            obj.sideBarTitle = e[i].moduleName;
                            obj.moduleId = e[i].moduleId;
                            obj.sideBarContent = []; //为对象添加属性
                            for (var j = 0; j < e.length; j++) { //开始第二次遍历，
                                if (e[j].parentModuleId === e[i].moduleId) { //当元素的parentd和  父级元素id一致时
                                    obj.sideBarContent.push(e[j]) //把这个元素添加到对象的一条属性中去，用于第二次repeat
                                }
                            }
                            sideBar.push(obj); //把obj添加到sideBar中去。
                        }
                    }
                }
                change(arr);
                console.log(sideBar);
                //存起来，一铭大佬也可以用
                sessionStorage.setItem("sideBar", JSON.stringify(sideBar));
                sessionStorage.setItem("userName",vm.name);



                sessionStorage.setItem("logo","233");
                $state.go('backStage');
            }
            else {
                bootbox.alert("请输入正确的用户名和密码！");
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
        // $http({
        //     method: 'get',
        //     url: '/admin/admin/a/u/creditor/matcher/list',
        //     data:{name:vm.name,pwd:vm.passWord},
        //
        // }).then(function successCallback(response) {
        //     //请求成功的代码
        //     console.log(response.data.message);
        //     if(response.data.message === "success") {
        //         sessionStorage.setItem("logo","233");
        //         $state.go('backStage');
        //     }else {
        //         alert("Please enter the correct username or password")
        //     }
        //
        // }, function errorCallback(response) {
        //     // 请求失败执行代码
        //     alert("error");
        // });
    }
});