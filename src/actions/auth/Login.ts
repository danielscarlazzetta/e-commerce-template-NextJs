'use server';
 
import { signIn } from '@/auth.config'
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
    try {
        // console.log( { formdata: Object.fromEntries(formData)})
        await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
        // if((error as Error).message.includes('CredentialsSignin')){
        //     return 'CredentialsSignin'
        // }
        
        return 'CredentialsSignin'
        // throw error;
    }
}