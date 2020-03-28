<template>
    <div>
        <h2>{{mes}}</h2>
        <p>新闻ID：{{ $route.params.id}}</p>
        <p>新闻Title：{{ $route.params.title}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mes: '我是传递URl参数的页面'
    }
  }
}
</script>

<style scoped>
</style>
