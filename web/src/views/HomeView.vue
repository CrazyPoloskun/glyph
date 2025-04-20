<script setup>
  import section1 from '@/components/Home/section-1.vue';
  import section2 from '@/components/Home/section-2.vue';
  import section3 from '@/components/Home/section-3.vue';
  import section4 from '@/components/Home/section-4.vue';
  import Footer from '../components/Home/footer.vue';
</script>

<template>
  <section1 />
  <section2 />
  <section3 />
  <section4 />
</template>

<script>
export default {

}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}
</style>