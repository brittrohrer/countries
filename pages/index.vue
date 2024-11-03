<script setup>
const countries = ref([]);
onMounted(async() => {
    try{
        /* fetch data from api */
        const response = await fetch(
        "https://restcountries.com/v3.1/all"
        );

        /* Turn response into structured json */
        countries.value = await response.json();
        /* console.log data to see what it looks like */
        console.log(countries.value); 

    } catch (error) {
        /* catch the error if it puts out one and display error */
        console.error(error);
    } 
        
});

</script>

<template>
    <div class="countries__container">
        <ul class="countries__list">
            <li class="countries__list-item" v-for="c in countries" :key="c.name.common">
                <Country
                    :name="c.name.common"
                    :flag="c.flags.png" 
                    :alt="c.flags.alt"
                />
            </li>
        </ul>

    </div>
</template>