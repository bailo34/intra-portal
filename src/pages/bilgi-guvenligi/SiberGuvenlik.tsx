import PageLayout from '../../components/PageLayout';
import { Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const SiberGuvenlik = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Siber Güvenlik</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Güvenlik Durumu</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">Normal</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Engellenen</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">1.2K</p>
            <p className="text-sm text-gray-600">Saldırı</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">Uyarılar</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600">Aktif</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Sistem Yükü</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">45%</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Güvenlik Olayları</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold">Şüpheli Giriş Denemesi</h3>
                      <p className="text-sm text-gray-600">IP: 192.168.1.100</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 saat önce</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold">DDoS Saldırısı Engellendi</h3>
                      <p className="text-sm text-gray-600">Otomatik koruma aktif</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">5 saat önce</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Güvenlik Önlemleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Güvenlik Duvarı</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Durum</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Aktif</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Antivirüs</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Son Güncelleme</span>
                  <span className="text-sm text-gray-600">2 saat önce</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">IPS/IDS</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Durum</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Aktif</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">SSL/TLS</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Sertifika</span>
                  <span className="text-sm text-gray-600">Güncel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SiberGuvenlik;