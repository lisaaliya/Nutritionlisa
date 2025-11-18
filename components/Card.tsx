import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title, subtitle, className = '', icon }) => {
  return (
    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 mb-6 ${className}`}>
      {(title || icon) && (
        <div className="mb-6 border-b border-pink-50 pb-4">
          <div className="flex items-center gap-3">
            {icon && <span className="text-pink-800">{icon}</span>}
            <div>
              {title && <h3 className="text-2xl font-bold text-pink-800">{title}</h3>}
              {subtitle && <p className="text-stone-500 text-sm mt-1">{subtitle}</p>}
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;