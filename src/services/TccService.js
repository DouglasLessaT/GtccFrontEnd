// services/TccService.js
import axios from 'axios';

const baseURL = "http://localhost:8080/gtcc/coordenacao/tcc/v1";

class TccService {
  async cadastrarTCC(tcc) {
    try {
      const url = `${baseURL}/tcc`;
      const response = await axios.post(url, tcc);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao cadastrar TCC: ${error.message}`);
    }
  }

  async buscarAlunos() {
    try {
      const url = `${baseURL}/usuarios`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar alunos: ${error.message}`);
    }
  }
}

export default new TccService();
