<template>
  {{ $route.params.pages }}
  <Designer/>
</template>
<script>
import Designer from './../views/designer/Designer.vue';

export default {
  name: "pages",
  components: {Designer},
  data() {
    return {}
  }
}
</script>
<style scoped>

</style>
