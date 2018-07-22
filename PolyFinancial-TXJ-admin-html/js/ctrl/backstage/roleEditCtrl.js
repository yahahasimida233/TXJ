app.controller("roleEditCtrl",function ($state,$stateParams, serviceHTTP) {
    var vm = this;
    var id = $stateParams.id;
    if(id){
        vm.title = "角色编辑"
    }
    else{
        vm.title = "角色新增"
    }
    serviceHTTP.gModuleHTTP(id).then(function (res) {
        console.log(res);
        
    })


})