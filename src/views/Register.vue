<script setup>
import authBgDark from '@/assets/pages/auth-bg-dark.svg'
import authBgLight from '@/assets/pages/auth-bg-light.svg'
import authRegisterImg from '@/assets/pages/working-laptop-while-sitting-chair.png'
import axios from '@axios'
import {
  useRoute,
  useRouter,
} from 'vue-router'
import { useTheme } from 'vuetify'
import { VForm } from 'vuetify/components/VForm'

const registerForm = ref()
const router = useRouter()
const route = useRoute()
const isPasswordVisible = ref(true)
const isContentExpand = ref(true)
const theme = useTheme()

const registerData = ref({
  fullName: 'Jerry Doe',
  email: 'jerrydoe@gmail.com',
  password: 'jerryDoe',
})

const errors = ref({
  email: '',
  username: '',
})

const authBgThemeVariant = computed(() => {
  return theme.current.value.dark ? authBgDark : authBgLight
})

const register = () => {
  registerForm.value?.validate().then(isValid => {
    if (isValid.valid) {
      axios.post('/register', {
        fullName: registerData.value.fullName,
        email: registerData.value.email,
        password: registerData.value.password,

        // eslint-disable-next-line promise/no-nesting
      }).then(response => {
        localStorage.setItem('userData', JSON.stringify(response.data))

        // redirect after store data in local storage
        router.replace(route.query.to ? String(route.query.to) : '/')

        // eslint-disable-next-line promise/no-nesting
      }).catch(error => {
        errors.value.email = error.response.data.email
        errors.value.username = error.response.data.username
        console.log(error)
      })
    }
  })
}
</script>

<template>
  <div class="auth-wrapper">
    <VCard
      max-width="900"
      min-width="350"
    >
      <VRow no-gutters>
        <VCol
          md="6"
          cols="12"
          class="border-e pa-sm-8 pa-4"
        >
          <VCardItem>
            <VCardTitle>Register</VCardTitle>
            <VCardSubtitle>To access template</VCardSubtitle>

            <template #append>
              <RouterLink
                :to="{ name: 'login' }"
                class="text-body-2 text-medium-emphasis d-block d-md-none"
              >
                Login
              </RouterLink>
            </template>
          </VCardItem>

          <VCardText class="pb-0">
            <VForm
              ref="registerForm"
              @submit.prevent="register"
            >
              <VExpandTransition>
                <div v-show="isContentExpand">
                  <VTextField
                    v-model="registerData.fullName"
                    label="Full Name"
                    :rules="[v => !!v || 'Name is required']"
                    class="mb-6"
                  />

                  <VTextField
                    v-model="registerData.email"
                    label="Email"
                    :rules="[v => !!v || 'Email is required']"
                    :error-messages="errors.email"
                    class="mb-6"
                  />

                  <VBtn
                    block
                    color="primary"
                    @click="isContentExpand = !isContentExpand"
                  >
                    Next
                  </VBtn>
                </div>
              </VExpandTransition>

              <VExpandTransition>
                <div v-show="!isContentExpand">
                  <div
                    class="d-flex align-center border rounded py-1 px-2 mb-6"
                    :style="!registerData.email ? 'border-color:rgb(var(--v-theme-error)) !important' : ''"
                  >
                    <span class="text-caption">{{ registerData.email }}</span>

                    <VSpacer />

                    <VBtn
                      size="small"
                      color="primary"
                      variant="text"
                      @click="isContentExpand = !isContentExpand"
                    >
                      change
                    </VBtn>
                  </div>

                  <VTextField
                    v-model="registerData.password"
                    :type="isPasswordVisible ? 'password' : 'text'"
                    label="Password"
                    :rules="[v => !!v || 'password is required']"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    class="mb-6"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <VBtn
                    block
                    type="submit"
                    color="primary"
                  >
                    register
                  </VBtn>
                </div>
              </VExpandTransition>
            </VForm>

            <div class="d-flex align-center my-6">
              <VDivider />
              <span class="mx-3">OR</span>
              <VDivider />
            </div>
            <p class="font-weight-medium text-center">
              Register using
            </p>
            <div class="d-flex justify-center gap-4">
              <VBtn
                icon
                variant="text"
                color="primary"
                size="small"
              >
                <VIcon
                  size="24"
                  icon="mdi-facebook"
                />
              </VBtn>
              <VBtn
                icon
                variant="text"
                color="info"
                size="small"
              >
                <VIcon
                  size="24"
                  icon="mdi-twitter"
                />
              </VBtn>
              <VBtn
                icon
                variant="text"
                size="small"
              >
                <VIcon
                  size="24"
                  icon="mdi-github"
                />
              </VBtn>
              <VBtn
                icon
                variant="text"
                color="error"
                size="small"
              >
                <VIcon
                  size="24"
                  icon="mdi-google"
                />
              </VBtn>
            </div>
          </VCardText>
        </VCol>

        <VCol
          cols="6"
          class="pa-8 text-center d-none d-md-block"
          :style="`background-image:url(${authBgThemeVariant});`"
        >
          <div class="d-flex align-center justify-center">
            <img
              width="280"
              :src="authRegisterImg"
            >
          </div>

          <h6 class="text-body-1 font-weight-semibold mb-3">
            Already Registered ?
          </h6>
          <p class="text-body-2">
            Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily.
          </p>
          <VBtn
            variant="outlined"
            color="primary"
            :to="{ name: 'login' }"
            append-icon="mdi-login"
          >
            Login
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@/styles/pages/auth.scss";
</style>
