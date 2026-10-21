"use client";

import { useState } from "react";
import styles from "./carrosselvagas.module.css";
import { vagas } from "../dados/vagas";

export default function CarrosselVagas() {
    const [indice, setIndice] = useState(0);

    if (!vagas || vagas.length === 0) {
    return <p>Nenhuma vaga disponível no momento.</p>;}

    const navegar = (direcao) => {
    setIndice((atual) => (atual + direcao + vagas.length) % vagas.length);};

    const obterVaga = (deslocamento) => {
    return vagas[
    (indice + deslocamento + vagas.length) % vagas.length];};

    const compartilharVaga = async (vaga) => {
      const url = vaga.link || window.location.href;

      const dados = {
        title: vaga.vaga,
        text: `Confira a vaga de ${vaga.vaga} na empresa ${vaga.empresa}.`,
        url: url,
    };
      try{
        if (navigator.share) {
          await navigator.share(dados);
        } else {
          await navigator.clipboard.writeText(
            `${dados.text}\n${dados.url}`
          );
          alert("Link da Vaga Copiado");
        }} 
      catch (erro) {
        if (erro.name !== "AbortError") {
        console.error("Erro ao compartilhar:", erro);
        }
    }};

return (
    <section className={styles.secaoVagas} id="vagas-destaque">
    <div className={styles.cabecalho}>
      <span className={styles.subtitulo}>OPORTUNIDADES</span>
      <h2>Vagas em <span>destaque</span></h2>
      <p>Encontre uma oportunidade para dar o próximo passo.</p>
    </div>

        <div className={styles.carrossel}>
            <button
            className={`${styles.seta} ${styles.esquerda}`}
            onClick={() => navegar(-1)}
            aria-label="Vagas anteriores"
            >
            &#10094;
            </button>

        <div className={styles.palco}>
        {[-1, 0, 1].map((posicao) => {
            const vaga = obterVaga(posicao);

            return (
            <article
                key={`${vaga.id}-${posicao}`}
                className={`${styles.card} ${
                posicao === 0 ? styles.cardAtivo : styles.cardLateral
                }`}
                style={{ "--posicao": posicao }}
                aria-hidden={posicao !== 0}
            >
                <div className={styles.topoCard}>
                <div className={styles.logoEmpresa}>
                    <img
                    src={vaga.logo}
                    alt={`Logo ${vaga.empresa}`}
                    />
                </div>

              <div className={styles.infoPrincipal}>
                <h3>{vaga.vaga}</h3>
                <span>{vaga.empresa}</span>
              </div>

              <button
                className={styles.iconeCompartilhar}
                onClick={() => compartilharVaga(vaga)}
                aria-label={`Compartilhar vaga ${vaga.vaga}`}
                title="Compartilhar vaga"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="23"
                  height="23"
                  aria-hidden="true"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.7 10.6 6.6-4.2M8.7 13.4l6.6 4.2" />
                </svg>
              </button>
            </div>

            <div className={styles.detalhes}>
              <p>
                <span>⌖</span> {vaga.localização}
              </p>
              <p>
                <span>♧</span> {vaga.categoria}
              </p>
              <p>
                <span>▣</span> Oportunidade profissional
              </p>
            </div>

            <div className={styles.acoes}>
              <a
                href={vaga.link || "#"}
                target={vaga.link ? "_blank" : undefined}
                rel={vaga.link ? "noopener noreferrer" : undefined}
                className={styles.botaoDetalhes}
                onClick={(e) => {
                  if (!vaga.link) e.preventDefault();
                }}
              >
                Ver mais detalhes
              </a>

              <a
                href={vaga.link || "#"}
                target={vaga.link ? "_blank" : undefined}
                rel={vaga.link ? "noopener noreferrer" : undefined}
                className={styles.botaoCandidatar}
                onClick={(e) => {
                  if (!vaga.link) e.preventDefault();
                }}
              >
                Me candidatar
              </a>
            </div>
          </article>
        );
      })};
    </div>

    <button
      className={`${styles.seta} ${styles.direita}`}
      onClick={() => navegar(1)}
      aria-label="Próximas vagas"
    >
      &#10095;
    </button>
  </div>

  <div className={styles.indicadores}>
    {vagas.map((vaga, i) => (
      <button
        key={vaga.id}
        className={`${styles.indicador} ${
          i === indice ? styles.indicadorAtivo : ""
        }`}
        onClick={() => setIndice(i)}
        aria-label={`Mostrar vaga ${i + 1}`}
        aria-current={i === indice ? "true" : undefined}
      />
    ))}
  </div>
</section>

  )};