
        // Função para filtrar os resultados conforme o usuário digita na barra de busca de pesquisas pós-graduação
        $(document).ready(function(){
            $(".search-pesquisas").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $(".table-pesquisas tbody tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    
        // Função para filtrar os resultados conforme o usuário digita na barra de busca de pesquisas graduação
        $(document).ready(function(){
            $(".search-graduacao").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $(".table-graduacao tbody tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

        const equipamentos = [
            {
                nome: "Termo-higro-sonômetro",
                imagem:"image/multifuncoes.png",
                video: "https://www.youtube.com/embed/7ulsGiOMFl4?si=Vt48XPlkypFd5Tv-",
                manual: "https://docs.google.com/document/d/1wg5WMIp7Vslvll66LifAxkAvPDxMWrr06c00ILAwygo/edit?usp=sharing",
                descricao: "Medidor digital portátil de nível sonoro (Decibelímetro), de nível de luminância (Luxímetro), Nível de umidade Relativa (Higrômetro), temperatura (ambiente e termopar)."
            },
            {
                nome: "Termovisor",
                imagem:"image/termovisor.png",
                video: "https://youtu.be/7ulsGiOMFl4?si=Vt48XPlkypFd5Tv-",
                manual: "https://docs.google.com/document/d/1b-xY0P-g8MLECj_BVXwIKiPDqpvxdJuNp9X6QMol-Ig/edit?usp=sharing",
                descricao: "Câmera termográfica que ajuda a visualizar os pontos quentes e frios."
            }
        ];

        const equipe = [
            {
                nome: "karin maria chvatal",
                funcao: "coordenadora do lca",
                contato:"karin@sc.usp.br",
                imagem:"image/Karin-Chvatal.jpg",
                resumo:"Professora Doutora do IAU (Instituto de Arquitetura e Urbanismo) da Universidade de São Paulo. Atua na área de Arquitetura e Tecnologia (Desempenho Térmico e Eficiência Energética de Edificações, Simulações Computacionais e Arquitetura Bioclimática). Integra o grupo de pesquisa Arqtema.",
                linha_pesquisa:"1.Desenvolvimento e Avaliação de Produtos, Sistemas e Processos \nObjetivo: Objetiva-se o desenvolvimento de materiais e compósitos ecológicos, concretos e argamassas especiais contendo aditivos e adições, e análise de desempenho de produtos, sistemas e processos construtivos. \n\n2.Conforto Ambiental e Eficiência Energética\nObjetivo: Objetiva-se a análise de propriedades físicas de materiais e avaliação do projeto e da produção da habitação com a finalidade de diminuir o consumo energético de edificações e promover o conforto do usuário.\n\n3.Projeto, Inovação e Sustentabilidade\nObjetivo: Objetiva-se propor soluções projetuais e metodológicas para a utilização de novos materiais ecológicos na construção civil, sem riscos de contaminação e através da Análise do Ciclo de Vida dos Materiais tradicionais.",
                curriculo:"http://lattes.cnpq.br/1750922177137097"

            },
            {
                nome: "kelen dornelles",
                funcao: "docente do lca",
                contato:"kelend@sc.usp.br",
                imagem:"image/Kelen-Dornelles.png",
                resumo:"Professora (RDIDP) do Instituto de Arquitetura e Urbanismo da Universidade de São Paulo – IAU/USP. Possui graduação em Engenharia Civil pela Universidade Federal de Santa Maria (2001), Mestrado em Construção Civil pela Universidade Federal de São Carlos (2004), Doutorado em Engenharia Civil pela Universidade Estadual de Campinas (2008) e dois Pós-doutorados pelo IAU/USP (2012 e 2014), com pesquisas na área de desempenho térmico de edifícios e de materiais de construção. Foi Coordenadora de Desenvolvimento Tecnológico da empresa Bairro Novo Empreendimentos Imobiliários, da Organização Odebrecht. Tem experiência profissional nas áreas de Arquitetura e Tecnologia, com ênfase em Desempenho de Edifícios e Sustentabilidade na Construção. Como pesquisadora, atua principalmente nos seguintes temas: desempenho térmico de materiais e sistemas construtivos; sustentabilidade no ambiente construído; tecnologia das construções; conforto ambiental e desempenho dos edifícios.",
                linha_pesquisa:"1.Conforto Ambiental e Eficiência Energética.\n2.Caracterização espectrofotométrica de materiais de construção.\n3.Desempenho Térmico de Edifícios.\n4.Sustentabilidade no Ambiente Construído.\n5.Construção Civil.\n6.Desenvolvimento e Avaliação de Produtos, Sistemas e Processos.\n7.Projeto, Inovação e Sustentabilidade",
                curriculo:" http://lattes.cnpq.br/4576117054220288"

            },
            {
                nome: "",
                funcao: "",
                contato:"",
                imagem:"",
                resumo:"",
                linha_pesquisa:"",
                curriculo:""

            }
        ];

        const pesquisas = [
            {
                titulo: "Estratégias de Projeto para Otimização do Conforto Térmico em Edificações Sustentáveis",
                palavras_chave:"Conforto térmico, edificações sustentáveis, eficiência energética, climatização passiva, arquitetura bioclimática",
                resumo:"O artigo investiga abordagens de design arquitetônico que melhoram o conforto térmico em construções sustentáveis. O conforto térmico é um dos pilares do desempenho ambiental em edificações, impactando diretamente o bem-estar dos ocupantes e a eficiência energética do edifício. O estudo explora estratégias passivas, como orientação solar adequada, ventilação natural, uso de materiais com alta inércia térmica, e técnicas de sombreamento, que reduzem a necessidade de sistemas artificiais de climatização. Além disso, aborda a integração de tecnologias ativas, como sistemas de climatização eficientes e uso de energias renováveis, para complementar essas estratégias passivas. O artigo destaca também a importância de um projeto integrado que considera as variáveis climáticas locais, as características do entorno e o uso de simulações computacionais para prever o desempenho térmico da edificação. Ao combinar essas estratégias de forma eficiente, o projeto arquitetônico não apenas otimiza o conforto térmico, mas também contribui para a sustentabilidade e a redução do consumo energético.",
                autor: "Renata Martins Silva",
                foto:"image/pesquisadora1.jpg",
                orientador: "Kelen Dornelles",
                contato: "renata@usp.br",
                artigo:"",
                curriculo:"",
                tipo:"Pesquisas - Pós Graduação"
            },
            {
                titulo: "O Papel dos Materiais de Construção no Conforto Térmico e Acústico em Edifícios Urbanos",
                palavras_chave:"Materiais de construção, conforto térmico, conforto acústico, edifícios urbanos, isolamento térmico, sustentabilidade",
                resumo:" O artigo explora a importância dos materiais de construção no aprimoramento do conforto térmico e acústico em ambientes urbanos. Com o aumento da urbanização e das construções em áreas densamente povoadas, o conforto dos usuários em termos de temperatura e ruído tornou-se um aspecto fundamental na arquitetura sustentável. O estudo aborda como diferentes materiais influenciam o isolamento térmico e acústico de edifícios, destacando características como condutividade térmica, absorção de som e eficiência energética. Materiais como concreto, madeira, vidros especiais e isolantes específicos são discutidos quanto ao seu papel na regulação da temperatura interna e na redução do ruído externo, contribuindo para um ambiente mais saudável e confortável. Além disso, o artigo enfatiza a importância de selecionar materiais sustentáveis que atendam a critérios de desempenho tanto térmico quanto acústico, promovendo a eficiência energética e a sustentabilidade ambiental em edifícios urbanos. A escolha adequada dos materiais de construção, portanto, é essencial para o desenvolvimento de cidades mais confortáveis e sustentáveis.",
                autor: "Mariana Costa Ribeiro",
                foto:"image/pesquisadora2.jpg",
                orientador: "Karin Chvatal",
                contato: "mariana@usp.br",
                artigo:"www.iau.usp.br",
                curriculo:"www.teste.br",
                tipo:"Pesquisas - Graduação"
            },
            {
                titulo: "",
                palavras_chave:"",
                resumo:"",
                autor: "",
                orientador: "",
                contato: "",
                artigo:"",
                curriculo:"",
                dados:""
            },
        ];

        const disciplinas = [
            {
                nome: "Conforto Ambiental nas Edificações",
                numero:"IAU0649 - Graduação",
                objetivo:"Fornecer elementos teóricos e práticos que possibilitem o aluno adequar os projetos às necessidades humanas quanto ao conforto ambiental e possibilitar economia de energia.",
                programa:"Avaliação das condições de conforto térmico em edificações. Avaliação de desempenho térmico de componentes construtivos das edificações. Insolação e sua geometria em edificações. Condições de iluminação natural e artificial nas edificações. Avaliação das condições acústicas e controle de ruído em edificações.",
                metodo:"Aulas expositivas. Exercícios práticos. Prática experimental.",
                criterio:"Média ponderada das atividades discentes: prova teórica, trabalhos práticos e levantamento de campo.",
                recuperacao:"CRITÉRIOS DE APROVAÇÃO: Apresentação de trabalho para nova avaliação com nota maior ou igual a 5.00 (cinco).",
                bibliografia:"Bibliografia Básica:BEHLING, Sophia e Stefan. Sol Power: the evolucion of solar arquitecture. Munique, Prestel, 1996.EGAN, M. David. Concepts in architectural acoustics. New York, McGraw-Hill, 1972.EGAN, M. David. Concepts in thermal comfort. New Jersey, Printice Hall, 1975.HOPKINSON, R. G.; PETERBRIDGE, P.; LONGMORE, J. Iluminação natural. Lisboa, Calouste Gulbenkian, 1975.KOENISBERGER, O. H. et alii. Viviendas y edifícios em zonas calidas y tropicales. Madrid, Paraninfo, 1977.LAMBERT, Roberto et alii. Eficiência energética na arquitetura. São Paulo, PW, 1997.VIANNA, Nelson Solano e GONÇALVES, Joana Carla S. Iluminação e Arquitetura. São Paulo, Virtus, 2001.Bibliografia Complementar:ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 10152 – Níveis de ruído para conforto acústico. São Paulo, ABNT, 1987.BARDOU, Patrick e ARZOUMANIAN, V. Sol y arquitectura. Barcelona, Gustavo Gili, 1980.CASTRO FILHO, João Pinto de. Estudo sobre exemplos de arquitetura tropical, erudita e suas adequações à amazônia brasileira no último decênio. Dissertação de Mestrado – São Carlos, EESC – USP, 1984.FROTA, Anésia Barros e SHIFFER, Sueli R. Manual de conforto térmico. São Paulo, Nobel, 1988.GIVONI, B. Man, climate and architecture. London, Applied Science, 1981.HESCHONG, Lisa. Thermal delight in architecture. Massachusetts, Massachusetts Institute of Technology, 1993. HERZOG, Thomas. Solar energy in architecture and urban planning. Munique, Prestel, 1996.IZARD, Jean-Louis e GUYOT, Alain. Arquitectura bioclimática. Barcelona, Gustavo Gili, 1980.LECHNER, Norbert. Heating, cooling, lighting – Design methods for architects. New York, John Wiley & Sons, 1991.MASCARÓ, Lúcia R. Luz, clima e arquitetura. São Paulo, Nobel, 1983.OLGYAY, Victor. Design with climate. New Jersey, Princeton, 1973.RAMÓN, Fernando. Ropa, sudor y architecturas. Madrid, H. Blume, 1980.RIVERO, Roberto. Acondicionameto térmico natural: arquitetura e clima. Porto Alegre, Luzzatto, 1985.TARIFA, José Roberto e AZEVEDO, Tarik R. Os climas na cidade de São Paulo. São Paulo, FFLCH/USP, 2001."
            },
            {
                nome: "Conforto Ambiental no Espaço Urbano",
                numero:"IAU0675 - Graduação",
                objetivo:"Fornecer elementos teóricos e práticos que possibilitem o aluno adequar as intervenções no espaço urbano às necessidades humanas quanto ao conforto luminoco, acústico e térmico.",
                programa:"Avaliação do conforto térmico no espaço urbano. Avaliação de desempenho de iluminação no espaço urbano. Avaliação das condições acústicas do espaço urbano. Uso do solo urbano e suas implicações nas condições de conforto ambiental.",
                metodo:"Aulas expositivas. Exercícios práticos. Prática experimental.",
                criterio:"Média ponderada das atividades discentes: prova teórica, trabalhos práticos e levantamento de campo.",
                recuperacao:"CRITÉRIOS DE APROVAÇÃO: Prova única com nota maior ou igual a 5.00 (cinco).",
                bibliografia:"Bibliografia (principal e complementar):ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS . NBR 10151 – Avaliação do ruído em áreas habitadas visando o conforto da comunidade São Paulo, ABNT, 1987.ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 10152 – Níveis de ruído para conforto acústico. São Paulo, ABNT, 1987.BARDOU, Patrick e ARZOUMANIAN, V. Sol y arquitectura. Barcelona: Gustavo Gili, 1980.BEHLING, Sophia e Stefan. Sol Power: the evolucion of solar arquitecture. Munique: Prestel, 1996.CASTRO FILHO, João Pinto de. Estudo sobre exemplos de arquitetura tropical, erudita e suas adequações à amazônia brasileira no último decênio. Dissertação de Mestrado. São Carlos: EESC– USP, 1984.CORBELLA, O.; YANNAS, S.. Em busca de uma arquitetura sustentável para os trópicos – conforto ambiental. Rio de Janeiro: Revan, 2003, 288p.EDWARDS, B.. Guia básica de la sostenibilidad. Colaboração de Paul Hyett. Barcelona: Gustavo Gili, 2004, 121p.Egan, M. D.. Architectural acoustics. J. Ross Publishing: 2007.EGAN, M. David. Concepts in architectural acoustics. New York: McGraw-Hill, 1972.EGAN, M. David. Concepts in thermal comfort. New Jersey: Printice Hall, 1975.FROTA, A. B.. Geometria da insolação. São Paulo: Geros, 2004.FROTA, Anésia Barros e SHIFFER, Sueli R.. Manual de conforo térmico. São Paulo: Nobel, 1988.GARCÍA, R.; FUENTES, V.. Viento y arquitectura. México: Trillas, 2005.GIVONI, B.. Man, climate and architecture. London: Applied Science, 1981.Goldemberg, J. , Villanueva, L. D. Energia, meio ambiente e desenvolvimento. Edusp.HERZOG, Thomas. Solar energy in architecture and urban planning. Munique: Prestel, 1996.HESCHONG, Lisa. Thermal delight in architecture. Massachusetts: Massachusetts Institute of Technology, 1993. HOPKINSON, R. G.; PETERBRIDGE, P.; LONGMORE, J. Iluminação natural. Lisboa: Calouste Gulbenkian, 1975.IZARD, Jean-Louis e GUYOT, Alain. Arquitectura bioclimática. Barcelona: Gustavo Gili, 1980.KOENISBERGER, O. H. et alii. Viviendas y edifícios em zonas calidas y tropicales. Madrid: Paraninfo, 1977.LAMBERT, Roberto et alii. Eficiência energética na arquitetura. São Paulo: PW, 1997.LECHNER, Norbert. Heating, cooling, lighting – Design methods for architects. New York: John Wiley & Sons, 1991.MASCARÓ, Lúcia R. Luz, clima e arquitetura. São Paulo: Nobel, 1983.OLGYAY, Victor. Design with climate. New Jersey: Princeton, 1973.RAMÓN, Fernando. Ropa, sudor y architecturas. Madrid: H. Blume, 1980.RIVERO, Roberto. Acondicionameto térmico natural: arquitetura e clima. Porto Alegre: Luzzatto, 1985.ROMERO, Marta Adriana Bustos. Arquitetura bioclimática do espaço público. Brasília: Universidade de Brasília, 2001.ROMERO, Marta Adriana Bustos. Princípios bioclimáticos para o desenho urbano. São Paulo: Projeto, 1988.Schmid, A. L. A idéia de conforto. Reflexões sobre o ambiente construído. Curitiba: pacto ambiental, 2005. Silva, Pérides. Acústica arquitetônica e condicionamento de ar. 4a ed. Belo Horizonte: EDTAL E. T., 2002.TARIFA, José Roberto e AZEVEDO, Tarik R. Os climas na cidade de São Paulo. São Paulo: FFLCH/USP, 2001.VIANNA, Nelson Solano e GONÇALVES, Joana Carla S.. Iluminação e Arquitetura. São Paulo: Virtus, 2001."
            },
            {
                nome: "Eficiência Energética em Edificações",
                numero:"IAU5958 - Pós Graduação",
                objetivo:"Apresentar possibilidades que visem conservação de energia e controle energético das edificações, através de sistemas passivos e ativos. \nPromover a conscientização quanto às questões energéticas e sua importância/implicância na atividade projetual.",
                justificativa:"O conteúdo proposto pela disciplina aborda questões bastante atuais e pertinentes para os projetistas. Complementa as demais disciplinas oferecidas pelo Programa nesta área de conhecimento.",
                conteudo:"– Panorama energético nacional e mundial. Tendências atuais na área de conservação de energia. \n– Arquitetura Bioclimática. \n– Tecnologias passivas para conservação de energia. \n– Tecnologias ativas para conservação de energia. \n– Controle energético através de superfícies transparentes. \n– Eficiência energética e arquitetura vernacular. \n– Eficiência energética e arquitetura contemporânea. \n– Métodos e técnicas para a conservação de energia em edificações. Estudos de caso.",
                bibliografia:"– ABNT – ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. 2005. NBR 15220: Desempenho Térmico de edificações. Rio de Janeiro. – ABNT – ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. 2013. NBR 15575: Edificações habitacionais – Desempenho. Rio de Janeiro.– ASHRAE – AMERICAN SOCIETY OF HEATING, REFRIGERATING AND AIR-CONDITIONING ENGINEERS. ANSI/ASHRAE Standard 55: Thermal Environmental Conditions for Human Occupancy. Atlanta, 2010.– CAMOUS, R.; WATSON, D. El Habitat Bioclimatico. Dela concepcion a la construcion. GG/Mexico, 1983– CARAM de Assis, R.M. Vidros e o Conforto Ambiental: Indicativos para o emprego na construção civil. Dissertação de Mestrado. EESC/USP, São Carlos, 1996– CARAM de Assis, R.M. Carcaterização Ótica de Materiais Transparentes e sua Relação com o Conforto Ambiental. Tese de Doutorado. FEC/UNICAMP, 1998– COMPAGNO ªIntelligent Glass Façades. Birkhauser, Berlin, 1996– CROISET, M., L’Hygrothermique dans le bâtiment Confort Thermique d’hiver et d’été. Condensations, Ed. Eyrolles, Paris, 1968– Daniels, K. The Technology of Ecological Building. Birkhauser Verlag, Boston, 1994– GIVONI, B., Man, climate and architecture, Elsevier, London, 1976– HAMZAH T.R.; YEANG S.B. Bioclimati Skyscrapers. Ellipsis. London, 1994– HERZOG, T. Solar Energy in Architecture and Urban Planning. Prestel. Munich, 1996– INCROPERA, F. P. and de WITT, D. P., Fundamentals of Heat and Mass Transfer, 3. ed., J. Wiley, NY, 1990– INMETRO – INSTITUTO NACIONAL DE METROLOGIA, NORMALIZAÇÃO E QUALIDADE INDUSTRIAL. 2012. RTQ-R – Regulamento técnico da qualidade para o nível de eficiência energética em edificações residenciais. Rio de Janeiro.– INMETRO – INSTITUTO NACIONAL DE METROLOGIA, NORMALIZAÇÃO E QUALIDADE INDUSTRIAL. 2013. RTQ-C – Regulamento Técnico da Qualidade para o Nível de Eficiência Energética de EdifíciosComerciais, de Serviços e Públicos. Rio de Janeiro.– KOENIGSBERGER, O. H., INGERSOLL, T. G., MAYHEW, A., SZOKOLAY, S. A., Viviendas y edificios en zonas cálidas y tropicales, Ed. Paraninfo, Madrid, 1977– OLGYAY, V. Arquitectura y Clima. Manual de diseno bioclimatico para arquitectos y urbanistas. GG, Barcelona, 1963– PEREIRA, F.O.R. Luminous and thermal performance of window shading and sunlight reflecting devices. Tese de doutorado. Universidade de Sheffield, Inglaterra, 1992– RIVERO, R., Arquitetura e Clima: Acondicionamento Térmico Natural, D. C. Luzzatto, Ed., Porto Alegre, 1986– ROMERO, M.A . Diagnóstico e Avaliação Energética e Comportamental. Edifício Birmann 21. NUTAU/FAU/USP, São Paulo, 1999– ____________________(1997) Arquitetura, Comportamento e Energia. Tese de Livre-Docência. FAU/USP, São Paulo, 1997– SLESSOR, C. Eco-tech. Sustainable Architecture and High technology. Thames and Hudson, London, 1997– SODHA, M. S., BANSAL, N. K., BANSAL, P. K., KUMAR, A. e MALIK, M. A. S., Solar Passive Buildings: Science and Design, Pergamon Press, Oxford, 1984– van STRAATEN, J.F., Thermal Performance of Buildings. Elsevier, Amsterdan, 1967"
            },
            {
                nome: "Tópicos Especiais – Temas Contemporâneos em Conforto Ambiental e Eficiência Energética",
                numero:"IAU5812 - Pós Graduação",
                objetivo:"Fornecer ao aluno recursos teóricos referentes a temas atualmente discutidos na literatura científica da área de conforto ambiental no ambiente construído.",
                justificativa:"Neste curso pretende-se fornecer ao aluno o conhecimento do estado da arte referente a temas de relevância atualmente discutidos na literatura científica, na área de Conforto Ambiental e Eficiência Energética. \nPara esta disciplina foram selecionados três temas: (1) ventilação natural e métodos avançados de avaliação (túnel de vento e dinâmica dos fluidos computacional), (2) edificações comerciais com estratégias de ventilação híbrida e (3) desempenho térmico de materiais e componentes construtivos. \nPara cada tema, será apresentado o contexto atualizado das pesquisas a ele relacionado em aulas teóricas expositivas. O aluno irá efetuar a leitura prévia de artigos selecionados relacionados aos temas em questão, de modo a possibilitar a discussão de forma aprofundada e sistemática durante as aulas. \nComo trabalho final, o aluno deverá apresentar um artigo ou texto de revisão geral crítica sobre um dos temas da disciplina.",
                conteudo:"Aula 1. Introdução ao tema e às questões a serem abordadas nas aulas. \nAula 2. Tema 1. Ventilação Natural de Edificações: métodos de avaliação. Túnel de vento. \nAula 3. Apresentação da primeira coleta de dados sobre o trabalho final. \nAula 4. Tema 1. Ventilação Natural de Edificações: métodos de avaliação. Dinâmica dos fluidos computacional (CFD). \nAula 5. Tema 2. Edifícios comerciais com estratégias de ventilação híbrida. Classificação, possibilidades de controle e comportamento do usuário. \nAula 6. Apresentação intermediária do trabalho final. \nAula 7. Tema 2. Edifícios comerciais com estratégias de ventilação híbrida. Características arquitetônicas. \nAula 8. Tema 3. Desempenho térmico de materiais e componentes construtivos. Métodos de medição e avaliação. \nAula 9. Tema 3. Desempenho térmico de materiais e componentes construtivos. Métodos de medição e avaliação. \nAula 10. Atendimento (trabalho final). \nAula 11. Apresentação e discussão do trabalho final. \nAula 12. Apresentação e discussão do trabalho final.",
                bibliografia:"Journal of Building Performance Simulation. Taylor & Francis. http://www.tandfonline.com/toc/tbps20/current -Energy & Buildings. Elsevier. http://www.journals.elsevier.com/energy-and-buildings/-Building & Environment. Elsevier. http://www.journals.elsevier.com/building-and-environment-Renewable & Sustainable Energy Reviews. Elsevier. http://www.journals.elsevier.com/renewable-and-sustainable-energy-reviews-Revista Ambiente Construído.ANTAC. http://www.seer.ufrgs.br/ambienteconstruido-Solar Energy. Elsevier. http://www.journals.elsevier.com/solar-energy/"
            },
            {
                nome: "Introdução à Simulação Computacional do Desempenho Termoenergético de Edificações",
                numero:"IAU5961 - Pós Graduação",
                objetivo:"Fornecer ao aluno conhecimento ao nível introdutório dos recursos básicos de um programa de simulação do desempenho termoenergético, de modo que ele seja capaz de avaliar uma edificação e tenha ciência das limitações a que esse tipo de avaliação está sujeita.",
                justificativa:"Os programas de simulação computacional do desempenho termo-energético de edificações têm evoluído significativamente nos últimos anos, devido à crescente preocupação com a eficiência energética. Com o aprimoramento das suas funcionalidades e um melhor entendimento do seu potencial e limitações, a simulação tem se tornado um importante método de pesquisa. Além disso, atualmente, os regulamentos de vários países a prescrevem como um método de avaliação. \nNo Brasil, ela é indicada tanto pela Norma de Desempenho de Habitações, NBR 15575, quanto pelos Regulamentos Técnicos da Qualidade para o Nível de Eficiência Energética de Edificações (RTQ-R e RTQ-C). O aprendizado do uso desses programas, no entanto, requer o aprofundamento de vários conceitos relacionados às trocas térmicas nos edifícios. Há variadas possibilidades de entrada de dados, sendo importante que o usuário compreenda as limitações de suas escolhas. A forma de tratamento dos resultados também por si só constitui um assunto denso e de grande relevância nesse processo. \nDevido a essa complexidade inerente a qualquer programa de simulação, neste curso pretende-se fornecer ao aluno o conhecimento dos recursos básicos de um programa específico. Entende-se como recursos básicos, o mínimo necessário para a avaliação do desempenho termo-energético de um edifício constituído de várias zonas térmicas. \nOs recursos a serem ensinados são especificados no conteúdo da disciplina. Dessa forma, considera-se que o aluno encerrará o curso com o conhecimento ao nível introdutório. \nO programa adotado nesta disciplina é o EnergyPlus (Department of Energy, 2015). Este é um programa devidamente validado, o que garante a confiabilidade de seu funcionamento. Além disso, é de livre acesso, atualizado periodicamente, possui um material de apoio muito detalhado, e é amplamente difundido no Brasil.",
                conteudo:"– Importância da simulação computacional do desempenho termo-energético de edifícios. Conceitos básicos referentes aos programas: métodos de cálculo, dados de entrada e de saída e validação. Início do aprendizado do programa EnergyPlus: parâmetros gerais de simulação. Modelagem da geometria do edifício. Critérios para a definição das zonas térmicas. Definição das superfícies opacas e transparentes. Formas de se definir superfícies que dividem ambientes e o ático. \n– Atribuição das construções às superfícies. Entrada de dados de materiais opacos e transparentes. \n– Criação dos padrões de horários. Definição dos ganhos internos devido às pessoas, equipamentos e iluminação artificial. Parâmetros referentes ao local e clima. Arquivos de dados climáticos. \n– Modelagem simplificada da ventilação natural e do ar condicionado ideal. Parâmetros dos dados de saída. \n– Rodagem do programa e correção de erros. \n– Visualização e discussão dos resultados.",
                bibliografia:"Department of Energy, 2015. ENERGYPLUS, version 8.4.0. Department of Energy (DOE): United State of America (USA).Department of Energy, 2015. Input, Output Reference EnergyPlus Manual. Department of Energy (DOE): United State of America (USA).HENSEN, J. (Org.) ; Lamberts, Roberto (Org.) . Building Performance Simulation for Design and Operation. 1. ed. Oxon: Spon Press, 2011. v. 1. 507p .RORIZ, M. Arquivos Climáticos de Municípios Brasileiros. ANTAC – Associação Nacional de Tecnologia do Ambiente Construído. Grupo de Trabalho sobre Conforto e Eficiência Energética de Edificações. Relatório Interno, 2012 (a)."
            },
            {
                nome: "Conforto Acústico",
                numero:"IAU5960 - Pós Graduação",
                objetivo:"Abordar os fatores que interferem na sensação de conforto acústico de forma a fornecer um instrumental prático que possibilite a análise qualitativa dos espaços arquitetônicos. \nEstudar o conforto acústico de forma a compatibilizá-lo com os conforto lumínico e térmico. \nAnalisar a interferencia do uso do solo no conforto acústico.",
                justificativa:"O ambiente acústico interfere de forma significativa no estado sensitivo dos usuários de um dado ambiente. Esse estado emocional além de interferir no desempenho do usuário afeta sua condição fisiológica. \nDessa forma na atividade projectual deve ser incorporado a preocupação com as questões acústicas e o profissional ter condições de fazer uma analise qualitativa do seu projeto.",
                conteudo:"1) – Fisiologia da audição \n2) – Física aplicada à acústica \n3) – Efeitos do ruído no ser humano \n4) – Medição e análise de ruído \n5) – Isolamento de ruído \n6) – Acústica de espaços internos \n7) – Desempenho acústico \n8) – Uso do solo urbano e acústica",
                bibliografia:"ALEXANDRE, A. et alii. Road, traffic noise. N. York, Applied Science, 1975AMBROSE, J. E. (1995). Simplified design for building sound control. New York: John Wiley. 161p.ASTETE, Martin G. Wells e KITAMURA, Satoshi. Manual prático de avaliação do barulho industrial. São Paulo, FUNDACENTRO, 1978.BARRON, Michael. Auditorium acoustics and architectural design. London, E&FN SPON, 1993.BERANEK, Leo L.. Acustica. Buenos Aires, Hispano Americana, 1969.BERANEK, Leo.L. Noise reduction. New York , McGraw Hill, 1960BERANEK, Leo. L. Music Acoustics & Architecture. New York, John Wiley & Sons, 1962BISTAFA, S. R. (2006). Acústica aplicada ao controle do ruído. São Paulo: Edgar Blucher. 380p.BLAKE, Michael p. e Mitchell, Willians S.. Vibration snd Acoustic Measurement Hardbook. New York, Spartan Books, 1972BRÜEL, Per V.. Sound insulation. London, Chapman & Hall, 1951.CROOME, Derek J.. Noise, Building and people. New York, Perganas 1977.EGAN,M.David. Concepts in architectural acoustics. New York, McGraw-Hill, 1972.GYPSUM, United State. Sound, control and construction: principles and performance. New York, Unit.S. Gypsum Company, 1972.GEORGES, Samir N.Y. Ruidos: Fundamentos e controle. Florianópolis, S.N.Y. Georges, 1992.GREHANT, B. (1994). Acoustics in modern building practice. Paris: Technique et Documentation-Lavoisier.HARRIS, Curyl M. Manual para o controle del ruido. Madrid, Estudos de Administração Local, 1977, 2 vol.JOSSE, Robert. La acústica en la construccion. Barcelona, Gustavo Gili, 1975.KINSLER,Lawrence E. et alii. Fundamentals of Acoustics. New York, John Wiley & Sons, 1982.KNUDSEN, Vern O. e HARRIS, Cyril M.. Acoustical designing in architecture. New York, Chapman & Hall, 1950.KURTZE, Günter. Física y técnica de la lucha contra el ruido. Bilbao, Urmo, 1969.KUTTRUFF, Heinrich. Room acoustics. London, Elevier A. Science, 1991.LIENARD, P. Decibels et Indices de Bruit, Paris, Masson, 1978.SPEAKS,Charles E. Introduction to Sound: acoustics for the hearing and speech sciences. London, Chapman & Hall, 1992."
            },
            {
                nome: "Desempenho e Sustentabilidade no Ambiente Construído",
                numero:"IAU5953 - Pós Graduação",
                objetivo:"Disseminar a abordagem científica da avaliação de desempenho das edificações, com enfoque nos aspectos relacionados à sustentabilidade, em especial à eficiência energética. \nApresentar e discutir normas, metodologias e textos técnicos que forneçam orientações relativas à avaliação do desempenho das edificações em geral, e mais especificamente à avaliação do seu desempenho energético. \nProporcionar o conhecimento em relação às certificações ambientais existentes. \nProporcionar a melhoria da qualidade e da sustentabilidade do projeto de edificações, utilizando o conceito de desempenho e de eficiência energética.",
                justificativa:"A edificação deve atender a uma série de anseios materiais e psicológicos dos seus ocupantes, sendo imperioso, portanto, que tendo como base a sustentabilidade, o ambiente construído reúna as qualidades minimamente necessárias para que sejam atendidas as condições básicas de segurança, saúde, higiene e conforto ambiental dos usuários. \nDiversas inovações tecnológicas têm sido propostas nesse campo, estimuladas pela racionalização e industrialização da construção civil. Entretanto, essas novas tecnologias, assim como as tradicionais, devem ser avaliadas com o objetivo de garantir a obtenção dos níveis mínimos de desempenho exigido pelos usuários. \nTorna-se necessário, portanto, que haja uma disciplina que aborde as questões acima mencionadas no curso de pós-graduação em Arquitetura e Urbanismo, com o intuito de promover a avaliação de desempenho das edificações, com enfoque na eficiência energética.",
                conteudo:"a) Conceitos sobre análise sistêmica, desempenho e sustentabilidade, com enfoque em eficiência energética. Discussão introdutória sobre a relação existente entre desempenho e sustentabilidade no ambiente construído.. \nb) Apresentação de referências que orientam a avaliação do desempenho das edificações em geral: normas, metodologias e textos técnicos. Estudo mais detalhado de referências relacionadas especificamente ao desempenho energético de edificações. \nc) Avaliação pré-ocupação: ferramentas existentes para a simulação do desempenho de edificações. \nd)Enfoque em programas que simulem o desempenho térmico e energético de edificações. \ne) Utilização da avaliação pós-ocupação (APO) como forma de análise de desempenho de edificações. \nf) Estudo dos sistemas de certificação ambiental.",
                bibliografia:"teste"
            },
        ];

        // Carregar os dados do equipamento quando o modal for aberto
        $('#equipamentoModal').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget); // Botão que disparou o modal
            const equipamentoIndex = button.data('equipamento'); // Index do equipamento
            const equipamento = equipamentos[equipamentoIndex];

            // Atualizar os elementos do modal com os dados do equipamento
            $('#equipamentoModalLabel').text(equipamento.nome);
            $('#equipamentoNome').text(equipamento.nome);
            $('#equipamentoVideo').attr('src', equipamento.video);
            $('#equipamentoImagem').attr('src', equipamento.imagem);
            $('#equipamentoDescricao').text(equipamento.descricao);
            $('#equipamentoManual').attr('href', equipamento.manual);
        });

        // Limpar o vídeo quando o modal for fechado
        $('#equipamentoModal').on('hidden.bs.modal', function () {
            $('#equipamentoVideo').attr('src', '');
        });

            $(document).ready(function () {
            // Função para definir o conteúdo original do modal
            function setOriginalContent(disciplina) {
                // Copia o conteúdo do HTML oculto para o modal
                const originalContent = $('#originalContent').html();
                $('#modalBody').html(originalContent);

                // Preenche os elementos com os dados da disciplina
                $('#info_disciLabel').text(disciplina.numero);
                $('#disciplinaNome').text(disciplina.nome);
                $('#disciplinaObj').text(disciplina.objetivo);
                $('#disciplinaJustif').text(disciplina.justificativa);
                $('#disciplinaConteudo').text(disciplina.conteudo);
                $('#disciplinaBiblio').text(disciplina.bibliografia);

                // Mostrar o botão Bibliografia e esconder o botão Voltar
                $('#btnbbgf').show();
                $('#btnVoltar').hide();
            }

            // Exibir modal com conteúdo padrão ao abrir
            $('#info_disci_pos').on('show.bs.modal', function (event) {
                const button = $(event.relatedTarget); // Botão que disparou o modal
                const disciplinaIndex = button.data('disciplina'); // Index da disciplina
                const disciplina = disciplinas[disciplinaIndex]; // Dados da disciplina

                $('#info_disciLabel').text(disciplina.numero); // Título do modal

                // Define o conteúdo original do modal
                setOriginalContent(disciplina);

                // Adicionar o evento de clique ao botão "Bibliografia"
                $('#btnbbgf').off('click').on('click', function () {
                    // Atualizar o conteúdo do modal apenas com a bibliografia
                    $('#modalBody').html(`
                        <h5><i>Bibliografia</i></h5>
                        <p>${disciplina.bibliografia}</p>
                    `);

                    // Ocultar o botão "Bibliografia" e exibir o botão "Voltar"
                    $('#btnbbgf').hide();
                    $('#btnVoltar').show();
                });

                // Adicionar evento de clique ao botão "Voltar"
                $('#btnVoltar').off('click').on('click', function () {
                    setOriginalContent(disciplina); // Restaurar o conteúdo original
                });
            });
        });


        $(document).ready(function () {
            // Função para definir o conteúdo original do modal
            function setOriginal(disciplina) {
                // Copia o conteúdo do HTML oculto para o modal
                const originalContent = $('#originalContent2').html();
                $('#modalBody2').html(originalContent);

                // Preenche os elementos com os dados da disciplina
                $('#infoDisci').text(disciplina.numero);
            $('#disciplina_nome').text(disciplina.nome);
            $('#disciplinaObjetivo').text(disciplina.objetivo);
            $('#disciplinaConteudo').text(disciplina.conteudo);
            $('#disciplinaMetodo').text(disciplina.metodo);
            $('#disciplinaCriterio').text(disciplina.criterio);
            $('#disciplinaProg').text(disciplina.programa);
            $('#disciplinaRecup').text(disciplina.recuperacao);

                // Mostrar o botão Bibliografia e esconder o botão Voltar
                $('#btnbgf').show();
                $('#btnvolt').hide();
            }

            // Exibir modal com conteúdo padrão ao abrir
            $('#info_disci_graduacao').on('show.bs.modal', function (event) {
                const button = $(event.relatedTarget); // Botão que disparou o modal
                const disciplinaIndex = button.data('disciplina'); // Index da disciplina
                const disciplina = disciplinas[disciplinaIndex]; // Dados da disciplina

                $('#info_disci').text(disciplina.numero); // Título do modal

                // Define o conteúdo original do modal
                setOriginal(disciplina);

                // Adicionar o evento de clique ao botão "Bibliografia"
                $('#btnbgf').off('click').on('click', function () {
                    // Atualizar o conteúdo do modal apenas com a bibliografia
                    $('#modalBody2').html(`
                        <h5><i>Bibliografia</i></h5>
                        <p>${disciplina.bibliografia}</p>
                    `);

                    // Ocultar o botão "Bibliografia" e exibir o botão "Voltar"
                    $('#btnbgf').hide();
                    $('#btnvolt').show();
                });

                // Adicionar evento de clique ao botão "Voltar"
                $('#btnvolt').off('click').on('click', function () {
                    setOriginal(disciplina); // Restaurar o conteúdo original
                });
            });
        });

      

        //Carregar os dados do equipamento quando o modal for aberto
        $('#Pesquisa').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget); // Botão que disparou o modal
            const pesquisaIndex = button.data('pesquisa'); // Index do equipamento
            const pesquisa = pesquisas[pesquisaIndex];

            // Atualizar os elementos do modal com os dados do equipamento
            $('#pesquisaLabel').text(pesquisa.tipo);
            $('#pesquisaTitulo').text(pesquisa.titulo);
            $('#pesquisaPalavras').text(pesquisa.palavras_chave);
            $('#pesquisaResumo').text(pesquisa.resumo);
            $('#pesquisaImagem').attr('src', pesquisa.foto);
            $('#pesquisaAutor').text(pesquisa.autor);
            $('#pesquisaContato').text(pesquisa.contato);
        });

        //Carregar os dados do equipamento quando o modal for aberto
        $('#info_equipe').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget); // Botão que disparou o modal
            const funcIndex = button.data('func'); // Index do equipamento
            const func = equipe[funcIndex];

            // Atualizar os elementos do modal com os dados do equipamento
            $('#infoNome').text(func.nome);
            $('#infoFuncao').text(func.funcao);
            $('#infoResumo').text(func.resumo);
            $('#infoPesquisa').text(func.linha_pesquisa);
            $('#infoContato').text(func.contato);
            $('#infoLattes').attr('href',func.curriculo);
            $('#infoFoto').attr('src', func.imagem);
        });



        function filterSearch() {
            // Declaração de variáveis
            var input, filter, table, tr, td, i, txtValue;
            input = document.querySelector('.search-pesquisas');
            filter = input.value.toLowerCase();
            table = document.querySelector('.table-pesquisas');
            tr = table.querySelectorAll('.search-item');
    
            // Loop por todas as linhas da tabela, e esconde as que não correspondem à pesquisa
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }
