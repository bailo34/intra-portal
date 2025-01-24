import PageLayout from '../../components/PageLayout';
import { Laptop, Printer, Wifi, HardDrive, Phone, Clock } from 'lucide-react';

const TeknikDestek = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Teknik Destek</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Ortalama Yanıt Süresi</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">15dk</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Destek Hattı</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">1234</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Laptop className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Aktif Talepler</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">8</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Destek Kategorileri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Laptop className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Donanım Desteği</h3>
                  <p className="text-gray-600 mt-1">Bilgisayar, monitör ve çevre birimleri için teknik destek</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Printer className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Yazıcı Sorunları</h3>
                  <p className="text-gray-600 mt-1">Yazıcı kurulum ve sorun giderme desteği</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Wifi className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Ağ Sorunları</h3>
                  <p className="text-gray-600 mt-1">İnternet ve ağ bağlantı sorunları desteği</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <HardDrive className="w-6 h-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Sistem Sorunları</h3>
                  <p className="text-gray-600 mt-1">İşletim sistemi ve yazılım sorunları desteği</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Destek Talebi Oluştur</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Donanım Desteği</option>
                  <option>Yazıcı Sorunları</option>
                  <option>Ağ Sorunları</option>
                  <option>Sistem Sorunları</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Öncelik
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Normal</option>
                  <option>Yüksek</option>
                  <option>Acil</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Açıklama
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Sorununuzu detaylı bir şekilde açıklayın"
                ></textarea>
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

export default TeknikDestek;