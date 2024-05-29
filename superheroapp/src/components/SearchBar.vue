<template>
  <form class="ui icon input searchbar">
    <input v-model="query" placeholder="Search for a superhero" @input="onInput" />
    <button @click.prevent="onSearch">Search</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface Props {
  onSearch: (query: string) => void;
  onInput: () => void;
}
const props = defineProps<Props>();
const query = ref('');

const onSearch = () => {
  if (query.value.length > 2) {
    props.onSearch(query.value);
  }
};

const onInput = () => {
  props.onInput();
};
</script>

<style scoped>
.searchbar{
  width:600px;
}
</style>