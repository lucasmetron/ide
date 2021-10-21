import React from 'react'
import './PrayForMe.css'
import Footer from '../../components/Footer/Footer';
import TextField from '@material-ui/core/TextField/TextField';


export default function PrayForMe(props) {



    return (
        <div className='containerPrayforMe'>
            <h1>ORE POR MIM</h1>
            <div className='mainPrayforMe'>
                <p>Precisa de oração? Preencha o formulário com seu pedido que vamos orar por você!</p>

                <TextField style={{ color: 'white' }} id="standard-basic" label="Nome" variant="standard" />
                <TextField id="standard-basic" label="Contato" variant="standard" />
                <TextField id="standard-basic" label="Pedido" variant="standard" />


                <label>
                    <p>Gostaria de ser contatado sobre o pedido?</p>
                    <div>
                        <input type='radio' name='pedidoContato' id='sim' checked />
                        <label for='sim'>Sim</label>
                    </div>
                    <div>
                        <input type='radio' name='pedidoContato' id='nao' />
                        <label for='nao'>Não</label>
                    </div>
                </label>

                <button>Enviar pedido</button>

                <h2>SALA DE ORAÇÃO</h2>
                <p>Sala online às quartas-feiras, às 21h. Acesse o link e participe ao vivo com nosso time do Ministério de Intercessão. Participe e seja abençoado!</p>
                <button>Acessar a sala</button>
            </div>
            <Footer />
        </div>
    );
}