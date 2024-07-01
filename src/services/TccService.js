import axios from "axios";
import AuthService from "./AuthService";

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/tcc";
const baseURLGetTcc ="http://localhost:8083/gtcc/coordenacao/tcc/v1/tccs"
//const baseURLGetAlunos = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/alunos";
const urlBUscaAlunosSemTcc = "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/alunofree/";


class TccService {
  parser(obj) {
    return {
      curse: obj.curso,
      idAluno: obj.aluno,
      idOrientador: obj.orientador,
      theme: obj.tema,
      title: obj.titulo,
    };
  }

  async cadastrarTCC(tcc) {
    console.log("Teste I", tcc);
    let tccAfterParse = this.parser(tcc);
    console.log("Teste II", tccAfterParse);
    try {
      const url = `${baseURL}`;
      const response = await axios.post(url, tccAfterParse, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao cadastrar TCC: ${error.message}`);
    }
  }

  async buscarAlunos() {
    try {
      const url = `${urlBUscaAlunosSemTcc}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar alunos: ${error.message}`);
    }
  }
  async getTccs() {
    try {
      const url = baseURLGetTccs;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar TCCs: ${error.message}`);
    }
  }
}



export default new TccService();
