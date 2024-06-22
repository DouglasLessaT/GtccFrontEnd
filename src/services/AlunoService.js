import axios from "axios";
import AuthService from "./AuthService";

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/aluno";

class AlunoService {
  async adicionarUsuario(usuario) {
    try {
      const response = await axios.post(baseURL, usuario, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao adicionar usuário: ${error.message}`);
    }
  }

  async atualizarUsuario(usuario) {
    try {
      const response = await axios.put(`${baseURL}/${usuario.id}`, usuario, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  async excluirUsuario(id) {
    try {
      const response = await axios.delete(`${baseURL}/${id}`, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao excluir usuário: ${error.message}`);
    }
  }

  async buscarUsuarios() {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
  }
}

export default new AlunoService();
