
import styles from "./footer.module.css";

const footerData = {
  descricao:
    "Conectando jovens às oportunidades de estágio e jovem aprendiz para dar o primeiro passo na carreira.",

  colunas: [
    {
      titulo: "Para candidatos",
      links: [
        { texto: "Vagas de estágio", url: "#inicio" },
        { texto: "Jovem aprendiz", url: "#inicio" },
        { texto: "Pesquisar vagas", url: "#inicio" },
      ],
    },
    {
      titulo: "Institucional",
      links: [
        { texto: "Sobre nós", url: "#sobre-nos" },
        { texto: "Missão, visão e valores", url: "#sobre-nos" },
        { texto: "Fale conosco", url: "https://wa.me/5511924907385?text=Ol%C3%A1%2C%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida." },
      ],
    },
  ],

  redes: [
    { texto: "Instagram", url: "https://www.instagram.com/nextvaga2026/", icone: "/icones/instagram.png" },
    { texto: "Linkedin", url: "https://www.linkedin.com/in/next-vaga-2b8433442/?isSelfProfile=true", icone: "/icones/linkedin.png" },
    { texto: "TikTok", url: "https://www.tiktok.com/@nextvaga", icone: "/icones/tiktok.png" },
    { texto: "Facebook", url: "https://www.facebook.com/profile.php?id=61595214302685", icone: "/icones/facebook.png" },
    { texto: "Threads", url: "https://www.threads.com/@nextvaga2026", icone: "/icones/threads.png" },

  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logo}>
            <h2 className={styles["logo-text"]}>Next<span>Vaga.</span></h2>
          </a>

          <p>{footerData.descricao}</p>

          <div className={styles.social}>
            {footerData.redes.map((rede) => (
              <a
                key={rede.texto}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar o${rede.texto} da Next Vaga`}
                className={styles.socialLink}

              >
                <img src={rede.icone} alt={rede.texto} width={24} height={24} />
                <span>{rede.texto}</span>
              </a>
            ))}
          </div>
        </div>

        {footerData.colunas.map((coluna) => (
          <nav
            className={styles.coluna}
            aria-label={coluna.titulo}
            key={coluna.titulo}
          >
            <h3>{coluna.titulo}</h3>

            <ul>
              {coluna.links.map((link) => (
                <li key={link.texto}>
                  <a href={link.url}>{link.texto}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Next Vaga. Todos os direitos reservados.
        </p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}