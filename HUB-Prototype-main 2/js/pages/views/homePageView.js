export function homePageView() {
    return /* HTML */`
    <h1 class="title">Velkommen til HUB Phønix</h1>
    <section id="informationHome">
        <!-- Introduction Card -->
        <article class="homeA intro-card">
            <div class="content-text">
                <h2>Et kompetansesenter for bærekraft</h2>
                <p>HUB Phønix er en møteplass for bedrifter, organisasjoner og enkeltpersoner som ønsker å jobbe aktivt med bærekraft og samfunnsutvikling. Vi kobler næringsliv, utdanningsinstitusjoner og offentlig sektor sammen for å skape innovative og konkrete løsninger for en mer bærekraftig fremtid.</p>
            </div>
            <div class="content-image">
                <img src="assets/hub phonix full building.png" alt="HUB Phønix byggning">
            </div>
        </article>

        <!-- Info Card -->
        <article class="homeA info-card">
            <div class="services">
                <h2>Hva vi tilbyr</h2>
                <ul class="service-list">
                    <li>✅ Nettverksbygging og samarbeid</li>
                    <li>✅ Arrangementer, foredrag og workshops</li>
                    <li>✅ Tilgang til ressurser og kompetanse innen bærekraft</li>
                    <li>✅ Moderne lokaler for møter, kurs og prosjekter</li>
                </ul>
                <div class="values">
                    <p>Bærekraft i fokus 🌍 | Innovasjon & Samarbeid 🤝 | En grønnere fremtid 🌱</p>
                </div>
            </div>
            <div class="contact">
                <h2>Kontakt oss</h2>
                <div class="contact-info">
                    <p><span>📍</span> Adresse: Phønixbrygga 3, 1606 Fredrikstad</p>
                    <p><span>📧</span> E-post: <a href="mailto:post@aofostfold.no">post@aofostfold.no</a></p>
                </div>
            </div>
        </article>
    </section>
    `;
}