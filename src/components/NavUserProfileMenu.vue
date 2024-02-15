<script setup>
import avatar from '@/assets/avatars/avatar-6.png'
import { useRouter } from 'vue-router'

const user = ref()
const router = useRouter()

onMounted(() => user.value = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {})

const logOut = () => {
  localStorage.removeItem('userData')
  router.replace({ name: 'login' })
}
</script>

<template>
  <VAvatar class="cursor-pointer">
    <VImg :src="avatar" />

    <VMenu activator="parent">
      <VList>
        <VListItem v-if="user">
          <VListItemTitle>{{ user.fullName }}</VListItemTitle>
          <VListItemSubtitle>{{ user.email }}</VListItemSubtitle>
        </VListItem>
        <VDivider class="mt-2" />
        <VListItem
          v-for="item in ['Home', 'Profile', 'Settings']"
          :key="item"
          :value="item"
        >
          <VListItemTitle>{{ item }}</VListItemTitle>
        </VListItem>
        <VDivider />
        <VListItem @click="logOut">
          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VAvatar>
</template>
