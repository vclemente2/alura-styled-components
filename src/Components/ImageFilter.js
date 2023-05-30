import alimentacao from '../assets/images/alimentacao.svg'
import dinheiro from '../assets/images/dinheiro.svg'
import outros from '../assets/images/outros.svg'
import transporte from '../assets/images/transporte.svg'
import saude from '../assets/images/saude.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from '../Components/UI'

export default function (type) {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Dinheiro: <Icone src={dinheiro} alt="Dinheiro" />,
        Transporte: <Icone src={transporte} alt="Transporte" />,
        Saude: <Icone src={saude} alt="Saúde" />,
        Utilidades: <Icone src={utilidades} alt="Utilidades" />,
        Default: <Icone src={outros} alt="Outros" />
    }

    return (
        Images[type] || Images.Default
    );
}