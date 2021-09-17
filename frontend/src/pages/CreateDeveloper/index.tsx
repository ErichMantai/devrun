import React, {useState, ChangeEvent} from 'react';
import {useHistory} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap'

import toast, { Toaster } from 'react-hot-toast';

import {api} from '../../services/api';


import './styles.css'

interface IDeveloper {
    nome: string;
    sexo: string;
    idade: string;
    hobby: string;
    datanascimento: string;
}

export function CreateDeveloper() {
    const history = useHistory();

    const [validated, setValidated] = useState(false);

    const [developer, setDeveloper] = useState<IDeveloper>({
        nome: '',
        sexo: '',
        idade: '',
        hobby: '',
        datanascimento: ''
    })

    function updatedDeveloper(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        setDeveloper({
            ...developer,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        const form  = e.currentTarget;

        if(form.checkValidity() === false){
             e.preventDefault();
             e.stopPropagation(); 
        } else {
                         
            api.post('/developers',developer);
            

            back()
        }
        setValidated(true);
    }


    function back() {
        history.push('/developer?page=1')
        return
    }

    return (
       <div className="container">
           <br/>
           <div className="task-header">
                <h1>Cadastrar novo desenvolvedor</h1>
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
                        placeholder="Seu nome" 
                        required
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Idade"
                        required 
                        name= "idade"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                         <Form.Label>Sexo</Form.Label>
                         <Form.Control 
                         as="select" 
                         size="sm"
                         type="text"
                         name= "sexo"
                         placeholder="Masculino,Feminino, Outros.."   
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
                        required
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatedDeveloper(e)}                        
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Data Nascimento</Form.Label>
                        <Form.Control 
                        type="date" 
                        placeholder="Sua data de nascimento" 
                        name= "datanascimento"
                        required
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatedDeveloper(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                    </Button> 
                </Form>
                <Toaster /> 
            </div>    
        </div>
    )
}