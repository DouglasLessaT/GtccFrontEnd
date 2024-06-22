// services/TccService.js
import axios from "axios";
import AuthService from "./AuthService";


const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/tcc";
const baseURLGetAlunos =
  "http://localhost:8083/gtcc/coordenacao/tcc/v1/Professor/alunos";

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
      //const response = await axios.post(url, tcc);
      const response = await axios(url, {
        method: "POST",
        data: JSON.stringify(tccAfterParse),
        headers: {
          Authorization:
            `Bearer ${AuthService.dados.token}`,
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
      const url = `${baseURLGetAlunos}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar alunos: ${error.message}`);
    }
  }

  buscarAlunos2() {
    try {
      const url = `${baseURLGetAlunos}`;
      return axios.get(url);
    } catch (error) {
      throw new Error(`Erro ao buscar alunos: ${error.message}`);
    }
  }
}

export default new TccService();
