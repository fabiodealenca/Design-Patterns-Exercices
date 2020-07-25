var ConfiguracaoBD = /** @class */ (function () {
    function ConfiguracaoBD(host, porta, usuario, senha, bdNome) {
        this.host = host;
        this.porta = porta;
        this.usuario = usuario;
        this.senha = senha;
        this.bdNome = bdNome;
    }
    ConfiguracaoBD.setInstancia = function (host, porta, usuario, senha, bdNome) {
        //Singleton
        if (ConfiguracaoBD.instancia == null) {
            ConfiguracaoBD.instancia = new ConfiguracaoBD(host, porta, usuario, senha, bdNome);
        }
        else {
            //aplicar um factory poderia poupar essa parte do código
            ConfiguracaoBD.instancia.host = host;
            ConfiguracaoBD.instancia.porta = porta;
            ConfiguracaoBD.instancia.usuario = usuario;
            ConfiguracaoBD.instancia.senha = senha;
            ConfiguracaoBD.instancia.bdNome = bdNome;
        }
        return ConfiguracaoBD.instancia;
    };
    return ConfiguracaoBD;
}());
function iniciarInstancia(form) {
    var host = form.host.value;
    var porta = form.porta.value;
    var usuario = form.usuario.value;
    var senha = form.senha.value;
    var bdNome = form.banco.value;
    var instancia = ConfiguracaoBD.setInstancia(host, porta, usuario, senha, bdNome);
    document.querySelector('#conexao').innerHTML = JSON.stringify(instancia);
    document.querySelector('#status').innerHTML = "Conexão realizada com sucesso!";
    //corrigir
    document.querySelector('#ping').innerHTML = "\n Ping: 200;";
}
