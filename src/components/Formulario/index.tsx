import React from 'react';
import Botao from '../Botao';
import './style.scss'


function Formulario (){
    return (
        <form className='novaTarefa'>
            <div className='inputContainer'>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que voce que estudar'
                    required/>
            </div>
            <div className='inputContainer'>
                <label>
                    Tempo
                </label>
                <input type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required/>
            </div>
            <Botao />
        </form>
    )
}

export default Formulario