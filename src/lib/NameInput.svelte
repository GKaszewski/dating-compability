<script>
    import {yourName, partnersName} from "../stores.ts";

    export let placeholder = 'Your name' | "Partner's name"
    const handleInput = (e) => {
        if (placeholder === 'Your name') {
            yourName.set(e.target.value)
        } else {
            partnersName.set(e.target.value)
        }
    }


    $: name = placeholder === 'Your name' ? $yourName : $partnersName

</script>

<input on:input={handleInput} type="text" placeholder={placeholder} value={name} class="w-full h-full p-4 text-lg lg:text-2xl font-bold border-4 rounded-lg border-pink-400 outline-0">
