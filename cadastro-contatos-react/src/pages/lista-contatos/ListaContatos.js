import { useEffect, useState } from 'react';
import './ListaContatos.css';

const ListaContatos = () => {
    const backendUrl = 'http://localhost:8080/contatos';
    const [listaContatos, setListaContatos] = useState([]);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const response = await fetch(backendUrl);

        if (!response.ok) {
            console.error("Erro ao consultar o backend");
            return;
        }

        const json = await response.json();
        setListaContatos(json);
    }

    const excluirContato = (id) => {
        const deleteUrl = `${backendUrl}/${id}`;

        fetch(deleteUrl, { method: 'DELETE' })
            .then(() => { fetchData(); })
            .catch((err) => console.error(err));
    }

    return (
        <div className="lista-contatos-wrapper">
            <h1>Lista de Contatos</h1>

            <table>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Telefone</th>
                    <th></th>
                </tr>
                {listaContatos && listaContatos.map((contato, index) => (
                    <tr key={index}>
                        <td>{contato.nome}</td>
                        <td>{contato.idade}</td>
                        <td>{contato.telefone}</td>
                        <td>
                            <button onClick={() => excluirContato(contato.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default ListaContatos;
