<script lang="ts">
    import background from './assets/background.webp'
    import Welcome from "./lib/Welcome.svelte";
    import NamesPanel from "./lib/NamesPanel.svelte";
</script>

<main class="bg-gradient-to-r from-rose-700 to-pink-600 w-full h-screen flex flex-col items-center relative">
    <img src={background} alt="background" class="absolute object-cover w-full h-full z-0">
    <Welcome>
        <NamesPanel/>
    </Welcome>
</main>


<style>
    .circle-mask {
        clip-path: circle(50% at 50% 50%);
    }
</style>
