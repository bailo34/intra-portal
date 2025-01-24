import PageLayout from '../../components/PageLayout';
import { Database, Lock, FileText, Shield } from 'lucide-react';

const VeriKoruma = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Veri Koruma</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Korunan Veri</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">2.4 TB</p>
            <p className="text-sm text-gray-600">Toplam</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Şifreli Veri</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">98%</p>
            <p className="text-sm text-gray-600">Oran</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Yedekleme</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">6 saat</p>
            <p className="text-sm text-gray-600">Son</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Veri Sınıflandırma</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold">Çok Gizli</h3>
                </div>
                <p className="text-gray-600">En yüksek güvenlik seviyesi gerektiren veriler</p>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Veri Miktarı</span>
                    <span className="text-sm text-gray-600">250 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold">Gizli</h3>
                </div>
                <p className="text-gray-600">Yüksek güvenlik seviyesi gerektiren veriler</p>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Veri Miktarı</span>
                    <span className="text-sm text-gray-600">750 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold">Hizmete Özel</h3>
                </div>
                <p className="text-gray-600">Orta seviye güvenlik gerektiren veriler</p>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Veri Miktarı</span>
                    <span className="text-sm text-gray-600">1.4 TB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Veri Koruma Önlemleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Şifreleme</h3>
                </div>
                <p className="text-gray-600">AES-256 bit şifreleme standardı</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Yedekleme</h3>
                </div>
                <p className="text-gray-600">Otomatik yedekleme ve kurtarma</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold">Denetim</h3>
                </div>
                <p className="text-gray-600">Veri erişim ve kullanım logları</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold">DLP</h3>
                </div>
                <p className="text-gray-600">Veri sızıntı önleme sistemleri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VeriKoruma;