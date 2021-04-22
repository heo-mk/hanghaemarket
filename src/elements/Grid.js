import React from "react";
import styled from "styled-components";

const Grid =(props)=>{
    
    const {is_flex,width,margin,padding,bg,height,children} = props;

    const styles={
        is_flex:is_flex,
        width:width,
        margin:margin,
        padding:padding,
        bg:bg,
        height:height,
        
    };
    return(
        <React.Fragment>
            <GridBox {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    );
}

Grid.defaultProps={
    children:null,
    is_flex:false,
    width:"100%",
    padding:false,
    margin:false,
    bg:false,
    height:false,
}

const GridBox=styled.div`
    width: ${(props)=>props.width};
    // height:100%;
    ${(props)=>(props.height ? `height: ${props.height};`: "")}
    box-sizing:border-box;
    background-color:#eae7e7;
    ${(props)=>(props.padding ? `padding: ${props.padding};`: "")}
    ${(props)=>(props.margin ? `margin: ${props.margin};`: "")}
    ${(props)=>(props.bg ? `background-color: ${props.bg};`: "")}
    ${(props)=>props.is_flex?
        `display: flex; 
        align-items:stretch;
        align-content:flex-start;
        justify-content: flex-start; `:""}
`;
export default Grid;