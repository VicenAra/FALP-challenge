<script lang="ts" setup>
import { ref } from 'vue';
import { searchSuperHero } from '@/services/SuperHeroService';
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

interface Superhero {
  id: number;
  name: string;
  biography: { 'full-name': string };
  appearance: { gender: string };
  image: { url: string };
}

const searchResults = ref<Superhero[]>([]);
const searchError = ref<string | null>(null);

const handleSearch = async (query: string) => {
  try {
    const response = await searchSuperHero(query);
    if (response.results) {
      searchResults.value = response.results;
      searchError.value = null;
    } else {
      searchError.value = response.error;
    }
  } catch (error) {
    console.error('Error searching superheroes:', error);
  }
};

const clearResults = () => {
  searchResults.value = [];
  searchError.value = null;
};
</script>

<template>
  <div class="ui container">
    <h1 class="ui header">Superhero Search</h1>
    <p class="ui segment">On this app you can search for your favorite superheroes and villains from the Marvel and DC comic universes (and more).</p>
    <div class="comic-logos">            
      <img class="ui image tiny floated rounded" src="../assets/dc_comics_logo.svg" alt="DC Comics Logo" />
      <img class="ui image small floated rounded" src="../assets/marvel_logo.svg" alt="Marvel Comics Logo" />
    </div>
    <p class="ui segment">To search just write at least 3 characters and click the search button or press the enter key to search for the results that match.<br> Then you can click on the character from which you want to see its detailed info.</p>

    <SearchBar :onSearch="handleSearch" :onInput="clearResults" />
    <SearchResults :results="searchResults" :error="searchError" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comic-logos img {
  margin: 10px;
}
</style>
