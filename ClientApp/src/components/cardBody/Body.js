import React, { useEffect, useState } from 'react'
import {
    Main,
    Background,
    CardClassified,
    CardTitle,
    CardDate,
    CardDescribe,
    ClassifiedContainer,
    NewClassifiedButton,
    TotalClassified
} from './elements'
import { useSelector, useDispatch } from 'react-redux'
import { newClassified, isVisible } from '../../Actions/index'
import { thunksClassified } from '../../thunks/classified'
import MenuSide from '../MenuSide/index'

export function Body() {
    const classifiedState = useSelector(classifiedState => classifiedState.classified)
    const visibleState = useSelector(classifiedState => classifiedState.visible);
    const dispatch = useDispatch();

    useEffect(() => {
        let subscribe = true;
        document.title = "Classificados";
        dispatch(thunksClassified.getClassifieds());
        return () => { subscribe = false }
    }, []);


    return (
        <Main>
            <MenuSide />
            <Background>
            <NewClassifiedButton 
                    type="submit" 
                    onClick={(event) => {
                    event.preventDefault();
                    dispatch(isVisible(true))}}>
                        Novo Classificado
            </NewClassifiedButton>
                <ClassifiedContainer>
                    {classifiedState.map((classified, index) => (
                        <CardClassified key={index}>
                            <CardTitle>{classified.title}</CardTitle>
                            <CardDate>{formattedDate(classified.date)}</CardDate>
                            <CardDescribe>{classified.describe}</CardDescribe>
                        </CardClassified>
                    ))}
                </ClassifiedContainer>
                <TotalClassified>{classfiedName(classifiedState.length)}</TotalClassified>
                
            </Background>
        </Main>
    )
}

function formattedDate(date) {
    let cutter = date.split("T");
    const [year, month, day] = cutter[0].split("-");
    var stringDate = day + " de ";
    switch (month) {
        case "01":
            stringDate += "Janeiro de " + year;
            break;
        case "02":
            stringDate += "Fevereiro de " + year;
            break;
        case "03":
            stringDate += "Março de " + year;
            break;
        case "04":
            stringDate += "Abril de " + year;
            break;
        case "05":
            stringDate += "Maio de " + year;
            break;
        case "06":
            stringDate += "Junho de " + year;
            break;
        case "07":
            stringDate += "Julho de " + year;
            break;
        case "08":
            stringDate += "Agosto de " + year;
            break;
        case "09":
            stringDate += "Setembro de " + year;
            break;
        case "10":
            stringDate += "Outubro de " + year;
            break;
        case "11":
            stringDate += "Novembro de " + year;
            break;
        case "12":
            stringDate += "Dezembro de " + year;
            break;
        default:
            return("invalido");
    }
    return (stringDate)
}

function classfiedName(length){
    if(length==0){
        return("Nenhum Classificado")
    }
    else{
        if(length==1){
            return("1 Classificado")
        }
        else{
            return(length + "  Classificados")
        }
    }
}


