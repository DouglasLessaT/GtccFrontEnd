import axios from "axios";
import AuthService from "./AuthService";

const baseURLGetProfessores = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/Professores";

class BancaService {
  parser(obj) {
    return {
      idAgenda: obj.idAgenda,
      idTcc: obj.idTcc,
      member1: {
        id: obj.member1.id,
        name: obj.member1.name,
      },
      member2: {
        id: obj.member2.id,
        name: obj.member2.name,
      }
    };
  }

  async createBanca(banca) {
    console.log("Teste I", banca);
    let bancaAfterParse = this.parser(banca);
    console.log("Teste II", bancaAfterParse);
    try {
      const url = `${baseURLGetProfessores}`;
      console.log("URL da banca ", url);
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
}

export default new BancaService();