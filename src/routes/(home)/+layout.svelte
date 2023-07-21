<script>
    import logo from '$lib/assets/images/logo-caca.png'
    import { page } from '$app/stores'
</script>

<div class="flex flex-col w-full h-[calc(var(--vh,1vh)*100)] select-none">
    <div class="flex-1 pb-10 overflow-x-hidden overflow-y-auto">
        <header class="flex flex-row justify-between py-1 pt-5 px-5">
            <a href="/" class="flex flex-row gap-2 items-center">
                <img src={logo} alt="Logo" class="h-12 w-auto" />
                <div class="flex flex-col">
                    <h1 class="text-2xl font-semibold leading-5">marisa</h1>
                    <span class="text-gray-400 text-sm">mobile</span>
                </div>
            </a>
            <div class="inline-flex">
                <a
                    href="/profil"
                    class="flex items-center justify-center bg-gray-100 rounded-2xl active:bg-gray-200 w-12 h-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-7 h-7 text-gray-400"
                        viewBox="0 0 512 512"
                        ><path
                            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        /><path
                            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                            fill="none"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            stroke-width="32"
                        /></svg
                    >
                </a>
            </div>
        </header>
        <main class="pb-10">
            <slot />
        </main>
    </div>
    <footer
        class="relative w-full px-5 pt-2 pb-4 shadow-[0_-8px_40px_#82637b1a]"
    >
        <div class="flex justify-around">
            <a href="/" class="flex flex-col items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-blue-400"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                        fill={$page.url.pathname == '/'
                            ? 'currentColor'
                            : 'none'}
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                    />
                    <path
                        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                        fill={$page.url.pathname == '/'
                            ? 'currentColor'
                            : 'none'}
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                    />
                </svg>
                <p
                    class="text-xs my-1 font-semibold text-center {$page.url
                        .pathname == '/'
                        ? 'text-blue-400'
                        : 'text-gray-400'}"
                >
                    Beranda
                </p>
            </a>
            <div>
                <button
                    type="button"
                    class="transition-all ease-in-out bg-gradient-to-br from-yellow-400 to-yellow-600 active:opacity-80 rounded-3xl shadow-md w-16 h-16 flex items-center justify-center -mt-9"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-white"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="32"
                        />
                        <circle cx="160" cy="216" r="32" fill="currentColor" />
                        <circle cx="256" cy="216" r="32" fill="currentColor" />
                        <circle cx="352" cy="216" r="32" fill="currentColor" />
                    </svg>
                </button>
                <p
                    class="text-xs my-1 mt-2 font-semibold text-gray-400 text-center"
                >
                    Chat
                </p>
            </div>

            <a
                href="/buletin"
                class="flex flex-col items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-blue-400"
                    viewBox="0 0 512 512"
                >
                    <rect
                        x="96"
                        y="48"
                        width="320"
                        height="416"
                        rx="48"
                        ry="48"
                        fill={$page.url.pathname == '/buletin'
                            ? 'currentColor'
                            : 'none'}
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="32"
                    /><path
                        fill={$page.url.pathname == '/buletin'
                            ? 'currentColor'
                            : 'none'}
                        stroke={$page.url.pathname == '/buletin'
                            ? 'white'
                            : 'currentColor'}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M176 128h160M176 208h160M176 288h80"
                    />
                </svg>
                <p
                    class="text-xs my-1 font-semibold text-center {$page.url
                        .pathname == '/buletin'
                        ? 'text-blue-400'
                        : 'text-gray-400'}"
                >
                    Buletin
                </p>
            </a>
        </div>
    </footer>
</div>
