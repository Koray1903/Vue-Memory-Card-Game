<template>
    <section class="infoBarFlex">
        <p class="infoBarFlex__title">Memory Card Game</p>

        <div class="infoBarFlex__InnerFlex">
            <div class="infoBarFlex__InnerFlex__time">
                <span>Time Elapsed : </span>

                <span>{{minuteModifier(timeElapsed)}} minutes {{secondModifier(timeElapsed)}} seconds</span>
            </div>

            <div class="infoBarFlex__InnerFlex__turns">
                <span>Number of Turns : </span>

                <span>{{numberOfTurns}}</span>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "NavBar",
        methods: {
            minuteModifier: function (minute) {
                return Math.floor(minute / 1000 / 60);
            },
            secondModifier: function (second) {
                return Math.floor(second / 1000 % 60);
            }
        },
        computed: {
            ...mapGetters(["timeElapsed", "numberOfTurns"])
        },
        mounted() {
            this.$store.commit("startTimer");
        },
    };
</script>

<style scoped>
    .infoBarFlex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px 0;
    }

    .infoBarFlex__title {
        font-family: 'Grandstander', cursive;
        font-size: 48px;
        margin: 0;
        padding: 12px 0;
    }

    .infoBarFlex__InnerFlex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 1200px;
    }

    .infoBarFlex__InnerFlex__time {
        font-family: 'Grandstander', cursive;
        font-size: 36px;
        padding: 12px 0;
        text-align: left;
    }

    .infoBarFlex__InnerFlex__turns {
        font-family: 'Grandstander', cursive;
        font-size: 36px;
        padding: 12px 0;
        text-align: left;
    }
</style>
