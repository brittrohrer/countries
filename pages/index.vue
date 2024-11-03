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

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('displaySearch', (e) => {
    console.log(e);
})

</script>

<template>
    <div>
        <div>
            <div class="search-wrapper">
                <input class="search-bar" type="search" id="search-bar" placeholder="Search for Country by Name" data-search>
            </div>
        </div>
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
    </div>
</template>