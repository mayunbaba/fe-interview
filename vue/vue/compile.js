/**
 * 获取dom节点
 * 将dom节点转换为fragment
 * 解析fragment，根据指令绑定数据和事件
 * 将fragment添加到dom节点
 */

import {
  defaultTagRE,
  removeDefaultTag,
  getValue,
  isDirective,
  getDirectiveName
} from './utils.js'

export default class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.compile(this.$fragment)
      this.$el.appendChild(this.$fragment)
    }
  }

  // dom节点转换为fragment
  node2Fragment(el) {
    console.log(el.firstChild)
    let fragment = document.createDocumentFragment();
    while (el.firstChild) {
      fragment.appendChild(el.firstChild)
    }
    return fragment
  }

  // 解析fragment
  compile(fragment) {
    let childNodes = fragment.childNodes
    Array.from(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        // 标签节点
        this.compileElement(node)
      } else if (node.nodeType === 3) {
        // 文本节点
        this.compileText(node)
      }
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  // 解析文本节点
  compileText(node) {
    let text = node.textContent
    if (defaultTagRE.test(text)) {
      let expr = removeDefaultTag(text)
      // console.log(expr, getValue(this.$vm, expr))
      node.textContent = text.replace(defaultTagRE, getValue(this.$vm, expr))
    }
  }

  // 解析标签节点
  compileElement(node) {
    let attrs = node.attributes;
    // console.log([...attrs], '属性');
    [...attrs].forEach(attr => {
      if (isDirective(attr.name)) {
        const directiveName = getDirectiveName(attr.name)
        const expr = attr.value
        console.log(directiveName, expr, '值');
        node.textContent = getValue(this.$vm, expr)
        node.value = getValue(this.$vm, expr)
      }
    })
  }
}