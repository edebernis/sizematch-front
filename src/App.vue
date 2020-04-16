<template>
  <div id="app">
    <div id="logo"> 
        <h1>SizeMatch</h1>
    </div>
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
        newSearch() {
            this.after = "";
            this.results = [];

            this.$refs.resultsComponent.reset();
        },
        async search() {
            if (this.$refs.formComponent.query == "") return;

            let res = await axios.get(api, {
                params: this.buildQuery()
            });
            if (res.data.items.length) {
                const last = res.data.items[res.data.items.length - 1];
                this.after = [last.score, last.timestamp].join(',')
                this.results.push(...res.data.items);
            }
            return res.data.items.length;
        },
        buildQuery() {
            let query = {
                q: this.$refs.formComponent.query,
                a: this.after,
                lang: this.lang,
            }
            if (this.$refs.formComponent.minLength) query.min_length = this.$refs.formComponent.minLength;
            if (this.$refs.formComponent.maxLength) query.max_length = this.$refs.formComponent.maxLength;
            if (this.$refs.formComponent.minWidth)  query.min_width  = this.$refs.formComponent.minWidth;
            if (this.$refs.formComponent.maxWidth)  query.max_width  = this.$refs.formComponent.maxWidth;
            if (this.$refs.formComponent.minHeight) query.min_height = this.$refs.formComponent.minHeight;
            if (this.$refs.formComponent.maxHeight) query.max_height = this.$refs.formComponent.maxHeight;
            if (this.$refs.formComponent.minDepth)  query.min_depth  = this.$refs.formComponent.minDepth;
            if (this.$refs.formComponent.maxDepth)  query.max_depth  = this.$refs.formComponent.maxDepth;

            return query
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
    position: absolute;
    top: 0;
    width: 100%;
}
#logo {
    float: left;
    margin-left: 50px;
    margin-bottom: 0;
}
</style>
