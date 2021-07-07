import styled from "styled-components";

export const StyledDiv = styled.div`
.div_container{
    display: flex;
    align-items: center;
    justify-content:space-around;
    width: 100%;
	height: 20%;
	overflow: hidden;
	background-color: #FFFFFFF;
	position: absolute;
	top: 730px;
	left: 0px;
	box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.3);
}
.div_pagos{
    margin: 0% 15% 0% 0%;
    display: block;
    align-items: center;
}
.div_logo {
    margin-bottom: 4%;
    margin-top: 1%;
    font-size: 15px;
    display: flex;
    flex-direction:column;
    align-items: center;
}

.div_info {
    margin: 3% 0% 2% 0%;
    display: block;
    flex-direction: row;
    align-items: center;
    justify-content:center;
}

`
