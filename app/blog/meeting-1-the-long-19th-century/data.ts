export type Bullet = {
  text: string;
  sub?: string[];
};

export type Block =
  | { type: 'subheading'; text: string }
  | { type: 'bullets'; items: Bullet[] }
  | { type: 'ordered'; items: Bullet[] }
  | { type: 'paragraph'; text: string };

export const THEORY: Block[] = [
  {
    type: 'bullets',
    items: [
      {
        text: `Materialismo: só se conhece o objeto através do estudo concreto do objeto`,
      },
      {
        text: `Dialética: a realidade é uma totalidade única em constante movimento`,
        sub: [
          `No processo de mudança de A → B o objeto não é nem A e nem B e ao mesmo tempo é A e B. Ex: Uma pessoa vai de jovem à velho de forma contínua como um espectro. Um jovem é qualitativamente diferente de um velho, mas com 45 anos não é nem jovem nem velho e ao mesmo tempo tem características de ambos jovem e velho.`,
        ],
      },
      {
        text: `O modo de produção (a base ou estrutura econômica) condiciona — não determina nem causa mecanicamente — o desenvolvimento da vida social, política e intelectual (a "superestrutura")`,
        sub: [
          `A relação estrutura↔superestrutura é dialética: unidade contraditória, interação e interpenetração mútua, não uma causalidade mecânica de mão única (Peña, 1958/2015)`,
          `A superestrutura tem autonomia relativa: pode atrasar-se ou adiantar-se em relação à estrutura econômica — por exemplo, países onde o proletariado está politicamente maduro antes que a estrutura econômica esteja madura para o socialismo, e vice-versa (Trotsky, apud Peña, 1958/2015)`,
          `Tratar essa fórmula como uma chave que explica automaticamente qualquer fenômeno político ou ideológico é o tipo de dogmatismo que o próprio materialismo histórico deveria evitar (Machado, 2018)`,
        ],
      },
      {
        text: `Forças produtivas x relações de produção: sua contradição funciona como fio condutor para a investigação concreta, não como uma lei geral que já explica a história por si só.`,
        sub: [
          `Cada formação social articula forças produtivas e relações de produção à sua própria maneira — algumas permanecem sem contradições significativas por longos períodos; outras se tornam rapidamente contraditórias (Machado, 2018)`,
          `Reduzir isso a fórmulas prontas ("é dialético", "é estrutural") sem investigação concreta é o oposto do método de Marx, que dedicou décadas a investigar uma única formação social — o capitalismo — em O Capital, obra que sequer concluiu (Machado, 2018)`,
        ],
      },
      {
        text: `Tese da "dupla revolução": revolução política francesa + revolução industrial britânica = motor do século (Hobsbawm, 1962)`,
        sub: [
          `Era das Revoluções: 1789–1848`,
          `Era do Capital: 1848–1875`,
          `Era dos Impérios: 1875–1914`,
        ],
      },
    ],
  },
];

export const OVERVIEW_TRANSFORMATIONS: Bullet[] = [
  { text: `Criação de Estados-nação — Itália, Alemanha; consolidação de outros` },
  {
    text: `Revolução Industrial — Primeira (vapor/têxteis/ferrovias); Segunda (aço/eletricidade/química, a partir da década de 1870)`,
  },
  {
    text: `Abolição da escravidão e da servidão — de forma escalonada/desigual: Império Britânico (1833), colônias francesas (1794, revertida em 1802, reabolida em 1848), EUA (1865), servidão russa (1861), Brasil (1888, a última nas Américas)`,
  },
  {
    text: `Imperialismo / expansão colonial — Partilha da África, abertura forçada da China e do Japão, império formal na Índia — globalização do capitalismo numa estrutura centro-periferia`,
  },
  {
    text: `Formação do proletariado moderno e do trabalho organizado — a classe operária fabril como nova categoria social, sindicatos, Primeira e Segunda Internacionais, partidos socialistas de massa`,
  },
  {
    text: `Urbanização e transformação demográfica — migração rural-urbana em massa, explosão populacional (melhorias na saúde pública e na agricultura), emigração transoceânica em massa (Europa → Américas)`,
  },
  {
    text: `Revolução dos transportes/comunicações — ferrovias, navios a vapor, telégrafo — comprime tempo e espaço, integra um verdadeiro mercado mundial, viabiliza tanto o comércio quanto o controle colonial`,
  },
  {
    text: `Expansão e burocratização do Estado — exércitos de conscritos em massa, censos e estatísticas, sistemas de educação pública, administração civil profissional`,
  },
  {
    text: `Extensão parcial de direitos políticos — ampliação do sufrágio (masculino), constituições escritas — parcial/contestada, já que trabalhadores e mulheres permanecem excluídos em quase toda parte até o final do século ou depois`,
  },
  {
    text: `Ruptura intelectual/científica — darwinismo, positivismo, secularização mais ampla da autoridade, competindo com visões de mundo religiosas`,
  },
  {
    text: `Cristalização de ideologias políticas concorrentes — liberalismo, conservadorismo, socialismo, nacionalismo, anarquismo — como respostas programáticas rivais a tudo isso`,
  },
];

export const MAPS = {
  '1815': {
    src: '/images/europe_1815_congress_of_vienna.png',
    year: '1815',
    title: 'Europa, 1815 (acordo do Congresso de Viena)',
    caption: `A Itália e a Alemanha são mosaicos: a península italiana está dividida entre Piemonte-Sardenha, a Lombardo-Vêneto austríaca, os Estados Pontifícios, o Reino das Duas Sicílias e ducados menores; a Confederação Germânica (contornada em vermelho) reúne dezenas de Estados separados, dominados pelas rivais Áustria e Prússia.`,
  },
  '1871': {
    src: '/images/europe_1871_after_unification.png',
    year: '1871',
    title: 'Europa, 1871 (pós-unificação)',
    caption: `Itália e Alemanha agora aparecem como Estados únicos e consolidados onde antes havia o mosaico de 1815; a Áustria-Hungria permanece multiétnica, mas perdeu sua posição dominante em ambas as penínsulas.`,
  },
} as const;

export type RevolutionId = 'ingles' | 'americana' | 'francesa';

export const REVOLUTIONS: Record<
  RevolutionId,
  { label: string; period: string; blocks: Block[] }
