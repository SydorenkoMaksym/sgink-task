<template>
  <li class="game-card">
    <img 
      :src="`/images/${game.id}.webp`"
      :alt="game.title"
      class="game-logo"
    >
  </li>
</template>

<script lang="ts" setup>
import type { Game } from '@/types/game';

defineProps<{ game: Game }>();
</script>

<style scoped>
.game-card {
  border: 3px solid #2D4234;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.game-card img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.game-card h2 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.game-card p {
  font-size: 1rem;
  color: #666;
}

.game-card:hover {
  transform: scale(1.05);
}
</style>
