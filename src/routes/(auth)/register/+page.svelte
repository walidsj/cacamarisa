<script>
    import { enhance, applyAction } from '$app/forms'
    import toast from 'svelte-french-toast'
    import { fly } from 'svelte/transition'
    import Spinner from '../../Spinner.svelte'

    export let data

    let { noHp } = data

    let loading = {
        cancel: false,
        register: false,
    }
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<div class="relative flex flex-col w-full min-h-screen">
    <div class="flex items-center justify-between py-1 space-x-2.5">
        <form
            method="POST"
            action="/login/otp?/cancel"
            use:enhance={() => {
                loading.cancel = true
                return async ({ result }) => {
                    loading.cancel = false
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
            Daftar Akun Baru
        </div>
        <div class="px-3 py-4">
            <div class="w-7">​</div>
        </div>
    </div>
    <main class="flex py-3">
        <form
            method="post"
            action="?/register"
            in:fly={{ y: 20 }}
            use:enhance={() => {
                loading.register = true
                return async ({ result, update }) => {
                    loading.register = false
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
            <fieldset disabled={loading.register} class="px-6 space-y-6">
                <div class="w-full flex gap-2">
                    <svg
                        class="w-20 h-20 mx-auto text-blue-500"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                    >
                        <path
                            d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
                        />
                        <path
                            d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
                        />
                    </svg>
                    <div class="w-full flex flex-col justify-center">
                        <span class="text-sm font-medium text-gray-700"
                            >Nomor WhatsApp</span
                        >
                        <span class="text-lg font-semibold">{noHp}</span>
                    </div>
                </div>
                <div class="w-full">
                    <label for="nama" class="text-sm font-medium text-gray-700"
                        >Nama Lengkap</label
                    >
                    <div class="w-full mt-1">
                        <div class="relative">
                            <input
                                id="nama"
                                name="nama"
                                placeholder="Nama Lengkap"
                                class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3 placeholder:text-gray-300 disabled:opacity-70"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <label for="nik" class="text-sm font-medium text-gray-700"
                        >NIK</label
                    >
                    <div class="w-full mt-1">
                        <div class="relative">
                            <input
                                id="nik"
                                name="nik"
                                placeholder="NIK"
                                class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3 placeholder:text-gray-300 disabled:opacity-70"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <label for="nip" class="text-sm font-medium text-gray-700"
                        >NIP/NRP</label
                    >
                    <div class="w-full mt-1">
                        <div class="relative">
                            <input
                                id="nip"
                                name="nip"
                                placeholder="NIP/NRP"
                                class="border border-gray-200 shadow-sm w-full mt-1 rounded-2xl p-3 placeholder:text-gray-300 disabled:opacity-70"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-20 w-full">
                    <button
                        disabled={loading.register}
                        type="submit"
                        class="flex gap-2 w-full items-center justify-center px-8 py-5 rounded-3xl active:bg-opacity-80 disabled:opacity-75 bg-blue-500 text-white"
                    >
                        {#if loading.register}
                            <Spinner size={6} />
                        {/if}
                        Daftar Akun
                    </button>
                </div>
            </fieldset>
        </form>
    </main>
</div>
