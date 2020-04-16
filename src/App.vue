<template>
  <div id="app">
    <h1 id="logo">SizeMatch</h1>

    <SearchForm
        v-on:search="newSearch"
        ref="formComponent"
    ></SearchForm>
    <SearchResults
        v-bind:results="results"
        ref="resultsComponent"
    ></SearchResults>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'

import axios from 'axios';
const api = 'http://localhost:9000/v1/items';

export default {
    data() {
        return {
            query: "",
            after: "",
            lang: "fr",
            results: [],
        }
    },
    name: 'App',
    components: {
        SearchForm,
        SearchResults,
    },
    methods: {
        async newSearch(query) {
            this.query = query;
            this.after = "";
            this.results = [];

            this.$refs.resultsComponent.reset();
            await this._doSearch();
        },
        async continueSearch() {  
            return await this._doSearch();
        },
        async _doSearch() {
            if (this.query == "") return;

            let res = await axios.get(api, {
                params: {
                    q: this.query,
                    a: this.after,
                    lang: this.lang,
                }
            });

            if (res.data.items.length) {
                const last = res.data.items[res.data.items.length - 1];
                this.after = [last.score, last.timestamp].join(',')
                this.results.push(...res.data.items);
            }
            return res.data.items.length;
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
#logo {
  margin-left: 50px;
  margin-bottom: 0;
}
</style>
