'use client';

import styles from './cardsrapidos.module.css';
import { FaBullseye, FaChartLine, FaWhatsapp } from 'react-icons/fa';

const cards = [
{
    id: 1,
    titulo: 'Seu primeiro passo',
    descricao: 'Comece sua jornada e descubra novas possibilidades profissionais.',
    icone: FaBullseye,
    acao: '#vagas-destaque',
    textoBotao: 'Encontrar oportunidades',
},
{
    id: 2,
    titulo: 'Cresça com a NextVaga',
    descricao: 'Conheça nosso projeto e como queremos conectar jovens às oportunidades.',
    icone: FaChartLine,
    acao: '#sobre-nos',
    textoBotao: 'Conhecer o projeto',
},
{
    id: 3,
    titulo: 'Tire suas dúvidas',
    descricao: 'Converse com nosso bot pelo WhatsApp e tire dúvidas sobre as vagas.',
    icone: FaWhatsapp,
    acao: 'whatsapp',
    textoBotao: 'Conversar com o bot',
},
];

export default function CardsRapidos() {
    const abrirCard = (acao) => {
        if (acao === 'whatsapp') {
    window.open('https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc','_blank','noopener,noreferrer');
return;}

document.querySelector(acao)?.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});
};

    return ( <section className={styles.secaoCards} aria-label="Conheça a Next Vaga"> <div className={styles.containerCards}>
        {cards.map((card) => {
        const Icone = card.icone;
    return (
        <article className={styles.card} key={card.id}>
          <div className={styles.icone}>
            <Icone aria-hidden="true" />
          </div>

          <h2>{card.titulo}</h2>

          <p>{card.descricao}</p>

          <button
            type="button"
            className={styles.botaoCard}
            onClick={() => abrirCard(card.acao)}
          >
            {card.textoBotao}
            <span aria-hidden="true"> →</span>
          </button>
        </article>
      );
    })}
  </div>
</section>
);
}
