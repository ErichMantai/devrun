import React, {useState, ChangeEvent, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap'
import moment from 'moment';
import {api} from '../../services/api';



import './styles.css'

interface IDeveloper {
    id: string
    nome: string;
    sexo: string;
    idade: string;
    hobby: string;
    datanascimento: Date;
}

interface IParamsProps {
    id:string
}

export function EditDeveloper() {
    const history = useHistory();
    const {id} = useParams<IParamsProps>();
    const [validated, setValidated] = useState(false);

    const [developer, setDeveloper] = useState<IDeveloper>({
        id: '',
        nome: '',
        sexo: '',
        idade: '',
        hobby: '',
        datanascimento: new Date()
    })

    useEffect(()=>{
        if (id !== undefined) findDeveloper(id)
    },[id])

    async function findDeveloper(id:string) {
        const response = await api.get(`/developers/${id}`)
        
        setDeveloper({
            id: response.data.id,
            nome: response.data.nome,
            sexo: response.data.sexo,
            idade: response.data.idade,
            hobby: response.data.hobby,
            datanascimento: response.data.datanascimento
        })
    }

    function updatedDeveloper(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) {

        setDeveloper({
            ...developer,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        const form  = e.currentTarget;

        if(form.checkValidity()===false){
            e.preventDefault();
            e.stopPropagation(); 
        }

        setValidated(true);     

        api.put(`developers/${id}`, developer);

        back()
    }


    function back() {
        history.push('/developer?page=1')
    }

    return (
       <div className="container">
           <br/>
           <div className="task-header">
            <h1>Editando desenvolvedor {developer.nome}</h1>
                <Button variant="primary" size="sm" onClick={back}>Voltar</Button>
            </div> 
            <br/>
            <div className="container"> 
                <Form noValidate validated={validated} onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                        type="text" 
                        name= "nome"
                        value={developer.nome}
                        placeholder="Seu nome" 
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Idade"
                        required 
                        name= "idade"
                        value={developer.idade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3"> 
                         <Form.Label>Sexo</Form.Label>
                         <Form.Control 
                         as="select" 
                         size="sm"
                         type="text"
                         name= "sexo"
                         value={developer.sexo}   
                         required
                         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatedDeveloper(e)}
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
                        value={developer.hobby}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeveloper(e)}                        
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Data Nascimento</Form.Label>
                        <Form.Control 
                        type="date" 
                        placeholder="Sua data de nascimento" 
                        name= "datanascimento"
                        value={String(moment(developer.datanascimento).format('YYYY-MM-DD'))}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>

            </div>    
        </div>
    )
}