import { createContext } from "react";

export const stages = {
	maxStages: 4,
	stagesList: [
		{
			stageNumber: 1,
			title: "Validação do RA",
			description: "Verificaremos se você é um estudante do IFMS Campus Campo Grande.",
			hasBackScreen: false,
			nextPage: "StageTwo",
			inputs: [
				{
					headerText: "Insira seu RA",
					name: 'ra',
					autoCorrect: false,
					keyboardType: "number-pad",
					returnKeyType: "done",
					placeholder: "000000"
				}
			]
		},
		{
			stageNumber: 2,
			title: "Validação do titular",
			description: "Verificaremos se você é o detentor do RA informado.",
			hasBackScreen: true,
			nextPage: "StageThree",
			inputs: [
				{
					headerText: "Insira seu nome completo",
					name: 'name',
					returnKeyType: "next",
					placeholder: "NOME COMPLETO"
				},
				{
					headerText: "Insira seu CPF",
					name: 'cpf',
					keyboardType: "number-pad",
					returnKeyType: "next",
					placeholder: "00000000000"
				},
				{
					headerText: "Insira sua data de nascimento",
					name: 'born_date',
					keyboardType: "number-pad",
					returnKeyType: "done",
					placeholder: "2000-12-30"
				},
			]
		},
		{
			stageNumber: 3,
			title: "Cadastrar e-mail",
			description: "Enviaremos uma mensagem ao e-mail informado. Acesse-a e clique no link para continuar o processo de cadastramento.",
			hasBackScreen: true,
			nextPage: "StageFour",
			inputs: [
				{
					headerText: "Insira seu e-mail de cadastro",
					name: 'email',
					keyboardType: "email-address",
					autoCapitalize: 'none',
					autoCorrect: false,
					returnKeyType: "done",
					placeholder: "nome.sobrenome@estudante.ifms.edu.br"
				},
			]
		},

		{
			stageNumber: 4,
			title: "Seu Perfil",
			description: "Tudo pronto! Agora somente é necessário criar o seu perfil. Coloque o seu apelido e a senha que usará.",
			hasBackScreen: true,
			nextPage: "Login",
			inputs: [
				{
					headerText: "Insira seu nome de exibição (Apelido)",
					name:"name",
					autoCorrect: false,
					returnKeyType: "next"
				},
				{
					headerText: "Insira sua senha",
					name: 'password',
					secureTextEntry: true,
					returnKeyType: "next"
				},
				{
					headerText: "Confirme sua senha",
					name: 'password-confirm',
					secureTextEntry: true,
					returnKeyType: "done"
				},
			]
		}
	]
}

export const StageContext = createContext();
