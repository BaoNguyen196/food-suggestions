<script>
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '#/stores/auth-store';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'MainLayoutAdmin',
  setup() {
    const router = useRouter();

    const $q = useQuasar();
    const store = useAuthStore();
    const leftDrawerOpen = ref(false);
    function onLogout() {
      $q.dialog({
        title: 'Are you sure to logout?',
        message: 'All unfinished tasks will be deleted/cancelled as soon as you log out!',
        cancel: true,
      }).onOk(() => {
        store.logout();
        router.replace('/');
      });
    }
    return {
      isLoggedIn: store.isLoggedIn,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      onLogout,
    };
  },
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu" />
        <q-toolbar-title>Food Suggestions App</q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-card class="text-center no-shadow no-border">
                    <q-btn
                      label="Logout"
                      style="max-width: 120px !important"
                      flat
                      dense
                      class="text-indigo-8"
                      @click="onLogout"
                    ></q-btn>
                  </q-card>
                </q-list>
              </q-menu>
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-primary text-white">
      <q-list>
        <q-item to="/admin" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
