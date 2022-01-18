// const i = 1;

// // 函数 function f(x){return y} 声明 带有输入输出
// // 声明 function
// // f1 函数名
// // () 参数接受（形参）
// function f1() {
//   // 函数体
//   //   return; //隐式声明 不声明是默认为undefind
// }
// //function f(x){return x}
// // function f1() {
// //   console.log("hello world");
// //   //   隐式声明;
// //   //   return undefined;
// // }

// function greeting(x) {
//   console.log(x);
//   return x + 1;
// }

//皮卡丘
// name: "皮卡丘",

// const name = "皮卡丘";
// const level = 40;
// const skill = ["十万伏特", "钢尾", "电光石火"];

// const pikachu = {
//   //属性
//   name: "皮卡丘",
//   level: 40,
//   skill: ["十万伏特", "钢尾", "电光石火"],
// };

// console.log("皮卡丘的名字是：" + pikachu.name);
// console.log(`皮卡丘的等级是：${pikachu.level}`);

// console.log(pikachu["name"]);

function fun1(i) {
  const zhangdan = [5, 12, 20, 3000, 5000, 10000, 10000, 10, 3030, 123]; //遍历

  let value = 0;
  for (let index = 0; index < zhangdan.length; index++) {
    const spand = zhangdan[index];
    value = value + spand;
    console.log(`第${index + 1}次账单，花了${spand}，已花${value}`);
    if (spand > 100) {
      console.log("大额消费!!", spand);
    }
  }
  console.log("结果", value);
}
fun1();
