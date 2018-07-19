app.controller("accountCtrl", function ($scope, $state, $stateParams, serviceHTTP,$timeout) {
    var vm = this;
    // var account = {
    //     id = undefined,
    //     role = undefined,
    //     account = undefined,
    //     createBy = undefined
    // };
  
    var lists = {
    "code": 0,
    "data": {
        "total": 5,
        "roles": [
            {
                "id": 1,
                "role": "超级管理员",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            },
            {
                "id": 2,
                "role": "管理员",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            },
            {
                "id": 3,
                "role": "运营",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            },
            {
                "id": 4,
                "role": "客服",
                "createAt": 1,
                "updateAt": 1,
                "createBy": "1",
                "updateBy": "1"
            }
        ],
        "accountList": [
            {
                "createAt": 1531470437788,
                "role": "超级管理员",
                "updateBy": "admin",
                "edit": false,
                "updateAt": 1531490017342,
                "id": 10,
                "state": 0,
                "account": "admin",
                "createBy": "admin"
            },
            {
                "createAt": 1531472969997,
                "role": "管理员",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531472969997,
                "id": 11,
                "state": 0,
                "account": "张三",
                "createBy": "admin"
            },
            {
                "createAt": 1531472981636,
                "role": "运营",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531472981636,
                "id": 12,
                "state": 0,
                "account": "李四",
                "createBy": "admin"
            },
            {
                "createAt": 1531473015987,
                "role": "运营",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531473015987,
                "id": 13,
                "state": 0,
                "account": "王五",
                "createBy": "admin"
            },
            {
                "createAt": 1531473015987,
                "role": "客服",
                "updateBy": "admin",
                "edit": true,
                "updateAt": 1531473015987,
                "id": 13,
                "state": 0,
                "account": "王五",
                "createBy": "admin"
            }
        ]
    },
    "message": "success"
}

// }
    vm.params = $stateParams;
    // console.log(vm.params.role);    
    // if ($stateParams.role) {
    vm.adminId = $stateParams.role;
    // }
        
    // serviceHTTP.sAccountHTTP().then(function (res) {
    //     console.log(res);
    //     vm.lists = res.data.data.accountList;
    //     // vm.lists = res.data.accountList;  //返回的数据列表
        vm.lists = lists.data.accountList;
    //     // vm.admin = res.data.roles; // 返回的角色类型
    //     console.log(vm.lists); 
    //     console.log(vm.admin);
    //     console.log(vm.params.role);
    // });
    vm.admin = lists.data.roles;
    // vm.admin = res.data.roles; // 返回的角色类型
    console.log(vm.admin);

    // vm.pipi = function () {
    //     $state.go("backStage.account" ,{role: vm.adminId}, {reload:true} )
    // }

  
    // 不可编辑状态
//     if (vm.list.edit == false) {
//         vm.edit = true;
//     }
})