import type { ReactNode } from 'react';

export type Misconception = {
  quote: string;
  explanation: ReactNode;
};

export const MISCONCEPTIONS: Misconception[] = [
  {
    quote: '"A materialidade determina a consciência"',
    explanation: (
      <>
        Essa é uma falsa dicotomia: a consciência é um fenômeno material. A mente humana muda o
        mundo e o mundo muda a mente humana. Porém, não há autonomia ou liberdade absoluta, somos
        limitados pelo exterior: "Os homens fazem sua própria história, mas não a fazem como
        querem; não a fazem sob circunstâncias de sua escolha, e sim sob aquelas com que se
        defrontam diretamente, legadas e transmitidas pelo passado."
      </>
    ),
  },
  {
    quote: '"A economia determina todo o resto"',
    explanation: (
      <>
        Marx nota que todas as relações sociais são relações de reprodução da sociedade, a
        sociedade está constantemente reproduzindo as condições da sua própria existência, nós
        consumimos a comida e as ferramentas que foram produzidas no passado para produzir mais
        comida e ferramentas que serão consumidas no futuro. Aquelas relações sociais necessárias
        para a reprodução da sociedade ele chama de estruturais, aquelas que não poderiam ser
        diferentes, ex: trabalho assalariado, sistema de crédito, capital constante, juros, banco,
        etc. Todas as outras relações sociais que poderiam ser diferentes ele chama de
        superestruturais, ex: forma política, parlamentarismo, democracia, monarquia
        constitucional, forma jurídica, etc. Saber o que não pode ser diferente e o que pode ser
        diferente te permite entender onde pode ser feita sua atuação para mudar a sociedade. Ele
        não diz que a estrutura determina a superestrutura ou que ela é necessariamente mais
        relevante em um dado momento.
      </>
    ),
  },
  {
    quote:
      '"Primeiro vem o escravismo, depois o feudalismo, depois o capitalismo e depois o comunismo"',
    explanation: (
      <>
        Não existem leis gerais da história, a história poderia ser diferente do que foi, e essa
        ordem de modos de produção aconteceu na Europa, mas não aconteceu igual em outras regiões.
        Existem tendências, que podem ser quebradas a todo o momento, como a tendência à evolução
        da técnica e do conhecimento, ou seja, das forças produtivas, devido ao fato de que o
        homem é um ser histórico que, diferente de um joão-de-barro, por exemplo, que constrói a
        mesma casa em todas as gerações, é capaz de construir algo novo aprendendo com o passado.
        Mas perdas de conhecimento e regressões produtivas já aconteceram em diversos momentos da
        história, como a queda de Roma, a queima da Biblioteca de Alexandria, etc., etc.
      </>
    ),
  },
  {
    quote: '"A burguesia controla o mundo"',
    explanation: (
      <>
        A burguesia é a classe social dominante, mas isso não quer dizer que ela seja um monolito
        com uma opinião, um direcionamento; ela, na verdade, é formada por vários indivíduos e
        grupos em constante competição e disputando poder. Para Marx, o capitalismo não é um
        sistema controlado e planejado como outros na história já foram, mas, para ele, é um
        sistema caótico, semianárquico, sem planejamento algum, e no qual, inclusive, os seus
        indivíduos, mesmo aqueles burgueses, não têm autonomia. O sujeito se torna O Capital, e não
        o capitalista; o próprio capitalista não faz o que quer, mas aquilo que dá mais dinheiro,
        aquilo que o movimento do capital está fazendo, movimento esse que ele não controla e que
        é maior do que ele. Leituras conspiratórias de elite mundial não são marxistas. O Estado é
        um aparelho de repressão da burguesia sobre o proletariado, não porque o governo é um
        teatro, mas porque o dinheiro/capital permite que alguns políticos com ideias favoráveis a
        certos interesses sejam mais eleitos; sistemas de corrupção também desviam o dinheiro
        público para interesses privados do político e de seu amigo empresário, etc.
      </>
    ),
  },
  {
    quote: '"Indivíduos são apenas representantes de sua classe social e sua autonomia histórica é uma ilusão"',
    explanation: (
      <>
        Os indivíduos e suas escolhas estão todos plenamente inseridos na materialidade e
        influenciam a realidade de forma caótica e imprevisível. O materialismo histórico não é
        sobre negar a relevância de figuras históricas em prol de uma visão que apenas olha para
        uma escala mais macro de relações entre classes. A história teria sido outra se não fossem
        certos indivíduos importantes. Mas tampouco um indivíduo tem poder absoluto para fazer o
        que quiser, ou é quem ele é, e defende o que ele defende, deslocado do mundo em que ele
        vive e cresceu. O ponto de Marx é muito mais um meio-termo dinâmico e dialético entre o
        indivíduo e seu contexto histórico.
      </>
    ),
  },
  {
    quote: '"O comunismo é a negação do capitalismo"',
    explanation: (
      <>
        Para Marx, o capitalismo é o melhor modo de produção que já criamos, mais democrático e
        mais produtivo que o feudalismo e o que veio antes. É muito comum, em discussões, surgirem
        argumentos como "o capitalismo tirou pessoas da miséria, revolucionou a tecnologia", ou
        seja, apologias ao sistema atual, como se o marxismo dissesse que "seria melhor que o
        capitalismo nunca tivesse existido". Mas não é isso: o capitalismo é o melhor sistema até o
        momento, mas ele tem limites internos, ele tende a crises e instabilidades, e o comunismo é
        a sua <em>superação</em> (e não negação), pois conserva aquilo que funciona e resolve as
        contradições e limites internos ao capitalismo em um modo de produção ainda melhor.
      </>
    ),
  },
  {
    quote: '"O comunismo valoriza a igualdade e o liberalismo a liberdade"',
    explanation: (
      <>
        Filosoficamente, não se pode derivar afirmações do tipo "deve ser" apenas a partir de
        fatos ou do que "é" (Guilhotina de Hume), sem uma valoração dada por uma moralidade. Marx
        nunca formalizou a sua moral em texto, mas toda a elaboração teórica de Marx, Engels e
        Lenin está calcada na busca pela libertação do indivíduo e na emancipação da humanidade de
        forma plena. O comunismo vê o capitalismo como um sistema de escravidão velada (não tão
        ruim quanto a escravidão tradicional, mas ainda assim escravidão) e ninguém jamais
        encontrará, em nenhum texto comunista, defesa alguma de igualdade salarial para todos.
      </>
    ),
  },
  {
    quote: '"O comunismo pressupõe que o ser humano é bondoso"',
    explanation: (
      <>
        O materialismo dialético (e, como consequência, o marxismo) não pressupõe absolutamente
        nada; Marx tem conclusões (e não pressupostos a priori) sobre o ser humano, mas elas são
        vagas, ex: o ser humano é histórico e é social. Qualquer outra afirmação sobre a natureza
        humana deve ser demonstrada, assim como o conflito dessa natureza com um dado modo de
        produção. O comunismo, enquanto modo de produção, não se trata de impedir pessoas de
        fazerem o mal umas com as outras, isso vai existir para sempre, mas de tirar a opressão das
        bases econômicas da sociedade, na medida em que tira a propriedade privada, socializa os
        meios de produção e extingue as classes sociais.
      </>
    ),
  },
];
