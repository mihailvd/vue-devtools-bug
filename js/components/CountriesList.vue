<template>
    <ul>
        <li v-for="country in countriesList">{{ country.name }}</li>
    </ul>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'CountriesList',
        computed: {
            ...mapState({
                countriesList: state => state.country.items,
            })
        },
        mounted() {
            this.$store.dispatch('loadCountries');
        }
    };
</script>