<script>
    import logo from '$lib/assets/images/logo-caca.png'
</script>

<div class="relative flex flex-col w-full min-h-screen bg-white">
    <div class="flex items-center justify-between py-1 space-x-2.5">
        <a href="/" class="px-3 py-4 active:opacity-80">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-auto w-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
        </a>
        <div class="flex-1 text-lg font-medium text-center capitalize truncate">
            Login
        </div>
        <div class="px-3 py-4">
            <div class="w-7">​</div>
        </div>
    </div>
    <main class="flex min-h-[calc(100vh-84px)]">
        <div
            class="flex flex-col items-center justify-center flex-1 min-w-full px-5 space-y-6"
        >
            <a href="/" class="flex flex-row gap-2 items-center">
                <img src={logo} alt="Logo" class="h-12 w-auto" />
                <div class="flex flex-col">
                    <h1 class="text-2xl font-semibold leading-5">cacamarisa</h1>
                    <span class="text-gray-400 text-sm">mobile</span>
                </div>
            </a>
            <div class="w-full">
                <label for="phone" class="text-sm font-medium text-gray-700"
                    >Nomor WhatsApp</label
                >
                <div class="w-full mt-1">
                    <div class="relative">
                        <input
                            placeholder="0881-2345-6789"
                            class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3"
                            type="tel"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-20 w-full">
                <a
                    href="/profil"
                    class="flex w-full items-center justify-center px-8 py-5 rounded-3xl active:bg-opacity-80 disabled:bg-opacity-40 disabled:text-opacity-50 bg-blue-500 text-white"
                >
                    Login
                </a>
            </div>
            <div>
                <a
                    href="/"
                    class="flex items-center justify-center rounded-3xl active:bg-opacity-80 disabled:bg-opacity-40 disabled:text-opacity-50 w-full px-4 py-3 font-medium transition sm:text-sm ease text-red-500 active:text-blue-500"
                >
                    Batal
                </a>
            </div>
        </div>
    </main>
</div>
