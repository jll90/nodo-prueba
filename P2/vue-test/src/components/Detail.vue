<template>
  <div id="detail-container">
    <h1 v-show="isLoading">
      Cargando personaje...
    </h1>
    <div v-show="!isLoading" class="character-card">
      <div class="character-name">
        {{ character.name }}
      </div>
      <div class="character-info">
        {{ character.house }} - {{ character.male ? "Hombre" : "Mujer"}}
      </div>
      <div>
        Titulos: {{ character.titles.length > 0 ? character.titles.join(", ") : "No tiene"}}
      </div>
      <div>
        Libros: {{ character.titles.length > 0 ? character.titles.join(", ") : "No tiene"}}
      </div>
    </div>
  </div>
</template>

<script>
  import { getACharacter } from "../services/got.service";

  export default {
    name: 'detail-component',
    data () {
      return {
        character: null,
        isLoading: false
      }
    },

    created () {
      const characterId = this.$router.history.current.params.id;
      this.isLoading = true;
      getACharacter(characterId)
        .then(res => {
          this.character = res.data;
          this.isLoading = false
      })
    }
  }
</script>

<style>
  div#detail-container {
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: center;
  }

  div.character-card {
    padding: 60px;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
  }

  .character-name {
    font-size: 50px;
  }

  .character-info {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 15px;
  }
</style>
