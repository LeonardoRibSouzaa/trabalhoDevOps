import './App.css'

function App() {
  return (
      <div className="app">
        <header className="app-header">
          <nav className="navbar">
            <div className="logo">
              <span>&lt;/&gt;</span> CodeFactory
            </div>

            <div className="nav-links">
              <a href="#objetivo">Objetivo</a>
              <a href="#tecnologias">Tecnologias</a>
              <a href="#equipe">Equipe</a>
            </div>
          </nav>

          <div className="hero">
            <div className="hero-content">
              <span className="badge">DEVOPS & INTEGRAÇÃO CONTÍNUA</span>

              <h1>
                Desenvolvendo o futuro com
                <span> DevOps</span>
              </h1>

              <p>
                Um projeto prático demonstrando como cultura, automação e
                colaboração podem transformar o desenvolvimento de software.
              </p>

              <a href="#objetivo" className="hero-button">
                Conheça o projeto →
              </a>
            </div>

            <div className="hero-code">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const devOps = {
  versionamento: true,
  containerizacao: true,
  integracaoContinua: true,
  colaboracao: true
}

console.log(
  "Deploy realizado com sucesso!"
)`}
            </pre>
            </div>
          </div>
        </header>

        <main>
          <section id="objetivo" className="section">
            <div className="section-title">
              <span>01</span>
              <h2>Objetivo do Projeto</h2>
            </div>

            <p className="section-description">
              Este projeto demonstra a adoção da Cultura DevOps na empresa,
              aplicando conceitos de versionamento, containerização e
              integração contínua em um ambiente de desenvolvimento moderno.
            </p>

            <div className="cards">
              <article className="card">
                <div className="card-icon">⚡</div>
                <h3>Automação</h3>
                <p>
                  Automatização de processos para tornar o desenvolvimento
                  mais rápido e eficiente.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">🔄</div>
                <h3>Integração Contínua</h3>
                <p>
                  Integração frequente das alterações para garantir mais
                  qualidade e estabilidade.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">🚀</div>
                <h3>Entrega Contínua</h3>
                <p>
                  Processos preparados para facilitar a entrega de novas
                  funcionalidades.
                </p>
              </article>
            </div>
          </section>

          <section id="tecnologias" className="section technologies">
            <div className="section-title">
              <span>02</span>
              <h2>Tecnologias Utilizadas</h2>
            </div>

            <div className="tech-grid">
              <div className="tech-item">
                <strong>React + Vite</strong>
                <span>Frontend</span>
              </div>

              <div className="tech-item">
                <strong>Git & GitHub</strong>
                <span>Versionamento</span>
              </div>

              <div className="tech-item">
                <strong>Docker</strong>
                <span>Containerização</span>
              </div>

              <div className="tech-item">
                <strong>GitHub Actions</strong>
                <span>CI/CD</span>
              </div>
            </div>
          </section>

          <section id="equipe" className="section team">
            <div className="section-title">
              <span>03</span>
              <h2>Nossa Equipe</h2>
            </div>

            <div className="team-content">
              <div>
                <h3>Construindo juntos.</h3>

                <p>
                  Projeto desenvolvido por Leonardo, Enrico e Luiz Herinque aplicando na
                  prática os conceitos de Cultura DevOps estudados na
                  disciplina.
                </p>
              </div>

              <div className="team-members">
                <div className="member">
                  <div className="avatar">H</div>
                  <div>
                    <strong>Leonardo</strong>
                  </div>
                </div>

                <div className="member">
                  <div className="avatar">T</div>
                  <div>
                    <strong>Enrico</strong>
                  </div>
                </div>

                <div className="member">
                  <div className="avatar">T</div>
                  <div>
                    <strong>Luiz Herinque</strong>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>

        <footer className="app-footer">
          <div>
            <strong>&lt;/&gt; CodeFactory Solutions</strong>
            <p>Projeto de DevOps e Integração Contínua — Uninter 2026</p>
          </div>

          <span>Build. Ship. Improve.</span>
        </footer>
      </div>
  )
}

export default App