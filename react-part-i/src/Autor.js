import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import BotaoSubmitCustomizado from './componentes/BotaoSubmitCustomizado';
import PubSub from 'pubsub-js';  // Middleware de mensageria

class FormularioAutor extends Component{

    constructor() {
        super();
        this.state = {
            nome: '', email: '', senha: ''
        };
        this.enviaForm = this.enviaForm.bind(this); // associa o this do react dentro desse metodo
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    setNome(evento) { this.setState({nome: evento.target.value}); }
    setEmail(evento) { this.setState({email: evento.target.value}); }
    setSenha(evento) { this.setState({senha: evento.target.value}); }

    enviaForm(evento) {
        evento.preventDefault();
    
        $.ajax({
            url:"http://cdc-react.herokuapp.com/api/autores",
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({nome: this.state.nome, email: this.state.email, senha: this.state.senha}),
            success:function(novaListagem){
                //this.props.callbackAtualizaListagem(resposta);
                PubSub.publish('atualiza-lista-autores', novaListagem); //Dispara evento para os demais componentes (topico, objeto)
                console.log("enviado com sucesso");
            },
            error:function(resposta){
                console.log("erro");
            }
        });
    }

    render() {
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                    <fieldset>
                        <legend>Author Data</legend>
                        <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome" placeholder="Nome"/>                                              
                        <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email" placeholder="Email"/>                                              
                        <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha" placeholder="Senha"/>                                                                      
                        <BotaoSubmitCustomizado label="Gravar"/>
                    </fieldset>
                </form>
            </div> 
        );
    }
    
}

class TabelaAutores extends Component {

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Author's List</legend>            
                    <table className="pure-table pure-u-5-5">
                        <thead>
                            <tr>
                                <th width="75%">Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.lista.map(function(autor) {
                                return (
                                    <tr key={autor.id}>
                                        <td>{autor.nome}</td>                
                                        <td>{autor.email}</td>                
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </fieldset>
            </div>
        );
    }
}

export default class AutorBox extends Component {

    constructor() {
        super();
        this.state = {lista : []};
    }

    componentDidMount() {
        // Executa após o render ser executado
        $.ajax({
            url:"http://cdc-react.herokuapp.com/api/autores",
            dataType: 'json',
            success:function(resposta){
                this.setState({lista:resposta}); // chama o render novamente
            }.bind(this)
        });

        // Assina topico para receber as atualizacoes quando houver
        PubSub.subscribe('atualiza-lista-autores', function(topico, novaLista) {
            this.setState({lista:novaLista});
        }.bind(this));
    }
    
    componentWillMount() {
        // Executa antes do render ser executado
    }

    render() {
        return (
            <div>
                <FormularioAutor/>
                <TabelaAutores lista={this.state.lista}/>
            </div>
        );
    }
}