import PageLayout from '../components/PageLayout';
import { Book, BookOpen, Library, Search } from 'lucide-react';

const Kutuphane = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Kütüphane</h1>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Kitap, yazar veya konu ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Book className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">E-Kitap Koleksiyonu</h2>
            </div>
            <p className="text-gray-600">5000+ elektronik kitaba anında erişim</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Akademik Yayınlar</h2>
            </div>
            <p className="text-gray-600">Bilimsel dergi ve makaleler</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Library className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Fiziksel Kütüphane</h2>
            </div>
            <p className="text-gray-600">Ödünç alma ve iade işlemleri</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Search className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold">Araştırma Rehberi</h2>
            </div>
            <p className="text-gray-600">Araştırma ve kaynak kullanım kılavuzu</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Kutuphane;