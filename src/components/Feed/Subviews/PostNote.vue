<template>
  <div>
    <h3>Post Note Goes Here</h3>
     {{post}}
  </div>
</template>

<script>
import Posts from '../../../data/posts'

export default {
  data () {
    return {
      post: Posts[0].note
    }
  }
}
</script>

<style>

</style>
