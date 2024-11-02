<script setup>
import {ref} from "vue";
</script>
<template>

    <div>
        <NuxtLink to="/"> -- Back</NuxtLink>
        <slot />
    </div>

</template>