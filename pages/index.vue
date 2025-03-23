<template>
    <div>
        <div class="bg-[#F8B500] pt-2 relative">
            <img src="~assets/images/header.jpg" alt="" class="w-full">
            <div class="w-full h-full bg-black/30 absolute left-0 mt-2 top-0 flex items-center justify-center">
            <div class="text-center text-white text-xl">
                Cyber Kings Consulting Co., Ltd. <br/> Fl.5 Kaitak Tower
            </div>
            </div>
        </div>
        
        <div class="mt-4 lg:mx-8 py-1 bg-[rgb(255,212,90)]"></div>
        <div class="mt-1.5 lg:mx-8 py-[1px] bg-[rgb(255,212,90)]"></div>

        <div class="lg:grid grid-cols-3 max-w-screen-xl px-8 2xl:px-0 max-w w-full mx-auto gap-x-4 border-b border-black py-12">
            <div class="lg:pr-4 mb-4 lg:mb-0">
                <div class="mb-4 text-2xl lg:text-4xl font-bold">Solutions</div>
                <div class=" text-justify">
                    Customers are the crucial force that drives development and improvement in all aspects of the business. We not only provide services with a technical expert team that deeply understands IT, but also emphasize building strong and lasting relationships. We strive to understand customers in every aspect of their mission, enabling us to offer the most up-to-date and suitable solutions and services. We are dedicated to ensuring our customers achieve success and efficiency in utilizing IT resources.
                </div>
            </div>
            <div>
                <img src="~assets/images/solution-service.jpg" class="w-full" />
            </div>
            <div class="p-4 ">
                <ol class="list-decimal">
                    <li>ICT Solution Service and Product Sales</li>
                    <li>Support & Maintenance Services</li>
                    <li>Operation Management Services</li>
                </ol>
                <ul class="list-disc mx-8 mt-4 mb-4">
                    <li>IT Infrastructure</li>
                    <li>IT Innovation, AI and Big Data</li>
                    <li>Infrastructure and Engineering</li>
                    <li>Training Services</li>
                </ul>
                <NuxtLink to="/solutions" class="bg-black py-1 px-4 text-white rounded-full inline-block mx-auto shadow-[0_4px_0_0_rgba(248,181,0,1)] text-center w-full lg:w-max">Read more</NuxtLink>
            </div>
        </div>
        <div>
            <div class="text-center text-3xl font-bold mb-4">OUR CLIENTS</div>
            <div class="bg-gradient-to-b from-[#2A363B] to-[#FFFFFF] py-4">
                <div class="px-2 lg:px-0 grid grid-cols-3 lg:flex flex-wrap lg:flex-nowrap justify-center mb-4 gap-4 lg:space-x-4">
                    <div c> 
                        <img src="~assets/images/disaster-logo.png" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/spa-logo.jpg"  class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/wma-logo.jpeg" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/aiti-money-logo.png" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/ministry-logo.png" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/school-logo.png" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/rtarf-logo.png" class="h-[100px] lg:h-[130px] mx-auto" alt="">
                    </div>
                </div>
                <div class="px-2 lg:px-0 grid grid-cols-2 lg:flex lg:justify-center gap-4 lg:space-x-4">
                    <div>
                        <img src="~assets/images/sordorchor-logo.webp" class="h-[79px]" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/digital-logo.png" class="h-[79px]" alt="">
                    </div>
                    <div>
                        <img src="~assets/images/gisda-logo.jpeg" class="h-[79px]" alt="">
                    </div>
                </div>
            </div>
            <div class="p-2 text-center bg-[#2a363b] text-white">
                <div class=" text-lg">
                    CyberKings collaborates with business partners to work together in operating businesses comprehensively in all <br /> aspects for maximum efficiency, resulting in the highest customer satisfaction.
                </div>
                <div class="mt-4">Products with modern technology and suitable quality.</div>
            </div>
        </div>
        <div class=" max-w-screen-xl px-8 2xl:px-0 max-w w-full mx-auto mt-8 pb-4">
            <div class="lg:flex pb-2 lg:mb-5 text-3xl lg:text-4xl font-bold ">
                <div class="lg:w-1/2 mb-4 border-b-2 border-black lg:border-0">
                    <div class="text-center lg:text-left mb-2 lg:border-b-2 lg:border-black ">Partners Clients</div>
                    <div class="border-dashed lg:border-r-2 border-black">
                        <div class="grid grid-cols-3 items-center justify-around lg:justify-between space-x-2 lg:mr-8">
                            <div class="lg:mb-2">
                                <img src="~/assets/images/sis-logo.png" class="w-full h-[80px] object-contain mx-auto" alt="">
                            </div>
                            <div class="lg:mb-2">
                                <img src="~/assets/images/sansung-logo.png" class="lg:h-[30px] lg:w-[195px] object-cover mx-auto" alt="">
                            </div>
                            <div class="lg:mb-2">
                                <img src="~/assets/images/veritas-logo.png" class="lg:h-[30px] object-cover mx-auto" alt="">
                            </div>
                            <div class="lg:mb-2">
                                <img src="~/assets/images/eventpop-logo.png" class="lg:h-[30px] object-cover" alt="">
                            </div>
                            <div class="lg:mb-2">
                                <img src="~/assets/images/svtecs-logo.png" class="lg:h-[87px] w-[176px] object-cover mx-auto" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <div class="text-center lg:text-left lg:border-b-2 lg:border-black ">Consult Clients</div>
                    <div class="lg:ml-8">
                        <div class="grid grid-cols-2 lg:grid-cols-4 flex-wrap lg:flex-nowrap items-end mb-2 space-y-2 lg:space-y-0 lg:space-x-6 mr-8">
                            <div class="lg:w-full">
                                <img src="~/assets/images/thammasat-logo.png" class="h-[100px] object-cover mx-auto lg:mx-0" alt="">
                            </div>
                            <div class="lg:w-full">
                                <img src="~/assets/images/kingmongkut-logo.png" class="h-[100px] object-cover mx-auto lg:mx-0" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Cyberkings',
  meta: [
    { name: 'description', content: 'Cyberkings' }
  ],
})
</script>