import PageLayout from '../components/PageLayout';
import { Target, Clock, Users, TrendingUp } from 'lucide-react';

const KurumsalHedefler = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Kurumsal Hedefler</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Toplam Hedef</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Süre</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">Q4</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Katılımcı</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">156</p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold">İlerleme</h2>
            </div>
            <p className="text-3xl font-bold text-orange-600">68%</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Stratejik Hedef 1: Dijital Dönüşüm</h3>
            <p className="text-gray-600 mb-4">
              Kurumsal süreçlerin %80'inin dijitalleştirilmesi ve otomasyon sistemlerinin kurulması
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Stratejik Hedef 2: Verimlilik Artışı</h3>
            <p className="text-gray-600 mb-4">
              İş süreçlerinde %25 verimlilik artışı sağlanması ve maliyetlerin optimize edilmesi
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Stratejik Hedef 3: İnsan Kaynakları Gelişimi</h3>
            <p className="text-gray-600 mb-4">
              Personel yetkinliklerinin artırılması ve kariyer gelişim programlarının uygulanması
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default KurumsalHedefler;