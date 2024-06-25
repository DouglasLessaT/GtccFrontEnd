class AuthService {

    auths = [{
        path: '/', roles: ['ROLE_USER','ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_COORDENADOR', 'ROLE_ALUNO']
    },
    {
        path: '/cadastroaluno', roles: ['ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_COORDENADOR']
    },
    {
        path: '/cadastrotcc', roles: ['ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_COORDENADOR']
    },
    {
        path: '/cadastrobanca', roles: ['ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_COORDENADOR']
    },
    {
        path: '/confirmarelatorio', roles: ['ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_COORDENADOR'] 
    }]

    getPermissoesUsuario() {
        const dados = this.dadosAutenticado();
        return dados? dados.permissoes : [];
      }
    
    PermissaoParaMenu() {
        const permissoes = this.getPermissoesUsuario();
        return permissoes.some(permicao => permicao.authority === 'ROLE_COORDENADOR' || permicao.authority === 'ROLE_ADMIN');
    }
   
    dadosAutenticado = () => {
     let dados = sessionStorage.getItem("dados-usuario");
     dados = dados != null ? JSON.parse(dados) : null;
     return dados;
    }
   
    validaPermissao = (path) => {
     let ret = false;
     let pathVerifica = false;
     this.dados = this.dadosAutenticado();
     if (this.dados != null) {
      for (let i = 0; i < this.auths.length; i++) {
       let e = this.auths[i];
       if (e.path == path) {
        pathVerifica = true;
        for (let j = 0; j < this.dados.permissoes.length; j++) {
         let p = this.dados.permissoes[j];
         let idx = e.roles.indexOf(p.authority);
         if (idx >= 0) {
          ret = true;
         }
        }
       }
      }
     }
     if (!pathVerifica) {
      ret = true;
     }
     return ret;
    }
   }
   export default new AuthService();
   