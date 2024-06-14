import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
export const action = async({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  toast.success('added')
  return redirect('/')
}
const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' method='post'>
      <h4 style={{textAlign:'center',marginBottom:'2rem'}}>our newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className='form-label'>name</label>
        <input type="text" id='name' name='name' className='form-input' defaultValue='bindu' required/>
      </div>
      <div className="form-row">
        <label htmlFor="lastname" className='form-label'>last name</label>
        <input type="text" id='lastname' name='lastname' className='form-input' defaultValue='madhavi' required/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className='form-label'>last name</label>
        <input type="email" id='email' name='email' className='form-input' defaultValue='arj@gmail.com' required/>
      </div>
      <button type='submit' className='btn btn-block' style={{marginTop:'0.5rem'}} disabled={isSubmitting}>
        {isSubmitting?'submitting...': 'submit'}</button>
    </Form>
  )
}
export default Newsletter
