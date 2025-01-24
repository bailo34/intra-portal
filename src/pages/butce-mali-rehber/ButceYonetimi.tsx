import PageLayout from '../../components/PageLayout';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const ButceYonetimi = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Bütçe Yönetimi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Toplam Bütçe</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">15.2M</p>
            <p className="text-sm text-gray-600">2024 Yılı</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Gelirler</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">8.4M</p>
            <p className="text-sm text-gray-600">YTD</p>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-semibold">Giderler</h2>
            </div>
            <p className="text-3xl font-bold text-red-600">6.8M</p>
            <p className="text-sm text-gray-600">YTD</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <PieChart className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Kullanım</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">45%</p>
            <p className="text-sm text-gray-600">Bütçe</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Bütçe Dağılımı</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Personel Giderleri</span>
                  <span className="text-sm font-medium">4.2M (35%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Teknoloji Yatırımları</span>
                  <span className="text-sm font-medium">3.6M (30%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Operasyonel Giderler</span>
                  <span className="text-sm font-medium">2.4M (20%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Diğer Giderler</span>
                  <span className="text-sm font-medium">1.8M (15%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Bütçe Onay Süreci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Talep Oluşturma</h3>
                <p className="text-gray-600">Bütçe talepleri ilgili birim yöneticisi tarafından oluşturulur</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Ön İnceleme</h3>
                <p className="text-gray-600">Mali İşler birimi tarafından ön değerlendirme yapılır</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Üst Yönetim Onayı</h3>
                <p className="text-gray-600">Talep üst yönetim tarafından değerlendirilir</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Tahsis</h3>
                <p className="text-gray-600">Onaylanan bütçe ilgili birime tahsis edilir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ButceYonetimi;