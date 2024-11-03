<script setup>
import {defineProps,ref} from "vue";
const countryProp = defineProps({
    name: String,
    flag: String,
    alt: String,
});


</script>
<template>
    <div class="country-card__container">
        <div class="country-card__card">
            <h2 class="country-card__title">{{ countryProp.name }}</h2>
            <img class="country-card__flag" :src="countryProp.flag" :alt="countryProp.alt">
            <div class="country-card__link-container">
                <NuxtLink class="country-card__link" :to="`/${countryProp.name}`">More Info <i class="fa-regular fa-circle-right"></i></NuxtLink>
            </div>
        </div>
    </div>
</template>