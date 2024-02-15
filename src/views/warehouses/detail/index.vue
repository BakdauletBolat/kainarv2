<script setup>
import axios from "@/plugins/axios";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import SliderPhoto from "./slider-photo.vue";
import SwiperGallery from "@/views/extensions/swiper/SwiperGallery.vue";

const { t } = useI18n();
const route = useRoute();

const product = ref(null);

const panel = ref(["settings", "photo"]);

onMounted(() => {
  axios.get(`/api/product/${route.params.id}`).then((response) => {
    product.value = response.data;
  });
});
</script>

<template>
  <VRow>
    <!-- data table and filter -->
    <VCol cols="12" v-if="product">
      <VCard :title="product.name">
        <template #prepend
          ><RouterLink
            :to="{
              name: 'parts-list',
            }"
            >Назад</RouterLink
          ></template
        >
      </VCard>

      <div class="detail-info">
        <div style="flex-basis: 50%">
          <v-expansion-panels
            v-model="panel"
            multiple
            rounded="sm"
            elevation="0"
          >
            <v-expansion-panel value="settings">
              <template #title>
                <h3>Параметры детали</h3>
              </template>
              <template #text>
                <div class="information-row">
                  <div>
                    <div class="information-title">Статус</div>
                    <div class="information-description">
                      {{ product.status }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">ID</div>
                    <div class="information-description">
                      {{ product.id }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">OEM коды</div>
                    <div class="information-description">
                        9501242
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Цветовой код</div>
                    <div class="information-description">
                      -
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Место нахождение</div>
                    <div class="information-description">
                      {{ product.warehouse }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Комментарий</div>
                    <div class="information-description">
                      {{ product.comment }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Дата загрузки</div>
                    <div class="information-description">
                      {{ product.created_at }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Дата редактирования</div>
                    <div class="information-description">
                      {{ product.updated_at }}
                    </div>
                  </div>
                </div>
              </template>
            </v-expansion-panel>
            <v-expansion-panel
              value="size"
            >
            <template #title>
                <h3>Размеры детали</h3>
              </template>
              <template #text>
                <div class="information-row">
                  <div>
                    <div class="information-title">Высота</div>
                    <div class="information-description">
                      {{ product.detail.height }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Ширина</div>
                    <div class="information-description">
                      {{ product.detail.width }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Длина</div>
                    <div class="information-description">
                        {{product.detail.length}}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">Вес</div>
                    <div class="information-description">
                      {{ product.detail.weight }}
                    </div>
                  </div>
                </div>
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="slider-group">
          <SwiperGallery :images="product.pictures"></SwiperGallery>
        </div>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">

</style>
