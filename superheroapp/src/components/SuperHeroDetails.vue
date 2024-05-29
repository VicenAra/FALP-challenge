<template>
  <div v-if="loading" class="ui segment">
    <p>Loading superhero details...</p>
  </div>
  <div v-else-if="error" class="ui segment">
    <p>{{ error }}</p>
  </div>
  <div v-else-if="superhero && superhero.image && superhero.biography" class="ui segment">
    <h1 class="ui header centered">{{ superhero.name }}</h1>
    <img v-if="superhero.image.url" class="ui rounded image centered large" :src="superhero.image.url" :alt="superhero.name" />
    <p><strong>Full Name:</strong> {{ superhero.biography['full-name'] ? superhero.biography['full-name'] : 'Not Available' }} </p>    
    <p><strong>Alter Egos:</strong> {{ superhero.biography['alter-egos'] }}</p>
    <p><strong>Aliases:</strong> {{ superhero.biography.aliases.join(', ') }}</p>
    <p><strong>Alignment:</strong> {{ superhero.biography.alignment }}</p>
    <p><strong>Publisher:</strong> {{ superhero.biography.publisher }}</p>
    <p><strong>First Appearance:</strong> {{ superhero.biography['first-appearance'] }}</p>
    <p><strong>Power Stats:</strong></p>
    <ul>
      <li v-for="(value, key) in superhero.powerstats" :key="key">
      {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { getSuperHeroById } from '@/services/SuperHeroService';

interface SuperheroDetails {
  name: string;
  image: { url: string };
  biography: { 'full-name': string, publisher: string, 'first-appearance': string , 'alter-egos': string, 'aliases': string[], 'alignment':string};
  appearence: {'gender': string, "race": string};
  powerstats: {'intelligence': string, 'strength': string, 'speed': string, 'durability': string, 'power': string, 'combat': string};
}

interface Props {
  superheroId: number;
}

const props = defineProps<Props>();
const superhero = ref<SuperheroDetails | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

watch(
  () => props.superheroId,
  async (newId) => {
    if (newId) {
      loading.value = true;
      error.value = null;
      try {
        const response = await getSuperHeroById(newId);
        if (response.response === 'error') {
          error.value = "Failed to fetch superhero details.";
        } else {
          superhero.value = response;
        }
      } catch (err) {
        console.error('Failed to fetch superhero:', err);
        error.value = 'Failed to fetch superhero details.';
      } finally {
        loading.value = false;
      }
    } else {
      superhero.value = null;
    }
  },
  { immediate: true }
);
</script>

