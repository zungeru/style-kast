<template>
<div>
  <router-view></router-view>
  <StyleKard
    v-for="(post,index) in posts"
    :key="index"
    :post="post">
  </StyleKard>
</div>
</template>

<script>
import StyleKard from './StyleKard'
import Posts from '../../data/posts'

export default {
  data () {
    return {
      posts: Posts
    }
  },
  components: {
    StyleKard
  }
}
</script>

<style>

</style>
