import React, {useEffect,useState } from 'react'
import {Button,Form} from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import moment from 'moment';


interface IParams {
    id: string;
}

interface DeveloperInfo {
    id: string;
    nome: string;
    idade: number;
    sexo: number;
    datanascimento: string;
    hobby: string;
    created_at: string;
  }

export function DetailDeveloper() {
    const {id} = useParams<IParams>()
    const history = useHistory();

    const [developer, setDeveloper] = useState<DeveloperInfo>();

    useEffect(()=>{
        findDeveloper()
    },[id])


    function back(){
        history.goBack();
    }
    
    async function findDeveloper(){

        const response = await api.get<DeveloperInfo>(`/developers/${id}`)
        
        setDeveloper(response.data)

    }



    return (
        <div className="container">
           <br/>
           <div className="task-header">
            <h1>Detalhando desenvolvedor {developer?.nome}</h1>
                <Button variant="primary" size="sm" onClick={back}>Voltar</Button>
            </div> 
            <br/>
            <div className="container"> 
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                        type="text" 
                        name= "nome"
                        value={developer?.nome}
                        placeholder="Seu nome" 
                        disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Idade"
                        disabled 
                        name= "idade"
                        value={developer?.idade}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3"> 
                         <Form.Label>Sexo</Form.Label>
                         <Form.Control 
                         as="select" 
                         size="sm"
                         type="text"
                         name= "sexo"
                         value={developer?.sexo}   
                         disabled
                         >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        </Form.Control> 
                     </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Hobby</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Seu hobby" 
                        name= "hobby"
                        value={developer?.hobby}
                        disabled                        
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Data Nascimento</Form.Label>
                        <Form.Control 
                        type="date" 
                        placeholder="Sua data de nascimento" 
                        name= "datanascimento"
                        value={String(moment(developer?.datanascimento).format('YYYY-MM-DD'))}
                        disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de Criação</Form.Label>
                        <Form.Control 
                        type="date" 
                        name= "datacriacao"
                        value={String(moment(developer?.created_at).format('YYYY-MM-DD'))}
                        disabled
                        />
                    </Form.Group>
                </Form>

            </div>    
        </div>
    )
}