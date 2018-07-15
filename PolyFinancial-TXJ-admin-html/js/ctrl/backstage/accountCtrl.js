app.controller("accountCtrl", function ($scope, $state, $stateParams, serviceHTTP,$timeout) {
    var vm = this;
    // var account = {
    //     id = undefined,
    //     role = undefined,
    //     account = undefined,
    //     createBy = undefined
    // };

    // if (vm.role == 123){
    //     vm.sure = true;
    // }

    var list = {
        status:[
            {
                name: '全部',
                num: undefined
            }, 
            {
                name: '首页',
                num: 0
            }, 
            {
                name: '找职位',
                num: 1
            }, 
            {
                name: '找精英',
                num: 2
            }, 
            {
                name: '行业大图',
                num: 3
            }
        ]
    };
    // vm.model = list; 

    // vm.lists = {
        
    // "code": 0,
    // "data": {
    //     "total": 5,
        // roles: [
        //     {
        //         "id": 1,
        //         "role": "超级管理员",
        //         "createAt": 1,
        //         "updateAt": 1,
        //         "createBy": "1",
        //         "updateBy": "1"
        //     },
        //     {
        //         "id": 2,
        //         "role": "管理员",
        //         "createAt": 1,
        //         "updateAt": 1,
        //         "createBy": "1",
        //         "updateBy": "1"
        //     },
        //     {
        //         "id": 3,
        //         "role": "运营",
        //         "createAt": 1,
        //         "updateAt": 1,
        //         "createBy": "1",
        //         "updateBy": "1"
        //     },
        //     {
        //         "id": 4,
        //         "role": "客服",
        //         "createAt": 1,
        //         "updateAt": 1,
        //         "createBy": "1",
        //         "updateBy": "1"
        //     }
        // ]
        // vm.list = roles.role;
//         "accountList": [
//             {
//                 "createBy": 1531470437788,
//                 "role": "超级管理员",
//                 "updateBy": "admin",
//                 "edit": false,
//                 "updateAt": 1531490017342,
//                 "id": 10,
//                 "state": 0,
//                 "account": "admin",
//                 "createAt": "admin"
//             },
//             {
//                 "createBy": 1531472969997,
//                 "role": "管理员",
//                 "updateBy": "admin",
//                 "edit": true,
//                 "updateAt": 1531472969997,
//                 "id": 11,
//                 "state": 0,
//                 "account": "张三",
//                 "createAt": "admin"
//             },
//             {
//                 "createBy": 1531472981636,
//                 "role": "运营",
//                 "updateBy": "admin",
//                 "edit": true,
//                 "updateAt": 1531472981636,
//                 "id": 12,
//                 "state": 0,
//                 "account": "李四",
//                 "createAt": "admin"
//             },
//             {
//                 "createBy": 1531473015987,
//                 "role": "运营",
//                 "updateBy": "admin",
//                 "edit": true,
//                 "updateAt": 1531473015987,
//                 "id": 13,
//                 "state": 0,
//                 "account": "王五",
//                 "createAt": "admin"
//             },
//             {
//                 "createBy": 1531473015987,
//                 "role": "客服",
//                 "updateBy": "admin",
//                 "edit": true,
//                 "updateAt": 1531473015987,
//                 "id": 13,
//                 "state": 0,
//                 "account": "王五",
//                 "createAt": "admin"
//             }
//         ]
//     },
//     "message": "success"
// }

    // }
    vm.params = $stateParams;
    console.log(vm.params.role);    

    // serviceHTTP.sAccountHTTP().then(function (res) {
    //     console.log(res);
    //     var lists = res.data.data.accountList;
    //     vm.lists = lists;
    //     console.log(lists);
    //     // var roles = res.data.data.roles;
    //     vm.roles = res.data.data.roles;
    //     console.log(vm.roles);
    //     console.log(vm.params.role);
    // });

    vm.roles = [
        "超级管理员",
        "管理",
        "运营",
        "客服"
    ]
    vm.pipi = function () {
        $state.go("backStage.account" ,{role: vm.xxx}, {reload:true} )
    }
})