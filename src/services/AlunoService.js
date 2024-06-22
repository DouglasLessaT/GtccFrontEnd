import axios from 'axios';
import AuthService from './AuthService';

const baseURL = 'http://localhost:8083/gtcc/coordenacao/tcc/v1/usuario';

class AlunoService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  parser(usuario) {
    const parsedUsuario = {
      name: usuario.name,
      email: usuario.email,
      userType: 'aluno', 
      permissao: 'aluno',
      birthday: usuario.birthday 
    };

    if (usuario.id) {
      parsedUsuario.id = usuario.id;
    }

    return parsedUsuario;
  }

  async adicionarUsuario(usuario) {
    console.log("Teste I", usuario);
    const usuarioFormatado = this.parser(usuario);
    console.log("Teste II", usuarioFormatado);
    try {
      const response = await axios(`${baseURL}`, {
        method: "POST",
        data: JSON.stringify(usuarioFormatado),
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Dados enviados:", usuarioFormatado); 
      console.error(`Erro ao adicionar usuário: ${error.message}`);
      throw new Error(`Erro ao adicionar usuário: ${error.message}`);
    }
  }

  async atualizarUsuario(usuario) {
    console.log("Teste I", usuario);
    const usuarioFormatado = this.parser(usuario);
    console.log("Teste II", usuarioFormatado);
    try {
      const response = await axios(`${baseURL}/${usuario.id}`, {
        method: "PUT",
        data: JSON.stringify(usuarioFormatado),
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Dados enviados:", usuarioFormatado); // Log dos dados enviados
      console.error(`Erro ao atualizar usuário: ${error.message}`);
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  async excluirUsuario(id) {
    try {
      const response = await axios(`${baseURL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir usuário: ${error.message}`);
      throw new Error(`Erro ao excluir usuário: ${error.message}`);
    }
  }
}

export default new AlunoService();
