<script>
    import {checkClicked, compatibility} from "../stores.ts";

    let _compatibility;
    compatibility.subscribe(value => _compatibility = value);

    const handleTryAgain = () => {
        compatibility.set(0);
        checkClicked.set(false);
    }

</script>

<div class="w-full flex flex-col items-center p-4 m-4">
    <p class="font-bold text-2xl lg:text-4xl mb-4">YOUR COMPATIBILITY</p>
    <div class="w-full h-10 lg:h-20 bg-gray-200 rounded-full dark:bg-gray-700 shadow-lg">
        <div class="bg-gradient-to-r from-pink-400 to-pink-600 h-full rounded-full" style="width: {_compatibility}%"></div>
    </div>
    <p class="font-bold text-2xl lg:text-4xl mt-4">{_compatibility}%</p>
    <button on:click={handleTryAgain} class="bg-pink-400 text-white font-bold text-lg lg:text-2xl rounded-lg px-4 py-3 mt-4 outline-none focus:ring-4 focus:ring-pink-600 shadow-lg transform active:scale-x-75 transition-transform mx-5">Try again?</button>
</div>
