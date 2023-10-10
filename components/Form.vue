<template>
     <div class="border-x border-y  border-slate-300/20 p-4" >
        <UForm :schema="schema" :state="state" @submit="submit">
         
            <!-- phone field -->
            <UFormGroup label="Phone" name="phone">
               <UInput v-model="state.phone" color="white" size="lg" type="number" icon="i-heroicons-phone" placeholder="+23355676579" class="h-10 focus:outline-none focus:border-blue-500"  />
            </UFormGroup>

            <!-- Submit button -->
            <UButton block size="lg" type="submit" :loading="isVerifying   "  color="black" label="Verify" class="mt-3" variant="solid" />
        </UForm>
     </div>
</template>

<script lang="ts" setup>
import {useVerifyStore} from '../stores/verify_store'
import { storeToRefs} from 'pinia'
import { ref } from 'vue'
import { object, string, InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

// instance of verify store
const verifyStore = useVerifyStore()

const showBorder = ref(verifyStore.verified_number.country_code)


const {isVerifying} = storeToRefs(verifyStore)
//  validation schema
const schema = object({
  phone: string().required('Required'),

})

// schema types
type Schema = InferType<typeof schema>

// model for form
const state = ref({
  phone: undefined,
})

// function to submit form
async function submit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data.phone)

  // asign form data(phone) to store phone val
  verifyStore.phone_number = event.data.phone

  // hit the verify endpoint
  await verifyStore.verify()
}


// show border bottom

</script>

<style lang="scss" scoped>

</style>