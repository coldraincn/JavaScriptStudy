1:js所有数字都是双精度

2：位运算符将数字转换为32位大端有符号整数（补码）

3:(8).toString()//"8"

(8).toString(2)//"1000"

(-8).toString(2)//"-1000"

4:parseInt("1001",2)//9

parseInt("1001",10)//1001

parseInt("-1001",2)//-9

parseInt("10.01",2)//2

parseInt("34",2)//NaN