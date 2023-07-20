<script>
    let count = 0
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="flex h-screen items-center justify-center">
    <div class="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
        <h1 class="text-3xl font-semibold text-center mb-6 text-gray-800">
            Login
        </h1>
        <form>
            <div class="mb-4">
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                    placeholder="Username"
                />
            </div>
            <div class="mb-6">
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    required
                    placeholder="Password"
                />
            </div>
            <button
                type="submit"
                class="bg-blue-500 text-white rounded-lg px-4 py-2 w-full hover:bg-blue-600 transition-colors"
                >Login</button
            >
        </form>
        <div class="text-center mt-6">
            <p class="text-gray-600">
                <a
                    href="/register"
                    class="text-blue-500 font-medium hover:underline"
                    >Register</a
                >
            </p>
        </div>
    </div>
</div>
