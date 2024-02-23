function add_table_of_contents(element_id, path_to_root='./') {
    let container = document.getElementById(element_id)
    container.innerHTML = `
        <ul>
            <li>Author's Note</li>
            <li>Description</li>
            <li class="poem-list-container">
                Poems
                <ul class="poem-list">
                    <li><a href="${path_to_root}poems/st-john-fisher-bishop-and-martyr.html">St. John Fisher: Bishop and Martyr</a></li>
                    <li><a href="${path_to_root}poems/missa-in-tempore-belli.html">Missa in Tempore Belli</a></li>
                    <li><a href="${path_to_root}poems/fr-gustave-depreitere-recollects.html">Fr. Gustave Depreitere Recollects</a></li>
                    <li><a href="${path_to_root}poems/the-reluctant-thomist-teaches-phil-101.html">The Reluctant Thomist Teaches PHIL 101</a></li>
                    <li><a href="${path_to_root}poems/emeritus.html">Emeritus</a></li>
                    <li><a href="${path_to_root}poems/migration.html">Migration</a></li>
                    <li><a href="${path_to_root}poems/an-extraordinary-evening-in-enid.html">An Extraordinary Evening in Enid</a></li>
                    <li><a href="${path_to_root}poems/alexandrines.html">Alexandrines</a></li>
                    <li><a href="${path_to_root}poems/cremains.html">Cremains</a></li>
                    <li><a href="${path_to_root}poems/the-hidden-eye.html">The Hidden Eye</a></li>
                    <li><a href="${path_to_root}poems/their-last-pagan-easter.html">Their Last Pagan Easter</a></li>
                    <li><a href="${path_to_root}poems/a-cautionary-tale.html">A Cautionary Tale</a></li>
                    <li><a href="${path_to_root}poems/similitudes.html">Similitudes</a></li>
                    <li><a href="${path_to_root}poems/bonny-jean.html">Bonny Jean</a></li>
                    <li><a href="${path_to_root}poems/history-on-the-quad.html">History on the Quad</a></li>
                    <li><a href="${path_to_root}poems/summer-incident-1967.html">Summer Incident: 1967</a></li>
                    <li><a href="${path_to_root}poems/california-dreaming.html">California Dreaming</a></li>
                    <li><a href="${path_to_root}poems/our-little-uncle.html">Our Little Uncle</a></li>
                    <li><a href="${path_to_root}poems/unnatural-history.html">Unnatural History</a></li>
                    <li><a href="${path_to_root}poems/compensation.html">Compensation</a></li>
                    <li><a href="${path_to_root}poems/theme-in-want-of-variations.html">Theme in Want of Variations</a></li>
                    <li><a href="${path_to_root}poems/priest-to-penitent.html">Priest to Penitent</a></li>
                </ul>
            </li>
        </ul>
    `
}