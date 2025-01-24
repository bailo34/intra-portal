import React from 'react';

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  link: string;
}

const DashboardCard = ({ title, icon, bgColor, link }: DashboardCardProps) => {
  return (
    <a
      href={link}
      className={`${bgColor} rounded-lg p-6 text-white transition-transform hover:-translate-y-1`}
    >
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <span className="text-white/80">Giriş »</span>
        </div>
      </div>
    </a>
  );
};

export default DashboardCard;