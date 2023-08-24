<script>
    import logo from '$lib/assets/images/logo.png'
    import { enhance } from '$app/forms'
    import toast from 'svelte-french-toast'
    import { fly } from 'svelte/transition'
    import Spinner from '../../Spinner.svelte'

    let loading = false
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="relative flex flex-col w-full min-h-screen">
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
    <main class="flex min-h-[75vh]">
        <form
            method="post"
            action="?/sendOtp"
            in:fly={{ y: 20 }}
            use:enhance={() => {
                loading = true
                return async ({ result, update }) => {
                    loading = false
                    switch (result.type) {
                        case 'success':
                            await update()
                            toast.success(result.data.message)
                            break
                        case 'failure':
                            toast.error(
                                result.data.message ||
                                    'Terjadi kesalahan. Silakan coba lagi.'
                            )
                            break
                    }
                }
            }}
            class="min-w-full flex flex-col justify-center"
        >
            <fieldset disabled={loading} class="px-6 space-y-6">
                <a href="/" class="flex flex-row gap-2 items-center">
                    <img src={logo} alt="Logo" class="h-12 w-auto" />
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-semibold leading-5">Marisa</h1>
                        <span class="text-gray-400 text-sm">mobile</span>
                    </div>
                </a>
                <div class="w-full">
                    <label for="noHp" class="text-sm font-medium text-gray-700"
                        >Nomor WhatsApp</label
                    >
                    <div class="w-full mt-1">
                        <div class="relative">
                            <input
                                id="noHp"
                                name="noHp"
                                placeholder="081234567890"
                                class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3 placeholder:text-gray-300 disabled:opacity-70"
                                type="tel"
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-20 w-full">
                    <button
                        disabled={loading}
                        type="submit"
                        class="flex gap-2 w-full items-center justify-center px-8 py-5 rounded-3xl active:bg-opacity-80 disabled:opacity-75 bg-blue-500 text-white"
                    >
                        {#if loading}
                            <Spinner size={6} />
                        {:else}
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                            >
                                <path
                                    d="M128,32A96,96,0,0,0,44.89,176.07L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47A96,96,0,1,0,128,32Zm24,152a80,80,0,0,1-80-80,32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16A32,32,0,0,1,152,184Z"
                                    opacity="0.2"
                                />
                                <path
                                    d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.62-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                                />
                            </svg>
                        {/if}
                        Login via WhatsApp
                    </button>
                </div>
            </fieldset>
        </form>
    </main>
</div>
