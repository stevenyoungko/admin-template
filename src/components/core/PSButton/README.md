# PSButton
> button 元件 

## 用法

```ruby
<template>
  <PSButton type="primary" >按钮文字</PSButton>
</template>

<script>
import PSButton from '@/components/core/PSButton/PSButton'
export default {
  name: 'app',
  components: {
    PSButton
  }
}
</script>

``` 
## slot
> 左右皆可插
```ruby
    <PSButton type="primary">
      <template #left-loading></template>
      <template #left-icon></template>
      <template></template>
      <template #right-loading></template>
      <template #right-icon></template>
    </PSButton>
```
## 属性

参数 | 说明 | 类型 | 可选值 | 默认值 
--- | --- | --- | --- | ---
type | 颜色样式 | String | primary / success / warning / danger / intermediate | primary
outline | 外框按鈕 |Boolean | true / false | false
round | 圆角按钮 | Boolean | true / false | false
circle | 圆形按钮 |Boolean | true / false | false
disabled | 禁用按钮 | Boolean |  true / false | false 
icon | icon图标 | String | @/icons/svg/ 里的 svg 党名 | ''
iconPosition | icon位置 | Boolean | true / false | false 


