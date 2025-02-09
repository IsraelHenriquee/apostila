import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8">Material do Curso</h1>
        
        <div className="space-y-6">
          <Link href="/aula1" 
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Aula 1</h2>
            <p className="text-gray-600">Introdução aos conceitos básicos</p>
          </Link>

          <Link href="/aula2"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Aula 2</h2>
            <p className="text-gray-600">Aprofundamento do conhecimento</p>
          </Link>

          <Link href="/aula3"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Aula 3</h2>
            <p className="text-gray-600">Consolidação e conclusão</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
