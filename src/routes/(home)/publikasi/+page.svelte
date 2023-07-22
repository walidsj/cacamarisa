<script>
    import cacaMarisa1 from '$lib/assets/images/buletin/cacamarisa1.png'
    import cacaMarisa2 from '$lib/assets/images/buletin/cacamarisa2.png'
</script>

<svelte:head>
    <title>Buletin - Marisa Mobile</title>
</svelte:head>

<div class="mt-1 py-5">
    <div class="px-5">
        <div class="w-full pb-6">
            <input
                id="phone"
                placeholder="Cari publikasi di sini..."
                class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3 placeholder:text-gray-400"
                type="text"
            />
        </div>
    </div>

    <div class="px-5">
        <div class="flex justify-between pb-1">
            <div class="font-semibold">Buletin Terbaru</div>
        </div>
    </div>

    <div class="pb-7">
        <div class="w-full overflow-auto">
            <div class="px-2.5 w-auto inline-flex">
                <div class="m-2.5 flex flex-col bg-white shadow-md rounded-3xl">
                    <div class="h-auto w-40">
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
                <div class="m-2.5 flex flex-col bg-white shadow-md rounded-3xl">
                    <div class="h-auto w-40">
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
                <div class="m-2.5 flex flex-col bg-white shadow-md rounded-3xl">
                    <div class="h-auto w-40">
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
    </div>

    <div class="px-5">
        <div class="flex justify-between pb-2">
            <div class="font-semibold">Petunjuk Teknis</div>
            <div class="text-sm font-medium text-blue-500 active:opacity-80">
                Lihat Semua
            </div>
        </div>
    </div>

    <div class="px-5">
        <div class="flex-1 pt-1 pb-6">
            <div>
                <div class="space-y-5">
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div class="text-sm line-clamp-3">
                                Petunjuk Teknis Pengajuan TUP Sakti V.3
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div class="text-sm line-clamp-3">
                                Petunjuk Teknis Pengiriman SPM
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div class="text-sm line-clamp-3">
                                Panduan Upload Backup GPP ke Aplikasi Gaji Web
                                User PBAPP
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="px-5">
        <div class="flex justify-between pb-2 mt-5">
            <div class="font-semibold">Artikel Terbaru</div>
            <div class="text-sm font-medium text-blue-500 active:opacity-80">
                Selengkapnya
            </div>
        </div>
    </div>

    <div class="px-5">
        <div class="flex-1 pt-1">
            <div>
                <div class="space-y-5">
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                #UangKita
                            </div>
                            <div class="text-sm line-clamp-2">
                                Info penting buat Temankeu yang lagi cari
                                tambahan modal buat usaha! Kredit Usaha Rakyat
                                bisa jadi pilihan. Bunganya rendah karena dapat
                                subsidi dari #UangKita.
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                hai.DJPb
                            </div>
                            <div class="text-sm line-clamp-2">
                                #TemanHAI penilaian IKPA indikator kinerja
                                capaian output berubah menjadi sesuai dengan
                                proyeksi yang disusun oleh satker. Selengkapnya
                                dapat #TemanHAI pedomani pada...
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="relative w-20 h-20">
                            <div
                                class="absolute inset-0 w-20 h-20 overflow-hidden rounded-3xl ring-1 ring-black/5"
                            >
                                <div
                                    class="relative object-cover w-full h-full bg-gray-100 rounded-3xl"
                                >
                                    <img
                                        class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                        src="data:image/png;base64,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"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                        >
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                #UangKita
                            </div>
                            <div class="text-sm line-clamp-2">
                                #UangKita untuk anak Indonesia enggak cuma lewat
                                pendidikan mereka. Banyak ragam program APBN
                                untuk anak. Bahkan ada yang bisa kamu ikuti
                                juga, lho. Yuk, cari tahu lebih lanjut di sini.
                            </div>
                            <div
                                class="items-center w-full text-xs text-gray-400 line-clamp-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="inline w-4 h-auto -mt-0.5 mr-0.5"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 1 hari yang lalu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
