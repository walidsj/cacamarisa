<script>
    import logo from '$lib/assets/images/logo.png'
    import { enhance, applyAction } from '$app/forms'
    import toast from 'svelte-french-toast'
    import { fly } from 'svelte/transition'

    let formLogin
    let formCancel
</script>

<svelte:head>
    <title>Masukkan Kode OTP</title>
</svelte:head>

<div class="relative flex flex-col w-full min-h-screen">
    <div class="flex items-center justify-between py-1 space-x-2.5">
        <form
            bind:this={formCancel}
            method="POST"
            action="?/cancel"
            use:enhance={() => {
                return async ({ result, update }) => {
                    switch (result.type) {
                        case 'failure':
                            toast.error(result.data.message)
                            break
                        case 'redirect':
                            await applyAction(result)
                            break
                    }
                }
            }}
        >
            <button type="submit" class="px-3 py-4 active:opacity-80">
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
            </button>
        </form>
        <div class="flex-1 text-lg font-medium text-center capitalize truncate">
            Login
        </div>
        <div class="px-3 py-4">
            <div class="w-7">​</div>
        </div>
    </div>
    <main class="flex min-h-[70vh]">
        <form
            bind:this={formLogin}
            method="post"
            action="?/login"
            in:fly={{ y: 20 }}
            use:enhance={() => {
                return async ({ result, update }) => {
                    await update()
                    switch (result.type) {
                        case 'redirect':
                            toast.success('Login berhasil!')
                            await applyAction(result)
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
            class="flex flex-col items-center justify-center flex-1 min-w-full px-5 gap-8"
        >
            <a href="/" class="flex flex-row gap-2 items-center">
                <img src={logo} alt="Logo" class="h-12 w-auto" />
                <div class="flex flex-col">
                    <h1 class="text-2xl font-semibold leading-5">Marisa</h1>
                    <span class="text-gray-400 text-sm">mobile</span>
                </div>
            </a>
            <div class="text-center">
                <label for="otp" class="text-sm font-medium text-gray-700"
                    >Masukkan Kode OTP</label
                >
                <div class="mt-1">
                    <div class="relative">
                        <input
                            on:input={({ target }) => {
                                if (target.value.length === 6)
                                    formLogin.requestSubmit()
                            }}
                            id="otp"
                            name="otp"
                            placeholder=" ------"
                            class="border border-gray-200 shadow-sm text-center mt-1 rounded-2xl p-3 placeholder:text-gray-300 font-extrabold tracking-[20px] text-2xl w-72"
                            maxlength="6"
                        />
                    </div>
                </div>
            </div>
            <button
                type="button"
                on:click={() => {
                    formCancel.requestSubmit()
                }}
                class="text-sm font-medium text-red-700"
            >
                Batalkan
            </button>
        </form>
    </main>
</div>
