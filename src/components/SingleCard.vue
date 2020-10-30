<template>
    <section class="card">
        <img :class="card.picked || card.matched ? 'card__back__hidden' : 'card__back__revealed'"
             src="../assets/QuestionMarkCard.jpg" @click="() => revealCard(card.id)"
             alt="questionMark"/>

        <div :class="card.picked || card.matched ? 'card__front__revealed' : 'card__front__hidden'">
            {{card.shownCardNumber}}
        </div>
    </section>
</template>

<script>
    export default {
        name: "SingleCard",
        props: ["card"],
        methods: {
            revealCard: function (id) {
                this.$store.commit("revealCard", id);
                setTimeout(() => this.$store.commit("handlePairs"), 1500);
            }
        }
    };
</script>

<style scoped>
    .card {
        font-family: 'Grandstander', cursive;
        border: 2px solid #30df33;
        border-radius: 16px;
        padding: 8px;
        height: 200px;
        margin: 10px;
    }

    .card__back__revealed {
        height: 200px;
        width: 160px;
    }

    .card__back__hidden {
        display: none;
    }

    .card__front__revealed {
        height: 200px;
        width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 120px;
    }

    .card__front__hidden {
        display: none;
    }

</style>
