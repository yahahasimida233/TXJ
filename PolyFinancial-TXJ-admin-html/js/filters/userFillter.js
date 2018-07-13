app.filter('status', function() { //可以注入依赖
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