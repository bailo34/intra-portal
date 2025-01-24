import PageLayout from '../components/PageLayout';
import { DollarSign, FileSpreadsheet, Calculator, PieChart } from 'lucide-react';

const ButceMaliRehber = () => {
  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Bütçe ve Mali Rehber</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold">Bütçe Yönetimi</h2>
            </div>
            <p className="text-gray-600">Yıllık bütçe planlaması ve takibi</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FileSpreadsheet className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Mali Raporlar</h2>
            </div>
            <p className="text-gray-600">Aylık ve yıllık mali raporlar</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Harcama Prosedürleri</h2>
            </div>
            <p className="text-gray-600">Harcama yetkileri ve onay süreçleri</p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <PieChart className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold">Bütçe Analizi</h2>
            </div>
            <p className="text-gray-600">Bütçe gerçekleşme analizleri</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ButceMaliRehber;