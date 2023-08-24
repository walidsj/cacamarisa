<script>
    import logo from '$lib/assets/images/logo.png'
    import { enhance, applyAction } from '$app/forms'
    import toast from 'svelte-french-toast'
    import { fly } from 'svelte/transition'
    import Spinner from '../../../Spinner.svelte'

    export let data

    let formLogin
    let formCancel
    let formResendOtp

    let expiredAt = data.expiredAt

    let remainingTime = expiredAt - Date.now()
    let minutes = Math.floor(remainingTime / 60000)
    let seconds = ((remainingTime % 60000) / 1000).toFixed(0)

    $: time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0'
    )}`

    $: resend = remainingTime <= 0 ? true : false
    $: timer = setInterval(() => {
        remainingTime = expiredAt - Date.now()
        minutes = Math.floor(remainingTime / 60000)
        seconds = ((remainingTime % 60000) / 1000).toFixed(0)
        time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
        )}`

        if (remainingTime <= 0) {
            clearInterval(timer)
        }
    }, 1000)

    let loadingResend = false
    let loadingLogin = false
    let loadingCancel = false
    let otpInput
</script>

<svelte:head>
    <title>Masukkan Kode OTP</title>
</svelte:head>

<form
    bind:this={formResendOtp}
    method="POST"
    action="?/resendOtp"
    use:enhance={() => {
        loadingResend = true
        return async ({ result, update }) => {
            loadingResend = false
            switch (result.type) {
                case 'success':
                    await update()
                    otpInput = null
                    expiredAt = result.data.expiredAt
                    toast.success(result.data.message)
                    break
                case 'failure':
                    remainingTime = 0
                    const message = result.data.message
                    toast.error(
                        message
                            ? message.charAt(0).toUpperCase() + message.slice(1)
                            : 'Terjadi kesalahan. Silahkan coba lagi.'
                    )
                    break
            }
        }
    }}
/>
<div class="relative flex flex-col w-full min-h-screen">
    <div class="flex items-center justify-between py-1 space-x-2.5">
        <form
            bind:this={formCancel}
            method="POST"
            action="?/cancel"
            use:enhance={() => {
                loadingCancel = true
                return async ({ result }) => {
                    loadingCancel = false
                    switch (result.type) {
                        case 'redirect':
                            await applyAction(result)
                            break
                        case 'failure':
                            toast.error(result.data.message)
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
                loadingLogin = true
                return async ({ result, update }) => {
                    loadingLogin = false
                    switch (result.type) {
                        case 'redirect':
                            toast.success('Login berhasil!')
                            await applyAction(result)
                            break
                        case 'failure':
                            await update()
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
                    <fieldset
                        class="relative"
                        disabled={loadingResend || loadingLogin}
                    >
                        <input
                            bind:value={otpInput}
                            on:input={({ target }) => {
                                if (target.value.length === 6)
                                    formLogin.requestSubmit()
                            }}
                            id="otp"
                            name="otp"
                            placeholder=" ------"
                            class="border border-gray-200 shadow-sm text-center mt-1 rounded-2xl p-3 placeholder:text-gray-300 font-extrabold tracking-[20px] text-2xl w-72 disabled:opacity-70"
                            maxlength="6"
                        />
                    </fieldset>
                </div>
            </div>

            <button
                disabled={!resend}
                on:click={() => {
                    formResendOtp.requestSubmit()
                }}
                type="button"
                class="flex gap-2 items-center text-sm text-blue-500 px-2 py-1 rounded-xl font-semibold disabled:text-gray-500"
            >
                {#if resend}
                    {#if loadingResend}
                        <Spinner size={5} />
                    {:else}
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="1em"
                            width="1em"
                        >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    {/if}
                {/if}
                Kirim Ulang Kode
                {#if !resend} ({time}) {/if}
            </button>
            <button
                disabled={loadingCancel}
                type="button"
                on:click={() => {
                    formCancel.requestSubmit()
                }}
                class="text-sm font-medium text-red-700 disabled:opacity-75 flex flex-row items-center gap-2"
            >
                Batalkan
            </button>
        </form>
    </main>
</div>
