// Academic papers, in the language they were published in. Taken from the
// Google Scholar profile linked below; UI labels around them are translated.

export const scholarUrl = 'https://scholar.google.com/citations?user=8CDZIBwAAAAJ';

export const authorName = 'Francisco José Lins Magalhães';

export interface Paper {
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  href: string;
  linkLabel: string;
  summary: string;
}

export const papers: Paper[] = [
  {
    title: 'A Collective Communication Library for Distributed Tensors',
    authors: ['Francisco Heron de Carvalho-Junior', 'Francisco José Lins Magalhães'],
    venue: 'Brazilian Symposium on Programming Languages (SBLP), CBSoft',
    year: 2026,
    href: 'https://cbsoft.sbc.org.br/2026/data/papers/sblp/A%20Collective%20Communication%20Library%20for%20Distributed%20Tensors.pdf',
    linkLabel: 'PDF',
    summary:
      'Presents NxColl, a collective communication library for distributed Nx tensors in Elixir. It generalizes collective communication to multidimensional tensors distributed across processes in a Cartesian topology, with a declarative interface tailored to functional programming, evaluated with the CG kernel from the NAS Parallel Benchmarks.',
  },
  {
    title:
      'On the performance of multidimensional array representations in programming languages based on virtual execution machines',
    authors: [
      'Francisco Heron de Carvalho Junior',
      'Cenez Araújo Rezende',
      'Jefferson de Carvalho Silva',
      'Francisco José Lins Magalhães',
      'Renato Caminha Juaçaba-Neto',
    ],
    venue: 'Brazilian Symposium on Programming Languages, Springer, pp. 31–45',
    year: 2013,
    href: 'https://link.springer.com/chapter/10.1007/978-3-642-40922-6_3',
    linkLabel: 'Springer',
    summary:
      'Evaluates the performance of CLI and JVM virtual machines for the common ways of representing multidimensional arrays in high performance computing, showing which representation is best for each virtual machine and that the choices can be surprisingly contradictory.',
  },
  {
    title: 'Comparação entre Máquinas Virtuais Java e CLI em Algoritmos de Computação Numérica Intensiva',
    authors: ['Francisco José Lins Magalhães', 'Francisco Heron de Carvalho-Junior', 'Jefferson de Carvalho Silva'],
    href: 'https://www.researchgate.net/profile/Francisco-De-Carvalho-Junior/publication/216878074_Comparacao_entre_Maquinas_Virtuais_Java_e_CLI_em_Algoritmos_de_Computacao_Numerica_Intensiva/links/0922b4f3b13dfdd750000000/Comparacao-entre-Maquinas-Virtuais-Java-e-CLI-em-Algoritmos-de-Computacao-Numerica-Intensiva.pdf',
    linkLabel: 'PDF',
    summary:
      'Compares the performance of OpenJVM and Mono for typical scientific computing workloads using the NAS Parallel Benchmarks, quantifying the overhead of virtual execution against native execution.',
  },
];
