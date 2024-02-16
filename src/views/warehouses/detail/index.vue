<script setup>
import axios from "@/plugins/axios";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const product = ref(null);

const panel = ref(["settings", "photo"]);

onMounted(() => {
  axios.get(`/api/stock/warehouses/${route.params.id}`).then((response) => {
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
                <h3>Детали</h3>
              </template>
              <template #text>
                <div class="information-row">
                  <div>
                    <div class="information-title">Название</div>
                    <div class="information-description">
                      {{ product.name }}
                    </div>
                  </div>
                  <div>
                    <div class="information-title">ID</div>
                    <div class="information-description">
                      {{ product.id }}
                    </div>
                  </div>
                </div>
              </template>
            </v-expansion-panel>     
          </v-expansion-panels>
        </div>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">

</style>
