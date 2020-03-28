<template>
    <div>
        <h2>{{message}}</h2>
        <p>此页面不存在</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Error 404 没有这个页面'
    }
  }
}
</script>
