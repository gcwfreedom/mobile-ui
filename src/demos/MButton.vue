<template>
<div>
  <group title="Default"></group>
  <m-button>submit</m-button>
  <m-button type="brand">brand</m-button>
  <m-button type="primary">primary</m-button>
  <m-button type="warn">Delete</m-button>

  <group title="Default"></group>
  <m-button disabled>disable submit</m-button>
  <m-button type="brand" disabled>brand</m-button>
  <m-button type="primary" disabled>disable primary</m-button>
  <m-button type="warn" disabled>disable Delete</m-button>

  <group title="A类"></group>
  <m-button type="a-white">搜索</m-button>
  <m-button type="a-blue">搜索</m-button>
  <m-button type="a-green">搜索</m-button>
  <m-button type="a-red">搜索</m-button>
  <group title="B类"></group>
  <m-button type="b-white" style="display:inline-block;">空调</m-button>
  <group title="C类" ></group>
  <m-button type="c-white" >返回商城</m-button>
  <m-button type="c-blue" >返回商城</m-button>
  <m-button type="c-green">签到</m-button>
  <m-button type="c-orange">签到</m-button>
  <group title="D类"></group>
  <m-button type="d-white">查看图文详情</m-button>
  <group title="E类"></group>
  <m-button type="e-white">获取验证码</m-button>
  
  <group title="F类"></group>
  <div class="f-orange-wrap">
    图片
  </div>
  <m-button type="f-orange">立即购买</m-button>
</div>
</template>

<script>
import { MButton, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MButton,
    Group
  },
  data () {
    return {}
  }
}
</script>
