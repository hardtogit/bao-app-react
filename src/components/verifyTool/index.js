/**
 * Created by xiangguo .
 * time:2017/8/18 0018.
 * email:413401168@qq.com.
 * use:auto...
 */
class Index{
    static verify(msgId){
        (async () => {
            try {
// 获取产品数据
                let products = await fetch('products.json');
                let parsedComments = await comments.json();
                console.log('ES7 Async+fetch/products >>>', parsedProducts);
                console.log('ES7 Async+fetch/users >>>', parsedUsers);
                console.log('ES7 Async+fetch/comments >>>', parsedComments);
            } catch (error) {
                console.log(error);
            }
        })();

    }
}
export default Index