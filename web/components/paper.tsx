import { FC, ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

interface PaperProps {
  title?: string;
  date?: string;
  sub?: string;
  children?: ReactNode;
}

const Paper: FC<PaperProps> = ({ title, date, sub, children }) => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full h-full min-h-screen bg-[#212121] my-4">
      <div className="max-w-3xl mx-2 md:mx-auto bg-[#f2f2f2] rounded-md">
        <div
          className="w-full bg-white rounded-md"
          style={{
            background: 'linear-gradient(to bottom, #f8f9fa 2px, transparent 2px)',
            backgroundSize: '100% 1.2em',
          }}
        >
          {/* Header section with title and date */}
          <div
            className="h-16 pl-8 py-4 pr-5"
            style={{
              background: 'linear-gradient(90deg, transparent 30px, #ec7063 32px, #ec7063 32px, transparent 32px)',
              backgroundSize: '100% 1.2em',
            }}
          >
            <div className="flex justify-between items-center">
              {title && (
                <h1 className="text-xl md:text-2xl lg:text-3xl ml-1 text-black font-grotesk">{t(title)}</h1>
              )}
              {date && (
                <div className="flex flex-col">
                <span className="text-xs md:text-sm text-gray-600 font-grotesk">{t(date)}</span>
                <span className="text-xs md:text-sm text-gray-600 font-grotesk">{t(sub)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Content section with ruled lines */}
          <div
            className="min-h-[500px] pl-10 py-6 font-phantom text-black text-lg leading-[1.25em] md:text-xl md:py-7 md:leading-[1.25em] "
            style={{
              background: `
                linear-gradient(90deg, transparent 30px, #ec7063 32px, #ec7063 32px, transparent 32px),
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
