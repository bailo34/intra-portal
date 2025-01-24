import PageLayout from '../../components/PageLayout';
import { Code, GitBranch, Package, CheckCircle, Clock, Users } from 'lucide-react';

const YazilimGelistirme = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Yazılım Geliştirme</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Aktif Projeler</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Devam Eden</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Tamamlanan</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">45</p>
            <p className="text-sm text-gray-600">Son 12 Ay</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Ekip</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">24</p>
            <p className="text-sm text-gray-600">Geliştirici</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Geliştirme Süreçleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Yazılım Geliştirme</h3>
                  <p className="text-gray-600 mt-1">Modern teknolojiler ile uygulama geliştirme</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <GitBranch className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Versiyon Kontrolü</h3>
                  <p className="text-gray-600 mt-1">Git tabanlı kaynak kod yönetimi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Dağıtım Süreçleri</h3>
                  <p className="text-gray-600 mt-1">CI/CD ve otomatik dağıtım süreçleri</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Proje Yönetimi</h3>
                  <p className="text-gray-600 mt-1">Çevik metodolojiler ve sprint yönetimi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Aktif Projeler</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">E-Belge Sistemi</h3>
                  <p className="text-sm text-gray-600">Elektronik belge yönetim sistemi geliştirme</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Geliştirme</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Mobil Uygulama</h3>
                  <p className="text-sm text-gray-600">Kurumsal mobil uygulama geliştirme</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Test</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">API Gateway</h3>
                  <p className="text-sm text-gray-600">Merkezi API yönetim sistemi</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Planlama</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default YazilimGelistirme;