import axios from "axios";
import AuthService from "./AuthService";

const baseURLCreateBanca = "http://localhost:8083/gtcc/coordenacao/tcc/v1/apresentacao";
const baseURLGetBanca = "http://localhost:8083/gtcc/coordenacao/tcc/v1/apresentacoes";
const baseUrlPutBanca = "http://localhost:8083/gtcc/coordenacao/tcc/v1/apresentacao/";
const baseUrlDeleteBanca = "http://localhost:8083/gtcc/coordenacao/tcc/v1/apresentacao/";

const baseURLGetProfessores = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/Professores";
const baseURLGetAgendasLivres = "http://localhost:8083/gtcc/coordenacao/tcc/v1/agendasLivres";
const baseURLGetProfessorById = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/usuario/"

class BancaService {
  parser(obj) {
    return {
      idAgenda: obj.idAgenda,
      idTcc: obj.idTcc,
      member1: obj.member1,
      member2: obj.member2,
    };
  }

  async createBanca(banca) {
    let bancaAfterParse = this.parser(banca);
    try {
      const url = `${baseURLCreateBanca}`;
      const response = await axios.post(url, bancaAfterParse, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao criar banca: ${error.message}`);
    }
  }

  async getProfessor(id) {
    try {
      const url = `${baseURLGetProfessorById}/${id}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar professor: ${error.message}`);
    }
  }

  async getApresentacoes() {
    try {
      const url = baseURLGetBanca;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });

      console.log("Resultado das Apresentações:", response.data);

      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar apresentações: ${error.message}`);
    }
  }

  async updateBanca(id, banca) {
    let bancaAfterParse = this.parser(banca);
    try {
      const url = `${baseUrlPutBanca}${id}`;
      const response = await axios.put(url, bancaAfterParse, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar banca: ${error.message}`);
    }
  }

  async deleteBanca(id) {
    try {
      const url = `${baseUrlDeleteBanca}${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao deletar banca: ${error.message}`);
    }
  }

  async getProfessores() {
    try {
      const url = `${baseURLGetProfessores}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar professores: ${error.message}`);
    }
  }

  async getAgendasLivres() {
    try {
      const url = `${baseURLGetAgendasLivres}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar agendas livres: ${error.message}`);
    }
  }
}

export default new BancaService();