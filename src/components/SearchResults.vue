<template>
    <div id="search-results">
        <item v-for="(item, index) in results"
              v-bind:key="index"
              v-bind:item="item"
        ></item>

        <infinite-loading
            v-bind:identifier="infiniteId"
            v-on:infinite="infiniteHandler">
                <span slot="no-more"></span>
                <template v-if="started" slot="no-results">Aucun r&eacute;sultat :(</template>
                <span v-else slot="no-results"></span>
        </infinite-loading>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    data() {
        return {
            started: false,
            infiniteId: +new Date(),
        };
    },
    name: 'SearchResults',
    components: {
        Item,
    },
    props: {
        results: Array
    },
    methods: {
        async infiniteHandler($state) {
            try {
                const newData = await this.$parent.search();
                newData ? $state.loaded() : $state.complete();
            } catch (e) {
                $state.error();
            }
        },
        reset() {
            this.started = true;
            this.infiniteId += 1
        }
    }
};
</script>

<style>
#search-results {
    width: 1000px;
    margin: auto;
}
</style>
