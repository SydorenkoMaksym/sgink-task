<template>
  <div class="wrapper">
    <SearchBar 
      placeholder-text="Search your game by name or provider"
      @search="handleSearch" 
    />
    <GameGrid :search-query="searchQuery" />
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('');

const handleSearch = (query: string) => {
  searchQuery.value = query;
};
</script>

<style>
.wrapper {
  padding: 35px;
}
</style>