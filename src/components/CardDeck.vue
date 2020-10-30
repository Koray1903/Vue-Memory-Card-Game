<template>
    <section class="cardDeckMain">

        <SingleCard v-for="card in shuffledCardDeck" :key="card.id" :card="card"/>

    </section>
</template>

<script>
    import SingleCard from "@/components/SingleCard";
    import {mapGetters} from "vuex";

    export default {
        name: "GameScreen",
        components: {
            SingleCard
        },
        computed: {
            ...mapGetters(["shuffledCardDeck"])
        }
    };
</script>

<style scoped>

    .cardDeckMain {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 800px;

    }

</style>
