// components/Paper.tsx
import { FC, ReactNode } from 'react';

interface PaperProps {
  title?: string;
  children?: ReactNode;
}

const Paper: FC<PaperProps> = ({ title, children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-[#212121] my-4">
      <div className="max-w-3xl mx-auto bg-white rounded-md">
        <div
          className="w-full bg-white rounded-md"
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
              <h1 className="text-3xl ml-1 text-black font-grotesk">{title}</h1>
            )}
          </div>

          {/* Content section with ruled lines */}
          <div
            className="min-h-[500px] px-[5.2rem] py-5 font-phantom text-black leading-[1.25em]"
            style={{
              background: `
                linear-gradient(90deg, transparent 79px, #ec7063 79px, #ec7063 81px, transparent 81px),
                linear-gradient(#85c1e9 1px, transparent 1px)
              `,
              backgroundSize: '100% 1.25em',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
