import React,{useState} from 'react'
import {
    NewClassifiedSection,
    Background,
    InputField,
    LabelInput,
    InputTitle,
    TextDescribe,
    Submit
} from './elements'
import { useSelector, useDispatch } from 'react-redux'
import {isVisible} from '../../Actions/index'
import { thunksClassified } from '../../thunks/classified'
import { IoIosCloseCircle } from "react-icons/io";

export function MenuSide({state}) {

    const [classified, setClassified] = useState(emptyClassified());

    const visibleState = useSelector(classifiedState => classifiedState.visible);
    const dispatch = useDispatch();

    function validateBeforeSend(){
        if(classified.title!="" && classified.describe!=""){
            var data = new FormData();
            data.append("classified.Title",classified.Title);
            data.append("classified.Describe",classified.Describe);
            dispatch(thunksClassified.newClassified(data));
            setClassified(emptyClassified());
            dispatch(isVisible(false))
        }
        else{
            window.alert("Preencha os dados para que o novo classificado seja criado");
        }
    }

    return (
        <NewClassifiedSection visible={visibleState}>
            <Background onClick={()=>
                dispatch(isVisible(false))
            }/>
            <InputField>
            <IoIosCloseCircle 
            size={32} 
            color="#fff"
            onClick={(event)=>{
                dispatch(isVisible(false))
            }}/>
                <LabelInput>Título</LabelInput>
                <InputTitle 
                type="text" 
                placeholder="titulo"
                value={classified.title}
                onChange={(event)=>{
                    event.preventDefault();
                    setClassified({...classified,Title:event.target.value})
                }}/>
                <LabelInput>Descrição</LabelInput>
                <TextDescribe 
                placeholder="Descrição do seu classificado"
                value={classified.describe}
                onChange={(event)=>{
                    event.preventDefault();
                    setClassified({...classified,Describe:event.target.value})
                }}/>
                <Submit onClick={(event)=>{
                    event.preventDefault();
                    validateBeforeSend()
                }}>Criar novo Classificado</Submit>
            </InputField>
        </NewClassifiedSection>
    )
}

function emptyClassified(){
    return({
        Title:"",
        Describe:""
    })
}


