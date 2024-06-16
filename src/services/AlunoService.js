// src/services/AlunoService.js

import axios from 'axios';

class AlunoService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8083/gtcc/coordenacao/tcc/v1',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async adicionarUsuario(usuario) {
    try {
      const response = await this.apiClient.post('/usuario', usuario);
      return response.data;
    } catch (error) {
      console.error(`Erro ao adicionar usuário: ${error.message}`);
      throw error;
    }
  }

  async atualizarUsuario(usuario) {
    try {
      const response = await this.apiClient.put(`/usuario/${usuario.id}`, usuario);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar usuário: ${error.message}`);
      throw error;
    }
  }

  async excluirUsuario(id) {
    try {
      const response = await this.apiClient.delete(`/usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir usuário: ${error.message}`);
      throw error;
    }
  }
}

export default new AlunoService();
