<template>
    <div>
        <!-- <b-tabs v-for="item in items" :key="item.title">
            <b-tab @click="item.isShow = !item.isShow">

                <component :is="item.itemShow"  v-if="item.isShow"></component>
            </b-tab>
        </b-tabs> -->
        <b-card no-body>
            <b-tabs pills card vertical v-for="item in items" :key="item.title">
                <b-tab :title="item.title" @click="item.isShow = !item.isShow">
                    <b-card v-if="item.isShow">
                        <component :is="item.itemShow"></component>
                    </b-card>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script lang="ts">
import Dash from './Dash.vue';
import Project from './Project.vue';
import Mental from './Mental.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    components: {
        Dash,
        Project,
        Mental,
    },
    data: () => ({
        tabs: [],
        tabCounter: 0,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', isShow: false, itemShow: 'dash' },
            { title: 'Project', icon: 'mdi-account-box', isShow: false, itemShow: 'project' },
            { title: 'Mental', icon: 'mdi-gavel', isShow: false, itemShow: 'mental' },
        ],
    }),
    methods: {
        closeTab(x: any) {
            for (let i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i] === x) {
                    this.tabs.splice(i, 1);
                }
            }
        },
    },
    mounted() {
        this.$forceUpdate();
    },
});
</script>
<style>
body,
html {
    font-size: 16px;
    box-sizing: border-box;
    background-color: rgb(72, 148, 184);
}
/* .contain {
} */
/* .list {
    display: flex;
} */
/* .item {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    background-color: rgb(46, 134, 105);
} */
/* .cardcontain {
    display: flex;
} */
/* .ele {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 20px;
} */
</style>
