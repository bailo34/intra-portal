import React from 'react';

const AnnouncementSection = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Kurumsal Haber ve Duyurular</h2>
      
      <div className="flex space-x-2 mb-4">
        <a href="/duyurular/genel" className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
          Genel Duyurular
        </a>
        <a href="/duyurular/bilgi-guvenligi" className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
          Bilgi Güvenliği
        </a>
        <a href="/duyurular/ebays" className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
          EBAYS
        </a>
      </div>

      <div className="space-y-4">
        <a href="/duyurular/1" className="block border-b pb-4 hover:bg-gray-50">
          <h3 className="font-medium mb-2">Bireysel Öneri Sistemi Kullanıma Açıldı</h3>
          <p className="text-sm text-gray-600">27.01.2024</p>
        </a>
        <a href="/duyurular/2" className="block border-b pb-4 hover:bg-gray-50">
          <h3 className="font-medium mb-2">2024 Yılı Hizmet İçi Eğitim Planı</h3>
          <p className="text-sm text-gray-600">25.01.2024</p>
        </a>
        <a href="/duyurular/3" className="block border-b pb-4 hover:bg-gray-50">
          <h3 className="font-medium mb-2">Yeni Personel Kimlik Kartları Hakkında</h3>
          <p className="text-sm text-gray-600">23.01.2024</p>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementSection;