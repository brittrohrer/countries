<script setup>
definePageMeta({
    layout: "custom"
})
const {name} = useRoute().params
const url = `https://restcountries.com/v3.1/name/` + name;

const countries = ref([]);
onMounted(async() => {
    try{
        /* fetch data from api */
        const response = await fetch(
        url 
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
    <div>
        <div v-for="country in countries" :key="country.name.common">
            <h2>Country: {{ country.name.common }}</h2>
            <div>
                <p>Continent: {{ country.continents[0] }}</p>
                <p>Region: {{ country.region }}</p>
                <p>Sub-Region: {{ country.subregion }}</p>
                <p>Capital: {{ country.capital[0] }}</p>
                <p>Population: {{ country.population.toLocaleString() }}</p>
                <div>
                    <p>Languages:</p>
                        <ul>
                            <li v-for="lang in country.languages" :key="lang">
                                {{ lang }}
                            </li>
                        </ul>
                </div>
                <div>
                    <p>Currencies:</p>
                        <ul>
                            <li v-for="curr in country.currencies" :key="curr.name">
                                <p>Name: {{ curr.name }}</p>
                                <p>Symbol: {{ curr.symbol }}</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>
