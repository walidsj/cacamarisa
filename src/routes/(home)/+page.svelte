<script>
    import kppnLogo from '$lib/assets/images/logo-intress.png'
    import kemenkeuLogo from '$lib/assets/images/logo-kemenkeu2.png'
</script>

<svelte:head>
    <title>Marisa Mobile</title>
</svelte:head>

<div class="pl-5 mt-1">
    <div class="flex justify-between w-full py-5 -m-2 overflow-auto">
        <div class="p-2">
            <button
                type="button"
                class="transition-all ease-in-out bg-gradient-to-br from-blue-400 to-blue-600 active:opacity-80 rounded-3xl shadow-md w-16 h-16 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-white"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M220 220h32v116"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M208 340h88"
                    />
                    <path
                        fill="currentColor"
                        d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"
                    />
                </svg>
            </button>
            <div class="mt-2 text-center text-xs tracking-wider">Informasi</div>
        </div>
        <div class="p-2">
            <button
                type="button"
                class="transition-all ease-in-out bg-gradient-to-br from-blue-400 to-blue-600 active:opacity-80 rounded-3xl shadow-md w-16 h-16 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-white"
                    viewBox="0 0 512 512"
                >
                    <rect
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="32"
                        x="48"
                        y="80"
                        width="416"
                        height="384"
                        rx="48"
                    /><circle
                        fill="currentColor"
                        cx="296"
                        cy="232"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="376"
                        cy="232"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="296"
                        cy="312"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="376"
                        cy="312"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="136"
                        cy="312"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="216"
                        cy="312"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="136"
                        cy="392"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="216"
                        cy="392"
                        r="24"
                    /><circle
                        fill="currentColor"
                        cx="296"
                        cy="392"
                        r="24"
                    /><path
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="32"
                        stroke-linecap="round"
                        d="M128 48v32M384 48v32"
                    /><path
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M464 160H48"
                    />
                </svg>
            </button>
            <div class="mt-2 text-center text-xs tracking-wider">Jadwal</div>
        </div>
        <div class="p-2">
            <button
                type="button"
                class="transition-all ease-in-out bg-gradient-to-br from-blue-400 to-blue-600 active:opacity-80 rounded-3xl shadow-md w-16 h-16 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-white"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                    />
                </svg>
            </button>
            <div class="mt-2 text-center text-xs tracking-wider">Panduan</div>
        </div>
        <div class="p-2">
            <button
                type="button"
                class="transition-all ease-in-out bg-gradient-to-br from-blue-400 to-blue-600 active:opacity-80 rounded-3xl shadow-md w-16 h-16 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-white"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                    />
                    <path
                        d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                    />
                </svg>
            </button>
            <div class="mt-2 text-center text-xs tracking-wider">Kontak</div>
        </div>
    </div>
</div>

<div class="px-5 py-2 mb-5 space-x-5 flex items-center justify-center">
    <img src={kemenkeuLogo} alt="Logo Kemenkeu" class="h-8" />
    <img src={kppnLogo} alt="Logo KPPN Marisa" class="h-8" />
</div>

