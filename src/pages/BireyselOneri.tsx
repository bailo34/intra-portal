import PageLayout from '../components/PageLayout';
import { Lightbulb, Send, ThumbsUp, MessageSquare } from 'lucide-react';

const BireyselOneri = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Bireysel Öneri Sistemi</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Toplam Öneri</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">247</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <ThumbsUp className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Kabul Edilen</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">156</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Değerlendirmede</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">32</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Yeni Öneri Oluştur</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Öneri Başlığı
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Öneriniz için kısa bir başlık girin"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Öneri Detayı
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Önerinizi detaylı bir şekilde açıklayın"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              Öneri Gönder
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BireyselOneri;