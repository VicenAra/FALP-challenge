<template>
  <div class="container">
    <transition name="fade">
      <SuperHeroDetails v-if="superheroId" :superheroId="superheroId" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SuperHeroDetails from '@/components/SuperHeroDetails.vue';

const route = useRoute();
const superheroId = ref<number | null>(null);

const updateSuperheroId = () => {
  const idParam = route.params.id as string;
  const parsedId = parseInt(idParam);
  superheroId.value = isNaN(parsedId) ? null : parsedId;
};



updateSuperheroId();
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
