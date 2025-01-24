import PageLayout from '../components/PageLayout';
import { BookOpen, Search, Download, Filter } from 'lucide-react';

const KariyerTezleri = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Kariyer Uzmanlık Tezleri</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Tez başlığı veya yazar ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          
          <button className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200">
            <Filter className="w-5 h-5" />
            Filtrele
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Dijital Dönüşüm Sürecinde Kamu Yönetimi</h3>
                <p className="text-gray-600 mb-2">Ahmet Yılmaz | 2023</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>Bilişim | 156 sayfa</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                <Download className="w-5 h-5" />
                <span className="text-sm">PDF</span>
              </button>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Yapay Zeka ve Kamu Hizmetleri</h3>
                <p className="text-gray-600 mb-2">Ayşe Kaya | 2023</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>Bilişim | 142 sayfa</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                <Download className="w-5 h-5" />
                <span className="text-sm">PDF</span>
              </button>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Sürdürülebilir Kalkınma ve Çevre Politikaları</h3>
                <p className="text-gray-600 mb-2">Mehmet Demir | 2022</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>Çevre | 184 sayfa</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                <Download className="w-5 h-5" />
                <span className="text-sm">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default KariyerTezleri;