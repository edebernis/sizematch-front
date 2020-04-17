<template>
    <div id="search-form">
        <form>
            <div id="search-input">
                <input v-model="query" v-on:keyup.enter="$emit('search')" type="text" placeholder="Recherche ..."/>
                <div id="search-menu">
                    <ul>
                        <li v-on:click="reset">R&eacute;initialiser</li>
                        <li v-on:click="advancedSearch">Recherche avanc&eacute;e</li>
                    </ul>
                </div>
            </div>
            <div id="search-dimensions">
                <div class="dimension-group">
                    <label for="minLength">Longueur min:</label>
                    <input v-model="minLength" v-on:keyup.enter="$emit('search')" type="number" name="minLength" placeholder="cm">
                    <label for="maxLength">Longueur max:</label>
                    <input v-model="maxLength" v-on:keyup.enter="$emit('search')" type="number" name="maxLength" placeholder="cm">
                </div>
                <div class="dimension-group">
                    <label for="minWidth">Largeur min:</label>
                    <input v-model="minWidth" v-on:keyup.enter="$emit('search')" type="number" name="minWidth" placeholder="cm">
                    <label for="maxWidth">Largeur max:</label>
                    <input v-model="maxWidth" v-on:keyup.enter="$emit('search')" type="number" name="maxWidth" placeholder="cm">
                </div>
                <div class="dimension-group">
                    <label for="minHeight">Hauteur min:</label>
                    <input v-model="minHeight" v-on:keyup.enter="$emit('search')" type="number" name="minHeight" placeholder="cm">
                    <label for="maxHeight">Hauteur max:</label>
                    <input v-model="maxHeight" v-on:keyup.enter="$emit('search')" type="number" name="maxHeight" placeholder="cm">
                </div>
                <div class="dimension-group">
                    <label for="minDepth">Profondeur min:</label>
                    <input v-model="minDepth" v-on:keyup.enter="$emit('search')" type="number" name="minDepth" placeholder="cm">
                    <label for="maxDepth">Profondeur max:</label>
                    <input v-model="maxDepth" v-on:keyup.enter="$emit('search')" type="number" name="maxDepth" placeholder="cm">
                </div>
            </div>
            <div id="advanced-search" v-bind:style="{ maxHeight: advancedSearchHeight + 'px' }">
                <div class="dimension-group">
                    <label for="minDiameter">Diam&egrave;tre min:</label>
                    <input v-model="minDiameter" v-on:keyup.enter="$emit('search')" type="number" name="minDiameter" placeholder="cm">
                    <label for="maxDiameter">Diam&egrave;tre max:</label>
                    <input v-model="maxDiameter" v-on:keyup.enter="$emit('search')" type="number" name="maxDiameter" placeholder="cm">
                </div>
                <div class="dimension-group">
                    <label for="minThickness">Epaisseur min:</label>
                    <input v-model="minThickness" v-on:keyup.enter="$emit('search')" type="number" name="minThickness" placeholder="cm">
                    <label for="maxThickness">Epaisseur max:</label>
                    <input v-model="maxThickness" v-on:keyup.enter="$emit('search')" type="number" name="maxThickness" placeholder="cm">
                </div>
                <div class="dimension-group">
                    <label for="minVolume">Volume min:</label>
                    <input v-model="minVolume" v-on:keyup.enter="$emit('search')" type="number" name="minVolume" placeholder="l">
                    <label for="maxVolume">Volume max:</label>
                    <input v-model="maxVolume" v-on:keyup.enter="$emit('search')" type="number" name="maxVolume" placeholder="l">
                </div>
                <div class="dimension-group">
                    <label for="minWeight">Poids min:</label>
                    <input v-model="minWeight" v-on:keyup.enter="$emit('search')" type="number" name="minWeight" placeholder="kg">
                    <label for="maxWeight">Poids max:</label>
                    <input v-model="maxWeight" v-on:keyup.enter="$emit('search')" type="number" name="maxWeight" placeholder="kg">
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            query:         "",
            minLength:     null,
            maxLength:     null,
            minWidth:      null,
            maxWidth:      null,
            minHeight:     null,
            maxHeight:     null,
            minDepth:      null,
            maxDepth:      null,
            minDiameter:   null,
            maxDiameter:   null,
            minThickness:  null,
            maxThickness:  null,
            minVolume:     null,
            maxVolume:     null,
            minWeight:     null,
            maxWeight:     null,
            advancedSearchHeight: 0,
        };
    },
    name: 'SearchForm',
    methods: {
        reset() {
            this.query = "";
            this.minLength = null;
            this.maxLength = null;
            this.minWidth = null;
            this.maxWidth = null;
            this.minHeight = null;
            this.maxHeight = null;
            this.minDepth = null;
            this.maxDepth = null;
            this.minDiameter = null;
            this.maxDiameter = null;
            this.minThickness = null;
            this.maxThickness = null;
            this.minVolume = null;
            this.maxVolume = null;
            this.minWeight = null;
            this.maxWeight = null;
        },
        advancedSearch() {
            this.advancedSearchHeight = this.advancedSearchHeight ? 0 : 100;
        },
    },
};
</script>

<style>
#search-form {
    width: 1000px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 50px;
}
#search-input {
    margin-bottom: 20px;
    height: 50px;
    margin-left: 15%;
}
#search-input input {
    width: 75%;
    height: 25px;
    font-size: 25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 10px;
}
#search-menu {
    float: right;
    text-align: left;
    height: 50px;
}
#search-menu ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 14px;
}
#search-menu li {
    text-decoration: underline;
    line-height: 25px;
}
#search-menu li:hover {
    cursor: pointer;
}
.dimension-group {
    display: inline-block;
    width: 25%;
}
.dimension-group label {
    display: inline-block;
    width: 140px;
    margin-bottom: 10px;
    margin-right: 10px;
    text-align: right;
}
.dimension-group input {
    width: 80px;
    height: 16px;
    font-size: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 5px;
    text-align: right;
}
#advanced-search {
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
</style>
