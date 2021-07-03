// 递归，算法模式，是一种解决问题的方法。通常函数调用自身

// 每一个递归需要有一个边界条件，否则会一直执行下去。（浏览器会报 栈溢出错误 stack overflow error）

// 案例
// 通过递归循环树
let treeData = [
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1",
          },
        ],
      },
    ],
  },
];

function showTree(curData) {
  for (var i = 0; i < curData.length; i++) {
    console.log(curData[i].label);
    if (curData[i].children) {
      // 调用自身
      showTree(curData[i].children);
    }
  }
}

showTree(treeData);
