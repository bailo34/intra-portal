import PageLayout from '../components/PageLayout';
import { Bell, Calendar, FileText, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Hoş Geldiniz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Duyurular</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600 mt-1">Yeni Duyuru</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Etkinlikler</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">5</p>
            <p className="text-sm text-gray-600 mt-1">Bu Hafta</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Dokümanlar</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">156</p>
            <p className="text-sm text-gray-600 mt-1">Toplam</p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold">Personel</h2>
            </div>
            <p className="text-3xl font-bold text-orange-600">342</p>
            <p className="text-sm text-gray-600 mt-1">Aktif</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Güncel Haberler</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">2024 Yılı Stratejik Plan Toplantısı</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Yıllık stratejik plan toplantısı 15 Mart 2024 tarihinde gerçekleştirilecektir.
                  </p>
                </div>
                <span className="text-sm text-gray-500">2 saat önce</span>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">Yeni E-İmza Sistemi Eğitimi</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Tüm personelimiz için e-imza sistemi kullanım eğitimi düzenlenecektir.
                  </p>
                </div>
                <span className="text-sm text-gray-500">5 saat önce</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Yaklaşan Etkinlikler</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-none w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">15</span>
                  <span className="text-sm text-blue-600">Mart</span>
                </div>
                <div>
                  <h3 className="font-medium">Stratejik Plan Toplantısı</h3>
                  <p className="text-gray-600 text-sm">Konferans Salonu, 10:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-none w-16 h-16 bg-green-50 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-green-600">20</span>
                  <span className="text-sm text-green-600">Mart</span>
                </div>
                <div>
                  <h3 className="font-medium">E-İmza Sistemi Eğitimi</h3>
                  <p className="text-gray-600 text-sm">Eğitim Salonu, 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;