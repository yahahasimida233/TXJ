app.controller("mineCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;

});