import React, { useState } from 'react';
import "./App.css";
import Inspi from "./assets/goku.png";
import Projet from "./assets/naruto.png";
import Future from "./assets/luffy.png";
import Hobby from "./assets/ichigo.png";

const Section = ({ title, imageSrc, children, order }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-12 cursor-pointer" onClick={handleClick}>
            <div className="flex items-center justify-center">
                <div
                    className={`flex-none mr-8 transition-transform duration-500 ${isOpen ? 'rotate-360' : ''}`}
                >
                    <img src={imageSrc} width={120} alt={title} className="transition-transform duration-500" />
                </div>
                <div className="ml-2 flex-1">
                    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800 text-center">{title}</h2>
                </div>
            </div>
            <div className={`mt-4 transition-transform duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
                <div className={`transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-8'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <section>
            <div className="container m-auto px-4 py-14">
                <h2 className="text-2xl font-semibold mb-6">À propos de moi</h2>

                <Section title="Inspiration" imageSrc={Inspi} order="left">
                    <p className="leading-relaxed">
                        En tant que créatif passionné, je puise mon inspiration dans des sites internet au design épuré et fonctionnel.
                        Je suis constamment attiré par des interfaces qui allient simplicité et efficacité, car elles reflètent l’essence
                        d’une expérience utilisateur réussie.
                    </p>
                    <p className="leading-relaxed mt-2">
                        Ma forte créativité me pousse également à explorer de nouvelles approches et à tester des concepts novateurs
                        pour exprimer au mieux cette créativité. Mon objectif est d'allier esthétique et fonctionnalité pour concevoir
                        des projets qui se démarquent et captivent.
                    </p>
                </Section>

                <Section title="Projet" imageSrc={Projet} order="right">
                    <p className="leading-relaxed">
                        Je trouve une grande satisfaction à travailler sur des projets qui tiennent vraiment à cœur aux gens.
                        C'est particulièrement enrichissant de collaborer sur des initiatives qui ont un impact réel et significatif.
                        Ces expériences me permettent de m'investir pleinement et de contribuer à des projets qui résonnent profondément
                        avec les personnes impliquées.
                    </p>
                    <p className="leading-relaxed mt-2">
                        En parallèle, je me consacre également à des projets personnels liés aux jeux vidéo et aux jeux de rôle (JDR).
                        Ces domaines me passionnent et m'amusent profondément, offrant un espace créatif où je peux explorer de nouvelles
                        idées et concepts. Que ce soit pour développer des expériences interactives ou créer des univers immersifs,
                        travailler sur ces projets personnels nourrit ma créativité et renforce mon expertise en développement web.
                    </p>
                </Section>

                <Section title="Future" imageSrc={Future} order="left">
                    <p className="leading-relaxed">
                        Pour l'avenir, mon objectif principal est de perfectionner encore davantage ma maîtrise des outils et technologies
                        que j'utilise actuellement. Je suis constamment en quête d'amélioration et d'optimisation dans mon travail,
                        et je souhaite approfondir ma compréhension des dernières avancées en développement web.
                    </p>
                    <p className="leading-relaxed mt-2">
                        En parallèle, je suis particulièrement enthousiaste à l'idée d'explorer le domaine de l'intelligence artificielle
                        (IA). Je suis déterminé à en apprendre davantage sur cette technologie révolutionnaire, à comprendre ses applications
                        pratiques et à découvrir comment elle peut transformer le développement web. Mon ambition est d'intégrer l'IA dans
                        mes projets, voire de créer des solutions intelligentes qui repoussent les frontières de ce que nous pouvons accomplir.
                        L'IA représente une opportunité fascinante pour innover et créer des expériences encore plus enrichissantes et
                        personnalisées pour les utilisateurs.
                    </p>
                </Section>

                <Section title="Hobby" imageSrc={Hobby} order="right">
                    <p className="leading-relaxed">
                        En dehors de mon travail, je suis profondément passionné par la culture japonaise. Le Japon, avec sa richesse culturelle
                        et artistique, m'inspire énormément dans ma vie personnelle et professionnelle. Je suis un grand amateur de mangas et
                        de jeux vidéo, deux univers qui nourrissent ma créativité et mon imagination.
                    </p>
                    <p className="leading-relaxed mt-2">
                        Les jeux de rôle, qu'ils soient sur table ou en ligne, occupent également une place importante dans mes loisirs. Ils
                        me permettent de plonger dans des mondes fascinants et de développer des histoires captivantes, ce qui stimule mon esprit créatif.
                    </p>
                    <p className="leading-relaxed mt-2">
                        De plus, je consacre du temps à l'écriture, avec des livres dont les chapitres sont publiés hebdomadairement. Cette
                        activité m'offre une plateforme pour exprimer mes idées et partager des récits originaux avec un public fidèle.
                        L'écriture est pour moi une forme d'art et un moyen d'explorer de nouveaux horizons.
                    </p>
                </Section>
            </div>
        </section>
    );
};

export default App;
