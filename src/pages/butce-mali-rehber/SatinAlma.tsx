import PageLayout from '../../components/PageLayout';
import { ShoppingCart, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const SatinAlma = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Satın Alma Süreçleri</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Aktif Talepler</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold">Bekleyen</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">12</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Tamamlanan</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">156</p>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-semibold">İptal</h2>
            </div>
            <p className="text-3xl font-bold text-red-600">3</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Satın Alma Süreci</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                <div className="relative flex items-center gap-4">
                  <div className="absolute left-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div className="ml-24">
                    <h3 className="font-semibold">Talep Oluşturma</h3>
                    <p className="text-gray-600 mt-1">
                      İhtiyaç sahibi birim tarafından satın alma talebi oluşturulur
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="absolute left-0 w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">2</span>
                  </div>
                  <div className="ml-24">
                    <h3 className="font-semibold">Onay Süreci</h3>
                    <p className="text-gray-600 mt-1">
                      Talep ilgili yöneticiler tarafından değerlendirilir
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="absolute left-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div className="ml-24">
                    <h3 className="font-semibold">Teklif Toplama</h3>
                    <p className="text-gray-600 mt-1">
                      Satın alma birimi tarafından piyasa araştırması yapılır
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="absolute left-0 w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div className="ml-24">
                    <h3 className="font-semibold">Sipariş ve Teslimat</h3>
                    <p className="text-gray-600 mt-1">
                      Seçilen tedarikçiye sipariş verilir ve teslimat takibi yapılır
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Yeni Satın Alma Talebi</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Talep Türü
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Malzeme Alımı</option>
                  <option>Hizmet Alımı</option>
                  <option>Yazılım/Donanım</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Açıklama
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Satın alma talebinizi detaylı bir şekilde açıklayın"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tahmini Bütçe
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00 TL"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Talep Oluştur
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SatinAlma;