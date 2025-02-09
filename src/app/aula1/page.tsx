import { FaRobot, FaWhatsapp, FaImages, FaGoogle, FaMobile, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { CopyPrompt } from '@/components/CopyPrompt';

export default function Aula1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="bg-blue-500 p-4 rounded-2xl shadow-lg">
              <FaRobot className="text-4xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Agente de Atendimento Clínica Odontológica
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crie um Agente de Inteligência Artificial para automatizar e melhorar o atendimento no WhatsApp da sua clínica.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Habilidades do Agente</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50">
              <div className="bg-green-500 p-3 rounded-xl">
                <FaWhatsapp className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Pré-atendimento Inteligente</h3>
                <p className="text-green-700">Tire dúvidas sobre procedimentos, valores e agendamentos de forma automática</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-pink-50">
              <div className="bg-pink-500 p-3 rounded-xl">
                <FaImages className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-pink-800 mb-2">Galeria de Resultados</h3>
                <p className="text-pink-700">Compartilhe imagens de antes e depois dos procedimentos</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <FaGoogle className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Gestão de Leads</h3>
                <p className="text-yellow-700">Armazene informações dos leads automaticamente no Google Sheets</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FaMobile className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Notificação Instantânea</h3>
                <p className="text-blue-700">Envie informações dos leads diretamente para o médico responsável</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ferramentas Necessárias</h2>

          {/* n8n Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/n8n.svg" alt="n8n logo" width={40} height={40} className="rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">n8n</h3>
                <p className="text-sm text-gray-500">Automação de Fluxos</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Ferramenta de automação de código aberto que oferece total controle sobre seus dados e fluxos de trabalho. 
              Gratuita quando instalada em seu próprio servidor.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 mb-3">Guias de Instalação:</h4>
              <a 
                href="https://www.youtube.com/watch?v=RPSXYjwg6eg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <FaYoutube className="text-red-500 text-xl" />
                <div>
                  <div className="font-medium text-gray-800">Railway</div>
                  <div className="text-sm text-gray-600">Para testes e aprendizado</div>
                </div>
              </a>

              <a 
                href="https://www.youtube.com/watch?v=vDk-KJMrnWI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <FaYoutube className="text-red-500 text-xl" />
                <div>
                  <div className="font-medium text-gray-800">VPS</div>
                  <div className="text-sm text-gray-600">Para uso profissional</div>
                </div>
              </a>
            </div>
          </div>

          {/* OpenAI Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/openai.svg" alt="OpenAI logo" width={40} height={40} className="rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">LLM - Modelo de Linguagem</h3>
                <p className="text-sm text-gray-500">Inteligência Artificial da OpenAI</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Modelos de Linguagem (LLMs) são o coração das IAs conversacionais modernas. 
              Utilizaremos os modelos da OpenAI (GPTs) para criar interações naturais e inteligentes.
            </p>

            <a 
              href="https://platform.openai.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Criar Chave de API
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Google Sheets Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/sheets.svg" alt="Google Sheets logo" width={40} height={40} className="rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Google Sheets</h3>
                <p className="text-sm text-gray-500">Armazenamento de Dados</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Utilize o Google Sheets para armazenar informações dos leads de forma organizada e acessível.
              <span className="block text-sm text-gray-500 mt-2 italic">
                Mais de 2 bilhões de usuários no mundo
              </span>
            </p>

            <a 
              href="https://www.youtube.com/watch?v=lbO8QXWNI48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <FaYoutube className="text-red-500 text-xl" />
              <div>
                <div className="font-medium text-gray-800">Criar Credenciais</div>
                <div className="text-sm text-gray-600">Tutorial passo a passo</div>
              </div>
            </a>
          </div>

          {/* Datafy Chats Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Image src="/icone-datafy.png" alt="Datafy Chats logo" width={40} height={40} className="rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Datafy Chats</h3>
                <p className="text-sm text-gray-500">Integração com WhatsApp</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Software especializado que permite conectar seus Agentes de IA ao WhatsApp em menos de 2 minutos.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://app.datafychats.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Criar Conta
                  <span className="text-xs">↗</span>
                </a>

                <a 
                  href="https://www.youtube.com/watch?v=j3bm_GpfX0g&list=PLUqHuuTBgsd8z1CLT_N5-_uJKnkxzCmKo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <FaYoutube className="text-xl" />
                  Ver Tutoriais
                  <span className="text-xs">↗</span>
                </a>
              </div>

              <div>
                <p className="text-gray-700 mb-4">
                  Para usar o Datafy Chats por 7 dias grátis, escolha uma das APIs de WhatsApp:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <Image src="/zapi.png" alt="Z-API logo" width={32} height={32} className="rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Z-API</h4>
                        <p className="text-sm text-gray-600">2 dias grátis</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      API brasileira não oficial, estável e confiável com integração nativa ao Datafy Chats.
                    </p>
                    <a 
                      href="https://www.z-api.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 text-sm"
                    >
                      Acessar Z-API
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <Image 
                        src="/evolution.svg" 
                        alt="Evolution API logo" 
                        width={32} 
                        height={32}
                        className="brightness-0" 
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">Evolution API</h4>
                        <p className="text-sm text-gray-600">Open Source</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Solução brasileira de código aberto para integração com WhatsApp. 
                      Gratuita e com total controle dos dados em seu servidor.
                    </p>
                    <a 
                      href="https://www.youtube.com/watch?v=Zbw3slT3RaU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
                    >
                      <FaYoutube className="text-red-500" />
                      Tutorial de Instalação (10 min)
                      <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Base Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Prompt Base do Agente</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <p className="text-gray-600 mb-6">
              Este é o prompt base que será utilizado para treinar seu agente de IA. 
              Ele contém informações detalhadas sobre procedimentos odontológicos, pontos-chave para atendimento 
              e respostas para perguntas frequentes.
            </p>
            
            <CopyPrompt content={`## Implante dentário

**Visão Geral**
Os implantes dentários guiados são uma evolução no tratamento de reposição de dentes perdidos. Na Datafy Dental, utilizamos a técnica Datafy Dentes, que possibilita um planejamento digital prévio por meio de tomografia computadorizada e softwares 3D especializados.

- Tecnologia de Planejamento: A partir da tomografia, é criado um modelo digital que permite identificar a posição ideal dos implantes.
- Guia Cirúrgico Personalizado: Fabricado de acordo com o planejamento, posiciona com exatidão o implante, garantindo menor trauma cirúrgico.
- Menos Invasivo: Em muitos casos, não é necessário fazer cortes extensos na gengiva. Consequentemente, o pós-operatório apresenta menos dor e menos inchaço.
- Recuperação Acelerada: Por ser menos traumático, a cicatrização tende a ser mais rápida.
- Resultados Estéticos e Funcionais: A precisão no posicionamento assegura um sorriso natural e maior eficiência mastigatória.

**Pontos-Chave para Secretárias e Marketing**

**Destaque o Conforto:** 

Muitos pacientes têm receio de cirurgias. Ressalte que a técnica guiada pode ser mais tranquila, com menor nível de dor e rápida recuperação.

**Ressalte a Tecnologia Avançada:** 

A ideia de um procedimento planejado no computador transmite segurança e modernidade.

**Explique os Benefícios de Longo Prazo:**

Implantes bem posicionados evitam complicações futuras, oferecem estabilidade e alta durabilidade (estudos indicam taxas de sucesso em torno de 95% ou mais, quando bem planejados e executados).

---

## Odontologia Estética

A odontologia estética vai muito além de apenas "embelezar" o sorriso. Ela visa harmonizar a face e melhorar a saúde bucal, abrangendo procedimentos como:

- Facetas ou Lentes de Contato:
Finas lâminas de porcelana ou resina que recobrem a parte frontal dos dentes.
Corrigem formato, cor e espaçamento de forma minimamente invasiva.
- Clareamento Dental:
Utilização de agentes clareadores (normalmente à base de peróxido de hidrogênio ou carbamida) para remover manchas e pigmentações.
Pode ser realizado em consultório ou com moldeiras personalizadas para uso em casa, sempre com acompanhamento profissional.
- Preenchimentos com Ácido Hialurônico:
Procedimento estético para contorno e volume em pontos específicos do rosto e lábios.
Pode corrigir rugas, sulcos e melhorar a simetria facial, contribuindo para uma aparência mais jovem.
- Bioestimuladores de Colágeno e Fios de PDO:
Substâncias e fios que promovem a produção de colágeno, melhorando o tônus e a firmeza da pele.
Ajudam a retardar a flacidez e o envelhecimento facial.

**Pontos-Chave para Secretárias e Marketing**

**Enfatize a Harmonia Facial**: 

Muitas pessoas buscam não só dentes brancos, mas um rosto mais equilibrado.

**Explique a Diferença entre Procedimentos**: 

Alguns pacientes podem não entender a diferença entre facetas, clareamento, preenchimentos etc. Ter clareza na explicação gera confiança.

**Cuidados Pós-Procedimento**

Ressalte a importância de seguir orientações de higiene, alimentação e proteção solar (no caso de preenchimentos e fios).

---

## Próteses dentárias (FIXAS E MÓVEIS)

Quando não é possível ou não se deseja realizar implantes, ou mesmo como complemento a eles, existem várias opções de próteses:

- Próteses Fixas (coroas e pontes):
São cimentadas ou parafusadas em dentes de suporte ou implantes, proporcionando estabilidade e maior conforto.
Indicadas em casos de perdas parciais ou para reforço de dentes enfraquecidos.
- Próteses Móveis (totais ou parciais):
Podem ser removidas para higienização.
Indicadas para pacientes que não podem passar por cirurgias ou têm limitações ósseas.

**Pontos-Chave para Secretárias e MarketingRessalte a Reposição dos Dentes**: Um sorriso completo melhora a mastigação, a fala e a autoestima.

**Explique a Diferença de Conforto**: Muitos pacientes têm dúvidas sobre adaptação. Informe que, mesmo com próteses móveis, há períodos de ajuste, mas o objetivo é sempre o conforto e a eficiência mastigatória.

**Agilidade na Entrega**

Se houver laboratório interno, valorize a rapidez na confecção e ajustes mais precisos.

---

## Ortodontia

Alinhamento e correção da posição dos dentes para melhorar a estética e a função mastigatória. Na Datafy Dental, oferecemos diversas opções:

- **Aparelho Fixo Metálico**: O modelo tradicional com bráquetes metálicos.
- **Aparelho Fixo Estético**: Utiliza bráquetes de porcelana ou safira, mais discretos.
- **Aparelho Autoligado**: Dispensa as borrachinhas, reduzindo atrito e, em muitos casos, o tempo de tratamento.

**Pontos-Chave para Secretárias e Marketing**

**Benefícios Além da Estética**: O alinhamento correto previne problemas gengivais, desgastes dentários e dores na articulação temporomandibular (ATM).

**Explique o Tempo de Tratamento**: O período pode variar, mas geralmente fica entre 12 a 36 meses, dependendo da complexidade do caso.

**Importância das Manutenções**: Ressalte que consultas de ajuste e acompanhamento frequentes garantem o sucesso do tratamento.

---

## **Cirurgias Odontológicas**

A área cirúrgica da clínica engloba procedimentos que vão desde extrações simples até enxertos complexos:

- **Extrações Dentais**:
    
    Inclui a remoção de sisos (terceiros molares) impactados ou de dentes com indicação de extração.
    
- **Gengivectomia**:
    
    Remoção de parte da gengiva para corrigir excessos ou hiperplasias gengivais.
    
- **Gengivoplastia**:
    
    Remoção e recontorno da gengiva para fins estéticos, harmonizando o sorriso.
    
- **Enxertos (ósseos ou gengivais)**:
    
    Para reconstrução de tecido ósseo ou gengival, muitas vezes preparatórios para implantes ou correções estéticas.
    
- **Instalação de Implantes**:
    
    Incluso o protocolo de cirurgias guiadas ou técnicas convencionais, conforme a necessidade do paciente.
    

**Pontos-Chave para Secretárias e Marketing**

- **Tranquilize o Paciente**: A ideia de "cirurgia" assusta. Ressalte o uso de anestésicos modernos, sedação consciente (quando disponível) e acompanhamento pós-operatório.
- **Destaque a Equipe Especializada**: Cirurgiões e periodontistas experientes geram credibilidade.
- **Orientações de Pré e Pós-Operatório**: Fundamental para reduzir medo e garantir melhor recuperação.

---

## **Clínica Odontológica Geral**

**Atendimento Integral para Toda a Família**

- **Limpezas de Rotina (Profilaxia)**: Remoção de placa e tártaro, polimento e aplicação de flúor.
- **Restaurações**: Correção de cáries ou fraturas com resina ou outros materiais seguros e estéticos.
- **Extrações Simples**: Sempre que necessário, após avaliação criteriosa.

**Ambiente Acolhedor e Tecnologia Avançada**

- Equipamentos modernos para diagnóstico (radiografias digitais, câmeras intraorais etc.).
- Profissionais atualizados e empáticos, prontos para ouvir preocupações e responder dúvidas.

**Perguntas Frequentes & Respostas**

1. **Com que frequência devo visitar o dentista?**
    
    Idealmente, duas vezes por ano. Mas pode variar conforme o histórico de cada pessoa.
    
2. **O que está incluído em uma limpeza dental de rotina?**
    
    Remoção de placa e tártaro, polimento dos dentes e aplicação de flúor. Também é feito um exame bucal para identificar eventuais problemas.
    
3. **O que fazer em caso de dor de dente?**
    
    Marcar consulta imediata. Analgésicos podem aliviar, mas não resolvem a causa. Evitar alimentos extremos (muito quentes ou frios) e manter a região limpa.
    
4. **Quais são os sinais de problemas gengivais?**
    
    Gengiva vermelha, inchada, sangramento fácil, mau hálito, retração gengival ou mobilidade dentária. Procurar avaliação profissional é essencial.
    
5. **Benefícios de exames regulares?**
    
    Detecção precoce de problemas, evitando tratamentos invasivos no futuro e mantendo a saúde bucal em dia.
    

**Pontos-Chave para Secretárias e Marketing**

- **Facilite o Agendamento**: Telefone, WhatsApp, formulário online. Mantenha canais abertos para contato.
- **Reforce o Acolhimento**: Uso de lembretes de consultas e follow-ups demonstra cuidado.
- **Programa de Fidelização**: Alguns consultórios oferecem vantagens para pacientes que mantêm check-ups regulares.

---`} />
          </div>
        </div>
      </div>
    </div>
  );
}