> = {
  ingles: {
    label: 'Revolução Inglesa',
    period: '1640s–1688',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Guerra Civil (1642–51) → execução de Carlos I (1649) → Commonwealth/Cromwell → Restauração (1660) → Revolução Gloriosa (1688)`,
          },
          {
            text: `Duas ondas: as reformas de 1649–60 (república, abolição da Câmara dos Lordes, radicalismo religioso) são em sua maioria revertidas na Restauração; as mudanças mais restritas abaixo sobrevivem — são elas que importam estruturalmente`,
          },
        ],
      },
      { type: 'subheading', text: 'O fim da posse feudal da terra' },
      {
        type: 'bullets',
        items: [
          {
            text: `Tenures Abolition Act (1660): abole a posse por serviço de cavalaria, a Court of Wards (lucro da coroa com a administração de heranças de menores) e a purveyance (compra compulsória abaixo do mercado pela coroa) → a terra se torna socagem livre/comum — propriedade privada plenamente alienável`,
            sub: [
              `Beneficia a pequena e a alta nobreza fundiária; a terra se torna uma mercadoria líquida, semelhante a capital (Hill, 1972; Anderson, 1974)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'O fim do poder fiscal e judicial arbitrário da coroa' },
      {
        type: 'bullets',
        items: [
          {
            text: `Crise do Ship Money (1637–38, caso Hampden) → tributo abolido em 1641: acaba com a tributação da coroa sem consentimento parlamentar`,
          },
          {
            text: `Star Chamber abolida (1641): acaba com o poder da coroa de multar/prender/confiscar bens fora do direito costumeiro (common law)`,
          },
          {
            text: `Triennial Act (1641): obriga a convocação regular do Parlamento, encerra o "Governo Pessoal" de Carlos I (1629–40)`,
          },
          {
            text: `Bill of Rights (1689): proíbe suspender leis/tributar sem o Parlamento; proíbe um exército permanente em tempos de paz sem consentimento`,
            sub: [
              `Beneficia a classe parlamentar proprietária: direitos de propriedade e tributação previsíveis = pré-condição para investimento de longo prazo`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Viabilizando o capital mercantil' },
      {
        type: 'bullets',
        items: [
          {
            text: `Statute of Monopolies (1624): anula monopólios comerciais concedidos pela coroa (exceto patentes) → abre mercados além dos favoritos da corte`,
          },
          {
            text: `Navigation Acts (1651, 1660, 1663): exigem navios/tripulações inglesas para o comércio; mercadorias coloniais devem passar pela Inglaterra primeiro`,
            sub: [
              `Beneficia comerciantes/armadores ingleses às custas dos holandeses — mercantilismo como poder de Estado alinhado ao capital comercial`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Infraestrutura financeira' },
      {
        type: 'bullets',
        items: [
          {
            text: `Bank of England Act (1694): institui um banco privado, financia a dívida do governo com juros, privilégio de emissão de notas`,
            sub: [
              `Funda o permanente "Estado fiscal-militar" (Brewer); os financistas da City ganham; o Estado agora pode superar em gastos rivais fiscalmente mais fracos (Anderson, 1974)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Desapropriação em trabalho assalariado' },
      {
        type: 'bullets',
        items: [
          {
            text: `Cercamentos parlamentares (acelerando do final do século XVII ao XIX, milhares de Enclosure Acts individuais): convertem terras abertas/comunais em fazendas privadas cercadas; o Parlamento, já controlado pela mesma classe proprietária de terras, legisla o processo`,
            sub: [
              `Pequenos proprietários/posseiros perdem o acesso à terra comum de subsistência → são empurrados ao trabalho assalariado = a "acumulação primitiva" de Marx como fato legislado (O Capital, Livro 1, cap. 27)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Complemento religioso/ideológico' },
      {
        type: 'bullets',
        items: [
          { text: `Test Act (1673): exclui católicos/não anglicanos de cargos públicos` },
          {
            text: `Toleration Act (1689): concede liberdade de culto a dissidentes protestantes, sem plenos direitos civis`,
            sub: [
              `Estabiliza a coalizão protestante proprietária; a tese weberiana da ética protestante do trabalho como argumento complementar, não material (Weber, 1905)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Agentes' },
      {
        type: 'bullets',
        items: [
          {
            text: `Anos 1640–50: pequena nobreza parlamentar, elite mercantil/financeira de Londres (contra os monopólios da coroa), clero e laicato puritanos, New Model Army`,
            sub: [
              `Conflito interno: Levellers (Debates de Putney, 1647 — sufrágio masculino universal, igualdade jurídica) e Diggers (comunismo agrário) são suprimidos por Cromwell/os Grandees → mostra que a liderança realocou a soberania da coroa para o Parlamento proprietário, sem abolir a hierarquia`,
            ],
          },
          {
            text: `1688: coalizão de elite mais restrita — aristocratas whigs/tories e financistas da City convidam Guilherme de Orange; instituições comerciais-capitalistas holandesas (dívida pública financiada, oligarquia mercantil) são importadas com ele; desta vez, sem os Levellers`,
          },
        ],
      },
      { type: 'subheading', text: 'Interesses em jogo' },
      {
        type: 'bullets',
        items: [
          {
            text: `Nobreza fundiária/proprietários: segurança da propriedade, liberdade em relação à tributação arbitrária/exação feudal`,
          },
          {
            text: `Capital mercantil: fim dos monopólios da coroa, direito comercial previsível, rotas comerciais protegidas pelo Estado (embora monopolistas licenciados como a Companhia das Índias Orientais quisessem manter seu próprio monopólio)`,
          },
          {
            text: `Financistas (a partir da década de 1690): crédito público confiável via supervisão tributária parlamentar`,
          },
          {
            text: `Interesses puritanos/dissidentes: liberdade em relação à hierarquia anglicana; afinidade eletiva com a ética capitalista de acumulação (Weber, 1905)`,
          },
          {
            text: `Franja radical (Levellers/Diggers): queriam estender a revolução ainda mais (igualdade política, terra comum) — derrotados pela própria coalizão revolucionária proprietária, não pelos realistas → evidência-chave para o argumento do caráter de classe`,
          },
        ],
      },
      { type: 'subheading', text: 'Cadeia de adaptação ao capitalismo' },
      {
        type: 'ordered',
        items: [
          { text: `Abolição das Tenures (1660) → a terra se torna mercadoria livremente alienável` },
          {
            text: `Fim das cortes de prerrogativa + controle parlamentar da tributação (1641, 1689) → previsibilidade jurídica para o investimento`,
          },
          {
            text: `Parlamento controlado pela nobreza aprova leis de cercamento → desapropriação → trabalho assalariado (acumulação primitiva)`,
          },
          { text: `Navigation Acts + poder naval → protege/expande os mercados do capital mercantil` },
          {
            text: `Bank of England + dívida nacional financiada (1694) → infraestrutura de crédito que financia as guerras do século XVIII e, por fim, o investimento industrial`,
          },
        ],
      },
      {
        type: 'paragraph',
        text: `Elo com o futuro: essa sequência — terra mercantilizada, propriedade/crédito seguros, uma força de trabalho assalariada desapropriada, mercados mercantis protegidos e crédito público apto a financiar guerra e investimento — é a base de pré-condições sobre a qual o capital, mais tarde, se apoiará para industrializar.`,
      },
    ],
  },
  americana: {
    label: 'Revolução Americana',
    period: '1765–1783',
    blocks: [
      {
        type: 'subheading',
        text: '1. Fim da restrição mercantilista britânica ao comércio e à moeda coloniais',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `As Navigation Acts deixam de vincular os novos Estados — os comerciantes podem negociar diretamente com qualquer nação, não apenas através da Inglaterra`,
            sub: [
              `Beneficia comerciantes coloniais antes confinados ao comércio exclusivo com a Inglaterra (muitos, como Hancock, já contornavam isso via contrabando)`,
            ],
          },
          {
            text: `Fim da restrição do Currency Act (1764) — Estados/Congresso podem emitir papel-moeda independente das espécies controladas por Londres`,
            sub: [`Beneficia comerciantes e devedores que precisam de liquidez independente`],
          },
          {
            text: `As tarifas do Sugar Act (1764) e do Townshend Act (1767) deixam de valer`,
            sub: [`Beneficia comerciantes da Nova Inglaterra, destiladores de rum, importadores`],
          },
        ],
      },
      { type: 'subheading', text: '2. Transferência de propriedade lealista para a elite patriota' },
      {
        type: 'bullets',
        items: [
          {
            text: `Confiscation Acts estaduais (décadas de 1770–80) confiscam e revendem propriedades de lealistas fugidos/exilados`,
            sub: [
              `Beneficia elites patriotas e especuladores que compram terras confiscadas a baixo custo — uma transferência de capital direta e única`,
            ],
          },
        ],
      },
      {
        type: 'subheading',
        text: '3. Abertura da fronteira ocidental por meio da desapropriação indígena',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `A Proclamation Line de 1763 se torna nula — não há mais teto britânico ao avanço para o oeste`,
            sub: [
              `Beneficia especuladores de terras (as próprias reivindicações da Ohio Company de Washington haviam sido anuladas por essa linha)`,
            ],
          },
          {
            text: `Northwest Ordinance (1787): organiza antigas terras indígenas ao norte do rio Ohio para colonização/formação de Estados`,
            sub: [`Beneficia colonos e especuladores de terras; desapropria nações indígenas`],
          },
        ],
      },
      {
        type: 'subheading',
        text: '4. Construção de um mercado nacional e de um Estado federal protetor dos credores',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `Rebelião de Shays (1786–87): levante de veteranos-fazendeiros endividados por alívio de dívidas, suprimido por milícia financiada por comerciantes → desencadeia a Convenção Constitucional`,
          },
          {
            text: `Constituição dos EUA (1787–89):`,
            sub: [
              `Contracts Clause (Art. I, Seç. 10): proíbe leis estaduais de alívio de devedores → beneficia credores/financistas, fecha o caminho para remédios ao estilo de Shays`,
              `Commerce Clause (Art. I, Seç. 8): poder federal sobre o comércio interestadual/externo → beneficia comerciantes, cria um único mercado nacional a partir de treze`,
              `Full Faith and Credit Clause: dívidas exequíveis entre Estados → beneficia credores/comerciantes interestaduais`,
              `Poder federal de tributar + poder de formar um exército/suprimir insurreições → beneficia a classe proprietária em geral`,
            ],
          },
        ],
      },
      { type: 'subheading', text: '5. Infraestrutura financeira nacional' },
      {
        type: 'bullets',
        items: [
          {
            text: `Programa financeiro de Hamilton (1790–91): assunção federal das dívidas de guerra estaduais, Banco Nacional dos Estados Unidos, dívida pública financiada — inspirado no Bank of England (1694)`,
            sub: [
              `Beneficia detentores de títulos/especuladores que compraram títulos de guerra desvalorizados a baixo preço, agora pagos pelo valor de face; financistas em geral`,
            ],
          },
        ],
      },
      { type: 'subheading', text: '6. Entrincheiramento constitucional da escravidão' },
      {
        type: 'bullets',
        items: [
          {
            text: `Compromisso dos Três Quintos (Art. I, Seç. 2): conta 3/5 da população escravizada para fins de representação, sem direitos → beneficia senhores de escravos do Sul, inflando seu poder no Congresso`,
          },
          {
            text: `Slave Trade Clause (Art. I, Seç. 9): proíbe o Congresso de banir o tráfico internacional de escravos até 1808 → beneficia importadores de escravos/donos de plantação`,
          },
          {
            text: `Fugitive Slave Clause (Art. IV, Seç. 2): exige a devolução de pessoas escravizadas fugidas entre Estados → beneficia senhores de escravos`,
          },
        ],
      },
      {
        type: 'paragraph',
        text: `Elo com o futuro: uma ordem liberal-constitucional para a propriedade/o comércio coexistindo com um modo de produção escravista — contradição que só a Guerra Civil forçará a se abrir, oitenta anos depois.`,
      },
      { type: 'subheading', text: 'Agentes' },
      {
        type: 'bullets',
        items: [
          {
            text: `Comerciantes (Boston, Nova York, Filadélfia) — atingidos pelos Navigation/Sugar/Stamp/Tea Acts`,
          },
          {
            text: `Plantadores (esp. Virgínia) — Washington, Jefferson: especuladores de terras, frequentemente endividados com credores mercantis britânicos`,
          },
          { text: `Advogados/classe profissional — Jefferson, Adams: fornecem o caso ideológico/jurídico` },
          {
            text: `Artesãos/multidões urbanas — Filhos da Liberdade, ação direta (Boston Tea Party) — elemento radical estruturalmente semelhante, em seu papel, aos Levellers ingleses`,
          },
          { text: `Lealistas — perdem propriedades via confisco` },
          {
            text: `Pessoas escravizadas — muitas ficaram do lado britânico (Proclamação de Dunmore, 1775, ofereceu liberdade a quem se juntasse às forças britânicas)`,
          },
          {
            text: `Nações indígenas — em sua maioria aliadas aos britânicos, antecipando corretamente uma desapropriação mais rápida sob um EUA independente`,
          },
          {
            text: `Fazendeiros endividados (pós-guerra) — Rebelião de Shays: patriotas durante a guerra, adversários da elite patriota depois que ela vence`,
          },
        ],
      },
      { type: 'subheading', text: 'Interesses em jogo' },
      {
        type: 'bullets',
        items: [
          {
            text: `Comerciantes: fim da restrição mercantilista, livre comércio, liberdade em relação à tributação arbitrária`,
          },
          {
            text: `Plantadores: escapar da dívida com credores britânicos, proteger/expandir a escravidão, acessar terras a oeste`,
          },
          {
            text: `Credores/financistas (pós-guerra): um governo central capaz de fazer cumprir contratos e suprimir revoltas de devedores`,
          },
          {
            text: `Fazendeiros endividados: queriam papel-moeda/alívio de dívidas — perderam decisivamente no acordo constitucional`,
          },
          {
            text: `Pessoas escravizadas e nações indígenas: interesses derrotados pelo acordo em ambos os casos`,
          },
        ],
      },
    ],
  },
  francesa: {
    label: 'Revolução Francesa',
    period: '1789',
    blocks: [
      {
        type: 'subheading',
        text: '1. Abolição do privilégio feudal — os Decretos de Agosto (4–11 de agosto de 1789)',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `Abole os direitos senhoriais, o dízimo (dîme), a corveia (corvée) e a venalidade dos cargos`,
            sub: [
              `Beneficia os camponeses (alívio dos encargos feudais, embora a abolição plena sem indenização só venha em 1793) e a burguesia (carreiras não mais bloqueadas por cargos hereditários)`,
              `Prejudica a nobreza e o clero — suas principais fontes de renda e privilégios legais`,
            ],
          },
        ],
      },
      {
        type: 'subheading',
        text: '2. Igualdade jurídica e a propriedade como direito natural — Declaração dos Direitos do Homem e do Cidadão (26 de agosto de 1789)',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `Estabelece igualdade jurídica, presunção de inocência, liberdade de expressão/imprensa; declara a propriedade "inviolável e sagrada"`,
            sub: [
              `Beneficia principalmente a burguesia proprietária — igualdade jurídica e propriedade garantida são exatamente as necessidades institucionais do capital`,
              `Exclui as mulheres (a Declaração dos Direitos da Mulher e da Cidadã de Olympe de Gouges, de 1791, protesta diretamente contra isso) e os súditos coloniais`,
            ],
          },
        ],
      },
      {
        type: 'subheading',
        text: '3. Nacionalização e privatização das terras da Igreja — Constituição Civil do Clero (1790) e venda dos biens nationaux',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `Confisca a propriedade da Igreja, subordina o clero ao Estado, vende terras confiscadas (e, depois, de emigrados) como biens nationaux`,
            sub: [
              `Beneficia o tesouro estatal (financia a revolução/a guerra) e compradores burgueses/camponeses mais ricos, frequentemente comprados em grandes lotes por especuladores urbanos`,
              `Prejudica a Igreja e os camponeses mais pobres, em sua maioria excluídos das vendas pelo preço`,
            ],
          },
        ],
      },
      {
        type: 'subheading',
        text: '4. Liberando o mercado para o capital enquanto proíbe o trabalho organizado — Decreto Allarde e Lei Le Chapelier (1791)',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `O Decreto Allarde abole as corporações de ofício e os monopólios comerciais; a Lei Le Chapelier proíbe associações de trabalhadores, sindicatos e greves no mesmo ano`,
            sub: [
              `Beneficia os fabricantes/empregadores burgueses — livre entrada no mercado para o capital, sem contrapoder organizado do trabalho`,
              `Prejudica os artesãos (perdem as proteções das corporações) e os trabalhadores assalariados (proibidos de negociar coletivamente)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: '5. Construção de um único mercado nacional' },
      {
        type: 'bullets',
        items: [
          {
            text: `Elimina pedágios internos (péages) e alfândegas provinciais; unifica pesos e medidas (sistema métrico, 1795)`,
            sub: [
              `Beneficia comerciantes e industriais — um único mercado nacional em vez de um mosaico provincial`,
            ],
          },
        ],
      },
      { type: 'subheading', text: '6. Suprimindo a ala popular/sans-culotte — o Máximo e o Termidor' },
      {
        type: 'bullets',
        items: [
          {
            text: `Lei do Máximo (set. 1793): controle de preços, requisição de grãos, impulsionada pelos jacobinos sob pressão sans-culotte`,
            sub: [
              `Beneficia os pobres urbanos e os soldados dependentes de alimentos requisitados; prejudica comerciantes/agricultores/especuladores`,
            ],
          },
          {
            text: `Reação Termidoriana (jul. 1794): Robespierre é executado, a ditadura jacobina termina, o Máximo é abolido (dez. 1794)`,
            sub: [
              `Beneficia a burguesia proprietária — o liberalismo de mercado é restaurado`,
              `Prejudica os pobres urbanos — a inflação dos preços dos alimentos retorna, alimentando mais agitação (levante de Prairial, 1795, esmagado pelas mesmas autoridades)`,
              `Mesmo padrão estrutural dos Levellers/Diggers na Inglaterra e da Rebelião de Shays nos EUA: uma ala popular/radical empurra além do que a liderança burguesa quer, e é suprimida por essa mesma liderança`,
            ],
          },
        ],
      },
      {
        type: 'subheading',
        text: '7. Formalizando o poder político baseado na propriedade — Constituição do Diretório (Ano III, 1795)',
      },
      {
        type: 'bullets',
        items: [
          {
            text: `Introduz o sufrágio censitaire (qualificado pela propriedade) — só proprietários que pagam impostos podem votar, só os mais ricos podem ocupar cargos`,
            sub: [
              `Beneficia a burguesia proprietária — o poder político agora está explicitamente atrelado à riqueza`,
            ],
          },
        ],
      },
      { type: 'subheading', text: '8. Codificando e exportando a nova ordem — o Código Napoleônico (1804)' },
      {
        type: 'bullets',
        items: [
          {
            text: `Codifica a igualdade jurídica, o direito civil laico, os direitos de contrato e propriedade em toda a França e, via conquista, em boa parte da Europa continental`,
          },
          {
            text: `Também entrincheira o direito de família patriarcal e, por um decreto separado de 1802, restaura a escravidão colonial, revertendo a abolição de 1794 da Convenção`,
            sub: [
              `Beneficia os proprietários burgueses em geral, os homens no direito de família e os plantadores coloniais (escravidão restaurada)`,
              `Prejudica as mulheres (juridicamente subordinadas no casamento) e as pessoas escravizadas — a liberdade conquistada em 1794 é revertida em 1802, impulsionando diretamente a luta do Haiti pela independência plena (alcançada em 1804)`,
            ],
          },
        ],
      },
      { type: 'subheading', text: 'Agentes' },
      {
        type: 'bullets',
        items: [
          {
            text: `Burguesia (advogados, comerciantes, financistas, funcionários) — Sieyès, Mirabeau, depois os girondinos (moderados, ligados ao comércio) contra os montanheses/jacobinos (radicais, aliados taticamente aos sans-culottes)`,
          },
          {
            text: `Campesinato — o grupo mais numeroso; o Grande Medo (verão de 1789) força diretamente os Decretos de Agosto`,
          },
          {
            text: `Sans-culottes urbanos (artesãos, lojistas, trabalhadores assalariados) — impulsionam as journées insurrecionais (Bastilha, Marcha das Mulheres a Versalhes, derrubada da monarquia em 1792), empurrando a revolução à esquerda de sua liderança burguesa`,
          },
          { text: `Nobreza e clero — interesse reacionário; muitos emigram e organizam exércitos contrarrevolucionários` },
          {
            text: `Mulheres — politicamente ativas (Marcha das Mulheres, Sociedade das Republicanas Revolucionárias) mas com a cidadania negada; de Gouges é executada em 1793`,
          },
          {
            text: `Pessoas escravizadas nas colônias — a Revolução Haitiana como a extensão radical da própria linguagem universalista da metrópole`,
          },
        ],
      },
      { type: 'subheading', text: 'Interesses em jogo' },
      {
        type: 'bullets',
        items: [
          {
            text: `Burguesia: igualdade jurídica, propriedade segura, livre entrada no mercado, poder político proporcional à riqueza`,
          },
          {
            text: `Campesinato: fim dos encargos senhoriais/dízimos, propriedade da terra — apenas parcialmente alcançado, já que os camponeses mais pobres em sua maioria não podiam pagar pelos biens nationaux`,
          },
          {
            text: `Sans-culottes urbanos: controle de preços, segurança alimentar, ampla inclusão política — em grande parte derrotados pelo Termidor`,
          },
          { text: `Nobreza/clero: defesa do privilégio feudal, restauração da monarquia` },
          {
            text: `Mulheres e súditos coloniais escravizados: igualdade jurídica/política e liberdade — ambas prometidas pela linguagem da Declaração, ambas negadas ou revertidas na prática`,
          },
        ],
      },
      { type: 'subheading', text: 'Cadeia de adaptação ao capitalismo' },
      {
        type: 'ordered',
        items: [
          {
            text: `Decretos de Agosto (1789) → destroem os encargos/privilégios feudais → terra e trabalho libertos da obrigação senhorial`,
          },
          {
            text: `Declaração dos Direitos do Homem → igualdade jurídica + propriedade como direito sagrado → fundação institucional para o direito contratual/de propriedade capitalista`,
          },
          {
            text: `Constituição Civil do Clero + venda dos biens nationaux → transfere terras a compradores burgueses/camponeses, expande o mercado de terras`,
          },
          {
            text: `Decreto Allarde + Lei Le Chapelier (1791) → abre a entrada no mercado para o capital, proíbe o trabalho organizado`,
          },
          { text: `Abolição de pedágios/alfândegas internos + unificação de medidas → um único mercado nacional` },
          {
            text: `Reação Termidoriana (1794) → abole o controle de preços → restaura o liberalismo de mercado contra a restrição econômica popular`,
          },
          {
            text: `Sufrágio censitaire do Diretório (1795) → poder político formalmente atrelado à propriedade`,
          },
          {
            text: `Código Napoleônico (1804) → codifica e exporta essa ordem jurídica burguesa pela conquista — ao mesmo tempo em que entrincheira o direito de família patriarcal e restaura a escravidão colonial`,
          },
        ],
      },
      { type: 'subheading', text: 'Revolução Haitiana (1791–1804)' },
      {
        type: 'bullets',
        items: [
          {
            text: `Pessoas escravizadas levam "liberdade, igualdade" ao pé da letra → derrotam França/Grã-Bretanha/Espanha → abolem a escravidão → fundam o Haiti (James, 1938)`,
            sub: [
              `Reviravolta dialética: a própria ideologia da revolução excede os interesses burgueses → Napoleão restaura a escravidão em outros lugares (1802)`,
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        text: `Efeito líquido até 1800: o modelo jurídico capitalista (propriedade, contrato, igualdade formal) existe e se espalha — relações feudais/escravistas persistem em outros lugares (Europa continental, Sul dos EUA) → tarefa inacabada para o século XIX.`,
      },
    ],
  },
};

export const AGES: { id: string; heading: string; blocks: Block[] }[] = [
  {
    id: 'revolucao',
    heading: 'Era das Revoluções (1789–1848)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Napoleão exporta o direito burguês (Código Napoleônico) pela conquista`,
            sub: [`Contradição: um império autoritário difundindo relações liberais de propriedade`],
          },
          {
            text: `Congresso de Viena (1814–15): contrarrevolução política, não reverte totalmente a transformação social`,
            sub: [
              `→ descompasso: uma superestrutura conservadora sobre relações sociais parcialmente modernizadas`,
              `→ motor de crises revolucionárias recorrentes (Hobsbawm, 1962)`,
            ],
          },
          {
            text: `1830 (França): a "monarquia burguesa" de Luís Filipe substitui o reacionário Carlos X`,
            sub: [`Deslocamento em direção à alta burguesia — ainda não é democracia`],
          },
          {
            text: `1848 — momento decisivo:`,
            sub: [
              `Revoluções na França, nos Estados alemães, na Áustria, na Itália, na Hungria`,
              `Marx (Manifesto Comunista, fev. 1848; As Lutas de Classes na França; O Dezoito de Brumário): a burguesia precisa do apoio operário contra a aristocracia → recua assim que os trabalhadores levantam demandas independentes`,
              `Jornadas de Junho (Paris): a Guarda Nacional, controlada pela burguesia, esmaga o levante operário`,
              `Até 1849: as revoluções são derrotadas politicamente`,
              `Significado real: o proletariado emerge como ator histórico independente, oposto à burguesia → estrutura o resto do século`,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'capital',
    heading: 'Era do Capital (1848–1875)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `A burguesia se desloca: revolução política → hegemonia econômica`,
            sub: [
              `Ferrovias, bancos de investimento, livre-comércio (Tratado Cobden-Chevalier, 1860) (Hobsbawm, 1975)`,
            ],
          },
          {
            text: `Construção nacional = unificação de mercado:`,
            sub: [
              `Alemanha: a união aduaneira do Zollverein (1834) integra os mercados décadas antes da unificação política (1871)`,
              `Bismarck: elites conservadoras cooptam o nacionalismo por cima → antecipam-se a uma revolução liberal/operária independente (≈ "revolução passiva" de Gramsci)`,
            ],
          },
          {
            text: `A Guerra Civil Americana como "Segunda Revolução Americana":`,
            sub: [
              `Abole o modo de produção escravista`,
              `Estabelece um mercado nacional único, o trabalho assalariado livre como relação dominante`,
              `A Reconstrução é derrubada: o Compromisso de 1877 → o capital do Norte troca os direitos políticos dos negros pela cooperação dos plantadores do Sul`,
              `Igualdade formal ≠ igualdade substantiva (Du Bois, 1935; Foner, 1988)`,
            ],
          },
          {
            text: `Padrão: Estados-nação construídos para mercados internos uniformes; o nacionalismo como ideologia mobilizadora do projeto econômico`,
            sub: [`Ressalva: historiadores liberais-nacionalistas enfatizam a força independente do próprio nacionalismo`],
          },
        ],
      },
    ],
  },
  {
    id: 'imperio',
    heading: 'Era dos Impérios (1875–1900 → 1914)',
    blocks: [
      {
        type: 'bullets',
        items: [
          { text: `Grande Depressão (1873–96) → aperta as taxas de lucro` },
          {
            text: `O capital se concentra: cartéis, trustes, fusão banco-indústria = "capital financeiro" (Hilferding)`,
            sub: [`→ Lenin (1917): imperialismo = exportação de capital excedente quando os mercados internos saturam`],
          },
          {
            text: `Partilha da África / abertura forçada da Ásia:`,
            sub: [
              `Movida pela necessidade de mercados, matérias-primas, saídas para o capital — não apenas por prestígio`,
              `= nova fronteira para a "acumulação primitiva" (Marx, 1867; Rodney, 1972, sobre a África)`,
            ],
          },
          {
            text: `O desenvolvimento desigual e combinado (Trótski) explica a trajetória Meiji do Japão:`,
            sub: [`Combina resquícios feudais + tecnologia industrial/militar importada → "revolução pelo alto" → evita a colonização`],
          },
          {
            text: `O proletariado se organiza globalmente em resposta:`,
            sub: [
              `Segunda Internacional (1889)`,
              `Partidos socialistas de massa (SPD alemão), movimento trabalhista britânico, sindicalismo`,
              `A globalização do capital organiza sua própria oposição (Marx & Engels, 1848)`,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'fin-de-siecle',
    heading: 'Fin de Siècle → 1914',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Forças produtivas cada vez mais internacionais: mercado mundial, finanças transnacionais, cadeias globais de mercadorias (Beckert, 2014, sobre o algodão)`,
          },
          { text: `A forma política ainda é o Estado-nação rival` },
          {
            text: `Desenvolvimento desigual (Alemanha, EUA e Japão em ascensão; Grã-Bretanha em declínio relativo) → rivalidade interimperialista`,
            sub: [
              `Competição para redividir o mundo colonial`,
              `Corrida armamentista, alianças rígidas (Tríplice Aliança contra Tríplice Entente)`,
            ],
          },
          {
            text: `Lenin (1917)/Bukharin: a Primeira Guerra Mundial = capitais nacionais rivais lutando para redividir o mercado mundial pela força`,
          },
          {
            text: `Ressalva: erros de cálculo, compromissos de aliança, as decisões da Crise de Julho de 1914 também importaram de forma independente`,
          },
        ],
      },
    ],
  },
  {
    id: 'sintese',
    heading: 'Síntese',
    blocks: [
      {
        type: 'bullets',
        items: [
          { text: `O longo século XIX = o capitalismo se tornando o modo de produção dominante no mundo` },
          {
            text: `Sequência:`,
            sub: [
              `Revoluções burguesas (inglesa, americana, francesa) → estabelecem relações de propriedade capitalistas + a forma estatal`,
              `Era das Revoluções / Era do Capital → consolidam o capitalismo industrial, completam a unificação do mercado nacional (incl. a abolição desigual da escravidão)`,
              `Era dos Impérios → estendem o capitalismo ao seu estágio de monopólio/capital financeiro/imperialismo, globalmente`,
            ],
          },
          {
            text: `Cada etapa resolve uma contradição antiga e gera uma nova:`,
            sub: [`Aristocracia vs. burguesia → burguesia vs. proletariado → capitais nacionais rivais`],
          },
          {
            text: `O mecanismo dialético impulsiona a história → crises do século XX: Primeira Guerra Mundial, Revolução Russa (1917)`,
          },
        ],
      },
    ],
  },
];

export const MARX_LIFE: { id: string; heading: string; blocks: Block[] }[] = [
  {
    id: 'formacao',
    heading: 'Formação — Jovem Hegeliano, Jornalista (1818–1843)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Nasce em 1818, em Trier, na Prússia (Renânia — mais liberal e comercial do que o núcleo prussiano)`,
          },
          {
            text: `Universidade de Berlim → junta-se aos jovens hegelianos — usa a dialética de Hegel para criticar a religião/o Estado, não para defendê-los`,
          },
          {
            text: `Editor da Rheinische Zeitung (1842–43)`,
            sub: [
              `Cobre o debate renano sobre a Lei do Furto de Madeira — camponeses que recolhiam lenha caída passam a ser criminalizados à medida que os direitos de propriedade dos latifundiários se apertam`,
              `→ primeiro choque direto entre o direito abstrato e o interesse material de classe → empurra Marx em direção à economia política`,
              `O jornal é fechado pela censura prussiana em 1843`,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'paris',
    heading: 'Paris — A Ruptura Filosófica (1843–1845)',
    blocks: [
      {
        type: 'bullets',
        items: [
          { text: `Muda-se para Paris → contato direto com os movimentos socialistas/operários franceses` },
          {
            text: `Introdução à Crítica da Filosofia do Direito de Hegel (1844): identifica o proletariado como a classe revolucionária da história — "uma classe com correntes radicais"`,
          },
          { text: `Conhece Engels (1844) → começa uma colaboração para toda a vida` },
          { text: `Expulso da França (1845) → muda-se para Bruxelas` },
        ],
      },
    ],
  },
  {
    id: 'bruxelas',
    heading: 'Bruxelas — A Formalização do Materialismo Histórico (1845–1848)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Teses sobre Feuerbach (1845): rompe com o materialismo passivo → "os filósofos apenas interpretaram o mundo de diferentes maneiras; o que importa é transformá-lo"`,
          },
          {
            text: `A Ideologia Alemã (1845–46, com Engels): formaliza o materialismo histórico — o ser social determina a consciência, não o contrário`,
          },
          { text: `Adere e reorganiza a Liga dos Comunistas (1847)` },
          {
            text: `Manifesto Comunista (escrito em 1847, publicado em fev. 1848)`,
            sub: [
              `Encomendado como programa da Liga`,
              `Publicado no mesmo mês em que as revoluções eclodem pela Europa`,
              `Tese central: a história é luta de classes; a burguesia cria seus próprios "coveiros" (o proletariado)`,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'revolucao-derrota',
    heading: 'Revolução e Derrota (1848–1850)',
    blocks: [
      {
        type: 'bullets',
        items: [
          { text: `Edita a Neue Rheinische Zeitung (1848–49) — apoia a revolução alemã` },
          {
            text: `Expulso da Prússia, depois da França novamente → estabelece-se em Londres, 1849 (exílio permanente)`,
          },
          {
            text: `As Lutas de Classes na França (1850): explica o fracasso de 1848 — a burguesia teme o proletariado (Jornadas de Junho) → alia-se à reação em vez disso`,
          },
          {
            text: `A Liga dos Comunistas se divide (1850): Marx/Engels (esperar por condições maduras) contra Willich–Schapper (insurreição imediata) → a Liga desaba em 1852`,
          },
        ],
      },
    ],
  },
  {
    id: 'exilio-londres',
    heading: 'Exílio em Londres — Economia Política (1850–1867)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `O Dezoito de Brumário de Luís Bonaparte (1852): analisa o golpe de Luís Napoleão → o conceito de bonapartismo (o Estado equilibrando facções de classe rivais, ganhando autonomia relativa em relação a todas elas)`,
          },
          {
            text: `Contribuição à Crítica da Economia Política, Prefácio (1859): a mais clara formulação curta da relação base/superestrutura — o modo de produção molda a vida social, política e intelectual`,
          },
          {
            text: `O Capital, Livro 1 (1867): a teoria da mais-valia, a forma-mercadoria, a "assim chamada acumulação primitiva" (cercamentos, pilhagem colonial como origem violenta do capitalismo)`,
            sub: [`O único volume que Marx conclui pessoalmente; os Livros 2 e 3 são publicados postumamente por Engels`],
          },
        ],
      },
    ],
  },
  {
    id: 'internacional',
    heading: 'Organização e Conflito Internacionais (1864–1876)',
    blocks: [
      {
        type: 'bullets',
        items: [
          { text: `Fundação da Primeira Internacional, em Londres, em 1864 — Marx escreve o Discurso Inaugural` },
          {
            text: `Conflito interno (uma coalizão, não um partido marxista):`,
            sub: [
              `Proudhonianos: resistem a greves/à ação política, preferem o crédito cooperativo`,
              `Lassalleanos: preferem cooperativas apoiadas pelo Estado, sufrágio universal em vez de revolução`,
              `Bakunin/anarquistas: querem a abolição imediata de toda autoridade estatal; Marx defende um Estado operário transitório`,
            ],
          },
          {
            text: `Comuna de Paris, 1871: os trabalhadores governam Paris brevemente → é esmagada ("Semana Sangrenta")`,
            sub: [
              `A Guerra Civil na França (1871): Marx saúda a Comuna como o primeiro vislumbre do autogoverno da classe trabalhadora`,
            ],
          },
          { text: `Congresso de Haia (1872): Bakunin é expulso → a Internacional é dissolvida em 1876` },
        ],
      },
    ],
  },
  {
    id: 'ultimos-anos',
    heading: 'Últimos Anos (1875–1883)',
    blocks: [
      {
        type: 'bullets',
        items: [
          {
            text: `Crítica ao Programa de Gotha (1875, privado; publicado em 1891 por Engels)`,
            sub: [
              `Ataca a "lei de bronze dos salários" de Lassalle e a dependência de cooperativas apoiadas pelo Estado`,
              `Distingue a fase inferior do comunismo (recompensa pelo trabalho) da fase superior ("a cada um segundo suas necessidades")`,
              `Afirma uma "ditadura revolucionária do proletariado" como a transição necessária`,
            ],
          },
          {
            text: `Carta a Vera Zasulich (1881): admite que a comuna camponesa russa poderia pular o desenvolvimento capitalista pleno, combinada à revolução ocidental — qualifica qualquer leitura rígida de "as mesmas etapas para todos"`,
          },
          { text: `Marx morre em 14 de março de 1883, em Londres — O Capital fica inacabado` },
        ],
      },
    ],
  },
];

export const REFERENCES: string[] = [
  'Anderson, Perry. Lineages of the Absolutist State. London: NLB, 1974.',
  'Beckert, Sven. Empire of Cotton: A Global History. New York: Knopf, 2014.',
  'Brenner, Robert. "Agrarian Class Structure and Economic Development in Pre-Industrial Europe." Past & Present, no. 70 (1976): 30–75.',
  'Du Bois, W. E. B. Black Reconstruction in America, 1860–1880. New York: Harcourt, Brace and Company, 1935.',
  "Foner, Eric. Reconstruction: America's Unfinished Revolution, 1863–1877. New York: Harper & Row, 1988.",
  'Hill, Christopher. The World Turned Upside Down: Radical Ideas During the English Revolution. London: Temple Smith, 1972.',
  'Hobsbawm, Eric. The Age of Revolution: Europe 1789–1848. London: Weidenfeld & Nicolson, 1962.',
  'Hobsbawm, Eric. The Age of Capital: 1848–1875. London: Weidenfeld & Nicolson, 1975.',
  'Hobsbawm, Eric. The Age of Empire: 1875–1914. London: Weidenfeld & Nicolson, 1987.',
  "James, C. L. R. The Black Jacobins: Toussaint L'Ouverture and the San Domingo Revolution. London: Secker and Warburg, 1938.",
  'Lenin, Vladimir I. Imperialism, the Highest Stage of Capitalism. Petrograd, 1917.',
  'Machado, Gustavo. Marx e a História. 2018.',
  'Marx, Karl. The Eighteenth Brumaire of Louis Bonaparte. 1852.',
  'Marx, Karl. Capital: A Critique of Political Economy, Vol. 1. Hamburg: Otto Meissner, 1867.',
  'Marx, Karl, and Friedrich Engels. The Communist Manifesto. London, 1848.',
  'Peña, Milcíades. O que é Marxismo. 1958/2015.',
  "Rodney, Walter. How Europe Underdeveloped Africa. London: Bogle-L'Ouverture Publications, 1972.",
  'Wallerstein, Immanuel. The Modern World-System, Vols. 1–3. New York: Academic Press, 1974–1989.',
  'Wood, Ellen Meiksins. The Origin of Capitalism: A Longer View. London: Verso, 2002.',
];

export type TimelineTab = RevolutionId | 'marx' | 'eras';

export const TIMELINE_START = 1630;
export const TIMELINE_END = 1920;

export const ERAS = [
  { id: 'precondicoes', label: 'Pré-condições', start: 1630, end: 1789, colorVar: '--era-pre' },
  { id: 'revolucao', label: 'Era das Revoluções', start: 1789, end: 1848, colorVar: '--era-rev' },
  { id: 'capital', label: 'Era do Capital', start: 1848, end: 1875, colorVar: '--era-cap' },
  { id: 'imperio', label: 'Era dos Impérios', start: 1875, end: 1914, colorVar: '--era-imp' },
];

export const TIMELINE_EVENTS: { year: number; label: string; tab: TimelineTab }[] = [
  // Revolução Inglesa
  { year: 1624, label: 'Statute of Monopolies', tab: 'ingles' },
  { year: 1637, label: 'Crise do Ship Money (caso Hampden)', tab: 'ingles' },
  { year: 1641, label: 'Star Chamber abolida / Triennial Act', tab: 'ingles' },
  { year: 1642, label: 'Guerra Civil Inglesa', tab: 'ingles' },
  { year: 1647, label: 'Debates de Putney (Levellers)', tab: 'ingles' },
  { year: 1649, label: 'Execução de Carlos I', tab: 'ingles' },
  { year: 1651, label: 'Primeiro Navigation Act', tab: 'ingles' },
  { year: 1660, label: 'Restauração / Tenures Abolition Act', tab: 'ingles' },
  { year: 1673, label: 'Test Act', tab: 'ingles' },
  { year: 1688, label: 'Revolução Gloriosa', tab: 'ingles' },
  { year: 1689, label: 'Bill of Rights / Toleration Act', tab: 'ingles' },
  { year: 1694, label: 'Bank of England Act', tab: 'ingles' },
  // Revolução Americana
  { year: 1763, label: 'Proclamation Line', tab: 'americana' },
  { year: 1764, label: 'Currency Act / Sugar Act', tab: 'americana' },
  { year: 1765, label: 'Início da crise colonial americana', tab: 'americana' },
  { year: 1767, label: 'Townshend Act', tab: 'americana' },
  { year: 1775, label: 'Proclamação de Dunmore', tab: 'americana' },
  { year: 1776, label: 'Independência dos EUA', tab: 'americana' },
  { year: 1786, label: 'Rebelião de Shays', tab: 'americana' },
  { year: 1787, label: 'Constituição dos EUA / Northwest Ordinance', tab: 'americana' },
  { year: 1790, label: 'Programa financeiro de Hamilton', tab: 'americana' },
  // Revolução Francesa
  { year: 1789, label: 'Revolução Francesa / Decretos de Agosto', tab: 'francesa' },
  { year: 1790, label: 'Constituição Civil do Clero', tab: 'francesa' },
  { year: 1791, label: 'Decreto Allarde / Lei Le Chapelier', tab: 'francesa' },
  { year: 1793, label: 'Lei do Máximo', tab: 'francesa' },
  { year: 1794, label: 'Reação Termidoriana', tab: 'francesa' },
  { year: 1795, label: 'Constituição do Diretório (sufrágio censitaire)', tab: 'francesa' },
  { year: 1804, label: 'Código Napoleônico / independência do Haiti', tab: 'francesa' },
  // Eras do Século XIX
  { year: 1814, label: 'Congresso de Viena', tab: 'eras' },
  { year: 1830, label: '"Monarquia burguesa" de Luís Filipe', tab: 'eras' },
  { year: 1833, label: 'Reino Unido abole a escravidão', tab: 'eras' },
  { year: 1834, label: 'Zollverein (união aduaneira alemã)', tab: 'eras' },
  { year: 1848, label: 'Manifesto Comunista / revoluções de 1848', tab: 'eras' },
  { year: 1860, label: 'Tratado Cobden–Chevalier', tab: 'eras' },
  { year: 1861, label: 'Abolição da servidão russa', tab: 'eras' },
  { year: 1865, label: 'Fim da Guerra Civil Americana', tab: 'eras' },
  { year: 1871, label: 'Unificação alemã e italiana', tab: 'eras' },
  { year: 1873, label: 'Início da Grande Depressão', tab: 'eras' },
  { year: 1877, label: 'Compromisso de 1877 (fim da Reconstrução)', tab: 'eras' },
  { year: 1888, label: 'Brasil abole a escravidão', tab: 'eras' },
  { year: 1889, label: 'Segunda Internacional', tab: 'eras' },
  { year: 1914, label: 'Início da Primeira Guerra Mundial', tab: 'eras' },
  { year: 1917, label: 'Revolução Russa', tab: 'eras' },
  // Vida de Marx
  { year: 1818, label: 'Nascimento de Marx', tab: 'marx' },
  { year: 1842, label: 'Editor da Rheinische Zeitung', tab: 'marx' },
  { year: 1843, label: 'Muda-se para Paris', tab: 'marx' },
  { year: 1844, label: 'Conhece Engels', tab: 'marx' },
  { year: 1845, label: 'Teses sobre Feuerbach / muda-se para Bruxelas', tab: 'marx' },
  { year: 1847, label: 'Adere à Liga dos Comunistas', tab: 'marx' },
  { year: 1849, label: 'Estabelece-se em Londres (exílio permanente)', tab: 'marx' },
  { year: 1850, label: 'As Lutas de Classes na França', tab: 'marx' },
  { year: 1852, label: 'O Dezoito de Brumário de Luís Bonaparte', tab: 'marx' },
  { year: 1859, label: 'Contribuição à Crítica da Economia Política', tab: 'marx' },
  { year: 1864, label: 'Fundação da Primeira Internacional', tab: 'marx' },
  { year: 1867, label: 'O Capital, Livro 1', tab: 'marx' },
  { year: 1871, label: 'Comuna de Paris', tab: 'marx' },
  { year: 1872, label: 'Congresso de Haia (Bakunin expulso)', tab: 'marx' },
  { year: 1875, label: 'Crítica ao Programa de Gotha', tab: 'marx' },
  { year: 1876, label: 'Dissolução da Primeira Internacional', tab: 'marx' },
  { year: 1881, label: 'Carta a Vera Zasulich', tab: 'marx' },
  { year: 1883, label: 'Morte de Marx', tab: 'marx' },
];
