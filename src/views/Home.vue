<template>
    <!-- <ul>
            <li @click="toggleA">dash</li>
            <li @click="toggleB">project</li>
            <li @click="toggleC">mental</li>
        </ul>
        <div @click="toggleA">
            <dash v-if="isShowDash" />
        </div>
        <div @click="toggleB">
            <project v-if="isShowProject" />
        </div>
        <div @click="toggleC">
            <mental v-if="isShowMental" />
        </div> -->
    <div class="contain">
        <div v-for="item in items" :key="item.title">
            <div class="showItem">
                <v-card>
                    <v-navigation-drawer class="deep-purple accent-4 list" width="300" dark permanent>
                        <v-list-item height="100" link class="">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content @click="item.isShow = !item.isShow">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-navigation-drawer>
                </v-card>

                <div v-if="item.isShow" class="ele">
                    <component :is="item.itemShow" class="child"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Dash from './Dash.vue';
import Project from './Project.vue';
import Mental from './Mental.vue';
import Vue from 'vue';
import Mental from './Mental.vue';

export default Vue.extend({
    name: 'Home',
    components: {
        Dash,
        Project,
        Mental,
    },
    data: () => ({
        currTab: 'Home',
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', isShow: false, itemShow: 'dash' },
            { title: 'Project', icon: 'mdi-account-box', isShow: false, itemShow: 'project' },
            { title: 'Mental', icon: 'mdi-gavel', isShow: false, itemShow: 'mental' },
        ],
    }),
    methods: {
        toggleA() {
            this.isShow = !this.isShow;
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
.contain {
}
.list {
    display: flex;
}
.showItem {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    background-color: rgb(46, 134, 105);
}
/* .cardcontain {
    display: flex;
} */
.ele {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 20px;
}
</style>
