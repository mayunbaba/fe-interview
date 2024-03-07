class Vue {
  constructor(options) {
    this.options = options;
    this.data = options.data;
    
    this.observe(this.data);
    this.compile(options.el);
  }

  observe(data) {
    Object.keys(data).forEach(key => {
      let value = data[key];
      const dep = new Dep();

      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
          Dep.target && dep.addSub(Dep.target);
          return value;
        },
        set(newValue) {
          if (newValue !== value) {
            value = newValue;
            dep.notify();
          }
        }
      });
    });
  }

  compile(el) {
    const element = document.querySelector(el);
    this.compileElement(element);
  }

  compileElement(element) {
    const childNodes = element.childNodes;
    Array.from(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        this.compileDirective(node);
        if (node.childNodes.length > 0) {
          this.compileElement(node);
        }
      } else if (node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)) {
        this.compileText(node);
      }
    });
  }

  compileDirective(node) {
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name;
      const exp = attr.value;
      if (attrName.startsWith("v-")) {
        const dir = attrName.substring(2);
        if (dir === "model") {
          node.value = this.data[exp];
          node.addEventListener("input", e => {
            this.data[exp] = e.target.value;
          });
          new Watcher(this.data, exp, newValue => {
            node.value = newValue;
          });
        }
      }
    });
  }

  compileText(node) {
    const exp = RegExp.$1;
    node.textContent = this.data[exp];
    new Watcher(this.data, exp, newValue => {
      node.textContent = newValue;
    });
  }
}




