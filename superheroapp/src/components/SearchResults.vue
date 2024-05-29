<template>
  <div class="results">
    <div v-if="error" class="error-box">
      <p><b>Failed Search:</b> {{ error }}</p>
    </div>
    <div v-else>
      <div class="ui list">
        <router-link
          class="item"
          v-for="hero in results"
          :key="hero.id"
          :to="{ name: 'superhero', params: { id: hero.id } }"
        >
          <img
            class="ui image mini floated right"
            :src="hero.image.url"
            :alt="hero.name"
          />
          <div class="content">
            <div class="header">{{ hero.name || 'Not Available' }}</div>
            <div class="description">
              {{ hero.biography['full-name'] || 'Not Available' }},
              {{ hero.appearance.gender || 'Not Available' }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Superhero {
  id: number;
  name: string;
  biography: { 'full-name': string };
  appearance: { gender: string };
  image: { url: string };
}

interface Props {
  results: Superhero[];
  error: string | null;
}

const props = defineProps<Props>();
</script>

<style scoped>
.results {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.item {
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 10px;
  width: 600px;
  transition: 0.3s;
  border-radius: 5px;
}

.error-box {
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-top: 10px;
}

.item:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
