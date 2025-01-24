import PageLayout from '../../components/PageLayout';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

const MaliRaporlar = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Mali Raporlar</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Rapor ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Filter className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          
          <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Tüm Dönemler</option>
            <option>2024 Q1</option>
            <option>2023 Q4</option>
            <option>2023 Q3</option>
          </select>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">2024 Q1 Mali Durum Raporu</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    2024 yılı ilk çeyrek mali durum ve bütçe gerçekleşme raporu
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>31.03.2024</span>
                    </div>
                  </div>
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
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">2023 Q4 Mali Durum Raporu</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    2023 yılı son çeyrek mali durum ve bütçe gerçekleşme raporu
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>31.12.2023</span>
                    </div>
                  </div>
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
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">2023 Q3 Mali Durum Raporu</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    2023 yılı üçüncü çeyrek mali durum ve bütçe gerçekleşme raporu
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>30.09.2023</span>
                    </div>
                  </div>
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

export default MaliRaporlar;