<script>
    import '@fontsource/poppins/400.css'
    import '@fontsource/poppins/500.css'
    import '@fontsource/poppins/600.css'
    import '@fontsource/poppins/700.css'
    import '@fontsource/poppins/800.css'
    import '$lib/assets/css/app.css'
    import { onMount } from 'svelte'

    function updateInnerHeight() {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    onMount(() => {
        window.addEventListener('resize', updateInnerHeight)
        updateInnerHeight()
    })
</script>

<div class="w-full text-gray-800 bg-[url('/pattern.png')]">
    <div class="max-w-md mx-auto bg-white shadow-xl">
        <slot />
    </div>
</div>
