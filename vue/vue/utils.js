export const defaultTagRE = /\{\{(.+)\}\}/

// {{name}} => name
export function removeDefaultTag(expr) {
  return expr.replace(defaultTagRE, "$1");
}

// (obj, 'a.b.c') => obj.a.b.c
export function getValue(obj, expr) {
  let data = obj;
  expr.split(".").forEach((key) => {
    data = data[key];
  });
  return data;
}

// 判断是否是指令
export function isDirective(attr) {
  return attr.startsWith("v-");
}

// 获取指令名
export function getDirectiveName(attr) {
  return attr.split("-")[1];
}