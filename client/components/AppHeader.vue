<template>
  <header class="nav fixed flex px-4 py-8 border-b bg-stone-50 w-dvw h-dvh max-w-80 left-[-320px] duration-500"
    :class="{ active: navActive }">
    <nav>
      <ul class="flex flex-col gap-6">
        <nuxt-link to="/" class="nav-item flex items-center gap-2 hover:text-blue-500 duration-200">
          <Icon name="uil:home" style="color: black" size="24" class="duration-200" />
          <span>Strona główna</span>
        </nuxt-link>
        <nuxt-link to="/account" class="nav-item flex items-center gap-2 hover:text-blue-500 duration-200">
          <Icon name="uil:user" style="color: black" size="24" class="duration-200" />
          <span>Konto</span>
        </nuxt-link>
      </ul>
    </nav>
  </header>
  <el-button @click="handleClickShowHideNav" class="on-off-nav-btn fixed bottom-2 left-1 duration-500"
    :class="{ active: navActive }" type="primary" round>
    <Icon v-show="!navActive" name="uil:angle-right-b" style="color: #fff" size="24" />
    <Icon v-show="navActive" name="uil:angle-left-b" style="color: #fff" size="24" />
  </el-button>
</template>

<script lang="ts" setup>
const navActive = ref(false);

function handleClickShowHideNav() {
  navActive.value = !navActive.value;
}
</script>

<style scoped lang="scss">
.router-link-active {
  color: #3b82f6;
}

.router-link-active .iconify {
  color: #3b82f6 !important;
}

.nav-item:hover .iconify {
  color: #3b82f6 !important;
}

.nav.active {
  left: 0;
}

.on-off-nav-btn {
  transition: 0.5s;
}

.on-off-nav-btn.active {
  transform: translateX(calc(100vw - 60px));

  @media (min-width: 360px) {
    transform: translateX(320px);
  }
}
</style>
