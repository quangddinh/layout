<template>
    <div>
        <div v-if="showHomepage">
            <h1>Homepage</h1>
            <p>Welcome to Homepage Welcome to Homepage Welcome to Homepage Welcome to Homepage Welcome to Homepage</p>
        </div>
        <div class="alert alert-primary" role="alert">
            <b-list-group horizontal>
                <b-button
                    @click="
                        showHomepage = true;
                        showBtnCompo = true;
                    "
                    >Back</b-button
                >

                <!-- click navbar vô là ẩn compo -->

                <b-list-group-item v-for="item in items" :key="item.title">
                    <div
                        v-if="item.isShowNav"
                        @click="
                            item.isShow = !item.isShow;
                            item.isShowNav = true;
                            showHomepage = false;
                            showBtnCompo = false;
                        "
                    >
                        <!-- click vào nav -->
                        <p>{{ item.title }}</p>
                    </div>
                </b-list-group-item>
            </b-list-group>
        </div>
        <div>
            <b-tabs pills card horizontal v-for="item in items" :key="item.title">
                <!-- click to show component -->
                <b-button
                    v-if="showBtnCompo"
                    size="lg"
                    class="m-5 px-3 py-2"
                    @click="
                        item.isShow = !item.isShow;
                        showHomepage = false;
                        showBtnCompo = false;
                        item.isShowNav = true;
                    "
                    variant="info"
                    >{{ item.title }}</b-button
                >
                <b-card v-if="item.isShow" class="show">
                    <b-card-text vertical class="compo-card">
                        <b-button
                            @click="
                                item.isShow = false;
                                item.isShowNav = false;
                                showHomepage = true;
                                showBtnCompo = true;
                            "
                            variant="danger"
                            >Close</b-button
                        >
                    </b-card-text>
                    <component :is="item.itemShow" class="compo"></component>
                </b-card>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import Project from './Project.vue';
import Mental from './Mental.vue';
import Potato from './Potato.vue';
export default {
    name: 'Dash',
    components: {
        Project,
        Mental,
        Potato,
    },
    data: () => ({
        showHomepage: true,
        showBtnCompo: true,
        items: [
            { title: 'Project', icon: 'mdi-account-box', isShow: false, itemShow: 'project', isShowNav: false },
            { title: 'Mental', icon: 'mdi-gavel', isShow: false, itemShow: 'mental', isShowNav: false },
            { title: 'Potato', icon: 'mdi-gavel', isShow: false, itemShow: 'potato', isShowNav: false },
        ],
    }),
};
</script>

<style>
.compo {
    height: 900px;
    background-color: rgb(230, 155, 64);
}
.show {
    background-color: rgb(113, 219, 130);
    padding: 0;
}
</style>
