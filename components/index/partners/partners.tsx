import Image from 'next/image'
import React from 'react'
import { appTitle } from '../../const'
import { Button } from '@nextui-org/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import CustomInput from '../../customInput'
import CustomTextArea from '../../customTextArea'

function Partners() {
  const initialValues = {
    name: '',
    email: '',
    contacts : '',
    object : "",
    content : ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('vous devez remplir le champ'),
    email: Yup.string().email('Vous devez saisir une addresse mail valide'),
    contacts: Yup.string().required('vous devez remplir le champ'),
    object: Yup.string().required('vous devez remplir le champ'),
    content: Yup.string().required('vous devez remplir le champ'),

  })

  const handleSubmit = async (values) => {

  }
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="grid md:grid-cols-3 w-full  py-12">
          <div className="mb-10 px-12">
            <p className="text-3xl font-black leading-[15px] text-start text-danger lg:text-4xl mt-24">
              Devenez partenaire <br />
              pour soutenir le projet
            </p>
          </div>

          <div className="col-span-2 w-full px-16 py-12 bg-blue-100/25 shadow-md">
            <div className="pb-12 pt-6 text-danger uppercase font-bold">
              Remplissez le formulaire de demande pour envoyez une proposition
              de collaboration
            </div>
            <div className="">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, resetForm }) => (
                  <Form>
                    <div className="grid md:grid-cols-2 gap-4">
                      <CustomInput
                        name="name"
                        errors={errors}
                        touched={touched}
                        placeholder="Entrez votre nom"
                        label="Votre nom"
                        isRequired
                      />

                      <CustomInput
                        name="email"
                        errors={errors}
                        touched={touched}
                        placeholder="Entrez votre email"
                        label="Votre email"
                      />
                      <div className="col-span-2">
                        <CustomInput
                          name="contacts"
                          errors={errors}
                          touched={touched}
                          placeholder="Entrez vos contacts"
                          label="Vos contacts"
                          isRequired
                        />
                      </div>

                      <div className="col-span-2">
                        <CustomInput
                          name="object"
                          errors={errors}
                          touched={touched}
                          placeholder="Dites pourquoi  vous nous écrivez"
                          label="Objet de votre message"
                          isRequired
                        />
                      </div>

                      <div className="col-span-2">
                        <CustomTextArea
                          name="content"
                          errors={errors}
                          touched={touched}
                          placeholder="Entrez votre message ici"
                          label="Contenu de votre message"
                          isRequired
                        />
                      </div>
                    </div>
                    <div className="flex justify-end items-center pt-8">
                      <Button color="danger" type='submit'>
                        Soumettre la demande de partenariat
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </>
  )
}

export default Partners
