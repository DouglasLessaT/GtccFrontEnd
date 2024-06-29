import axios from "axios";
import AuthService from "./AuthService";

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/agenda";

class AgendaService {
  async createAgenda(agenda) {
    try {
      const response = await axios.post(baseURL, agenda, {
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

  async updateAgenda(id, agenda) {
    try {
      const response = await axios.put(`${baseURL}/${id}`, agenda, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar agenda: ${error.message}`);
    }
  }

  async deleteAgenda(id) {
    try {
      const response = await axios.delete(`${baseURL}/${id}`, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao deletar agenda: ${error.message}`);
    }
  }

  async getAllAgendas() {
    try {
      const response = await axios.get(`${baseURL}/agendas`, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar agendas: ${error.message}`);
    }
  }

  async getAgendaById(id) {
    try {
      const response = await axios.get(`${baseURL}/${id}`, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar agenda: ${error.message}`);
    }
  }
}

export default new AgendaService();