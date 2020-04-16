<template>
    <form id="search-form" v-on:submit.prevent="$emit('search', query)">
        <input id="search-input" type="text" v-model="query" placeholder="Search ..."/>
    </form>
</template>

<script>

export default {
    data() {
        return {
            query: "",
        };
    },
    name: 'SearchForm',
};
</script>

<style>
#search-form {
    text-align: center;
    margin-bottom: 30px;
}
#search-input {
    width: 400px;
    height: 40px;
    font-size: 25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 10px;
}
</style>
