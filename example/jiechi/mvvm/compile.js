import Watcher from "./watcher.js";
export default class Compile {
  constructor(el, vm) {
    this.el = document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      let fragment = this.node2fragment(this.el);
      this.compile(fragment);
      this.el.appendChild(fragment);
    }
  }

  // 页面元素转换为文档碎片
  node2fragment(el) {
    let fragment = document.createDocumentFragment();
    let firstChild;
    while ((firstChild = el.firstChild)) {
      // appendChild具有移动性
      fragment.appendChild(firstChild);
    }
    return fragment;
  }

  compile(fragment) {
    let childNodes = fragment.childNodes;
    [...childNodes].forEach((node) => {
      if (this.isElementNode(node)) {
        // 标签节点
        this.compileElement(node);
        this.compile(node);
      } else {
        // 文本节点（代码中的空格，回车，一般不写代码）
        this.compileText(node);
      }
    });
  }

  // 解析元素节点
  compileElement(node) {
    let attributes = node.attributes;
    [...attributes].forEach((attr) => {
      let { name, value: expr } = attr;
      if (this.isDirective(name)) {
        let [, directive] = name.split("-");
        let [directiveName, eventName] = directive.split(":");
        console.log(
          `v-${directiveName}`,
          "节点：none",
          node,
          "链路：expr",
          expr,
          "绑定事件名",
          eventName
        );
        if (directiveName === "on") {
          CompileUtil["eventHandler"](node, this.vm, eventName, expr);
        } else {
          CompileUtil[directiveName](node, this.vm, expr);
        }
      }
    });
  }

  // 解析文本节点
  compileText(node) {
    console.log("文本节点：", node);
    CompileUtil.mustache(node, this.vm);
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }

  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
}

let CompileUtil = {
  mustache(node, vm) {
    let txt = node.textContent;
    // 匹配{{xxx}}的文本
    let reg = /\{\{(.+)\}\}/;
    if (reg.test(txt)) {
      let expr = RegExp.$1;
      node.textContent = txt.replace(reg, this.getVMValue(vm, expr));
      new Watcher(vm, expr, (newValue) => {
        node.textContent = newValue;
      });
    }
  },
  text(node, vm, expr) {
    node.textContent = this.getVMValue(vm, expr);

    // 通过watcher对象，监听expr的数据变化
    new Watcher(vm, expr, (newValue) => {
      node.textContent = newValue;
    });
  },
  html(node, vm, expr) {
    node.innerHtml = this.getVMValue(vm, expr);
    new Watcher(vm, expr, (newValue) => {
      node.innerHtml = newValue;
    });
  },
  model(node, vm, expr) {
    node.value = this.getVMValue(vm, expr);
    let that = this;
    // 实现双向的数据绑定，给node注册input事件
    node.addEventListener("input", function () {
      that.setVMValue(vm, expr, this.value);
    });
    new Watcher(vm, expr, (newValue) => {
      node.value = newValue;
    });
  },
  eventHandler(node, vm, type, expr) {
    // 给当前元素注册事件
    let eventType = type;
    // 错误处理
    let fn = vm.$methods && vm.$methods[expr];
    if (eventType && fn) {
      // 将方法的this指向当前实例vm
      node.addEventListener(eventType, fn.bind(vm));
    }
  },
  // 获取VM中的数据
  getVMValue(vm, expr) {
    let data = vm.$data;
    expr.split(".").forEach((key) => {
      data = data[key];
    });
    return data;
  },
  // 设置VM中的数据
  setVMValue(vm, expr, value) {
    let data = vm.$data;
    let arr = expr.split(".");
    arr.forEach((key, index) => {
      if (index < arr.length - 1) {
        data = data[key];
      } else {
        data[key] = value;
      }
    });
  },
};
