<template>
    <div class="border-b border-black mx-8 mb-6">
        <div class="flex justify-between max-w-screen-2xl mx-auto w-full pb-2">
            <NuxtLink to="/" class="flex items-end">
                <img src="~assets/images/logo.png" class="h-[150px]" />
                <span style="letter-spacing:normal;" class="text-4xl font-bold">
                    <span style="color:#2A363B;">CYBER</span>
                    <span class="text-[#F8B500]">KINGS</span>
                </span>
            </NuxtLink>
            <div class="self-end">
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/" target="_self" exact-active-class="bg-zinc-700 text-white" class="py-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" target="_self" exact-active-class="bg-zinc-700 text-white" class="py-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/solutions" target="_self" exact-active-class="bg-zinc-700 text-white" class="py-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Solutions</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" target="_self" exact-active-class="bg-zinc-700 text-white" class="py-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>