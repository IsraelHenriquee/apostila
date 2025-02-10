import { FaDatabase, FaSearch, FaServer, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Aula3() {
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
            <a href="/aula1" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">Aula 1</a>
            <a href="/aula2" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">Aula 2</a>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Aula 3</span>
          </div>
        </div>

        {/* Aula Info Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 text-gray-600 mb-3">
            <span className="font-medium">Aula 3</span>
            <span>•</span>
            <span>12/02</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FaYoutube className="text-red-500" />
              Ao vivo no Youtube
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Assistente Financeiro
          </h2>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Habilidades do Agente</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50">
              <div className="bg-green-500 p-3 rounded-xl">
                <FaDatabase className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Gestão de Gastos</h3>
                <p className="text-green-700">Salva informações de gastos diretamente no banco de dados</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FaSearch className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Consulta de Despesas</h3>
                <p className="text-blue-700">Busca e sumariza informações de gastos por data</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50">
              <div className="bg-purple-500 p-3 rounded-xl">
                <FaServer className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800 mb-2">Integração com Supabase</h3>
                <p className="text-purple-700">Realiza consultas SQL avançadas para análise de dados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ferramentas Necessárias</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex justify-around items-center">
              <div className="text-center">
                <Image src="/n8n.svg" alt="n8n logo" width={40} height={40} className="rounded-xl mx-auto mb-2" />
                <h3 className="font-bold text-gray-800">n8n</h3>
                <p className="text-sm text-gray-500">Automação de Fluxos</p>
              </div>

              <div className="text-center">
                <Image src="/openai.svg" alt="OpenAI logo" width={40} height={40} className="rounded-xl mx-auto mb-2" />
                <h3 className="font-bold text-gray-800">OpenAI</h3>
                <p className="text-sm text-gray-500">Inteligência Artificial</p>
              </div>

              <div className="text-center">
                <Image src="/icone-datafy.png" alt="Datafy Chats logo" width={40} height={40} className="rounded-xl mx-auto mb-2" />
                <h3 className="font-bold text-gray-800">Datafy Chats</h3>
                <p className="text-sm text-gray-500">Integração com WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Tools Section */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ferramentas Adicionais</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-6">
              <Image src="/supabase.svg" alt="Supabase logo" width={40} height={40} className="rounded-xl" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Supabase</h3>
                <p className="text-gray-600 mb-6">
                  O Supabase é um backend que usa um banco de dados Postgres, muito veloz e performático, além de ser extremamente simples de usar.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.youtube.com/watch?v=brLc07NP-Ww" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FaYoutube className="text-red-500" />
                    <span>Crie sua conta no Supabase gratuitamente</span>
                  </a>
                  
                  <a 
                    href="https://www.youtube.com/watch?v=ponEtWUrjc4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FaYoutube className="text-red-500" />
                    <span>Crie as credenciais do Supabase para usar no n8n</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-6">
              <Image src="/postgres.svg" alt="Postgres logo" width={40} height={40} className="rounded-xl" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Postgres</h3>
                <p className="text-gray-600 mb-6">
                  O Postgres é um banco de dados extremamente veloz e performático, o mesmo usado pelo Supabase.
                  A integração com postgres nos permite executar comandos avançados para consultas complexas.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.youtube.com/watch?v=ponEtWUrjc4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FaYoutube className="text-red-500" />
                    <span>Clique aqui para criar a credencial Postgres para n8n</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Base Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Prompt Base do Agente</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-gray-500 text-center">
                Será desenvolvido ao vivo na aula
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
