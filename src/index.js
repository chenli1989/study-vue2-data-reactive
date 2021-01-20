import observe from './observe.js';
import Watcher from './Watcher.js';

let obj = {
    a: {
        k: {
            s: 5
        }
    },
    b: 10,
    c: {
        d: {
            e: {
                f: 7
            }
        }
    },
    g: [2, 3, 4, 5]
};

observe(obj);

// 监听obj.a.k.s数据变化
new Watcher(obj, 'a.k.s', (val, oldVal) => {
    console.log(`★我是watcher，我在监听a.k.s；新值为${val}；旧值为${oldVal}。`);
});
// 变化obj.a.k.s值
obj.a.k.s = 6;

// 监听obj.g数据变化
new Watcher(obj, 'g', (val, oldVal) => {
    console.log(`★我是watcher，我在监听g；新值为${val}；旧值为${oldVal}。`);
});
// 变化obj.g值
obj.g.reverse();
