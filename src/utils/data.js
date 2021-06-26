export const news = [
  {
    title:`Taki 2020: "Crepuscular" got 3rd place in the choir composition competition of the UNM`,
    body: `Juan Carlos' piece "Crepuscular", based on a text by Teofilo Méndez Ramos, got the 3rd place in the the choir composition competition runned by Universidad Nacional de Música del Perú. This year, it was focused on works for children, teens and teenagers choir.\nThe results can be found <here>[https://www.unm.edu.pe/noticias/resultados-del-concurso-de-creacion-de-obras-corales-taki-2020/]`,
    date: `10/27/20`,
    image: require('../assets/news/taki.jpg').default
  },
  {
    title: `Trumpetist Manuel Loli plays "Tres poemas de Alejandra Pizarnik" in his licenciate recital`,
    body: `Manuel Loli (Peru) got his Licenciate Degree with a varied repertoire which included an arrangement for trumpet of Juan Carlos' vocal piece at the historical venue of the Universidad Nacional de Musica del Peru. A review can be found <here>[https://apt.edu.pe/2-nuevos-trompetistas-titulados-entre-setiembre-y-octubre/]`,
    date: `10/30/19`,
    image: require(`../assets/news/loli.jpg`).default
  },
  {
    title: `Writing music based on children stories: Comusication`,
    body: `Juan Carlos will be participating in Comusication writing a piece based on kids' stories and will be premiered at Mannes on 22/6.\nUpdate: You can listen to the piece <here>[https://www.youtube.com/watch?v=uKaZq0igbg4]`,
    date: `06/10/2019`,
    image: require(`../assets/news/comusication.png`).default
  },
  {
    title: `Juan Carlos is one of the finalist at the Sorodha Piano Composition Competition in Belgium`,
    body: `"Dos Danzas" was one of the pieces selected to be played in the final round of the piano composition competition of the Société Royale d'Harmonie d'Anvers (Belgium). More at <Sorodha webpage>[http://sorodha.be/EN/contest.php]`,
    date: `02/03/2019`,
    image: require(`../assets/news/sorodha.jpg`).default
  },
  {
    title: `Two premieres at Mannes School of Music`,
    body: `Two new pieces were played at Ernst C. Stiefel Hall at Mannes School of Music.\n"Piano Trio N1" was premiered by Yeji Pyun, violin; Stacy Cho, Cello; Jieyu Xiao, Piano.\n"Dos Danzas" for piano, by Albert Newberry and Jieyu Xiao.`,
    date: `12/10/2018`,
    image: require(`../assets/news/trio.jpg`).default
  },
];

export const works = [
  { "title":"Escenas", "instrumentation":"flute solo", "year":2010, "duration":"5'", "genre":"solo" },
  { "title":"Tres Poemas de Alejandra Pizarnik", "instrumentation":"soprano and piano", "year":2011, "duration":"7'", "genre":"voice" },
  { "title":"Temas y Variaciones", "instrumentation":"flute, clarinet and bassoon", "year":2013, "duration":"6'", "genre":"chamber" },
  { "title":"Tres Poemas de Blanca Varela", "instrumentation":"mixed choir", "year":2013, "duration":"8'", "genre":"choir" },
  { "title":"String Quartet Nº1", "year":2014, "duration":"8'", "genre":"chamber" },
  { "title":"De Rebus Humanis", "instrumentation":"violin solo and small orchestra", "year":2015, "duration":"12'", "genre":"soloorch" },
  { "title":"Nuevas Escenas", "instrumentation":"full orchestra", "year":2017, "duration":"15'", "genre":"orch" },
  { "title":"Piano Trio Nº1", "instrumentation":"violin, cello and piano", "year":2018, "duration":"13'", "genre":"chamber" },
  { "title":"Dos Danzas", "instrumentation":"piano", "year":2018, "duration":"8'", "genre":"solo" },
  { "title":"Soliloquia inter Memorias", "instrumentation":"cello solo", "year":2019, "duration":"4'", "genre":"solo" },
  { "title":"Dos Crisoles", "instrumentation":"flute and string orchestra (string quintet)", "year":2019, "duration":"9'", "genre":"orch" },
  { "title":"Tres Danzas", "instrumentation":"orchestra (orchestration of Dos Danzas + 1)", "year":2019, "duration":"15'", "genre":"orch" },
  { "title":"Sonata", "instrumentation":"flute and piano", "year":2020, "duration":" ", "genre":"chamber" },
  { "title":"Ex Bosco, ad Arboretum", "instrumentation":"string orchestra", "year":2020, "duration":" ", "genre":"orch" },
  { "title":"Crepuscular", "instrumentation":"3 equal voices", "year":2020, "duration":"3", "genre":"choir" },
];

export const projects = [
  {
    label: 'Silva-000',
    content: `
## Music for comics: Collaboration with Silva-000
    
Comic artist [Silva-000](https://twitter.com/SlLVA_000) has been working on two contrasting titles. The collaboration explores the possibility of writing an original soundtrack for these stories, giving the reader one more layer of perception at the moment of reading the comic or imagining further about it. This work in progress will also feel as an EP album.

These titles and demos are:
`,
    embeded: [
      {
        title: 'Forbidden Clarity',
        titleLink: 'https://www.webtoons.com/en/challenge/forbidden-clarity-b/list?title_no=432041&webtoon-platform-redirect=true',
        image: require(`../assets/fc.png`).default,
        musicTitle: 'Piano Trio Nº1 I.',
        musicLink: 'https://soundcloud.com/jcadb/pianotrio11',
        media: <>
          <iframe className="soundcloud-player" title="Forbidden Clarity" width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/981208417&color=%23ad2222&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
        </>
      },
      {
        title: 'Spooky Girlfriend',
        titleLink: 'https://www.webtoons.com/en/challenge/spooky-girlfriend/list?title_no=170753',
        image: require(`../assets/spooky2.jpg`).default,
        musicTitle: '1. Sonidos de la casa',
        musicLink: 'https://soundcloud.com/jcadb/1-sonidos-de-la-casa/s-UNcXv',
        media: <>
          <iframe className="soundcloud-player" title="Spooky Girlfriend" width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/762376636%3Fsecret_token%3Ds-UNcXv&color=%23ae2424&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
        </>
      }
    ]
  }
];

const data = {
  news,
  works,
  projects
}

export default data;
