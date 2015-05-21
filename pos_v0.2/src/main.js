function printInventory(inputs) {
    var result = '***<没钱赚商店>购物清单***\n';
    var all_items = loadAllItems();
    var sum_list = [];

    for (var i=0; i<inputs.length; i++) {
        var exist = false;
        var temp = {};

        for (var x=0; x<all_items.length; x++) {
            if (inputs[i] === all_items[x].barcode) {
                for (var y=0; y<sum_list.length; y++) {
                    if (all_items[x].name === sum_list[y].name) {
                        sum_list[y].count++;
                        exist = true;
                    }
                }
                if (!exist) {
                    temp.name = all_items[x].name;
                    temp.unit = all_items[x].unit;
                    temp.price = all_items[x].price;
                    temp.count = 1;
                    sum_list.push(temp);
                }
            }
        }
    }

    var total_price = 0;
    for (var z=0; z<sum_list.length; z++) {
        result += '名称：'+ sum_list[z].name + '，' +
                '数量：' + sum_list[z].count+sum_list[z].unit + '，' +
                '单价：' + sum_list[z].price.toFixed(2) + '(元)' + '，' +
                '小计：' + (sum_list[z].price * sum_list[z].count).toFixed(2) + '(元)\n';

        total_price += sum_list[z].price * sum_list[z].count;
    }

    result += '----------------------\n';
    result += '总计：' + total_price.toFixed(2) + '(元)\n';
    result += '**********************';
    console.log(result);
}
