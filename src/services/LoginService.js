import axios from 'axios';
class LoginService {
    dadosAutenticado = () => {
        let dados = sessionStorage.getItem("dados-usuario");
        dados = dados != null ? JSON.parse(dados) : null;
        return dados;
    }

    estaAutenticado = () => {
        return this.dadosAutenticado() != null;
    }

    deslogar = () => {
        sessionStorage.removeItem("dados-usuario");
    }

    logar = (_login, _senha, onSuccess, onError) => {
        const data = new URLSearchParams();
        data.append('login', _login);
        data.append('senha', _senha);
      
        axios.post("http://localhost:8083/gtcc/auth/login", data)
        .then(response => {
            if (response.status!== 200) {
              onError(new Error(`Erro na autenticação: ${response.statusText}`));
              return;
            }
            sessionStorage.setItem("dados-usuario", JSON.stringify(response.data));
            onSuccess(); // Chama o callback de sucesso
            if (this.router!= null) {
              this.router.push("/");
            }
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              onError(error.response.data.message); // Passe a mensagem de erro específica para o callback de erro
            } else {
              onError("Usuario / Senha invalidos!"); // Mensagem genérica de erro
            }
          });
        };
    }

export default new LoginService();