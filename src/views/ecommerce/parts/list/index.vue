<script setup>
import axios from "@/plugins/axios";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const products = ref([]);

const headers = [
  {
    title: t("Title"),
    key: "title",
    search: true,
  },
  {
    title: "ID",
    key: "id",
  },
  {
    title: t("Location"),
    key: "location",
  },
  {
    title: t("Price"),
    key: "price",
  },
  {
    title: t("Comment"),
    key: "comment",
  },
  {
    title: t("Status"),
    key: "status",
  },
];

const searchProduct = ref("");
const loading = ref("");

onMounted(() => {
    loading.value = true;
  axios.get("/api/product/").then((response) => {
    products.value = response.data.results;
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
      <VCard :title="$t('Parts')">
        <template #append>
          <div style="width: 10rem">
            <VTextField
              v-model="searchProduct"
              density="compact"
              prepend-inner-icon="mdi-magnify"
              :placeholder="$t('Search')"
            />
          </div>
        </template>

        <VDataTable
          :search="searchProduct"
          show-select
          :headers="headers"
          :loading="loading"
          :items="products"
          :items-per-page="20"
          class="table-borderless rounded-0 text-no-wrap"
        >
          <template #item.id="{ item }">
            <RouterLink
              :to="{
                name: 'parts-list-detail',
                params: { id: item.raw.id },
              }"
              class="product-id"
            >
              {{ item.raw.id }}
            </RouterLink>
          </template>

          <template #item.title="{ item }">
            <div class="d-flex v-avatar-with-padding align-center gap-2">
              <VAvatar
                rounded="sm"
                size="100"
                :image="
                  item.raw.pictures.length > 0
                    ? item.raw.pictures[0].image
                    : 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='
                "
              />
              <div class="d-flex product__title">
                <RouterLink
                  :to="{
                    name: 'parts-list-detail',
                    params: { id: item.raw.id },
                  }"
                  class="product-id"
                >
                  {{ item.raw.name }}
                </RouterLink>
                <div>
                  <div>
                    {{ item.raw.modification.modelCar?.name }}
                    {{ item.raw.modification.modelCar?.startDate }}
                  </div>
                  <div class="text-caption blue-grey-darken-2">
                    2001 АКПП LHD
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #item.location="{ item }">{{
            item.raw.warehouse ?? "-"
          }}</template>
          <template #item.price="{ item }">₸ {{ item.raw.price }}</template>
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
