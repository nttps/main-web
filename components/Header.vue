<template>
    <div class="mx-8 mb-6">
        <div class="flex flex-wrap xl:flex-nowrap justify-between md:max-w-screen-xl mx-auto w-full pb-2 pt-2 border-b border-black ">
            <NuxtLink to="/" class="flex items-end">
                <img src="~assets/images/logo.png" class="h-[100px]" />
                <span style="letter-spacing:normal;" class="text-4xl font-bold  leading-[1.5rem]">
                    <span style="color:#2A363B;" class="inline-block">CYBER</span>
                    <span class="text-[#F8B500] inline-block">KINGS</span>
                </span>
            </NuxtLink>
            <div class="md:self-end mx-auto md:mx-0 my-4 md:my-0">
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/" target="_self" exact-active-class="bg-zinc-700 text-white" class="p-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" target="_self" exact-active-class="bg-zinc-700 text-white" class="p-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/solutions" target="_self" exact-active-class="bg-zinc-700 text-white" class="p-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Solutions</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" target="_self" exact-active-class="bg-zinc-700 text-white" class="p-1 px-4 bg-[#F8B500] hover:bg-zinc-700 hover:text-white transition-all delay-75 rounded-lg block">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>