<script>
    import kiss from "../assets/kiss.webp";
    import {checkClicked, compatibility, partnersName, yourName} from "../stores.ts";
    import NameInput from "./NameInput.svelte";
    import CompatibilityPanel from "./CompatibilityPanel.svelte";

    const checkNames = () => {
        const gabrielOlaCondition = $yourName.toLowerCase() === 'gabriel' && $partnersName.toLowerCase() === 'ola';
        const olaGabrielCondition = $yourName.toLowerCase() === 'ola' && $partnersName.toLowerCase() === 'gabriel';
        const gabrielAleksandraCondition = $yourName.toLowerCase() === 'gabriel' && $partnersName.toLowerCase() === 'aleksandra';
        const aleksandraGabrielCondition = $yourName.toLowerCase() === 'aleksandra' && $partnersName.toLowerCase() === 'gabriel';
        const gabrysOlaCondition = $yourName.toLowerCase() === 'gabrys' && $partnersName.toLowerCase() === 'ola';
        const olaGabrysCondition = $yourName.toLowerCase() === 'ola' && $partnersName.toLowerCase() === 'gabrys';
        const gabrysAleksandraCondition = $yourName.toLowerCase() === 'gabrys' && $partnersName.toLowerCase() === 'aleksandra';
        const aleksandraGabrysCondition = $yourName.toLowerCase() === 'aleksandra' && $partnersName.toLowerCase() === 'gabrys';
        const gabryśOlaCondition = $yourName.toLowerCase() === 'gabryś' && $partnersName.toLowerCase() === 'ola';
        const olaGabryśCondition = $yourName.toLowerCase() === 'ola' && $partnersName.toLowerCase() === 'gabryś';
        const gabryśAleksandraCondition = $yourName.toLowerCase() === 'gabryś' && $partnersName.toLowerCase() === 'aleksandra';
        const aleksandraGabryśCondition = $yourName.toLowerCase() === 'aleksandra' && $partnersName.toLowerCase() === 'gabryś';

        return gabrielOlaCondition || olaGabrielCondition || gabrielAleksandraCondition || aleksandraGabrielCondition || gabrysOlaCondition || olaGabrysCondition
            || gabrysAleksandraCondition || aleksandraGabrysCondition || gabryśOlaCondition || olaGabryśCondition || gabryśAleksandraCondition || aleksandraGabryśCondition;
    }

    const calculateCompatibility = () => {
        let _compatibility = 0;
        const duration = Math.floor(Math.random() * 5) + 1;
        const targetCompatibility = checkNames() ? 100 : Math.floor(Math.random() * 100) + 1;
        const _calculatedDuration = duration * (100 - targetCompatibility);
        const interval = setInterval(() => {
            if (_compatibility < targetCompatibility) {
                _compatibility++;
                compatibility.set(_compatibility);
            } else {
                compatibility.set(targetCompatibility);
                clearInterval(interval);
            }
        }, _calculatedDuration);
    }

    const handleCheckClick = () => {
        if ($yourName && $partnersName) {
            checkClicked.set(true);
            calculateCompatibility();
        }
    }
</script>

<img src={kiss} alt="kiss"
     class={`circle-mask w-1/2 lg:max-w-[250px] absolute ${$checkClicked ? '-bottom-16' : '-bottom-32 lg:-bottom-48'} -left-8 lg:-left-32 select-none`}>
<div class="flex flex-row items-center w-full">
    <NameInput placeholder="Your name"/>
    <div class="w-1/12 h-full"></div>
    <NameInput placeholder="Partner's name"/>
</div>
{#if !$checkClicked}
    <button on:click={handleCheckClick}
            class="bg-pink-400 text-white font-bold text-lg lg:text-2xl rounded-lg px-4 py-3 mt-4 outline-none focus:ring-4 focus:ring-pink-600 shadow-lg transform active:scale-x-75 transition-transform mx-5">
        Check!
    </button>
{:else}
    <CompatibilityPanel/>
{/if}
