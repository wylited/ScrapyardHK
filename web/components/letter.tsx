// components/RuledPaper.tsx
import { FC, ReactNode } from 'react';

interface RuledPaperProps {
  title?: string;
  children?: ReactNode;
}

const RuledPaper: FC<RuledPaperProps> = ({ title, children }) => {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="max-w-3xl mx-auto p-4">
        <div
          className="w-full bg-white rounded-md shadow-lg"
          style={{
            background: 'linear-gradient(to bottom, #f8f9fa 2px, transparent 2px)',
            backgroundSize: '100% 1.2em',
          }}
        >
          {/* Header section with title */}
          <div
            className="h-16 px-20 py-4"
            style={{
              background: 'linear-gradient(90deg, transparent 79px, #ec7063 79px, #ec7063 81px, transparent 81px)',
              backgroundSize: '100% 1.2em',
            }}
          >
            {title && (
              <h1 className="text-2xl font-serif">{title}</h1>
            )}
          </div>

          {/* Content section with ruled lines */}
          <div
            className="min-h-[500px] px-20 py-4 font-serif leading-[1.2em]"
            style={{
              background: `
                linear-gradient(90deg, transparent 79px, #ec7063 79px, #ec7063 81px, transparent 81px),
                linear-gradient(#85c1e9 1px, transparent 1px)
              `,
              backgroundSize: '100% 1.2em',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuledPaper;
