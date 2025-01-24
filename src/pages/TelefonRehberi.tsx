import PageLayout from '../components/PageLayout';
import { Phone, Search, Building, Users } from 'lucide-react';

const TelefonRehberi = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Telefon Rehberi</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="İsim veya birim ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          
          <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Tüm Birimler</option>
            <option value="bilgi-islem">Bilgi İşlem</option>
            <option value="insan-kaynaklari">İnsan Kaynakları</option>
            <option value="mali-isler">Mali İşler</option>
          </select>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Bilgi İşlem Daire Başkanlığı</h3>
                <div className="flex items-center gap-4 text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>A Blok, 3. Kat</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>25 Personel</span>
                  </div>
                </div>
              </div>
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Mehmet Yılmaz</p>
                  <p className="text-sm text-gray-600">Daire Başkanı</p>
                </div>
                <p className="text-blue-600">1001</p>
              </div>
              
              <div className="flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Ayşe Kaya</p>
                  <p className="text-sm text-gray-600">Yazılım Geliştirme Müdürü</p>
                </div>
                <p className="text-blue-600">1002</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">İnsan Kaynakları Daire Başkanlığı</h3>
                <div className="flex items-center gap-4 text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>B Blok, 2. Kat</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>18 Personel</span>
                  </div>
                </div>
              </div>
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Ali Demir</p>
                  <p className="text-sm text-gray-600">Daire Başkanı</p>
                </div>
                <p className="text-blue-600">2001</p>
              </div>
              
              <div className="flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Zeynep Şahin</p>
                  <p className="text-sm text-gray-600">Özlük İşleri Müdürü</p>
                </div>
                <p className="text-blue-600">2002</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TelefonRehberi;