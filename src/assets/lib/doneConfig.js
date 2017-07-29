/**
 * Created by xiangguo .
 * time:2017/7/25 0025.
 * email:413401168@qq.com.
 * use:auto...
 */
var kb = new keyBoard({
    "id":'kb1',
    "chaosMode" : 1,// 混乱模式,0:无混乱;1:打开时乱一次;2:每输入一个字符乱一次,默认值0
    "pressStatus" :1,// 按键状态,0:按下、抬起按键无变化;1:按下、抬起按键的颜色变化,默认值0
    "kbType" : 0,// 键盘类型,0:全键盘;1:纯数字键盘,默认值0
    "svg":"/static/svg/"//svg图片的地址
});
var passGuard1 = new passGuard({
    "mappurl" : "/api/supervise/users/passwordControlKey",
    "maxLength" : 12,// 最大输入长度
    "regExp1" : "[\\S\\s]",// 输入过程限制的正则
    "regExp2": "[\\S\\s]{6,12}",
    "displayMode" : 0,// 显示形式,0:星号;1:明文,默认值0
    "callBack":cb1,//成功回调
    "errorCallBack":cb2,//失败回调
    "rsaPublicKey" : "3081890281810092d9d8d04fb5f8ef9b8374f21690fd46fdbf49b40eeccdf416b4e2ac2044b0cfe3bd67eb4416b26fd18c9d3833770a526fd1ab66a83ed969af74238d6c900403fc498154ec74eaf420e7338675cad7f19332b4a56be4ff946b662a3c2d217efbe4dc646fb742b8c62bfe8e25fd5dc59e7540695fa8b9cd5bfd9f92dfad009d230203010001"// rsa公钥
});

function cb1(){
    console.log("成功1");
}
function cb2(){
    console.log("失败1");
}
var passGuard2 = new passGuard({
    "mappurl" : "/api/supervise/users/passwordControlKey",
    "maxLength" : 12,// 最大输入长度
    "regExp1" : "[\\S\\s]",// 输入过程限制的正则
    "regExp2": "[\\S\\s]{6,12}",
    "displayMode" : 0,// 显示形式,0:星号;1:明文,默认值0
    "callBack":cb1,//成功回调
    "errorCallBack":cb2,//失败回调
    "rsaPublicKey" : "3081890281810092d9d8d04fb5f8ef9b8374f21690fd46fdbf49b40eeccdf416b4e2ac2044b0cfe3bd67eb4416b26fd18c9d3833770a526fd1ab66a83ed969af74238d6c900403fc498154ec74eaf420e7338675cad7f19332b4a56be4ff946b662a3c2d217efbe4dc646fb742b8c62bfe8e25fd5dc59e7540695fa8b9cd5bfd9f92dfad009d230203010001"// rsa公钥
});

function cb3(){
    console.log("成功1");
}
function cb4(){
    console.log("失败1");
}
var passGuard3 = new passGuard({
    "mappurl" : "/api/supervise/users/passwordControlKey",
    "maxLength" : 12,// 最大输入长度
    "regExp1" : "[\\S\\s]",// 输入过程限制的正则
    "regExp2": "[\\S\\s]{6,12}",
    "displayMode" : 0,// 显示形式,0:星号;1:明文,默认值0
    "callBack":cb1,//成功回调
    "errorCallBack":cb2,//失败回调
    "rsaPublicKey" : "3081890281810092d9d8d04fb5f8ef9b8374f21690fd46fdbf49b40eeccdf416b4e2ac2044b0cfe3bd67eb4416b26fd18c9d3833770a526fd1ab66a83ed969af74238d6c900403fc498154ec74eaf420e7338675cad7f19332b4a56be4ff946b662a3c2d217efbe4dc646fb742b8c62bfe8e25fd5dc59e7540695fa8b9cd5bfd9f92dfad009d230203010001"// rsa公钥
});
