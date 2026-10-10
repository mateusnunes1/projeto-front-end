import styles from './page.module.css';
import Navbar from './componentes/navbar';
import { FaWhatsapp } from "react-icons/fa";
import PesquisaVagas from './componentes/pesquisavagas';
import Footer from './componentes/footer';
import CarrosselVagas from './componentes/carrosselvagas';
import CarrosselEmpresas from './componentes/carrosselempresas';

export default function Home(){
  return(
    <>
    <Navbar />
      <main id="inicio" className={styles.main}>
        <div className={styles.conteudo}>
              <h1>Seu Próximo Passo Começa A
                qui</h1>
              <p>Encontre oportunidades de Jovem Aprendiz e Estágio que combinam com você</p>
              <PesquisaVagas />
              <div><a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.whatsappFlutuante}><FaWhatsapp /></a></div>
                <div id="cards-rapidos" className={styles.cardsRapidos}>
                  <div className={styles.cardRapido}>
                    <div className={styles.iconeCard}>🎯</div>
                      <h3>Jovem Aprendiz</h3>
                      <p>Encontre oportunidades para começar sua carreira.</p>
                    </div>
                    

                    <div className={styles.cardRapido}>
                      <div className={styles.iconeCard}>🎓</div>
                      <h3>Estágio</h3>
                      <p>Conquiste experiência na sua área de estudo.</p>
                    </div>

                    <div className={styles.cardRapido}>
                      <div className={styles.iconeCard}>💬</div>
                      <h3>Tire suas dúvidas</h3>
                      <p>Fale com nosso bot pelo WhatsApp.</p>
                    </div>
                </div>
          </div>
      </main>
      <CarrosselEmpresas />
        <section id="sobre-nos" className={styles["sobre-nos-section"]}>
          <div className={styles["sobre-nos-conteudo"]}>
          <div className={styles["sobre-nos-topo"]}>
          <div className={styles["sobre-nos-image"]}>
            <img src="./sobre-mim.png" alt="procurando emprego" width={650} height={450}/>
          </div>
          <div className={styles["sobre-nos-text"]}>
            <span className={styles["sobre-nos-tag"]}>SOBRE NÓS</span>
            <h2>
              Sobre a <span className={styles["sobre-nos-nome"]}>NextVaga</span>
            </h2>
            <p>
              A NextVaga é um site de busca de vagas de emprego, onde você pode
              encontrar a vaga ideal para você. Nosso objetivo é facilitar a busca
              por oportunidades de trabalho, oferecendo uma plataforma intuitiva e eficiente.
            </p>
            <p>
              Com uma experiência de busca de vagas de emprego simplificada e
              eficiente. Você pode pesquisar vagas por palavra-chave, localização e
              categoria, além de receber notificações sobre novas oportunidades.
              Estamos comprometidos em ajudar você a encontrar a vaga dos seus sonhos!
            </p>
          </div>
        </div>

        <div className={styles["mvv-section"]}>
          <div className={styles["mvvCard"]}>
            <img src="./sobre-missao1.png" alt="Missão" width={60} height={60}/>
            <p>Conectar jovens às primeiras oportunidades profissionais.</p>
          </div>

          <div className={styles["mvvCard"]}>
            <img src="./sobre-visao.png" alt="Visão" width={60} height={60}/>
            <p>Facilitar o início da carreira de novos talentos.</p>
          </div>

          <div className={styles["mvvCard"]}>
            <img src="./sobre-valores.png" alt="Valores" width={60} height={60}/>
            <p>Respeito, transparência, inovação e compromisso.</p>
          </div>

        </div>
        </div>
      </section>
      <CarrosselVagas />
        <section id="whatsapp" className={styles["whatsapp-section"]}>
            <div className={styles["whatsapp-text"]}>
              <span className={styles["whatsapp-tag"]}>ATENDIMENTO</span>
              <h2>Tire suas dúvidas<br/>pelo <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles["whatsapp-link"]}>WhatsApp!</a></h2>
              <p>
                Ficou com alguma dúvida sobre uma vaga?
                Nosso atendimento pelo WhatsApp está aqui para ajudar.</p>
              <p>
                Converse com nosso bot, consulte informações sobre as
                oportunidades e encontre respostas para suas dúvidas
                de forma rápida e prática.</p>
              <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles["whatsapp-button"]}>💬 Fale conosco pelo WhatsApp</a>
            </div>
                  <div className={styles["whatsapp-image"]}>
            <img src="./duvidas.png" alt="atendimento whatsapp" width={650} height={450}/>
          </div>
        </section>
        <Footer/ >
    </>
  );
}