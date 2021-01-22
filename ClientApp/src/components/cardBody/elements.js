import styled from 'styled-components'

export const Main = styled.section`
    overflow-x: hidden;    
    width:100vw;
    height:95vh;
    display:flex;
    justify-content:space-around;
    background:#380474;
    
`
export const Background = styled.section`
    width:90vw;
    height:85vh;
    background: #121212;
    color:#fff;
    -webkit-box-shadow: 0px 7px 11px 9px rgba(0,0,0,0.61); 
    box-shadow: 0px 7px 11px 9px rgba(0,0,0,0.61);
    border-radius:1.5em;
    padding: 1em 2em;
    display:flex;
    align-items:flex-end;
    flex-direction:column;
    margin: 3vh 0 0 0;
    
    
    
`
export const ClassifiedContainer = styled.section`
    height:70vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    overflow-y: scroll;
    overflow-x: hidden;
    @media(max-width: 800px) {
        grid-template-columns:10fr;
    }
`

export const CardClassified = styled.div`
    min-width:20vh;
    height: 20vh;
    border-radius:1.5em;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    margin: 0 2em 0 0;
    overflow-x: hidden;
    background:#001580;
    @media(max-width: 800px) {
        margin: 1em 1em;
        max-height: 30vh;
        max-width:80vh;
    }
    
`
export const CardTitle = styled.h4`
    margin:0 0 1em 0;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:space-around;
   
    
`

export const CardDate = styled.p`
    margin: -2.5em 0 0 0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    @media(max-width: 915px) {
        margin: -1.8em 0 0 0;
        
    }
    
`

export const CardDescribe = styled.p`
    margin: 0.5em 0 2em 0.5em;
    display:flex;
    align-items:center;
    justify-content:space-around;
    text-overflow: clip; 
`

export const NewClassifiedButton = styled.button`
    display:flex;
    justify-content:space-around;
    align-items:center;
    white-space: nowrap;
    background:#001580;
    max-width:12vw;
    max-height:4vh;
    padding: 0.1vh 12vw;
    border-radius:0.5em;
    font-weight:bold;
    color: #fff;
    margin:0 0 2vh 0;
    border: none;
    &:hover{
        background:#001580;
        padding:0.1vh 13vw;
        color:#fff;
        font-size:1em;
       
    }
`
export const TotalClassified = styled.div`
    display:flex;
    align-items:flex-start;
    background:#001580;
    margin: 1vh 0 0 0;
    border-radius:0.2em;
    width:87vw;
    font-size:2em;
    padding: 0 1.2em;
    font-weight:bold;
    @media(max-width: 1100px){
        width:82vw;
    }
    

`