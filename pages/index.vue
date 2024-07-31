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
  padding: 12px;
}

@media (min-width: 575px) {
  .wrapper {
    padding: 18px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    padding: 24px;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    padding: 32px;
  }
}

@media (min-width: 1400px) {
  .wrapper {
    padding: 40px;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    padding: 60px;
  }
}
</style>