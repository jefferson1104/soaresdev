import { FormEvent, useState } from 'react'
import Joi from 'joi'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'

import * as S from './styles'
import Button from 'components/Button'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import { api } from 'utils/api'
import Loading from 'components/Loading'

type FieldErrors = {
  [key: string]: string
}

type FieldsData = {
  name: string
  lastname: string
  email: string
  phone: string
  message: string
}

const fieldsValidations = {
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Você precisa digitar um nome',
    'string.min': 'Digite um nome válido'
  }),
  lastname: Joi.string().min(3).required().messages({
    'string.empty': 'Você precisa digitar um sobrenome',
    'string.min': 'Digite um sobrenome válido'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Você precisa digitar um email',
      'string.email': 'Digite um email válido'
    }),
  // phone: Joi.string().pattern(new RegExp(pattern)).messages({
  //   'string.empty': 'phone invalido mano',
  //   'string.email': 'Digite um email válido'
  // })
  phone: Joi.string()
    .regex(/^[0-9]{11}$/)
    .messages({
      'string.empty': 'Você precisa digitar um número de celular',
      'string.pattern.base': 'Digite o DDD e o número de celular'
    })
    .required(),
  message: Joi.string().min(10).required().messages({
    'string.empty': 'Você precisa digitar uma mensagem',
    'string.min': 'A mensagem deve conter no minimo 10 caracteres'
  })
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  })

  // const pattern = /^[0-9+]{7}-[0-9+]{1}$/

  // pegando valores digitados nos campos e atualizando o objeto values
  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }))
  }

  // método para tratar os errors retornados quando houver
  function getFieldErrors(objError: Joi.ValidationResult) {
    const errors: FieldErrors = {}

    if (objError.error) {
      objError.error.details.forEach((err) => {
        errors[err.path.join('.')] = err.message
      })
    }

    return errors
  }

  // método para validar os campos do formulário
  function formFieldsValidate(values: FieldsData) {
    const schema = Joi.object(fieldsValidations)

    return getFieldErrors(schema.validate(values, { abortEarly: false }))
  }

  // envia os dados do formulário para a api se nao houver erros
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const errors = formFieldsValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
    }

    try {
      const response = await api.post('/contact', {
        values
      })

      setFieldError({})
      setValues({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
      })

      if (response.data === true) {
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {isLoading ? (
        <S.FormLoading>
          <Loading text="enviando" />
        </S.FormLoading>
      ) : (
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.Inputs>
            <S.InputContainer>
              <Input
                id="name"
                type="text"
                placeholder="Nome"
                autoComplete="off"
                onInputChange={(v) => handleInput('name', v)}
                error={fieldError?.name}
                value={values.name}
              />
            </S.InputContainer>

            <S.InputContainer>
              <Input
                id="lastname"
                type="text"
                placeholder="Sobrenome"
                autoComplete="off"
                onInputChange={(v) => handleInput('lastname', v)}
                error={fieldError?.lastname}
                value={values.lastname}
              />
            </S.InputContainer>

            <S.InputContainer>
              <Input
                id="email"
                type="text"
                placeholder="Email"
                autoComplete="off"
                onInputChange={(v) => handleInput('email', v)}
                error={fieldError?.email}
                value={values.email}
              />
            </S.InputContainer>

            <S.InputContainer>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="Celular"
                autoComplete="off"
                onInputChange={(v) => handleInput('phone', v)}
                error={fieldError?.phone}
                value={values.phone}
              />
            </S.InputContainer>
          </S.Inputs>

          <S.TextareaContainer>
            <Textarea
              id="message"
              placeholder="Mensagem"
              autoComplete="off"
              rows={5}
              onInputChange={(v) => handleInput('message', v)}
              error={fieldError?.message}
              value={values.message}
            />
          </S.TextareaContainer>

          <Button
            type="submit"
            fullWidth
            icon={<SendPlane />}
            // disabled={comment.length === 0 || isSendingFeedback}
          >
            {/* {isSendingFeedback ? <Loading /> : 'Send feedback'} */}
            Enviar
          </Button>
        </S.Form>
      )}
    </>
  )
}

export default ContactForm
