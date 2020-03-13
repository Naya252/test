<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
            <v-btn class="btn-logo" text rounded x-large img link :to="{name:'index'}">
              <v-img >
                  <main-logo />
              </v-img>
            </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="mx-2" fab small dark color="green accent-3" href="https://wa.me/79119118795" target="_blank">
        <v-icon dark>mdi-whatsapp</v-icon>
      </v-btn>

       <v-btn class="mx-2" fab small dark color="blue darken-1" href="https://telegram.im/@Naya252" target="_blank">
        <v-icon dark>mdi-telegram</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab small dark color="blue darken-3" href="https://vk.me/id447631784" target="_blank">
        <v-icon dark>mdi-vk</v-icon>
      </v-btn>

     
      <!-- <v-toolbar-title class="deep-purple--text text--darken-4">{{sitename}}</v-toolbar-title> -->
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      class="foo pt-1"
      
      app
    >
       <v-col
        class="text-center pt-0"
        cols="12"
      >
        <span class="pt-0">&copy; {{ new Date().getFullYear() }} — <strong>Naya</strong></span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  header {
    background: #E8D4C9 !important;
  }
  footer {
    background: rgb(248, 234, 227) !important;
  }
  .btn-logo {
    color: transparent !important;
  }
  .foo {
    height: 36px !important;
  }
</style>

<script>
import MainLogo from '~/components/MainLogo.vue'
import { mapState, mapGetters } from 'vuex';

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-account-heart',
          title: 'Каталог',
          to: '/catalog'
        },
        {
          icon: 'mdi-shopping-outline',
          title: 'Примерка и доставка',
          to: '/delivery'
        },
        {
          icon: 'mdi-map-marker-radius',
          title: 'Контакты',
          to: '/contacts'
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed:{
    ...mapState(['sitename']),
  },
  components: {
    MainLogo
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<style lang="scss">
    .btn-card {
            border: 1px solid #D79081 !important;
            text-transform: capitalize !important;
            font-weight: bold !important;
            transition: all .5s ease;
            font-family: "Playfair Display", serif !important;
    }
    .btn-card:hover, .btn:active {
            color: #FDFBFA !important;
            background: #DD7D5C !important;
    }
    .btn{
    font-weight: bold;
    font-size: 1.2em !important;
    width: 140px !important;
    height: 50px !important;
    border: 1px solid #DD7D5C;
    background: #DD7D5C !important;
    border-radius: 0 !important;
    color: #FDFBFA !important;
    letter-spacing: 0.02em;
    padding: .94em 2.77em;
    margin-left: 5px;
    text-transform: capitalize !important;
    font-family: "Playfair Display", serif !important;
    box-shadow: 5px 5px 0 1px #FCF9F7, 5px 5px 0 2px #DD7D5C, 
                -5px -5px 0 1px #FCF9F7, -5px -5px 0 2px #DD7D5C;
    transition: box-shadow .5s ease, filter .5s ease;
    }    
    .btn:hover{
        filter: contrast(150%);
        box-shadow: 1px 1px 0 1px  #FCF9F7, 1px 1px 0 2px #DD7D5C, 
                -1px -1px 0 1px #FCF9F7, -1px -1px 0 2px #DD7D5C;
    }
    
    .btn:active{
        filter: contrast(100%);
        box-shadow: 1px 1px 0 1px white, 1px 1px 0 2px #DD7D5C, 
                -1px -1px 0 1px white, -1px -1px 0 2px #DD7D5C,
                0 0 0 2px #DD7D5C inset, 0 0 0 4px white inset;
    }

    .chbx {
        color: #c24a12 !important;
        caret-color: #c24a12  !important;
    }

    h2 {
        font-family: "Playfair Display", serif !important;
      }

    @media screen and (max-width: 600px){
      h2 {
        font-size: 2rem !important;
      }
      
    }

</style>
