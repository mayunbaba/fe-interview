//定义一个类，用于创建vue实例
class Compiler {
  constructor(el, vm) {
    this.el = typeof el === "string" ? document.querySelector(el) : el;
    this.vm = vm;
    // 编译模板
    if (this.el) {
      // 1. 把el中所有的子节点都放到内存中，fragment
      let fragment = this.node2fragment(this.el);
      // 2. 在内存中编译
      this.compile(fragment);
      // 3. 把fragment一次性添加到页面
      this.el.appendChild(fragment);
    }
  }

  /* 核心方法 */
  node2fragment(node) {
    let fragment = document.createDocumentFragment();
    let childNodes = node.childNodes;
    // console.log(childNodes instanceof Array)
    this.toArray(childNodes).forEach((node) => {
      // console.log(node)
      // 把所有子节点都添加到fragment中
      fragment.appendChild(node);
    });
    return fragment;
  }
  /*
    编译文档碎片  
  */
  compile(fragment) {
    let childNodes = fragment.childNodes;
    this.toArray(childNodes).forEach((node) => {
      // 编译节点
      // console.log( JSON.stringify(node)) ==>{} 为啥是空对象
      // console.log(node)
      // 如果是元素，则解析指令
      if (this.isElementNode(node)) {
        this.compileElement(node);
      }
      // 如果是文本节点，则解析插值表达式
      if (this.isTextNode(node)) {
        this.compileText(node);
      }
      // 如果当前节点还有子节点，则递归解析
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }
  // 解析元素节点
  compileElement(node) {
    // console.log('解析元素节点')
    // 1. 获取当前节点下所有属性
    let attributes = node.attributes;
    this.toArray(attributes).forEach((attr) => {
      // 2. 解析vue指令（所有以v-开始的属性）
      // console.dir(attr)
      let attrName = attr.name;

      if (this.isDirective(attrName)) {
        let expr = attr.value;
        let type = attrName.slice(2);

        // 解析v-on指令
        if (this.isEventDirective(type)) {
          CompileUtil["eventHandler"](node, this.vm, type, expr);
        } else {
          // 解析其他指令
          CompileUtil[type](node, this.vm, expr);
        }
      }
    });
  }
  // 解析文本节点
  compileText(node) {
    CompileUtil.mustache(node, this.vm);
  }

  /* 工具方法 */
  toArray(likeArray) {
    return [].slice.call(likeArray);
  }
  // nodeType：节点类型 1：元素节点，3：文本节点，很神奇没有2，哦被废弃了
  isElementNode(node) {
    return node.nodeType === 1;
  }
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 是否是vue的指令
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  // 是否是v-on指令
  isEventDirective(type) {
    return type.split(":")[0] === "on";
  }
}

let CompileUtil = {
  mustache(node, vm) {
    let txt = node.textContent;
    let reg = /\{\{(.+)\}\}/;
    if (reg.test(txt)) {
      let expr = RegExp.$1;
      node.textContent = txt.replace(reg, this.getVMValue(vm, expr));
      new watcher(vm, expr, (newValue) => {
        node.textContent = newValue;
      });
    }
  },
  text(node, vm, expr) {
    node.textContent = this.getVMValue(vm, expr);

    // 通过watcher对象，监听expr的数据变化
    new watcher(vm, expr, (newValue) => {
      node.textContent = newValue;
    });
  },
  html(node, vm, expr) {
    node.innerHtml = this.getVMValue(vm, expr);
    new watcher(vm, expr, (newValue) => {
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
    new watcher(vm, expr, (newValue) => {
      node.value = newValue;
    });
  },
  eventHandler(node, vm, type, expr) {
    // 给当前元素注册事件
    let eventType = type.split(":")[1];
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
