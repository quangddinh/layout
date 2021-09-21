<template>
    <home />
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '@/views/Home.vue';

export default Vue.extend({
    name: 'App',
    components: { Home },
    data: () => ({
    }),
    mounted(){
        this.$forceUpdate();
    }
});
</script>
