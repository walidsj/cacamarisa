<script>
    import cacaMarisa1 from '$lib/assets/images/buletin/cacamarisa1.png'
    import cacaMarisa2 from '$lib/assets/images/buletin/cacamarisa2.png'
</script>

<svelte:head>
    <title>Buletin - Caca Marisa Mobile</title>
</svelte:head>

<div class="px-5 mt-1 py-5">
    <div class="w-full pb-5">
        <input
            id="phone"
            placeholder="Cari Buletin..."
            class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3"
            type="tel"
        />
    </div>
    <div class="flex justify-between pb-2">
        <div class="font-semibold">Rilis Terbaru</div>
    </div>
    <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col bg-white shadow-md rounded-3xl">
            <div class="h-auto w-auto">
                <img
                    class="w-full rounded-t-3xl"
                    src={cacaMarisa2}
                    alt="Buletin 2"
                />
            </div>
            <div class="p-3">
                <h1 class="font-semibold">Caca Marisa</h1>
                <p class="text-xs text-gray-500">Volume 2</p>
            </div>
        </div>
        <div class="flex flex-col bg-white shadow-md rounded-3xl">
            <div class="h-auto w-auto">
                <img
                    class="w-full rounded-t-3xl"
                    src={cacaMarisa1}
                    alt="Buletin 1"
                />
            </div>
            <div class="p-3">
                <h1 class="font-semibold">Caca Marisa</h1>
                <p class="text-xs text-gray-500">Volume 1</p>
            </div>
        </div>
    </div>
</div>
