import axios from "axios";
import AuthService from "./AuthService";

const urlBuscaLIstaDeAluno = "http://localhost:8083/gtcc/coordenacao/tcc/v1/tccs"

class DashService{
    async buscarTCC() {
        try {
            const response = await axios.get(urlBuscaLIstaDeAluno, {
                headers: {
                    Authorization: `Bearer ${AuthService.dados.token}`,
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao buscar usuários: ${error.message}`);
          }
    }

}

export default new DashService();