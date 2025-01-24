import PageLayout from '../components/PageLayout';
import { Shield, Lock, FileWarning, UserCheck, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';

const BilgiGuvenligi = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Bilgi Güvenliği</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Güvenlik Durumu</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">İyi</p>
            <p className="text-sm text-gray-600 mt-1">Son kontrol: 2 saat önce</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Uyumluluk</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">98%</p>
            <p className="text-sm text-gray-600 mt-1">ISO 27001</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">Uyarılar</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600 mt-1">Düşük risk</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Eğitimler</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">12</p>
            <p className="text-sm text-gray-600 mt-1">Tamamlanan</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Güvenlik Politikaları</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">Veri Güvenliği Politikası</h3>
                  <p className="text-gray-600 mt-1">Kurumsal verilerin korunması ve güvenli şekilde işlenmesi için temel prensipler</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline">Detaylar</a>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">Erişim Kontrol Politikası</h3>
                  <p className="text-gray-600 mt-1">Sistemlere erişim yetkilendirme ve kontrol prensipleri</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline">Detaylar</a>
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Şifre Güvenliği</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Güçlü Şifre Kriterleri</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>En az 8 karakter uzunluğunda</li>
                  <li>En az 1 büyük harf</li>
                  <li>En az 1 küçük harf</li>
                  <li>En az 1 rakam</li>
                  <li>En az 1 özel karakter</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileWarning className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">Veri Sızıntısı Önleme</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">DLP Politikaları</h3>
                  <p className="text-gray-600 mt-1">Hassas verilerin kurum dışına çıkmasını önleme prosedürleri</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline">Detaylar</a>
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Güvenlik Eğitimleri</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">Zorunlu Güvenlik Eğitimleri</h3>
                  <p className="text-gray-600 mt-1">Tüm personel için temel bilgi güvenliği farkındalık eğitimleri</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline">Katıl</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BilgiGuvenligi;