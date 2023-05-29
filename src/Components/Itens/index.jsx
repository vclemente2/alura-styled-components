import styled from "styled-components";

const Itens = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    diplay: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

export default function ({ id, type, value, date, from }) {
    return (
        <Itens></Itens>
    );
}