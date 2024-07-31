<template>
  <div class="search-bar">
    <input 
      v-model="query" 
      class="search-bar__input"
      type="search" 
      :placeholder="placeholderText"
      @input="onInput"
    >
  </div>
</template>

<script lang="ts" setup>
const query = ref('');
defineProps<{ placeholderText: string }>();
const emit = defineEmits(['search']);

const onInput = () => {
  emit('search', query.value);
};
</script>

<style scoped>
.search-bar {
  position: relative;
  margin-bottom: 24px;
}

.search-bar__input {
  width: 100%;
  padding: 16px 16px 16px 56px;
  border: 1px solid #09170E;
  border-radius: 24px;
  background-color: #132118;
  color: rgba(255, 255, 255, .5);
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
}

@media (min-width: 575px) {
  .search-bar__input {
    font-size: 1.125rem;
  }
}

.search-bar__input:focus {
  outline: 0;
  border: 1px solid #245e38;
}

.search-bar::before {
  content: '';
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background-image: url(~/assets/icons/search-icon.svg);
}

</style>
