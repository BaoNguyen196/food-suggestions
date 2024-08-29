<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Log in</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input label="Username" filled disable />
              <q-input type="password" filled label="Password" disable />
              <div class="row justify-center">
                <q-btn round outline size="lg" @click="onLogin">
                  <q-icon name="img:google.svg" />
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useAuthStore } from '#/stores/auth-store';

import { loginWithPopup } from '#/firebase/auth';
import { defineComponent } from 'vue';
import { useNotify } from '#/hooks';
import { useRouter } from 'vue-router';
export default defineComponent({
  mounted() {
    const authStore = useAuthStore();
    if (authStore.isLoggedIn) {
      this.$router.push('/admin');
    }
  },
  setup() {
    const router = useRouter();
    const notify = useNotify();
    const authStore = useAuthStore();
    const onLogin = async () => {
      try {
        const { user, accessToken } = await loginWithPopup();
        authStore.login({ user, accessToken });
        notify({ message: 'Login successfully', type: 'positive' });
        router.push('/admin');
      } catch (error) {
        console.log('error: ', error);
      }
    };
    return {
      onLogin,
    };
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
