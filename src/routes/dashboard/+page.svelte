<script>
    import news from '$lib/assets/icon/menu/news.png'
    import contact from '$lib/assets/icon/menu/contact.png'
    import briefcase from '$lib/assets/icon/menu/briefcase.png'
    import agent from '$lib/assets/icon/menu/agent.png'
    import ereader from '$lib/assets/icon/menu/ereader.png'
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<span class="font-semibold">Database</span>

<div class="grid grid-cols-2 gap-5">
    <div
        class="shadow-md rounded-md bg-white p-3 items-center flex flex-col gap-2 text-center"
    >
        <img src={contact} alt="Daftar Kontak" class="h-12" />
        <span class="text-sm">Daftar Kontak</span>
    </div>
    <div
        class="shadow-md rounded-md bg-white p-3 items-center flex flex-col gap-2 text-center"
    >
        <img src={briefcase} alt="Addres Book" class="h-12" />
        <span class="text-sm">Daftar Satker</span>
    </div>
</div>

<span class="font-semibold">Klasifikasi</span>

<div class="grid grid-cols-2 gap-5">
    <div
        class="shadow-md rounded-md bg-white p-3 items-center flex flex-col gap-2 text-center"
    >
        <img src={agent} alt="Jenis Kontak" class="h-12" />
        <span class="text-sm">Jenis Kontak</span>
    </div>
    <div
        class="shadow-md rounded-md bg-white p-3 items-center flex flex-col gap-2 text-center"
    >
        <img src={ereader} alt="Jenis Notifikasi" class="h-12" />
        <span class="text-sm">Jenis Notifikasi</span>
    </div>
</div>
