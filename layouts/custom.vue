<script setup>
import {ref} from "vue";
</script>
<template>

    <div>
        <div class="back-button__container">
            <NuxtLink class="back-button__link" to="/">
                    <i class="fa-regular fa-circle-left"></i> Back
            </NuxtLink>
        </div>
        <slot />
    </div>

</template>