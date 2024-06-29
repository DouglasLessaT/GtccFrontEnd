import axios from "axios";
import AuthService from "./AuthService";

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/tcc";
const urlBuscaLIstaDeTccs = "http://localhost:8083/gtcc/coordenacao/tcc/v1/tccs"

class DashService{
    
    async buscarTCCs() {
        try {
            const response = await axios.get(urlBuscaLIstaDeTccs, {
                headers: {
                    Authorization: `Bearer ${AuthService.dados.token}`,
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Erro ao buscar tccs: ${error.message}`);
          }
    }

    async buscarTcc(title) {

        if(title == null){
            console.log('NUlo');
        }
        let titleNonSpaces = title.trim();
        console.log(titleNonSpaces);
        try {
          const url = `${baseURL}/?title=${encodeURIComponent(titleNonSpaces)}`;
          console.log(url);
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${AuthService.dados.token}`,
            },
          });
          return response.data;
        } catch (error) {
          throw new Error(`Erro ao buscar o tcc: ${error.message}`);
        }
    }

}

export default new DashService();