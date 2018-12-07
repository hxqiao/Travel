<template>
  <div class="detailsprice"> 
    <div v-for='(item,index) of categoryList' :key="index">
      <div class="detailstitle iconfont border-bottom">
        <span class="titleimg">&#xe604;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="detailstitle-child">
        <detailsprice :categoryList="item.children"></detailsprice>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'detailsprice',
    props: {
      categoryList: Array
    },
    data () {
      return { 
      }
    },
    methods: {
    },
  }
</script>

<style lang="stylus" scoped>
  .detailstitle
    height: .68rem
    line-height: .68rem
    .titleimg
      padding-left: .1rem
  .detailstitle-child
    padding-left: .2rem
</style>
