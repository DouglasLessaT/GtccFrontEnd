import axios from "axios";
import AuthService from "./AuthService";
import moment from 'moment';

const baseURL = "http://localhost:8083/gtcc/coordenacao/tcc/v1/usuario"

class CadUser {
  parser(obj) {
    const formattedBirthdate = moment(obj.dataNacimento).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return {
      birthdate: formattedBirthdate,
      cellphone: obj.cll,
      email: obj.email,
      login: obj.username,
      name: obj.nome,
      permissoes: obj.permissao,
      senha: obj.password,
      userType: [obj.categoria],
    };
  }

  async cadastrarUsuario(novousuario) {
    console.log("Teste I", novousuario);
    let cadAfterParse = this.parser(novousuario);
    console.log("Teste II", cadAfterParse);
    try {
      const url = `${baseURL}`;
      const response = await axios(url, {
        method: "POST",
        data: JSON.stringify(cadAfterParse),
        headers: {
          Authorization: `Bearer ${AuthService.dados.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao cadastrar Usuario: ${error.message}`);
    }
  }
}

export default new CadUser();
