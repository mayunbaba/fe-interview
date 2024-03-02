# CSS

## 盒模型
| 盒子模型 | box-sizing | 介绍 |
|--|--| -- |
|标准盒模型|content-box| 宽高等于内容区域 |
|IE盒模型|border-box| width = 内容区域 + 内边距 + border |

## 布局
1. 流动布局
2. 浮动布局
3. 弹性布局
4. 网格布局
5. 定位布局
   1. relative 相对于其在文档流中原始位置进行定位
   2. absolute 相对于最近已定位的父元素进行定位
   3. fixed 相对于浏览器窗口定位
6. 响应式布局
7. 栅格布局
### 写一个骰子
<script setup>
import touzi from './css/骰子.vue';
import shengbei from './css/圣杯.vue';
</script>
<touzi />


## 自适应方案
- 媒体查询
- rem布局（postcss-pxtorem）
- vw、vh （postcss-px-to-viewport）


## 圣杯布局
<shengbei />