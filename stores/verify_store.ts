import { defineStore } from 'pinia'
import {Verified} from '../utils/types'


export const useVerifyStore = defineStore('verifyStore', () => {


    // phone number
    const phone_number = ref<String>('')

    // Loading state
    const isVerifying = ref(false)

    // error
    const api_error = ref<any>()
    // const verified number
    const verified_number = ref<Verified>({
        country_code :'',
        country_prefix: '',
        e164: '',
        international_number: '',
        local_number: '',
        phone_type: null,
        status: '',
        carrier:'',
        country:'',
        phone:'',
        phone_region: '',
        phone_valid: ''
    })

    // clear verified_number objec


    // verifying phone number
    async function verify(){
      // loading state true
      isVerifying.value = true

      const config = useRuntimeConfig()
      const toast = useToast()

      const {pending} = await useFetch<Verified>('https://veriphone.p.rapidapi.com/verify', {
            onRequest({ request, options }) {
                // Set the request headers
                options.headers = options.headers || {
                    'X-RapidAPI-Key' : `${config.public.apiKey}`,
                    'X-RapidAPI-Host' : 'veriphone.p.rapidapi.com'
                }

                options.params = {
                    phone: phone_number.value
                }
                // options.headers.authorization = '...'
                console.log('On request sucessful')
                
                isVerifying.value = true
                
              },
              onRequestError({ request, options, error }) {
                // Handle the request errors
                console.log('On request Error ')
                console.log(error.message)
                api_error.value = error

                isVerifying.value = false

                toast.add({
                  id: 'request_error',
                  title: 'Ooops!, Something went worng.',
                  description: `${error.message}`,
                  timeout: 5000,
                  color:'red'
                })


              },
              onResponse({ request, response, options }) {
                // Process the response data
                // localStorage.setItem('token', response._data.token)
                verified_number.value = response._data
                console.log('response successful')
                console.log(response._data)

                isVerifying.value = false

                toast.add({
                  id: 'response_notification',
                  title: 'Verification Successful',
                  timeout: 5000,
                  description: 'You have successfully verified phone number, Check the result to see status',
                  color:'green'
                })

              },
              onResponseError({ request, response, options, error }) {
                // Handle the response errors
                api_error.value = error
                console.log('response error ')
                console.log(error?.message)

                isVerifying.value = false

                toast.add({
                  id: 'request_error',
                  title: 'Ooops!, Something went worng.',
                  description: `${error?.message}`,
                  color:'red',
                  timeout: 5000,

                })
                
              }
        })

        // isVerifying.value = pending.value
    }
  
    return { phone_number, verified_number, isVerifying, api_error, verify, }

  })