import PageLayout from '../../components/PageLayout';
import { Server, Database, Cloud, Shield, Activity, Users } from 'lucide-react';

const SistemYonetimi = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Sistem Yönetimi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Sistem Durumu</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">99.9%</p>
            <p className="text-sm text-gray-600">Çalışma Süresi</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Aktif Kullanıcı</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">1.2K</p>
            <p className="text-sm text-gray-600">Anlık</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Güvenlik</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">Aktif</p>
            <p className="text-sm text-gray-600">Tüm Sistemler</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sistem Kaynakları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Server className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Sunucu Yönetimi</h3>
                  <p className="text-gray-600 mt-1">Fiziksel ve sanal sunucu altyapısı yönetimi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Database className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Veritabanı Yönetimi</h3>
                  <p className="text-gray-600 mt-1">Veritabanı sistemleri ve yedekleme yönetimi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Cloud className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Bulut Sistemleri</h3>
                  <p className="text-gray-600 mt-1">Hibrit bulut altyapısı ve servis yönetimi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Güvenlik Sistemleri</h3>
                  <p className="text-gray-600 mt-1">Sistem güvenliği ve izleme araçları</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sistem Durumu</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">CPU Kullanımı</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">RAM Kullanımı</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Disk Kullanımı</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SistemYonetimi;