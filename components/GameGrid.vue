<template>
  <div class="games">
    <div 
      v-if="loading" 
      class="loading"
    >
      Loading...
    </div>
    <div 
      v-else-if="filteredGames.length === 0" 
      class="no-results"
    >
      No results found
    </div>
    <ul 
      v-else 
      class="games__list"
    >
      <GameCard 
        v-for="game in filteredGames" 
        :key="game.id" 
        :game="game" 
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from '@/types/game';

const props = defineProps<{ searchQuery: string }>();

const { data: games, pending: loading, error } = await useAsyncData<Game[]>('games', () =>
  $fetch('/api/games')
);

if (error.value) {
  console.error('Error fetching games:', error.value);
}

const filteredGames = computed(() => {
  if (games.value) {
    return games.value.filter(game => 
      game.title.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      game.provider.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
  }
  return [];
});
</script>

<style scoped>
.loading {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
}

.no-results {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: #fff;
  opacity: .5;
}

.games__list {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  list-style: none;
}

@media (min-width: 575px) {
  .games__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .games__list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1280px) {
  .games__list {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>