import axios from "axios";
import AuthService from "./AuthService";

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/agenda";

class AgendaService {
  parser(obj) {
    return {
      date: new Date(obj.date).toISOString(),
      horasComeco: obj.horasComeco,
      horasFim: obj.horasFim,
      isLock: obj.isLock,
    };
  }

  async createAgenda(agenda) {
    console.log("Teste I", agenda);
    let agendaAfterParse = this.parser(agenda);
    console.log("Teste II", agendaAfterParse);
    try {
      const url = `${baseURL}`;
      console.log("URL da agenda ",url);
      const response = await axios.post(url, agendaAfterParse, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao criar agenda: ${error.message}`);
    }
  }

  async getAgendas() {
    try {
      const url = `${baseURL}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar agendas: ${error.message}`);
    }
  }
}

export default new AgendaService();