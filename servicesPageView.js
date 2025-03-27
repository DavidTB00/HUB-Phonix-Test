export function servicesPageView() {
    return /* HTML */`
    <h1 class="title">Tjenester</h1>
    <section id="informationServices">
        <article class="servicesA">
            <!-- Introduction -->
            <div class="services-header">
                <div class="content">
                    <h2>Kompetansesenter for bærekraft</h2>
                    <p>HUB Phønix er en dynamisk møteplass for næringsliv, utdanningsinstitusjoner, frivillige organisasjoner og offentlige aktører. Vi tilbyr en rekke tjenester for å fremme samarbeid, kompetanseheving og innovasjon innen sosial, økonomisk og miljømessig bærekraft.</p>
                </div>
                <img src="assets/building HUB Phonix.png" alt="HUB Phønix tjenester">
            </div>
            
            <div class="services-content">
            <!-- Meeting Rooms -->
            <div class="service-section">
            <h3>Lokaler og fasiliteter</h3>
            <ul class="services-list">
            <li>🏢 Moderne møterom og konferansefasiliteter</li>
            <li>💻 Coworking-områder og kontorplasser</li>
            <li>🎙 Profesjonelt podcaststudio</li>
            <li>☕ Fellesområder med kjøkken</li>
            </ul>
            </div>
            
            <!-- Events -->
            <div class="service-section">
            <h3>Arrangementer og læring</h3>
            <ul class="services-list">
            <li>📚 Workshops og kompetanseutvikling</li>
            <li>🎯 Foredrag og nettverkssamlinger</li>
            <li>🌱 Bærekraftsprosjekter</li>
            <li>🤝 Sosiale bærekraftsinitiativer</li>
            </ul>
            </div>
            </div>
            
            <div class="booking-cta">
            <p>Interessert i å leie lokaler eller delta på arrangementer?</p>
            <a href="#booking" class="booking-button">Book lokaler</a>
            </div>
            </article>
            </section>
            `;
}