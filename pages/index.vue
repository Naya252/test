<template>
  <!-- <v-container> -->
      <div id="main">
            <div class="main">
              <v-row class="fill-height" style="position: relative">
                <v-col
                  cols="12" 
                  xs="12"               
                  sm="8"
                  class="py-0"
                >
                  <v-row style="height: 25vh" align="end" class="row1" >
                    <div class="descriptions pb-0 mb-0">
                      <p class="pb-0 mb-0 pusB" style="">Pusets</p>
                    </div>
                  </v-row>
                  <v-row style="height: 57vh; background: #FCF9F7 !important " class="row2">
                    <v-card-title class="pb-0 descriptions mb-0">
                      <h1 style="font-family: Playfair Display, serif !important; " class="h2p">Пусеты</h1>
                    </v-card-title>
                    <v-card-text class="pt-2 pb-0 mb-5 descriptions">
                        <p class="pb-0 mb-0 pr-5 mr-5" style="font-size: 1.5em !important; font-weight: 300 !important">С бриллиантами и <br> драгоценными камнями</p>
                    </v-card-text>

                    <v-btn                                                    
                      class="pl-5 btn" 
                      link :to="{name:'catalog'}"
                      style="margin-left: 2em "                                                                                                                     
                    >
                      Подобрать
                    </v-btn>
                  </v-row>
                </v-col>
                <v-col
                  cols="12" 
                  xs="12"                
                  sm="6"
                  class="sm-pt-5 sm-mt-5 px-0 mx-0 pos py-0" style="">
                  <v-img
                    src="img/1.jpg"
                            alt="Гарантии"
                            class="subheading sm-mt-5 sm-pt-5 img"
                            aspect-ratio="1.4"
                  >                  
                  </v-img>
                </v-col>
                  
              </v-row>

            </div> 
        </div>
        <!-- </v-container> -->
</template>

<style lang="scss">

    .pos {
      position: absolute;
      right: 0;
      top: 0;
    }

    .row2 {
      .h2p {
        font-size: 6rem;
      }
    }

    .pusB {
      font-size: 12rem !important;  line-height: 40% !important; color: #FCF9F7 !important; font-family: "Playfair Display", serif !important;
    }

    @media screen and (max-width: 600px){
      .pos {
        position: relative !important;
        top: 0 !important;
        height: 30vh !important;
      }
      .row1{
        height: 8vh !important;        
      }
      .row2 {
        height: 45vh !important;
      }
      .h2p {
          font-size: 3em !important;
      }
      .img {
        margin: 0 !important;
        padding: 0 !important;
      }

      .pusB {
        font-size: 6em !important;
      }
    }

</style>

<script>
export default {
  head: {
    title: 'Бриллианты Костромы',
    meta: [
      { hid: 'description', name: 'description', content: 'Купить серьги с бриллиантами в Костроме с доставкой по всей России' }
    ],
  }
}
</script>
