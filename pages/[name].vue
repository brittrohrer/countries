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
    <div class="country-page">
        <div class="country-page__container" v-for="country in countries" :key="country.name.common">
            <h2 class="country-page__name">{{ country.name.common }}</h2>
            <div class="country-page__details-container row">
                <div class="col-lg-6">
                    <img class="country-page__flag" :src="country.flags.png">
                </div>
                <div class="col-lg-6">
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Continent: </h3>
                        <p class="country-page__details-text">{{ country.continents[0] }}</p>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Region: </h3>
                        <p class="country-page__details-text">{{ country.region }}</p>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Sub-Region: </h3>
                        <p class="country-page__details-text">{{ country.subregion }}</p>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Capital: </h3>
                        <p class="country-page__details-text">{{ country.capital[0] }}</p>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Population: </h3>
                        <p class="country-page__details-text">{{ country.population.toLocaleString() }}</p>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Languages:</h3>
                            <ul>
                                <li  class="country-page__details-list" v-for="lang in country.languages" :key="lang">
                                    <p class="country-page__details-text">{{ lang }}</p>
                    
                                </li>
                            </ul>
                    </div>
                    <div class="country-page__details-group">
                        <h3 class="country-page__details-title">Currencies:</h3>
                            <ul>
                                <li class="country-page__details-list" v-for="curr in country.currencies" :key="curr.name">
                                    <div>
                                        <div>
                                            <h4 class="country-page__details-sub-title">Name: </h4>
                                            <p class="country-page__details-text">{{ curr.name }}</p>
                                        </div>
                                        <div>
                                            <h4 class="country-page__details-sub-title">Symbol: </h4>
                                            <p class="country-page__details-text">{{ curr.symbol }}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
