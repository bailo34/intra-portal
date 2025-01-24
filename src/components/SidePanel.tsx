import React from 'react';

interface SidePanelProps {
  title: string;
  icon: React.ReactNode;
}

const SidePanel = ({ title, icon }: SidePanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      
      <div className="space-y-3 text-sm">
        {title === "Günün Yemeği" ? (
          <>
            <div className="flex justify-between">
              <span>Mercimek Çorbası</span>
              <span className="text-gray-600">120 kcal</span>
            </div>
            <div className="flex justify-between">
              <span>Etli Pilav</span>
              <span className="text-gray-600">350 kcal</span>
            </div>
            <div className="flex justify-between">
              <span>Mevsim Salata</span>
              <span className="text-gray-600">45 kcal</span>
            </div>
          </>
        ) : title === "Telefon Rehberi" ? (
          <div className="text-center">
            <a href="/telefon-rehberi" className="text-blue-600 hover:underline">
              Rehbere erişmek için tıklayınız
            </a>
          </div>
        ) : (
          <>
            <a href="/saglik/dr-ahmet-yilmaz" className="flex justify-between hover:bg-gray-50 p-1">
              <span>Dr. Ahmet Yılmaz</span>
              <span className="text-gray-600">4512</span>
            </a>
            <a href="/saglik/hemsire-ayse-kaya" className="flex justify-between hover:bg-gray-50 p-1">
              <span>Hemşire Ayşe Kaya</span>
              <span className="text-gray-600">4513</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default SidePanel;