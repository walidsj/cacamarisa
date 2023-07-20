<script>
    import logo from '$lib/assets/icon/logo.png'
    import news from '$lib/assets/icon/menu/news.png'
    import paperplane from '$lib/assets/icon/menu/paperplane.png'
    import user from '$lib/assets/icon/menu/user.png'
</script>

<header
    class="flex justify-between items-center shadow-md px-3 py-2 bg-white rounded-b-3xl"
>
    <div class="flex flex-row items-center gap-2">
        <img src={logo} alt="logo" class="h-14" />
        <div class="flex flex-col">
            <h1 class="font-bold text-xl">Caca Marisa</h1>
            <span class="text-sm">Notification Center</span>
        </div>
    </div>
</header>
<main class="p-6 flex flex-col gap-3">
    <slot />
</main>
<footer
    class="flex justify-between items-center shadow-md px-3 py-2 bg-white fixed bottom-0 w-full rounded-t-3xl"
>
    <div class="grid grid-cols-3 gap-5 w-full">
        <div class="flex flex-col items-center text-center">
            <img src={news} alt="Menu" class="h-10" />
            <span class="text-xs">Terjadwal</span>
        </div>
        <div class="flex flex-col items-center text-center">
            <img src={paperplane} alt="Menu" class="h-10" />
            <span class="text-xs">Kirim Pesan</span>
        </div>
        <div class="flex flex-col items-center text-center">
            <img src={user} alt="Menu" class="h-10" />
            <span class="text-xs">Akun Saya</span>
        </div>
    </div>
</footer>
