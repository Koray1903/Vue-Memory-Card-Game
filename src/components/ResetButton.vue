<template>
    <section>
        <button class="resetButton"
                @click="() => resetGame()">
            <p class="resetButton__text">Reset</p>
        </button>
    </section>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "resetButton",
        methods: {
            ...mapActions(["resetGame"])
        },
    };
</script>

<style scoped>
    .resetButton {
        background: transparent;
        border-radius: 16px;
        padding: 6px 36px;
        color: white;
        cursor: pointer;
        margin: 24px 0;
    }

    .resetButton__text {
        font-family: 'Grandstander', cursive;
        font-size: 36px;
        margin: 0;
    }
</style>
