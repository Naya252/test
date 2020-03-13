<template>
    <v-container>
        <v-row>
            <v-card-title class="pb-0 descriptions mb-0">
                <h2>Специально для вас</h2>
            </v-card-title>
            <v-card-text class="pt-2 pb-0 mb-5 descriptions">
                <p class="pb-0 mb-0">Мы собрали лучшее из нашей коллекции</p>
            </v-card-text>
        </v-row>
        <v-row>
            <product 
            v-for="product in sortedProducts"
            :key="product.id"
            :product = "product"
            cols="12"
            sm="3"       
            ></product>       
        </v-row>
  </v-container>
</template>

<script>
    import { mapState } from 'vuex';
    import Product from '../components/Product.vue';
    
    function compare(a, b){
        let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase()
        if(titleA > titleB)
            return 1;
        if (titleA < titleB) {
            return -1; 
        }
        return 0;
    }
    
    export default {
        
      computed: {
            ...mapState(['products']),
            sortedProducts: function(){
                if(this.products.length > 0) {
                    let productsArray = this.products.slice(0);
                    
                    
                    
                    return productsArray.sort(compare);
                } else {
                    return [];
                }                
            }
        },
        components: {
            'product': Product
        },
        head: {
            title: 'Каталог пусетов с бриллиантами',
            meta: [
            { hid: 'description', name: 'description', content: 'Купить серьги с бриллиантами в Костроме с доставкой по всей России. Мы собрали лучшее из нашей коллекции' }
            ],
        },
    }
</script>