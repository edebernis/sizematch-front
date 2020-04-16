<template>
    <div class="item">
        <div class="item-img">
            <carousel :data="images" :indicators="false" :autoplay=false :interval=10000000></carousel>
        </div>
        <div class="item-content">
            <div class="item-header">
                <a v-bind:href="item.urls[0]" target="_blank"><h3>{{ item.name }}</h3></a>
            </div>
            <div class="item-body">
                <span class="price">{{ item.price.amount }}€</span>
                <ul class="item-dimensions">
                    <li v-if="item.dimensions.length">Longueur: {{ item.dimensions.length }} cm</li>
                    <li v-else>Longueur: N/A</li>
                    <li v-if="item.dimensions.width">Largeur: {{ item.dimensions.width }} cm</li>
                    <li v-else>Largeur: N/A</li>
                    <li v-if="item.dimensions.height">Hauteur: {{ item.dimensions.height }} cm</li>
                    <li v-else>Hauteur: N/A</li>
                    <li v-if="item.dimensions.depth">Profondeur: {{ item.dimensions.depth }} cm</li>
                    <li v-else>Profondeur: N/A</li>
                </ul>
                <p class="item-description">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Item',
    props: {
        item: Object
    },
    computed: {
        images: function() {
            return this.item.image_urls.map((url) => {
                return '<img src="'+url+'"/>';
            });
        }
    }
};
</script>

<style>
.item {
    height: 200px;
    margin-bottom: 30px;
}
.item-img {
    float: left;
    width: 200px;
    height: 100%;
    margin-right: 30px;
}
.item-img img {
    width: 100%;
    height: 100%;
}
.item-content {
    height: 100%;
    margin-left: 115px;
}
.item-header {
    height: 25px;
}
.item-header a {
    color: inherit;
    text-decoration: none;
    height: 100%;
}
.item-header h3 {
    margin: 0;
    height: 100%;
}
.item-body {
    height: 75px;
}
.item-description {
    margin: 0;
    text-align: justify;
    font-size: 11px;
    width: 85%;
    height: 50px;
}
.item-dimensions {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    height: 25px;
}
.item-dimensions li {
    font-size: 13px;
    list-style-type: none;
    display: inline-block;
    margin-right: 15px;
}
.price {
    float: right;
    height: 75px;
    line-height: 75px;
    font-size: 25px;
}
</style>
