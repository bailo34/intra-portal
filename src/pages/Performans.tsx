import PageLayout from '../components/PageLayout';
import { BarChart, Target, TrendingUp, Award } from 'lucide-react';

const Performans = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Performans Değerlendirme</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Hedef</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">85%</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Gerçekleşme</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">78%</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <BarChart className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Verimlilik</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">92%</p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold">Başarı Puanı</h2>
            </div>
            <p className="text-3xl font-bold text-orange-600">4.2</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Hedef 1: Proje Yönetimi</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Hedef 2: Ekip Yönetimi</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Hedef 3: İnovasyon</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">İlerleme</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Performans;