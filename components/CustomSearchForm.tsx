import React, { FunctionComponent } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@nextui-org/react'
import { FaSearch, FaTimes } from 'react-icons/fa'

interface CustomSearchFormProps {
  initialValues: {
    inputValue: string
  }
  handleSubmit: (values: { inputValue: string }) => void
  validationSchema?: Yup.ObjectSchema<any>
  placeholder: string
  handleOnBlur: (values: { inputValue: string }) => void
  loading: boolean
  title ? : string;
}

const CustomSearchForm: FunctionComponent<CustomSearchFormProps> = ({
  initialValues,
  handleSubmit,
  validationSchema,
  placeholder,
  handleOnBlur,
  loading,
  title
}) => {
  return (
    <>
      <div className='bg-gray-100 py-4 px-8 font-semibold text-lg border-b-2'> {title ? title : "Rechercher un élément"} </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onReset={handleOnBlur}
      >
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className="flex flex-col items-start justify-end gap-4 px-8 py-6 mb-8 bg-gray-100 w-full">
              <div className="grid relative w-full">
                <div className="flex w-full">
                  <div
                    className={`flex b bg-gray-100 py-2 px-4 items-center justify-center border-y border-l border-gray-400 text-sm  ${
                      errors?.inputValue && touched?.inputValue
                        ? 'border-red-500'
                        : 'border-gray-400'
                    }  ${!errors?.inputValue && touched?.inputValue ? 'border-green-500' : null}
                        `}
                  >
                    <FaSearch />
                  </div>
                  <Field
                    type="text"
                    className={` w-full bg-white text-gray-700 py-2 pl-4 border border-gray-400 text-sm  ${
                      errors?.inputValue && touched?.inputValue
                        ? 'border-red-500'
                        : 'border-gray-400'
                    }  ${!errors?.inputValue && touched?.inputValue ? 'border-green-500' : null} `}
                    placeholder={placeholder.toString()}
                    name={'inputValue'}
                  />
                </div>
                <div className="absolute top-1 right-4">
                  <Button
                    className="border-0 "
                    onPress={() => resetForm()}
                    type="button"
                    isIconOnly
                    color="default"
                    variant="bordered"
                    size="sm"
                  >
                    <FaTimes className="text-black" />
                  </Button>
                </div>
                {errors.inputValue && touched.inputValue && (
                  <div className="text-sm text-red-500">
                    {errors.inputValue}
                  </div>
                )}
              </div>
              <div className="w-full">
                <Button
                  isLoading={loading}
                  className="text-white bg-red-700 rounded-none w-full"
                  type="submit"
                  onPress={() => handleSubmit}
                >
                  Rechercher
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default CustomSearchForm
