'use client';

import styles from './pesquisavagas.module.css';
import {useState} from 'react';
import {vagas} from '../dados/vagas';

export default function PesquisaVagas() {
    const [pesquisa, setPesquisa] = useState('');

    const vagasFiltradas = vagas.filter(vaga =>
        vaga.vaga.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.empresa.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.localização.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.categoria.toLowerCase().includes(pesquisa.toLowerCase())
    );

return (
    <div className={styles.containerPesquisa}>
        <div className={styles.pesquisa}>
            <span className={styles.icone}>⌕</span>
            <input
                type="text"
                placeholder="Digite o nome da vaga que deseja encontrar"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
        </div>
        {pesquisa && (
            <div className={styles.resultados}>
                {vagasFiltradas.length > 0 ? (
                    vagasFiltradas.map((vaga) => (
                        <div
                            key={vaga.id}
                            className={styles.vaga}>
                            <img
                                src={vaga.logo}
                                alt={`Logo da ${vaga.empresa}`}
                            />
                            <div className={styles.informacoes}>
                                <h3>
                                    {vaga.vaga}
                                </h3>
                                <p className={styles.empresa}>
                                    {vaga.empresa}
                                </p>
                                <p className={styles.detalhes}>
                                    {vaga.localização} • {vaga.categoria}
                                </p>

                            </div>
                            <a href={vaga.link} target="_blank" rel="noopener noreferrer" className={styles.botao}>Acessar vaga</a>
                        </div>
                    ))
                    ) : (
                    <div className={styles.semResultado}>
                        <span>🔎</span>
                        <p>Nenhuma vaga encontrada.</p>
                        <small>
                         Tente pesquisar por outro nome de vaga,
                         empresa ou localização.
                        </small>
                    </div>
                     )}  
            </div>
        )}
    </div>
)}