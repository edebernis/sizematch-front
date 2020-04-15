<template>
    <div id="items-list">
        <header>
            <form id="search-form" @submit="performSearch">
                <input id="search-input" type="text" v-model="query" placeholder="Search ..."/>
            </form>
        </header>

        <div>
            <div class="column">
                <div class="item" v-for="(item, $index) in filteredItems(1, 3)" :key="$index">
                    <img :src="item.image_urls[0]"/>
                    <a :href="item.urls[0]" target="_blank"><h3>{{ item.name }}</h3></a>
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <div class="column">
                <div class="item" v-for="(item, $index) in filteredItems(2, 3)" :key="$index">
                    <img :src="item.image_urls[0]"/>
                    <a :href="item.urls[0]" target="_blank"><h3>{{ item.name }}</h3></a>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
        <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
            <span slot="no-more"></span>
        </infinite-loading>
    </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:9000/v1/items';

export default {
    data() {
        return {
            query: "",
            after: "",
            lang: "fr",
            items: [],
            infiniteId: +new Date(),
        };
    },
    name: 'ItemsList',
    methods: {
        infiniteHandler($state) {
            if (this.query.length < 1) {
                $state.complete();
                return;
            }

            axios.get(api, {
                params: {
                    q: this.query,
                    a: this.after,
                    lang: this.lang,
                    sort: this.sortCriteria,
                },
            }).then(({ data }) => {
                if (data.items.length) {
                    const lastItem = this.items[this.items.length - 1];
                    if (lastItem !== undefined) this.after = [lastItem.score, lastItem.timestamp].join(',')
                    this.items.push(...data.items);
                    $state.loaded();
                } else {
                    $state.complete();
                }
            });
        },
        filteredItems(column, columns) {
            return this.items.filter(item => this.items.indexOf(item) % columns === column - 1)
        },
        performSearch(evt) {
            evt.preventDefault();
            this.items = [];
            this.after = "";
            this.infiniteId += 1;
        },
    },
};
</script>

<style>
#items-list {
    width: 1200px;
    margin: auto;
}
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
.column {
    width: 40%;
    display: inline-block;
    vertical-align: top;
    padding: 0 40px;
}
.item {
    margin-bottom: 50px;
    height: 110px;
}
.item img {
    float: left;
    width: 110px;
    height: 110px;
    margin-top: 5px;
    margin-right: 15px;
}
.item a {
    color: inherit;
    text-decoration: none;
}
.item h3 {
    margin-bottom: 0px;
}
.item p {
    margin-top: 0px;
    text-align: justify;
    font-size: 11px;
}
</style>
