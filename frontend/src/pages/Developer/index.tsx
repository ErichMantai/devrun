import React, {useEffect} from 'react';
import {Table,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

import {api} from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';

import './styles.css'
import useDevelopers from '../../hooks/useDevelopers';
import usePagination from '../../hooks/usePagination';

// interface IDeveloper {
//     id: string;
//     nome: string;
//     sexo: string;
//     idade: number;
//     hobby: string;
//     datanascimento: Date;
// }

export function Developer() {

    // const [developers, setDevelopers] = useState<IDeveloper[]>([])
    const history = useHistory();
    const {devs, fetchDevelopers} = useDevelopers(5)
    const { actualPage, setActualPage } = usePagination();

    useEffect(() => {
        if (actualPage !== undefined) {
          fetchDevelopers(actualPage);
        }
      }, [actualPage, fetchDevelopers]);

    // async function loadDevelopers() {
    //     const response = await api.get('/developers',{params: {init: page,limit:total}})

    //     setDevelopers(response.data);
    // }

    function formatDate(date:Date) {
        return moment(date).format("DD/MM/YYYY")
    }

    function newDeveloper(){

        history.push('/developer/new')
    }

    function editDeveloper(id: string){
        history.push(`/developers/${id}`)
    }

    async function deleteDeveloper(id:string) {
        const response = await api.delete(`developers/${id}`)

        if(response.status === 204) {
            toast.success("Desenvolvedor Removido com sucesso!")
        }

        fetchDevelopers(actualPage);
    }


    return (
       <div className="container">
           <br/>
           <div className="task-header">
                <h1>Desenvolvedores</h1>
                <Button variant="primary" size="sm" onClick={newDeveloper}>Novo Desenvolvedor</Button>
           </div>
           <br/>
           <Table striped bordered hover className= "text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>sexo</th>
                        <th>idade</th>
                        <th>hobby</th>
                        <th>Data Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devs.map(dev => (
                            <tr key ={dev.id}>
                                <td>{dev.id}</td>
                                <td>{dev.nome}</td>
                                <td>
                                    {dev.sexo === "M" ? 'Masculino' : 'Feminino'}
                                </td>    
                                <td>{dev.idade}</td>
                                <td>{dev.hobby}</td>
                                <td>{formatDate(dev.datanascimento)}</td>
                                <td>
                                    <Button size="sm" onClick={()=> editDeveloper(dev.id)}>Editar</Button>{' '}
                                    <Button size="sm"  variant="danger" onClick={()=>deleteDeveloper(dev.id)}>Remover</Button>{' '}
                                </td>
                            </tr>
                        ))   
                    }
                </tbody>
            </Table>

            <div className="pagination">
                {
                    Array(5).fill('').map((_, index) => (
                        <button type="button" key={index} onClick={() => setActualPage(index + 1)}>
                        {index + 1}
                        </button>
                    ))
                    
                }
             </div>   
             < br />
             <Toaster /> 
        </div>
    )
}