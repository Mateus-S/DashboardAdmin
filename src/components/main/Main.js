import './Main.css';
import hello from '../../assets/hello.jpg';
import Chart from '../chart/Chart';

const Main = () => {
    return (
        <main className='main__container'>
            <div className='main__title'>
                <img src={hello} alt='hello' />
                <div className='main__greeting'>
                    <h1>Olá Mateus Santos</h1>
                    <p>Bem vindo ao seu painel</p>
                </div>
            </div>

            <div className='main__cards'>
                <div className='card'>
                    <i className='fa fa-file-text fa-2x text-lightblue'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Número do pedido</p>
                        <p className='font-bold text-title'>578</p>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-money fa-2x text-red'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Pagamentos</p>
                        <p className='font-bold text-title'>R$2.467</p>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-archive fa-2x text-yellow'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Números de Produtos</p>
                        <p className='font-bold text-title'>670</p>
                    </div>
                </div>

                <div className='card'>
                    <i className='fa fa-bars fa-2x text-green'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Categorias</p>
                        <p className='font-bold text-title'>40</p>
                    </div>
                </div>

                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Betim, Minas Gerais, Brasil</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <Chart />
                    </div>
                </div>

                <div className='charts'>
                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Betim, Minas Gerais, Brasil</p>
                            </div>
                            <i className='fa fa-area-chart'></i>
                        </div>
                        <div className='charts__right__cards'>
                            <div className='card1'>
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>

                            <div className='card2'>
                                <h1>Pagamentos</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className='card3'>
                                <h1>Custo de Hospedagem</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className='card4'>
                                <h1>Banco de Dados</h1>
                                <p>R$180,00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};


export default Main;