<div>
    <div class="flex justify-between px-5 pb-2">
        <div class="font-semibold">Informasi Terkini</div>
        <div class="text-sm font-medium text-blue-500 active:opacity-80">
            Lihat Semua
        </div>
    </div>
    <div class="flex-1 px-5 pt-1">
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
                                    alt="KPPN Marisa"
                                    class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                    src="data:image/png;base64,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"
                                />
                                <div
                                    class="flex items-center absolute inset-0 justify-center bg-gray-100 opacity-0 object-cover w-full h-full rounded-3xl"
                                >
                                    <img
                                        alt="Home"
                                        src="data:image/png;base64,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"
                                        class="object-contain w-full h-full mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                    >
                        <div
                            class="items-center w-full text-xs text-gray-400 line-clamp-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline w-4 h-auto -mt-0.5 mr-0.5 fill-current"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                                /></svg
                            > #UangKita
                        </div>
                        <div class="text-sm text-brand-dark line-clamp-2">
                            Info penting buat Temankeu yang lagi cari tambahan
                            modal buat usaha! Kredit Usaha Rakyat bisa jadi
                            pilihan. Bunganya rendah karena dapat subsidi dari
                            #UangKita.
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
                                    alt=""
                                    class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                    src="data:image/png;base64,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"
                                />
                                <div
                                    class="flex items-center absolute inset-0 justify-center bg-gray-100 opacity-0 object-cover w-full h-full rounded-3xl"
                                >
                                    <img
                                        alt="Home"
                                        src="data:image/png;base64,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"
                                        class="object-contain w-full h-full mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                    >
                        <div
                            class="items-center w-full text-xs text-gray-400 line-clamp-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline w-4 h-auto -mt-0.5 mr-0.5 fill-current"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                                /></svg
                            > hai.DJPb
                        </div>
                        <div class="text-sm text-brand-dark line-clamp-2">
                            #TemanHAI penilaian IKPA indikator kinerja capaian
                            output berubah menjadi sesuai dengan proyeksi yang
                            disusun oleh satker. Selengkapnya dapat #TemanHAI
                            pedomani pada...
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
                                    alt=""
                                    class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                    src="data:image/png;base64,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"
                                />
                                <div
                                    class="flex items-center absolute inset-0 justify-center bg-gray-100 opacity-0 object-cover w-full h-full rounded-3xl"
                                >
                                    <img
                                        alt="Home"
                                        src="data:image/png;base64,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"
                                        class="object-contain w-full h-full mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                    >
                        <div
                            class="items-center w-full text-xs text-gray-400 line-clamp-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline w-4 h-auto -mt-0.5 mr-0.5 fill-current"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                                /></svg
                            > #UangKita
                        </div>
                        <div class="text-sm text-brand-dark line-clamp-2">
                            #UangKita untuk anak Indonesia enggak cuma lewat
                            pendidikan mereka. Banyak ragam program APBN untuk
                            anak. Bahkan ada yang bisa kamu ikuti juga, lho.
                            Yuk, cari tahu lebih lanjut di sini.
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
                                    alt=""
                                    class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                    src="data:image/png;base64,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"
                                />
                                <div
                                    class="flex items-center absolute inset-0 justify-center bg-gray-100 opacity-0 object-cover w-full h-full rounded-3xl"
                                >
                                    <img
                                        alt="Home"
                                        src="data:image/png;base64,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"
                                        class="object-contain w-full h-full mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                    >
                        <div
                            class="items-center w-full text-xs text-gray-400 line-clamp-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline w-4 h-auto -mt-0.5 mr-0.5 fill-current"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                                /></svg
                            > #UangKita
                        </div>
                        <div class="text-sm text-brand-dark line-clamp-2">
                            #UangKita untuk anak Indonesia enggak cuma lewat
                            pendidikan mereka. Banyak ragam program APBN untuk
                            anak. Bahkan ada yang bisa kamu ikuti juga, lho.
                            Yuk, cari tahu lebih lanjut di sini.
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
                                    alt=""
                                    class="object-cover w-full h-full bg-gray-100 rounded-3xl bg-gray-100"
                                    src="data:image/png;base64,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"
                                />
                                <div
                                    class="flex items-center absolute inset-0 justify-center bg-gray-100 opacity-0 object-cover w-full h-full rounded-3xl"
                                >
                                    <img
                                        alt="Home"
                                        src="data:image/png;base64,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"
                                        class="object-contain w-full h-full mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center flex-1 min-w-0 pl-5 space-y-1"
                    >
                        <div
                            class="items-center w-full text-xs text-gray-400 line-clamp-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline w-4 h-auto -mt-0.5 mr-0.5 fill-current"
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                                /></svg
                            > #UangKita
                        </div>
                        <div class="text-sm text-brand-dark line-clamp-2">
                            #UangKita untuk anak Indonesia enggak cuma lewat
                            pendidikan mereka. Banyak ragam program APBN untuk
                            anak. Bahkan ada yang bisa kamu ikuti juga, lho.
                            Yuk, cari tahu lebih lanjut di sini.
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
