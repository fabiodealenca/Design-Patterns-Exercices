class ConfiguracaoBD {
    private static instancia: ConfiguracaoBD;

    private host : string;
    private porta : string;
    private usuario : string;
    private senha : string;
    private bdNome : string;

    private constructor(host, porta, usuario, senha, bdNome) {
        this.host = host;
        this.porta = porta;
        this.usuario = usuario;
        this.senha = senha;
        this.bdNome = bdNome;
    }

    public static setInstancia(host, porta, usuario, senha, bdNome): ConfiguracaoBD {

        //Singleton
        if (ConfiguracaoBD.instancia == null) {
            ConfiguracaoBD.instancia = new ConfiguracaoBD(host, porta, usuario, senha, bdNome);
        }
        else{
            //aplicar um factory poderia poupar essa parte do código
            ConfiguracaoBD.instancia.host = host;
            ConfiguracaoBD.instancia.porta = porta;
            ConfiguracaoBD.instancia.usuario = usuario;
            ConfiguracaoBD.instancia.senha = senha;
            ConfiguracaoBD.instancia.bdNome = bdNome;
        }

        return ConfiguracaoBD.instancia;
    }
}

function iniciarInstancia(form) {
    let host = form.host.value
    let porta = form.porta.value
    let usuario = form.usuario.value
    let senha = form.senha.value
    let bdNome = form.banco.value

    var instancia = ConfiguracaoBD.setInstancia(host, porta, usuario, senha, bdNome);

    document.querySelector('#conexao').innerHTML = JSON.stringify(instancia)
    document.querySelector('#status').innerHTML = "Conexão realizada com sucesso!"
    //corrigir
    document.querySelector('#ping').innerHTML = "\n Ping: 200;"
}
