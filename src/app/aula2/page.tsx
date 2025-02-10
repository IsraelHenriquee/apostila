import { FaImages, FaRobot, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Aula2() {
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
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Aula 2</span>
            <a href="/aula3" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">Aula 3</a>
          </div>
        </div>

        {/* Aula Info Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 text-gray-600 mb-3">
            <span className="font-medium">Aula 2</span>
            <span>•</span>
            <span>11/02</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FaYoutube className="text-red-500" />
              Ao vivo no Youtube
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Agente de IA que lê imagens
          </h2>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Habilidades do Agente</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50">
              <div className="bg-green-500 p-3 rounded-xl">
                <FaImages className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Análise de Alimentos</h3>
                <p className="text-green-700">Recebe imagens de alimentos e extrai informações detalhadas sobre macronutrientes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FaRobot className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Integração com OpenAI</h3>
                <p className="text-blue-700">Conecta-se com ferramentas externas da OpenAI para análise avançada de imagens</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ferramentas Necessárias</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <p className="text-gray-600 mb-6">
              Utilizaremos as mesmas ferramentas da Aula 1:
            </p>

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

        {/* Prompt Base Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Prompt Base do Agente</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-gray-500 text-center">
                O prompt base será desenvolvido durante a aula ao vivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
