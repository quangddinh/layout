<template>
    <div>
        <div class="alert alert-primary" role="alert">
            <b-list-group horizontal>
                <!-- click navbar vô là ẩn compo -->
                <b-list-group-item v-for="item in items" :key="item.title" @click="item.isShow = false">
                    <div v-if="item.isShowNav" @click="item.isShowNav = false">
                        <p>{{ item.title }}</p>
                    </div></b-list-group-item
                >
            </b-list-group>
        </div>
        <b-card no-body>
            <b-tabs pills card vertical v-for="item in items" :key="item.title">
                <b-tab
                    :title="item.title"
                    @click="
                        item.isShow = !item.isShow;
                        item.isShowNav = true;
                    "
                >
                    <b-card v-if="item.isShow">
                        <b-card-text horizontal>
                            <b-button v-if="item.title !== 'Home'"
                                @click="
                                    item.isShow = false;
                                    item.isShowNav = false;
                                "
                                variant="danger"
                                >Close</b-button
                            >
                        </b-card-text>
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
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', isShow: false, itemShow: 'dash', isShowNav: true },
            { title: 'Project', icon: 'mdi-account-box', isShow: false, itemShow: 'project', isShowNav: false },
            { title: 'Mental', icon: 'mdi-gavel', isShow: false, itemShow: 'mental', isShowNav: false },
        ],
    }),
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
