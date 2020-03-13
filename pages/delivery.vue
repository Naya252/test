<template>
    <v-container>
        <v-row>
            <v-card-title class="pb-0 descriptions mb-0">
                <h2>Примерка и доставка</h2>
            </v-card-title>
            <v-card-text class="pt-2 pb-0 mb-5 descriptions">
                <p class="pb-0 mb-0">Мы сделали все, чтобы вам было удобно и приятно выбирать</p>
            </v-card-text>
        </v-row>

        <v-row>
        <template v-for="(item, i) in items">
                <v-col
                :key="i"
                cols="12"                
                sm="6"
                md="3"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    open-delay="200"
                >                    
                    <v-card
                        class="pa-5"
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                        min-height="400"
                    >
                        <div class="">
                            <v-img 
                            v-bind:src="item.img"
                            v-bind:alt="item.title"
                            class=""
                            width="70"
                            > 
                            </v-img>
                            <v-card-title 
                                    
                                    class="delivery__text font-weight-bold  mb-1 pb-1 pt-5 px-0" 
                            >
                                <span class="border-b" v-text="item.title"></span> 
                            </v-card-title>
                                
                            <v-card-text 
                                    v-text="item.text" 
                                    class="delivery__text pt-0 px-0"
                            >                                 
                            </v-card-text> 
                            <v-card-text 
                                    v-text="item.text2" 
                                    class="delivery__text pt-0 px-0"
                                ></v-card-text> 
                                <v-card-text 
                                        v-text="item.text3" 
                                        class="delivery__text pt-0 px-0"
                                ></v-card-text>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </template>
        <template>
                <v-col
                cols="12"                
                sm="6"
                md="3"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    open-delay="200"
                >                    
                    <v-card
                        class="pa-5"
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                        min-height="400"
                    >
                        <div class="">
                            <v-img 
                            src="img/label.png"
                            alt="Гарантии"
                            class=""
                            width="70"
                            > 
                            </v-img>
                            <v-card-title 
                                    
                                    class="delivery__text font-weight-bold  mb-1 pb-1 pt-5 px-0" 
                            >
                                <span class="border-b">Гарантии</span> 
                            </v-card-title>
                                
                            <v-card-text 
                                    
                                    class="delivery__text pt-0 px-0"
                            > 
                                <span class="">Украшения ювелирного завода “Брилианнты Костромы” имеют все необходимые пометки о подлинности:</span>                                 
                            </v-card-text> 
                            
                                <v-row class="d-flex align-center">
                                    <v-tooltip left max-width="200">
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="" icon ripple v-on="on">
                                                <v-icon color="grey lighten-1">mdi-information</v-icon>
                                            </v-btn>                                            
                                        </template>
                                        <span>сертификат соответсвия заявленным характеристикам камней и металла</span>
                                    </v-tooltip>                                                              
                                    <span class="" style="font-size: .9rem">Бирку</span>
                                </v-row> 
                                <v-row class="d-flex align-center">
                                    <v-tooltip left max-width="200">
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="" icon ripple v-on="on">
                                                <v-icon color="grey lighten-1">mdi-information</v-icon>
                                            </v-btn>                                            
                                        </template>
                                        <span >именник</span>
                                    </v-tooltip>                                                                       
                                    <span class="" style="font-size: .9rem">Именник</span>
                                </v-row> 
                                <v-row class="d-flex align-center">
                                    <v-tooltip left max-width="200">
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="" icon ripple v-on="on">
                                                <v-icon color="grey lighten-1">mdi-information</v-icon>
                                            </v-btn>                                            
                                        </template>
                                        <span >пробирное клеймо</span>
                                    </v-tooltip>                                   
                                    <span class="" style="font-size: .9rem">Пробирное клеймо</span>
                                </v-row>                            
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </template>
        </v-row>
    </v-container>
</template>

<style lang="scss">
    body {
        font-family: "Montserrat", sans-serif !important;
    }
    .descriptions h2 {
        font-size: 1.5em !important;
        line-height: 80% !important;
    }

    .border-b {
        border-bottom: 1px solid #DD7D5C;
    }

</style>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
  export default {
    head: {
        title: 'Примерка и доставка',
        meta: [
        { hid: 'description', name: 'description', content: 'Купить серьги с бриллиантами в Костроме с доставкой по всей России. Мы сделали все, чтобы вам было удобно и приятно выбирать' }
        ],
    },
    data: () => ({
      items: [
        {
          title: 'Примерка',
          text: "Наш курьер привезет вам понравившиеся украшения и вы сможете их примерить в комфортной обстановке. Украшения, которые вам не подойдут курьер заберет с собой.",
          img: '/img/earrings.png',
        },
        {
          title: 'Доставка',
          text: 'Доставка осуществялется службой “Pony Express” в пункты выдачи и курьером на дом. Курьер свяжется с Вами для уточнения время и места доставки. Примерный срок доставки 7 рабочих дней.',
          img: '/img/group.png',
        },
        {
          title: 'Оплата',
          text: 'Оплата производится при получении товара двумя удобными вам способами:',
          text2: '– наличный расчет',
          text3: '– банковская карта',
          img: '/img/pay.png',
        },
      ],
    }),
  }
</script>


