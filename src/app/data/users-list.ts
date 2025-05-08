import { IUser } from "../interfaces/users/user.interface";

export const UsersList: IUser[] = [
    {
      nome: "Lucas Almeida",
      email: "lucas.almeida@email.com",
      senha: "lucas123",
      idade: 29,
      endereco: {
        rua: "Rua das Palmeiras",
        numero: "101",
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil"
      },
      telefone: "11912345678",
      ativo: true,
      funcao: "Administrador",
      dataCadastro: "2024-07-10T10:00:00Z",
      status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2025-05-06T21:00:00Z"
      }
    },
    {
      nome: "Fernanda Torres",
      email: "fernanda.torres@email.com",
      senha: "nanda456",
      idade: 35,
      endereco: {
        rua: "Av. Brasil",
        numero: "45",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        pais: "Brasil"
      },
      telefone: "(21) 99876-4321",
      ativo: true,
      funcao: "Usuária",
      dataCadastro: "2024-06-01T15:30:00Z",
      status: {
        online: false,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2025-04-30T18:45:00Z"
      }
    },
    {
      nome: "João Pedro Silva",
      email: "joao.pedro@email.com",
      senha: "joaopedro789",
      idade: 41,
      endereco: {
        rua: "Rua da Liberdade",
        numero: "200",
        cidade: "Curitiba",
        estado: "PR",
        pais: "Brasil"
      },
      telefone: "(41) 92345-6789",
      ativo: false,
      funcao: "Moderador",
      dataCadastro: "2023-12-20T08:15:00Z",
      status: {
        online: false,
        verificado: false,
        assinaturaAtiva: false,
        ultimoAcesso: "2024-12-10T10:00:00Z"
      }
    },
    {
      nome: "Bruna Carvalho",
      email: "bruna.carvalho@email.com",
      senha: "bruna321",
      idade: 27,
      endereco: {
        rua: "Rua das Acácias",
        numero: "89",
        cidade: "Belo Horizonte",
        estado: "MG",
        pais: "Brasil"
      },
      telefone: "(31) 95555-1122",
      ativo: true,
      funcao: "Usuária",
      dataCadastro: "2024-11-05T12:00:00Z",
      status: {
        online: true,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2025-05-05T09:30:00Z"
      }
    },
    {
      nome: "Ricardo Nunes",
      email: "ricardo.nunes@email.com",
      senha: "ricardo654",
      idade: 33,
      endereco: {
        rua: "Av. das Nações",
        numero: "300",
        cidade: "Porto Alegre",
        estado: "RS",
        pais: "Brasil"
      },
      telefone: "(51) 97777-3344",
      ativo: true,
      funcao: "Administrador",
      dataCadastro: "2024-09-14T16:45:00Z",
      status: {
        online: false,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2025-05-01T17:20:00Z"
      }
    },
    {
      nome: "Aline Souza",
      email: "aline.souza@email.com",
      senha: "aline987",
      idade: 22,
      endereco: {
        rua: "Travessa do Lago",
        numero: "12",
        cidade: "Recife",
        estado: "PE",
        pais: "Brasil"
      },
      telefone: "(81) 94444-5566",
      ativo: false,
      funcao: "Usuária",
      dataCadastro: "2024-05-20T07:45:00Z",
      status: {
        online: false,
        verificado: false,
        assinaturaAtiva: false,
        ultimoAcesso: "2025-03-10T11:10:00Z"
      }
    }
  ]
  