<script setup>
import { useStore } from 'vuex';
import Designer from './views/designer/Designer.vue';

// store
const store = useStore();

// set backend current user
store.commit('user/setUser', {
  name: 'John Doe',
  email: 'joe@apple.com',
});

</script>

<template>
 <Designer></Designer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
</style>
