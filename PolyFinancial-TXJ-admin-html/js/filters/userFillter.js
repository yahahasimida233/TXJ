
app.filter('status', function() {
    return function(text) {
        if(text == 0){
            return text = "冻结"
        }
        if(text == 1){
            return text = "解冻"
        }
    }
});

app.filter('statusFilter',function(){
    return function (a){
        switch (a){
            case "0":
                a = "正常";
                break;
            case "1":
                a = "冻结";
                break;

        }
        return a;
    }
});

app.filter('userTradeType',function(){
    return function (a){
        switch (a){
            case "0":
                a = "付款";
                break;
            case "1":
                a = "回款";
                break;

        }
        return a;
    }
});

app.filter('userState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "成功";
                break;
            case "1":
                a = "失败";
                break;

        }
        return a;
    }
});

app.filter('userContract',function(){
    return function (a){
        switch (a){
            case "0":
                a = "生效中";
                break;
            case "1":
                a = "已失效";
                break;

        }
        return a;
    }
});

app.filter('money',function(){
    return function (n){
        const fraction = ['角', '分'];
        const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        const unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟'],
        ];
        let num = Math.abs(n);
        let s = '';
        fraction.forEach((item, index) => {
            s += (digit[Math.floor(num * 10 * (10 ** index)) % 10] + item).replace(/零./, '');
        });
        s = s || '整';
        num = Math.floor(num);
        for (let i = 0; i < unit[0].length && num > 0; i += 1) {
            let p = '';
            for (let j = 0; j < unit[1].length && num > 0; j += 1) {
                p = digit[num % 10] + unit[1][j] + p;
                num = Math.floor(num / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }

        return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
});

app.filter('debtState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "已匹配";
                break;
            case "2":
                a = "未匹配";
                break;
            case "1":
                a = "匹配中";
                break;

        }
        return a;
    }
});

// 角色状态过滤
app.filter("userState", function () {
    return function (num) {
        switch (num) {
            case 0:
                return "启用";
                break;
            case 1:
                return "禁用";
                break;
        }
    }
});
// 角色不可编辑按钮
// app.filter("btnDisabled", function () {
//     return function (edit) {
//         if(edit==true){
//             return false;    
//         }
//         else{
//             return true
//         }
//     }
// })
app.filter("btnDisabled", function () {
    return function (edit) {
        var newEdit = edit == true ? false : true;
        return newEdit;
    }
});

app.filter('productMode',function(){
    return function (a){
        switch (a){
            case "0":
                a = "本息返还";
                break;
            case "1":
                a = "先息后本";
                break;

        }
        return a;
    }
});


app.filter('productState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "上架";
                break;
            case "1":
                a = "下架";
                break;

        }
        return a;
    }
});

app.filter('productStateChange',function(){
    return function (a){
        switch (a){
            case "0":
                a = "下架";
                break;
            case "1":
                a = "上架";
                break;

        }
        return a;
    }

});

app.filter('bannerState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "上架";
                break;
            case "1":
                a = "下架";
                break;

        }
        return a;
    }

});

app.filter('feedbackState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "已回复";
                break;
            case "1":
                a = "回复";
                break;

        }
        return a;
    }

});

app.filter('messageState',function(){
    return function (a){
        switch (a){
            case "0":
                a = "已推送";
                break;
            case "1":
                a = "待推送";
                break;
            case "2":
                a = "已取消";
                break;

        }
        return a;
    }

});