<template>
    <card shadow hover class="shadow-lg--hover mt-4" :gradient="status()">
        <div class="d-flex px-3">
            <div class="pl-4">
                <h5 class="title">{{ index }}. {{ item.eliminator }}</h5>
            </div>
            <div class="ml-auto pr-4">
                <h5 class="title">{{ item.kills }}</h5>
            </div>
        </div>
    </card>
</template>

<script>
export default {
    name: "ListItem",
    props: [
        'index', 
        'item'
    ],
    methods: {
        status: function() {
            if (this.item.died) {
                return "danger";
            }
        }
    }
};
</script>

<style lang="scss">
.died {
    background: gray;
}
</style>
