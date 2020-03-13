<template>
    <div id="contacts" class="container column">
                <div class=" contacts">
                    <div class="cont">
                        <div id="contacts__desc" class="contacts__desc">
                            <div id="contacts__desc_wrap" class="contacts__desc_wrap">
                                <div class="contacts__desc_bg">
                                    <p class="bg">Pusets</p>
        
                                    <div class="contacts__desc_text">
                                        <h2>Контакты</h2>
                                        <div class="contacts__desc_p">
                                            <p>+7 (4942) 42-20-23</p>
                                            <p>info@best-brilliant.ru</p>
                                        </div>
                                        <div class="contacts__desc_p">
                                            <p>156019, г. Кострома,<br> ул. Локомотивная, д. 2 ж </p>
                                            <div class="contacts__desc_link">
                                                <a href="https://github.com/Naya252">Основной сайт</a>
                                                <div class="arrow">
                                                    <img src="img/vector3.png" alt="=>">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="mapid" class="contacts__desc_map">
                                    <div style="height: 200px; width: 100%">
                                        <client-only>
                                        <l-map
                                        v-if="showMap"
                                        :zoom="zoom"
                                        :center="center"
                                        :options="mapOptions"
                                        style="height: 100%; z-index:3"
                                        
                                        @update:center="centerUpdate"
                                        @update:zoom="zoomUpdate"
                                        >
                                        <l-tile-layer
                                            :url="url"
                                            :attribution="attribution"
                                        />                                       
                                            <l-marker :lat-lng="[57.757401, 40.986840]">
                                                <l-icon
                                                :icon-size="dynamicSize"
                                                :icon-anchor="dynamicAnchor"
                                                icon-url="img/marker3.png"
                                                />
                                            </l-marker>
                                        </l-map>
                                        </client-only>
                                    </div>
        
                                </div>
                            </div>                        
                        </div>
                        <div id="contacts__question" class="contacts__question">
                            <div id="contacts__question_wrap" class="contacts__question_wrap">
                                <div class="contacts__question_form pl-5">
                                    <label class="contacts__question_mainLabel">
                                        Есть вопросы?
                                    </label>
                                    <form id="contacts__form" class="contacts__form" method="post" action="/">
                                        <div class="box-input">
                                            <input class="input" type="text" id="name" name="name" placeholder=" " required>
                                            <label for="name">Имя</label>
                                        </div>
                                        <div class="box-input">
                                            <input class="input" type="email" id="email" name="email" placeholder=" "
                                                required>
                                            <label for="email">Email</label>
                                        </div>
                                        <div class="box-input">
                                            <textarea class="input" name="text" id="text" cols="1" rows="1" placeholder=" "
                                            required></textarea>
                                            <label for="text">Сообщение</label>
                                        </div>

                                        <div class="chboxs">
                                            <div class="recover">
                                                <input type="checkbox" id="ckbox" name="ckbox" required>
                                                <label for="ckbox">Принимаю соглашение об обработке персональных данных</a></label>
                                            </div>
                                            <div class="recover">
                                                <input type="checkbox" id="ckbox2" name="ckbox2">
                                                <label for="ckbox2">Хочу получать рекламную рассылку “Бриллианты Костромы”</a></label>
                                            </div>
                                        </div>

                                        <input id="btnForm" type="submit" value="Отправить" class="button">   
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</template>

<style lang="scss">
    // .container, 
    .contacts{
        padding: 0;
    }
    .contacts__desc_wrap, .contacts__question {
        height: 100% !important;
    }
    .contacts__desc_text p {
        font-weight: normal !important;
    }
    .contacts__desc_link {
        max-width: 150px !important;
    }
</style>

<script>
    import { latLng, icon } from "leaflet";

    export default {
        name: "Icon",
        components: {
            icon,
            latLng
        },
        data() {
            return {
            zoom: 13,
            center: latLng(57.757401, 40.986840),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 15.5,
            currentCenter: latLng(57.757401, 40.986840),
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true
            }           
        },
        methods: {
            zoomUpdate(zoom) {
            this.currentZoom = zoom;
            },
            centerUpdate(center) {
            this.currentCenter = center;
            },
        },
        computed: {
            dynamicSize() {
            return [this.iconSize, this.iconSize * 1.15];
            },
            dynamicAnchor() {
            return [this.iconSize / 2, this.iconSize * 1.15];
            }
        },
        
    };
</script>
