import styled from "styled-components"

export const picStyle = { 
    width: "60%", 
    height: "60%", 
    borderRadius: "50%",
    position:"relative" ,
    boxShadow:"0 0 0 1px",
    display:"inline-block",
    lineHeight:1,
    overflow:"hidden",
    veticalAlign:"middle",
    boxSizing:'border-box',
    objectFit:"cover"
}

export const Wrapper = styled.div`
width:75px;
height:75px;
// border:1px solid lightgrey
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
filter: drop-shadow(0 0 0.75rem crimson);
`

export const Circle = styled.div`
width:8px;
height:8px;
border:1px solid #CC2610;
border-radius:50%;
background:#CC2610;
`

export const gridStyle = {
    display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  gridAutoRows: "minmax(100px, auto)"
}

export const sideTitleStyle = {fontWeight:"600", fontSize:"16px", lineHeight:"20px", font:"Encode Sans Expanded", color:"#1A0A02"}