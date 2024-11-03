<script setup>
import {ref} from "vue";
</script>
<template>

    <div>
        <h1 class="website-title" id="top">Countries of the World</h1>
        <SearchBar />
        <slot />
        <TopButton />
    </div>

</template>