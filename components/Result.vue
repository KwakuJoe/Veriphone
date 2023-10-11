<template>
    
    <div v-if="verifyStore.api_error" class="border-x border-b border-slate-300/20 flex flex-col items-center justify-between px-4 py-4">
        <Icon size="5em" class="text-red-500" name="carbon:ibm-cloud-bare-metal-servers-vpc" />
        <p class="text-3xl font-medium font-mono">! Ooops, An error occured</p>
        <p class="text-sm text-center text-gray-400">{{ verifyStore.api_error }}</p>
        <UButton block size="lg" @click="retry"  color="black" label="Go back" class="mt-3" variant="solid" />

    </div>

     <div v-else-if="verifyStore.verified_number.country" class="border-x border-b border-slate-300/20 mb-5 ">
                    <div class="flex items-center justify-between px-4  border-slate-300/20 py-2 bg-slate-300/10">
                        <p class="text-sm font-medium">Result</p>
                     
                    </div>

                    <!-- Status -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Phone Valid</p>
                        <div  class="flex items-center gap-x-2">  
                            <div v-if="verifyStore.verified_number.phone_valid" class="flex items-center gap-x-2">
                                <Icon  size="1em" name="ic:round-check-circle" class="text-green-500" />
                                <p class="text-green-500 font-medium text-sm">{{verifyStore.verified_number.phone_valid}}</p>
                            </div>
                            <div v-else class="flex items-center gap-x-2">
                                <Icon  size="1em" name="ic:round-check-circle" class="flex text-red-500 items-center gap-x-2" />
                                <p class="text-red-500 font-medium text-sm">{{verifyStore.verified_number.phone_valid}}</p>
                            </div>
                            <!-- <Icon size="1em" name="ic:round-check-circle" class="text-green-500" />
                            <p class="text-green-500 font-medium text-sm">{{verifyStore.verified_number.status}}</p> -->
                        </div>
                    </div>
                    <!-- Number -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Phone number</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{verifyStore.verified_number.phone}}</p>
                        </div>
                    </div>
                    <!-- Number -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Phone type</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{verifyStore.verified_number.phone_type}}</p>
                        </div>
                    </div>
                    <!-- Region -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Country</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{ verifyStore.verified_number.country }}</p>
                        </div>
                    </div>
                     <!-- Country Code -->
                     <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Country code</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{ verifyStore.verified_number.country_code }}</p>
                        </div>
                    </div>
                     <!-- Internation Number  -->
                     <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Internation number</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{ verifyStore.verified_number.international_number }}</p>
                        </div>
                    </div>
                    <!-- Local Number  -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Local number</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{ verifyStore.verified_number.local_number }}</p>
                        </div>
                    </div>
                    <!-- Local Number  -->
                    <div class="flex justify-between px-4 border-t border-slate-300/20 py-2 hover:bg-slate-300/10">
                        <p class="text-sm">Carrier</p>
                        <div  class="flex items-center gap-x-2">  
                            <!-- <Icon size="1.5em" name="ic:round-check-circle" class="text-green-500" /> -->
                            <p class="font-medium text-sm">{{ verifyStore.verified_number.carrier }}</p>
                        </div>
                    </div>

                </div>
</template>

<script lang="ts" setup>

import {useVerifyStore} from '../stores/verify_store'
const verifyStore = useVerifyStore()


// retry button
 function retry (){
    verifyStore.api_error = ''
}



</script>

<style >

</style>