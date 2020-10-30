<template>
    <section class="main">
        <NavBar/>

        <GameScreen/>

        <ResetButton/>
    </section>
</template>

<script>
    import {store} from "@/store";
    import GameScreen from './components/CardDeck.vue';
    import ResetButton from "@/components/ResetButton";
    import NavBar from "@/components/InfoBar";

    export default {
        name: 'App',
        store,
        components: {
            ResetButton,
            GameScreen,
            NavBar
        }
    };
</script>

<style>
    body {
        font-family: 'Grandstander', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        background-color: black;
    }

    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
