app.controller("productCtrl", function ($state, $stateParams, serviceHTTP) {
    var vm = this;
    // 请求产品列表数据
    serviceHTTP.productListHTTP().then(function (res) {
        console.log(res);
        vm.lists = res.data.productList.list;

    })

})