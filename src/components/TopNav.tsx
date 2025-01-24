import React, { useState } from 'react';
import { Home, ChevronDown } from 'lucide-react';

const TopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = {
    'bilisim-hizmetleri': {
      title: 'Bilişim Hizmetleri',
      items: [
        { title: 'Teknik Destek', href: '/bilisim-hizmetleri/teknik-destek' },
        { title: 'Sistem Yönetimi', href: '/bilisim-hizmetleri/sistem-yonetimi' },
        { title: 'Yazılım Geliştirme', href: '/bilisim-hizmetleri/yazilim-gelistirme' }
      ]
    },
    'bilgi-guvenligi': {
      title: 'Bilgi Güvenliği',
      items: [
        { title: 'Güvenlik Politikaları', href: '/bilgi-guvenligi/politikalar' },
        { title: 'Siber Güvenlik', href: '/bilgi-guvenligi/siber-guvenlik' },
        { title: 'Veri Koruma', href: '/bilgi-guvenligi/veri-koruma' }
      ]
    },
    'butce-mali-rehber': {
      title: 'Bütçe ve Mali Rehber',
      items: [
        { title: 'Bütçe Yönetimi', href: '/butce-mali-rehber/butce-yonetimi' },
        { title: 'Mali Raporlar', href: '/butce-mali-rehber/mali-raporlar' },
        { title: 'Satın Alma Süreçleri', href: '/butce-mali-rehber/satin-alma' }
      ]
    },
    'kutuphane': {
      title: 'Kütüphane',
      items: [
        { title: 'E-Kaynaklar', href: '/kutuphane/e-kaynaklar' },
        { title: 'Süreli Yayınlar', href: '/kutuphane/sureli-yayinlar' },
        { title: 'Araştırma Veritabanları', href: '/kutuphane/veritabanlari' }
      ]
    }
  };

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-8">
            <a href="/home">
              <Home className="w-6 h-6 text-gray-600" />
            </a>
            <nav className="hidden md:flex space-x-6">
              {Object.entries(menuItems).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={`/${key}`}
                    className={`flex items-center gap-1 py-4 px-2 rounded-md transition-colors duration-200 ${
                      activeDropdown === key
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {menu.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`} />
                  </a>
                  
                  <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 mt-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-emerald-100">
                    {menu.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <div>
            <a href="/portal-giris">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                PORTAL GİRİŞ
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;