import * as Yup from "yup";

const ra = Yup.object().shape({
  ra: Yup.string()
    .typeError("RA precisa ser texto")
    .min(6, "RA invalido")
    .max(6, "RA invalido")
    .required("RA é preciso")
    .trim()
    .strict(),
})

const ra_dados = Yup.object().shape({
  name: Yup.string()
    .max(90, "O seu nome é grande demais")
    .min(5, "O seu nome é pequeno")
    .required("O nome é preciso")
    .typeError("O nome precisa ser texto")
    .strict()
    .trim(),
  cpf: Yup.string()
    .matches(/^\d{3}\d{3}\d{3}\d{2}$/, "CPF é invalido")
    .required("CPF é preciso")
    .strict()
    .trim()
    .typeError("CPF deve ser texto"),
  born_date: Yup.string()
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
      "Data formato errado"
    )
    .strict()
    .trim()
    .typeError("Data de nascimento deve ser texto")
    .required("Data de nascimento é preciso"),
});

const mail = Yup.object().shape({
  email: Yup.string()
    .email("Email é inavlido")
    .strict()
    .typeError("Email precisa ser texto"),

})

const perfil = Yup.object().shape({
  name: Yup.string(),
  password: Yup.string().required('Password is required'),
  "password-confirm": Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

export default {
  ra,
  ra_dados,
  mail,
  perfil
};