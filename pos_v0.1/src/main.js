function printInventory(inputs) {
    var result = '***<没钱赚商店>购物清单***\n';
    var sum_list = [];

    for (var i=0; i<inputs.length; i++) {
        var exist = false;
        var temp = {};

        for (var j=0; j<sum_list.length; j++) {
            if (inputs[i].name === sum_list[j].name) {
                sum_list[j].count++;
                exist = true;
            }
        }

        if (!exist) {
            var temp = {
                name : inputs[i].name,
                unit : inputs[i].unit,
                price : inputs[i].price,
                count : 1
            };
            sum_list.push(temp);
        }
    }

    var total_price = 0;
    for (var x=0; x<sum_list.length; x++) {
        result += '名称：'+ sum_list[x].name + '，' +
        '数量：' + sum_list[x].count+sum_list[x].unit + '，' +
        '单价：' + sum_list[x].price.toFixed(2) + '(元)' + '，' +
        '小计：' + (sum_list[x].price * sum_list[x].count).toFixed(2)+'(元)\n';

        total_price += sum_list[x].price * sum_list[x].count;
    }

    result += '----------------------\n';
    result += '总计：' + total_price.toFixed(2) + '(元)\n';
    result += '**********************';
    console.log(result);
}
