'use client';

import { FaCopy } from 'react-icons/fa';

interface CopyPromptProps {
  content: string;
}

export function CopyPrompt({ content }: CopyPromptProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error('Falha ao copiar texto:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        title="Copiar prompt"
      >
        <FaCopy className="text-lg" />
      </button>
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto whitespace-pre-wrap text-sm">
        {content}
      </pre>
    </div>
  );
}
