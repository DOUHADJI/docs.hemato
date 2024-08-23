import { FormikErrors, FormikTouched } from 'formik'
import { FunctionComponent } from 'react'

const CustomTextArea: FunctionComponent<{
  name: string;
  placeholder : string;
  label : string;
  isRequired ? : boolean;
  errors: FormikErrors<any>
  touched: FormikTouched<any>
}> = ({ name, placeholder, label, isRequired, errors, touched }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className='text-black font-semibold text-lg'>
            {label} {isRequired && <span className='text-danger'> * </span> }
        </div>
        <textarea
          name={name}
          placeholder={placeholder}
          className={`bg-white w-full border ${errors[name] && touched[name] ? "border-red-600" : "border-gray-300"} ${errors[name] == null && touched[name] ? "border-green-300" : "border-gray-300"} py-2 text-black px-2 focus:border-blue-500 focus:outline-none`}

        >

        </textarea>
       { errors[name] && <div className="text-red-600">
            {errors[name].toString()}
        </div>}
      </div>
    </>
  )
}

export default CustomTextArea
