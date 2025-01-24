import PageLayout from '../../components/PageLayout';
import { Shield, Lock, FileText, AlertTriangle } from 'lucide-react';

const GuvenlikPolitikalari = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Güvenlik Politikaları</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Politika Sayısı</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">24</p>
            <p className="text-sm text-gray-600">Aktif Politika</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Uyumluluk</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">98%</p>
            <p className="text-sm text-gray-600">Genel Uyum</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">İhlaller</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600">Son 30 Gün</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Temel Politikalar</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Parola Politikası</h3>
                </div>
                <p className="text-gray-600">Güçlü parola gereksinimleri ve düzenli değişim kuralları</p>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                  Detaylı Bilgi →
                </a>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Erişim Kontrol Politikası</h3>
                </div>
                <p className="text-gray-600">Sistem ve veri erişim yetkilendirme kuralları</p>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                  Detaylı Bilgi →
                </a>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold">Veri Sınıflandırma Politikası</h3>
                </div>
                <p className="text-gray-600">Kurumsal verilerin sınıflandırılması ve koruma düzeyleri</p>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                  Detaylı Bilgi →
                </a>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Politika Güncellemeleri</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Uzaktan Çalışma Güvenlik Politikası</h3>
                  <p className="text-sm text-gray-600">Güncelleme: 15.03.2024</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Yeni</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Mobil Cihaz Güvenlik Politikası</h3>
                  <p className="text-sm text-gray-600">Güncelleme: 10.03.2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Güncel</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">E-posta Güvenlik Politikası</h3>
                  <p className="text-sm text-gray-600">Güncelleme: 05.03.2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Güncel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GuvenlikPolitikalari;