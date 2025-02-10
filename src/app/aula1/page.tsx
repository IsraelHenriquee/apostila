import { FaWhatsapp, FaImages, FaGoogle, FaMobile, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { CopyPrompt } from '@/components/CopyPrompt';
import { promptBase } from '@/components/PromptBase';

export default function Aula1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Image src="/logo.png" alt="Datafy Logo" width={200} height={80} className="rounded-2xl mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Workshop Datafy Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Aprenda em 3 aulas a criar 3 Agentes de IA para WhatsApp
          </p>

          {/* Navegação */}
          <div className="flex justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Aula 1</span>
            <a href="/aula2" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">Aula 2</a>
            <a href="/aula3" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">Aula 3</a>
          </div>
        </div>

        {/* Aula Info Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 text-gray-600 mb-3">
            <span className="font-medium">Aula 1</span>
            <span>•</span>
            <span>10/02</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FaYoutube className="text-red-500" />
              Ao vivo no Youtube
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Agente de IA para clínica odontológica
          </h2>
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
            
            <CopyPrompt content={promptBase} />
          </div>
        </div>

        {/* Imagens Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Imagens para o Agente</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <p className="text-gray-600 mb-6">
              Aqui estão as imagens que podem ser utilizadas pelo agente para demonstrar resultados de procedimentos.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Implante dentário - Antes e depois</h3>
                <CopyPrompt content="https://dxgfndiyiowflxhnubwi.supabase.co/storage/v1/object/public/bucket1//implante2.png" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Clareamento - Antes e depois</h3>
                <CopyPrompt content="https://dxgfndiyiowflxhnubwi.supabase.co/storage/v1/object/public/bucket1//Clareamento.png" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Prótese</h3>
                <CopyPrompt content="https://dxgfndiyiowflxhnubwi.supabase.co/storage/v1/object/public/bucket1//protese.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
      </div>
    </div>
  );
}
