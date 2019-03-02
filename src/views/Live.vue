<template>
    <div>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row" v-if="standings.length == 0">
                        <div class="col-lg-6">
                            <h1 class="display-3 text-white">
                                A beautiful Design System
                                <span>completed with examples</span>
                            </h1>
                        </div>
                    </div>
                    <div class="col-12" v-else>
                        <list-item
                            v-bind:item="item"
                            v-for="item in orderedStandings"
                            :key="item.eliminator"
                        ></list-item>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ListItem from "./components/ListItem";

export default {
    name: "components",
    components: {
        ListItem
    },
    data() {
        return {
            socket: null,
            standings: []
        };
    },
    mounted() {
        this.start();
    },
    computed: {
        orderedStandings: function() {
            return this.standings.slice(0).sort((a, b) => {
                if (a.kills < b.kills) {
                    return 1;
                }
                if (a.kills > b.kills) {
                    return -1;
                }
                return 0;
            });
        }
    },
    methods: {
        doesExists(player) {
            for (let i = 0; i < this.standings.length; i++) {
                if (this.standings[i].eliminator === player) {
                    return i;
                }
            }
            return -1;
        },
        changed(data) {
            let eliminator = data.Eliminator;
            let eliminated = data.Eliminated;
            let died = !data.Knocked;

            var i = this.doesExists(eliminator);
            if (i >= 0) {
                if (died) {
                    this.standings[i].kills += 1;
                }
            } else {
                this.standings.push({
                    eliminator: eliminator,
                    kills: died ? 1 : 0,
                    died: false
                });
            }

            i = this.doesExists(eliminated);
            if (i >= 0) {
                if (died) {
                    this.standings[i].died = died;
                }
            } else {
                this.standings.push({
                    eliminator: eliminated,
                    kills: 0,
                    died: true
                });
            }
        },
        start() {
            var onmessage = this.changed;
            var protocol = "ws://";
            if (location.protocol == "https:") {
                protocol = "wss://";
            }
            // var url = protocol + location.host + "/websocket/Shiqan";
            var url = "ws://localhost:8888/websocket/Shiqan";
            this.socket = new WebSocket(url);
            this.socket.onopen = function() {
                console.log("connected");
            };
            this.socket.onmessage = function(event) {
                console.log(event);
                console.log(JSON.parse(event.data));
                onmessage(JSON.parse(event.data));
            };
        }
    }
};
</script>
