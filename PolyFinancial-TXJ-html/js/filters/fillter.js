

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

// 用户名过滤只显示姓
app.filter("username", function () {
    return function (username) {
        var a = username.slice(1).replace(/./g, '*');
        var showName = username[0].concat(a);
        return showName;
    }
});
// 银行卡号过滤 *+显示最后4位（默认银行卡号为19位）
app.filter("card", function () {
    return function (data) {
        var b = data.slice(15);
        var showNum = "**** **** **** ***" + b;
        return showNum;
    }
});
// 银行卡过滤，只返回最后四位数字（默认银行卡号为19位）
app.filter("cardNum",function () {
    return function (data) {
        var num = data.slice(15);
        return num;
    }
})
//银行卡logo
app.filter("showImg",function () {
    return function (data) {
        switch (data) {
            case "中国银行":
                data = "../../img/bankLogo/中国银行.png"
                break;
            case "工商银行":
                data = "../../img/bankLogo/工商银行.png"
                break;
            case "建设银行":
                data = "../../img/bankLogo/建设银行.png"
                break;
            case "农业银行":
                data = "../../img/bankLogo/农业银行.png"
                break;
            case "邮政银行":
                data = "../../img/bankLogo/邮政银行.png"
                break;
            case "交通银行":
                data = "../../img/bankLogo/交通银行.png"
                break;
            case "招商银行":
                data = "../../img/bankLogo/招商银行.png"
                break;
            case "中信银行":
                data = "../../img/bankLogo/中信银行.png"
                break;
            case "华夏银行":
                data = "../../img/bankLogo/华夏银行.png"
                break;
            case "民生银行":
                data = "../../img/bankLogo/民生银行.png"
                break;
            case "浦发银行":
                data = "../../img/bankLogo/浦发银行.png"
                break;
            case "广发银行":
                data = "../../img/bankLogo/广发银行.png"
                break;
            case "平安银行":
                data = "../../img/bankLogo/平安银行.png"
                break;
            case "兴业银行":
                data = "../../img/bankLogo/兴业银行.png"
                break;
            case "光大银行":
                data = "../../img/bankLogo/光大银行.png"
                break;
            default:
                data = "../../img/bankLogo/银联.png"
                break;
        }
        return data;
    }
})