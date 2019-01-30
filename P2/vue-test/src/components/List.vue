<template>
  <div id="list-container">
    <h1 v-show="isLoading">
      Cargando personajes ...
    </h1>

    <div id="list-padding" v-show="!isLoading">
      <table >
        <tr>
          <th>Nombre</th>
          <th>Casa</th>
          <th>Detalle</th>
        </tr>
        <tr v-for="character in characters">
          <td>{{ character.name }}</td>
          <td>{{ character.house }}</td>
          <td>
            <button @click="goToDetail(character._id)">Ver detalle</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
  import {listsAllCharacters} from '../services/got.service.js'

  export default {
    name: 'list-component',

    /**
     * @description the data block represents all the local variable of this component.
     */
    data() {
      return {
        characters: [],
        isLoading: false
      }
    },

    /**
     * @description the create function is the first one to be execute when the component is being created (see vue js lifecycle).
     */
    created() {
      this.isLoading = true
      listsAllCharacters()
        .then(res => {
          console.log(res);
          this.characters = res
          this.isLoading = false
        })
    },

    /**
     * @description the methods block represents all the local methods of this component.
     */
    methods: {

      /**
       * @description get the detail of a character from the GoT API.
       * @param {string} id. the "_id" of the character that we are going to request.
       * @method goToDetail
       */
      goToDetail(id) {
        this.$router.push({name: 'detail', params: {id}})
      }
    }
  }
</script>
<style>

  div#list-container {
    flex: 1
  }

  div#list-padding {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
    overflow-y: scroll;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  td button {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    cursor: pointer;
  }
</style>
