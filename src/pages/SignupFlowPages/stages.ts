import { createContext } from "react";

export const stages = {
	maxStages: 5,
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
					returnKeyType: "done"
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
					name: 'student-name',
					returnKeyType: "next"
				},
				{
					headerText: "Insira seu CPF",
					name: 'cpf',
					keyboardType: "number-pad",
					returnKeyType: "next"
				},
				{
					headerText: "Insira sua data de nascimento",
					name: 'birthdate',
					returnKeyType: "done"
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
					returnKeyType: "done"
				},
			]
		},

		{
			stageNumber: 4,
			title: "Criar senha",
			description: "Crie uma senha para sua conta.",
			hasBackScreen: true,
			nextPage: "StageFive",
			inputs: [
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
		},
		{
			stageNumber: 5,
			title: "Criar perfil ",
			description: "Configure os dados do seu perfil.",
			hasBackScreen: true,
			nextPage: "Home",
			inputs: [
				{
					headerText: "Insira seu nome de exibição (Apelido)",
					name:"nickname",
					autoCorrect: false,
					returnKeyType: "done"
				},
			]
		},
	]
}

export const StageContext = createContext();
