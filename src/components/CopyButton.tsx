'use client';

import { FaCopy } from 'react-icons/fa';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button 
      onClick={copyToClipboard}
      className="text-gray-500 hover:text-gray-700 transition-colors"
    >
      <FaCopy />
    </button>
  );
}
