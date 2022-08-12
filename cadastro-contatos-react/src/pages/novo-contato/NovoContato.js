import { useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import './NovoContato.css';

function NovoContato() {
    const navigate = useNavigate();

    const [message, setMessage] = useState();
    const [inputs, setInputs] = useState({
        nome: '',
        idade: '',
        telefone: ''
    });

    const changeInput = (event) => {
        const nomeCampo = event.target.name;
        const valorCampo = event.target.value;

        setInputs({...inputs, [nomeCampo]: valorCampo});
    }

    const salvarContato = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:8080/contatos", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao salvar contato");
            }

            return response.json();
        })
        .then((json) => {
            setMessage(`Contato ${json.nome} cadastrado com sucesso`);
            setInputs({
                nome: '',
                idade: '',
                telefone: ''
            });
        })
        .catch((err) => console.error(err));
    }

    const cancelar = () => {
        navigate('/lista-contatos');
    }

    return (
        <div className="cadastrar-contato-wrapper">
            <h1>Cadastrar novo Contato</h1>

            { message && (<p className='message'>{message}</p>) }

            <form onSubmit={salvarContato}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" value={inputs.nome} onChange={changeInput} />
                <label htmlFor="idade">Idade</label>
                <input type="number" name="idade" id="idade" value={inputs.idade} onChange={changeInput} />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" name="telefone" id="telefone" value={inputs.telefone} onChange={changeInput} />

                <div className="buttons">
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default NovoContato;
