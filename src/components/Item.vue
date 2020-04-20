<template>
    <div class="item">
        <div class="item-images">
            <carousel :data="images" :indicators="false" :autoplay=false :interval=10000000></carousel>
        </div>
        <div class="item-body">
            <div class="item-header">
                <a v-bind:href="item.urls[0]" target="_blank"><h3>{{ item.name }}</h3></a>
            </div>
            <div class="item-content">
                <div class="item-price-logo">
                    <span v-if="item.price.currency == 'EUR'" class="price">{{ item.price.amount.toLocaleString() }}€</span>
                    <span v-else-if="item.price.currency == 'GBP'" class="price">{{ item.price.amount.toLocaleString() }}£</span>
                    <img v-if="item.source == 'ikea'" src='../assets/ikea-logo.png'/>
                </div>
                <ul class="item-dimensions">
                    <li v-if="item.dimensions.length">Longueur: {{ item.dimensions.length.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.width">Largeur: {{ item.dimensions.width.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.height">Hauteur: {{ item.dimensions.height.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.depth">Profondeur: {{ item.dimensions.depth.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.diameter">Diam&egrave;tre: {{ item.dimensions.diameter.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.thickness">Epaisseur: {{ item.dimensions.thickness.toLocaleString() }} cm</li>
                    <li v-if="item.dimensions.volume">Volume: {{ item.dimensions.volume.toLocaleString() }} litres</li>
                    <li v-if="item.dimensions.weight">Poids: {{ item.dimensions.weight.toLocaleString() }} kg</li>
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
        item: Object,
    },
    computed: {
        images: function() {
            return this.item.image_urls.map((url) => {
                return '<img src="'+url+'"/>';
            });
        },
    },
};
</script>

<style>
.item {
    height: 200px;
    margin-bottom: 30px;
}
.item-images {
    float: left;
    width: 200px;
    height: 100%;
    margin-right: 30px;
}
.item-images img {
    width: 100%;
    height: 100%;
}
.item-body {
    height: 100%;
    margin-left: 230px;
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
.item-content {
    height: 175px;
}
.item-description {
    margin: 0;
    text-align: justify;
    font-size: 12px;
    width: 85%;
    height: 50px;
}
.item-dimensions {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    height: 25px;
    width: 85%;
}
.item-dimensions li {
    font-size: 13px;
    list-style-type: none;
    display: inline-block;
    margin-right: 15px;
}
.item-price-logo {
    float: right;
    height: 175px;
    width: 10%;
    font-size: 25px;
    text-align: right;
}
.item-price-logo img {
    width: 100%;
    margin-top: 10px;
}
</style>
