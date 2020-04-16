<template>
    <div id="search-form">
        <form>
            <div id="search-input">
                <input v-model="query" v-on:keyup.enter="$emit('search')" type="text" placeholder="Search ..."/>
            </div>
            <div id="dimensions">
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
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            query:    "",
            minLength: null,
            maxLength: null,
            minWidth:  null,
            maxWidth:  null,
            minHeight: null,
            maxHeight: null,
            minDepth:  null,
            maxDepth:  null,
        };
    },
    name: 'SearchForm',
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
    text-align: center;
    margin-bottom: 20px;
}
#search-input input {
    width: 60%;
    height: 25px;
    font-size: 25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 10px;
}
#dimensions {

}
.dimension-group {
    display: inline-block;
    width: 25%;
}
.dimension-group label {
    display: inline-block;
    width: 140px;
    text-align: right;
    margin-bottom: 10px;
    margin-right: 10px;
}
.dimension-group input {
    width: 80px;
    height: 16px;
    font-size: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 5px;
}
.dimension-group input::placeholder {
    text-align: right;
}
</style>
