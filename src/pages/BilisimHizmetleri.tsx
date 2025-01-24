import PageLayout from '../components/PageLayout';
import { Laptop, Wifi, HardDrive, Printer, BarChart, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const BilisimHizmetleri = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Bilişim Hizmetleri</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <BarChart className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Sistem Durumu</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">99.9%</p>
            <p className="text-sm text-gray-600 mt-1">Çalışma Süresi</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Aktif Talepler</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">24</p>
            <p className="text-sm text-gray-600 mt-1">İşlemde</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">Bekleyen</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">8</p>
            <p className="text-sm text-gray-600 mt-1">Talep</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Ort. Yanıt</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">2.5s</p>
            <p className="text-sm text-gray-600 mt-1">Saat</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Donanım Destek</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Bilgisayar ve çevre birimleri için teknik destek hizmetleri</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Masaüstü Bilgisayarlar</span>
                  <span className="text-sm text-green-600">98% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Dizüstü Bilgisayarlar</span>
                  <span className="text-sm text-green-600">95% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Monitörler</span>
                  <span className="text-sm text-green-600">99% Aktif</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">Destek Talebi Oluştur →</a>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Ağ Hizmetleri</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">İnternet ve ağ altyapı hizmetleri</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">İnternet Bağlantısı</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Yerel Ağ</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">VPN</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">Ağ Durumunu Kontrol Et →</a>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <HardDrive className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Sunucu Yönetimi</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Kurumsal sunucu ve veri merkezi hizmetleri</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Web Sunucuları</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Veritabanı Sunucuları</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Yedekleme Sistemleri</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">Sunucu Durumunu İzle →</a>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Printer className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-semibold">Yazıcı Hizmetleri</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Yazıcı kurulum ve destek hizmetleri</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Kat Yazıcıları</span>
                  <span className="text-sm text-green-600">95% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Departman Yazıcıları</span>
                  <span className="text-sm text-green-600">98% Aktif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Tarayıcılar</span>
                  <span className="text-sm text-green-600">100% Aktif</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">Yazıcı Sorunu Bildir →</a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BilisimHizmetleri;