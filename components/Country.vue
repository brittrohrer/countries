<script setup>
import {defineProps,ref} from "vue";
const countryProp = defineProps({
    name: String,
    flag: String,
    alt: String,
});


</script>
<template>
    <div class="country__card">
        <h2 class="country__title">Country: {{ countryProp.name }}</h2>
        <img class="country__flag" :src="countryProp.flag" :alt="countryProp.alt">
        <NuxtLink class="country__link" :to="`/${countryProp.name}`">Find out more -> </NuxtLink>
    </div>
</template>