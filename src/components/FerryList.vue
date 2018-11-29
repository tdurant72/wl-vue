<template>
    <div>
        <h2>Ferry List</h2>
        <ul v-for="(allFerries, index) in allFerries" :key="index">
            <li>{{allFerries.VesselName}}</li> 
        </ul>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    // computed:{
        // ferries(){
        //     return this.$stores.getters.allFerries
        // }

    // },
    computed: mapGetters([
        'allFerries'
    ]),
    mounted(){
       this.$store.dispatch('getFerries')
    }

}
</script>

<style>

</style>
