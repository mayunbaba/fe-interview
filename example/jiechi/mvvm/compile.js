import Watcher from './watcher.js';

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
    while (firstChild = el.firstChild) {
      // appendChild具有移动性
      fragment.appendChild(firstChild);
    }
    return fragment;
  }

  compile(fragment) {
    let childNodes = fragment.childNodes;
    [...childNodes].forEach(node => {
      if (this.isElementNode(node)) {
        this.compileElement(node);
        this.compile(node);
      } else {
        this.compileText(node);
      }
    })
  }

  // 解析元素节点
  compileElement(node) {
    let attributes = node.attributes;
    [...attributes].forEach(attr => {
      let { name, value: expr } = attr;
      if (this.isDirective(name)) {
        let [, directive] = name.split('-');
        let [directiveName, eventName] = directive.split(':');
        console.log(directiveName, eventName);
        CompileUtil[directiveName](node, expr, this.vm, eventName);
      }
    })
  }

  // 解析文本节点
  compileText(node) {
    let content = node.textContent;
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil['text'](node, content, this.vm);
    }
  }


  isElementNode(node) {
    return node.nodeType === 1;
  }


  isDirective(attrName) {
    return attrName.startsWith('v-');
  }
}

let CompileUtil = {
  // 获取实例上对应的数据
  getVal(expr, vm) {
    return expr.split('.').reduce((data, current) => {
      return data[current];
    }, vm.$data)
  },
  // 设置实例上对应的数据
  setVal(expr, vm, inputVal) {
    console.log(expr, vm, inputVal);
    return expr.split('.').reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        return data[current] = inputVal;
      }
      return data[current];
    }, vm.$data)
  },
  model(node, expr, vm) {
    let fn = this.updater['modelUpdater'];
    new Watcher(vm, expr, (newVal) => {
      fn(node, newVal);
    })
    node.addEventListener('input', (e) => {
      let inputVal = e.target.value;
      this.setVal(expr, vm, inputVal);
    })
    let value = this.getVal(expr, vm);
    fn(node, value);
  },
  html() {

  },
  // 获取文本编译后的结果
  getContentVal(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1], vm);
    })
  },
  text(node, expr, vm) {
    let fn = this.updater['textUpdater'];
    let value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      new Watcher(vm, args[1], (newVal) => {
        fn(node, this.getContentVal(expr, vm));
      })
      return this.getVal(args[1], vm);
    })
    fn(node, value);
  },
  updater: {
    modelUpdater(node, value) {
      node.value = value;
    },
    textUpdater(node, value) {
      node.textContent = value;
    }
  }
}

