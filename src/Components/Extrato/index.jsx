import { Botao, Box } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";

export default function Extrato() {
    return (
        <Box>
            <h2>Extrato</h2>
            {extratoLista.updates.map(({ id, type, value, date, from }) => {
                return (
                    <Itens key={id}>
                        {type}
                    </Itens>
                )
            })}
            <Botao>Ver Mais</Botao>
        </Box>
    );
}