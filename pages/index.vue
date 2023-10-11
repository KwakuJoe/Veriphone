<template>
<UContainer>

    <nav>
        <div class="flex flex-row py-4 justify-between">
            <!-- Logo -->
            <NuxtImg v-if="colorMode.value === 'dark' " sizes="200" src="/logos/dark.png" />
            <NuxtImg v-else sizes="200" src="/logos/light.png" />
            <!-- toggle theme -->
            <ToggleThemeButton/>

        </div>
    </nav>

    <!-- body -->
    <div class="w-full h-screen flex flex-row justify-center ">
        <div class="w-full  px-5 py-5 flex  flex-col  items-center gap-y-5 gap-x-10">
            <!-- left side text -->
            <div class="lg:w-1/2 w-full flex flex-col gap-3 gap-x-2 ">
               <!-- title -->
                <h1 class="lg:text-4xl md:text-4xl text-3xl font-medium text-center">Global Phone Number Verification.</h1>
                <!-- Sub text -->
                <p class="text-center">
                    Verify phone numbers worldwide with confidence using our powerful tool.
                    Ensure accuracy and reliability in seconds.
                </p>

                <!-- <pre>{{ verifyStore.verified_number }}</pre> -->
                
            
            </div>


            <div class="flex flex-col w-full lg:w-1/2">
               <!-- Forms -->
                <Form/>

                <!-- Result -->
                <Result/>
            </div>




        </div>

    </div>

    <!-- Notification -->
    <UNotifications />

</UContainer>  
</template>

<script lang="ts" setup>
import {useVerifyStore} from '../stores/verify_store'

const colorMode = useColorMode()
const theme =ref(colorMode.value.toString())

const verifyStore = useVerifyStore()
</script>

<style scoped>

</style>