<template>
    <div class="item">
        <div class="item-img">
            <img v-bind:src="item.image_urls[0]"/>
        </div>
        <div class="item-content">
            <a v-bind:href="item.urls[0]" target="_blank"><h3>{{ item.name }}</h3></a>
            <p>{{ item.description }}</p>
            <div class="price">{{ item.price.amount }}€</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Item',
    props: {
        item: Object
    }
};
</script>

<style>
.item {
    padding: 5px;
    height: 100px;
    margin-bottom: 30px;
}
.item-img {
    float: left;
    width: 100px;
    height: 100%;
    margin-right: 15px;
}
.item-img img {
    width: 100%;
    height: 100%;
}
.item-content {
    height: 100%;
    margin-left: 115px;
}
.item-content a {
    color: inherit;
    text-decoration: none;
}
.item-content h3 {
    margin: 0;
}
.item-content p {
    margin-top: 0px;
    text-align: justify;
    font-size: 11px;
}
</style>
