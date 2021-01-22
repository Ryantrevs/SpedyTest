import styled from 'styled-components'

export const NewClassifiedSection = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    margin: 0;
    top: 0;
    overflow-x: hidden;    
    right: ${t=>(!t.visible ? `-200em`: `0em`)}
`

export const InputField = styled.div`
    background: #380474;
    width: 40%;
    height: 100%;
    padding:2em;
    display:flex;
    align-items:center;
    justify-content: space-around;
    flex-direction:column;
`

export const Background = styled.div`
    width: 60%;
    opacity: 0.8;
    background: #000000;
    
`
export const LabelInput = styled.label`
    font-weight:bold;
    font-size:2em;
    color:white;
    margin: 0 0 -3em 0;
    @media(max-height: 780px){
        
        margin: 0 0 -1em 0;
    }

`
export const InputTitle = styled.input`
    padding:2em;
    border-radius:1em;
    max-width:25vw;
    max-height:5vh;
    color:#fff;
    font-weight:bold;
    background:#000;
`

export const TextDescribe = styled.textarea`
    padding:2em;
    border-radius:1em;
    max-width:25vw;
    max-height:25vh;
    color:#fff;
    font-weight:bold;
    background:#000;
`

export const Submit = styled.button`
    background:#fff;
    -webkit-box-shadow: 10px 4px 0px 4px #000000; 
    box-shadow: 10px 4px 0px 4px #000000;
    border-radius:1em;
    padding:2vh 8vw;
    font-weight:bold;
    &:hover{
        -webkit-box-shadow: 10px 4px 0px 4px #c90700; 
        box-shadow: 10px 4px 0px 4px #c90700;
    }
`