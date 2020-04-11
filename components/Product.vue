<template>
<v-col
    cols="12"
        md="3"
        sm="6">
    <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
    >                    
        <v-card
            class="catalog__card"
            :elevation="hover ? 16 : 2"
        >
            <div class="catalog__card_item">
                <v-img 
                v-bind:src="product.image"
                v-bind:alt="product.title"
                class="catalog__card_pic"
                > 
                </v-img>
                <v-card-text 
                        v-text="product.title"
                        class="catalog__card_desc custom-color-card--text font-weight-bold pb-0" 
                ></v-card-text> 
                <v-card-text 
                        v-text="product.description" 
                        class="catalog__card_desc custom-color-card--text pt-0"
                ></v-card-text>   
            </div>
            <v-card-text>
                <v-row
                    class="catalog__card_order mx-0"
                    align="center"
                >
                    <span
                        class="custom-color-card--text title"
                    >
                        {{product.price | formatPrice}}
                    </span>   
                    <v-spacer></v-spacer>

                    <v-btn  link :to="{name:'productcard-id', params:{id:product.id}}"                  
                        class="btn-card" 
                    >Подробнее</v-btn> 

                    <v-btn 
                        v-on:click="addToCart(product)" 
                        v-if="canAddToCart(product)"
                        class="ma-2" outlined 
                        color="deep-purple darken-4"
                    >Добавить в корзину</v-btn>
                    <v-btn v-else 
                        disabled
                        class="ma-2" outlined 
                        color="deep-purple darken-4"
                    >Добавить в корзину</v-btn>

                    <!-- <v-btn                    
                        class="btn-card" 
                        @click="overlay = !overlay"
                    >Примерить</v-btn>  -->
                </v-row>
            </v-card-text>
            <!-- <v-overlay                   
                    :value="overlay"                    
                    >
                         <v-dialog v-model="dialog" persistent max-width="800px">
                                <v-card class="px-5 custom-color-card--text"
                                    color="#fff"
                                    outlined
                                    >
                                    <v-container>
                                    <v-row>
                                        <v-col
                                        >
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <v-btn class="" fab dark small                                            
                                            color="#B71C1C"
                                             @click="overlay = false">
                                                <v-icon dark>mdi-close</v-icon>
                                            </v-btn>
                                        </v-row> 
                                        <v-row>
                                            <v-card-title class="py-0">
                                                <h2 >Оформление примерки</h2>
                                            </v-card-title>
                                            <v-card-text class="pt-2 pb-0">
                                                <p class="pb-0 mb-0">Заполните форму и мы свяжемся с вами для подтвержания примерки и уточнения деталей.</p>
                                            </v-card-text>
                                        </v-row>
                                        <v-row>
                                            <v-col style="width: 200px">
                                                <v-img 
                                                        v-bind:src="product.image"
                                                        v-bind:alt="product.title"
                                                        class="catalog__card_pic"
                                                        width="250"
                                                    > 
                                                </v-img>
                                                <v-card-text 
                                                        v-text="product.title"
                                                        class="catalog__card_desc custom-color-card--text font-weight-bold pb-0" 
                                                ></v-card-text>
                                                <v-divider color="#987A6E" width="310"></v-divider> 
                                                <v-card-text 
                                                        v-text="product.description" 
                                                        class="catalog__card_desc custom-color-card--text"
                                                        
                                                ></v-card-text>
                                            </v-col>
                                            <v-col>
                                                <v-form
                                                    ref="form"
                                                    v-model="valid"
                                                    lazy-validation
                                                    method="post"
                                                    action="/"
                                                >
                                                    <v-text-field label="Имя*" name="name" type="text" :counter="10" :rules="nameRules" v-model.trim="order.name" required></v-text-field>
                                                    <v-text-field label="Телефон*" name="tel" type="tel" v-mask="mask" :rules="telRules" v-model.trim="order.tel" required mask="\+\7 (111) 111-11-11"></v-text-field>
                                                    <v-text-field label="Email*" name="email" type="email" :rules="emailRules"  v-model.trim="order.email" required></v-text-field>
                                                    <v-select label="Город" name="city" type="text" v-model.trim="order.city" :items="order.cities"></v-select>
                                                    <v-checkbox
                                                        class="my-0 chbx"
                                                        v-model="checkbox"
                                                        :rules="[v => !!v || 'Обязательное поле!']"
                                                        label="Принимаю соглашение об обработке персональных данных"
                                                        required
                                                        type="checkbox"
                                                        name="checkbox"
                                                    ></v-checkbox>
                                                    <v-checkbox
                                                        v-model="checkbox2"
                                                        class="my-0 chbx"
                                                        label="Хочу получать рекламную рассылку “Бриллианты Костромы”"
                                                        type="checkbox"
                                                        name="checkbox2"                                                        
                                                    ></v-checkbox>
                                                    <v-row>
                                                        <v-spacer></v-spacer>
                                                        
                                                        <v-btn                                                    
                                                            class="mr-4 btn"                                                           
                                                            @click="validate"
                                                        >
                                                            Заказать
                                                        </v-btn>
                                                    </v-row>
                                                </v-form>
                                            </v-col>
                                        </v-row>

                                        
                                          
                                    </v-col>
                                    </v-row>
                                    </v-container>
                                    
                                
                                </v-card>
                            </v-dialog>
             </v-overlay>          -->
        </v-card>
    </v-hover>
</v-col>
</template>



<script>
    import { mapState } from 'vuex';
    import { mask } from 'vue-the-mask';
    
    export default {
        directives: {
            mask,
        },
        data: function(){
            return {
                overlay: false,
                dialog: true,
                valid: true,
                mask: '+7(###)-###-##-##',
                value: '',
                nameRules: [
                    v => !!v || 'Обязательное поле!',
                    v => (v && v.length <= 10) || 'Имя должно быть не более 10 символов',
                ],
                emailRules: [
                    v => !!v || 'Обязательное поле!',
                    v => /.+@.+\..+/.test(v) || 'Введите корректный E-mail',
                ],
                telRules: [
                    v => !!v || 'Обязательное поле!',
                ],
                checkbox: true,
                checkbox2: false,
                order: {
                    name: '',
                    tel: '',
                    email: '',
                    city: '',
                    cities: ['Москва', 'Санкт-Петербург', 'Кострома', 'Екатеринбург']
                }
            }
        },
        props:['product'],
        computed:{
            ...mapState(['products', 'cart'])
        },
        methods:{
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true & alert("Заказ оформлен");            
                }
            },
            onSubmit () {
            },
            addToCart: function(product){
                this.$store.commit('addToCart', product.id);
            },
            canAddToCart: function(product){
                return product.availableInventory > this.cartCountFn(product.id);
            },
            cartCountFn: function(id){
                let itemCount = 0;
                
                for(let i = 0; i < this.cart.length; i++)
                    if(this.cart[i] === id)
                        itemCount++;
                        
                return itemCount;                        
            }
        },
        filters: {
            formatPrice: function(val){
                if(!parseInt(val)) return '';
                let arr = val.toString().split("");
                let index = 3;
                while(arr.length > index){
                    arr.splice(arr.length - index, 0, " ");
                    index += 4;
                }
                return arr.join("") + ' ' + String.fromCharCode(8381);
            }
        }
    }
</script>