<script setup>
import axios from "@/plugins/axios";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const warehouses = ref([]);

const headers = [

  {
    title: t("Name"),
    key: "name",
  },
  {
    title: "ID",
    key: "id"
},
];

const searchProduct = ref("");
const loading = ref("");

onMounted(() => {
    loading.value = true;
  axios.get("/api/stock/warehouses/").then((response) => {
    console.log(response)
    warehouses.value = response.data.results;
  }).finally(()=>{
    loading.value = false;
  });
});

const deleteProduct = (productId) => {
  axios.get("/product/delete", { params: { productId } }).then((response) => {
    products.value = response.data;
  });
};
</script>

<template>
  <VRow>
    <!-- data table and filter -->
    <VCol cols="12">
      <VCard :title="$t('Warehouses')">
        <template #append>
          <div class="d-flex">
            <div>
            <VBtn color="primary" variant="flat">Создать</VBtn>
          </div>
          </div>
        </template>

        <VDataTable
          :search="searchProduct"
          show-select
          hovera
          :headers="headers"
          :loading="loading"
          :items="warehouses"
          :items-per-page="20"
          class="table-borderless rounded-0 text-no-wrap"
        >
          <template #item.id="{ item }">
            <RouterLink
              :to="{
                name: 'warehouses-detail',
                params: { id: item.raw.id },
              }"
              class="product-id"
            >
              {{ item.raw.id }}
            </RouterLink>
          </template>
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.product__title {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 80px;
  justify-content: space-between;
}
</style>
