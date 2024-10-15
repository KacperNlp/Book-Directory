export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('jwt');
  
    console.log(token.value);
    if (!token.value) {
      return navigateTo('/login');
    }
  });