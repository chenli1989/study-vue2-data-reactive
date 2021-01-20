let uid = 0;
export default class Dep {
    constructor() {
        console.log('我是DEP类的构造器');
        this.id = uid++;

        // 用数组存储自己的订阅者。subs是英语subscribes订阅者的意思。
        // 这个数组里面放的是Watcher的实例
        this.subs = [];
    }
    // 添加订阅
    addSub(sub) {
        this.subs.push(sub);
    }
    // 添加依赖
    depend() {
        // Dep.target 就是一个我们自己指定的全局的位置，只要是全局唯一即可
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }
    // 通知更新
    notify() {
        console.log('我是notify');
        // 浅克隆一份
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
};