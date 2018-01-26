
//import命令具有提升效果，会提升到整个模块的头部，首先执行。
//import语句会执行所加载的模块，因此可以有下面的写法。
import 'lodash';
//因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
// 正确
export default 42;

// 报错
export 42;