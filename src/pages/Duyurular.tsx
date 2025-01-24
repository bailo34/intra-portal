import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { Bell, Calendar, User, Tag } from 'lucide-react';

const Duyurular = () => {
  const { kategori } = useParams();

  // Normalde bu veriler API'den gelecek
  const duyurular = {
    genel: [
      {
        id: 1,
        baslik: 'Bireysel Öneri Sistemi Kullanıma Açıldı',
        tarih: '27.01.2024',
        yazar: 'Sistem Yöneticisi',
        kategori: 'Genel',
        ozet: 'Kurumumuz bireysel öneri sistemi tüm personelimizin kullanımına açılmıştır.'
      },
      {
        id: 2,
        baslik: '2024 Yılı Hizmet İçi Eğitim Planı',
        tarih: '25.01.2024',
        yazar: 'İnsan Kaynakları',
        kategori: 'Genel',
        ozet: '2024 yılı hizmet içi eğitim planı yayınlanmıştır.'
      }
    ],
    'bilgi-guvenligi': [
      {
        id: 3,
        baslik: 'Yeni Şifre Politikası Uygulaması',
        tarih: '23.01.2024',
        yazar: 'Bilgi Güvenliği Birimi',
        kategori: 'Bilgi Güvenliği',
        ozet: 'Kurumsal şifre politikamız güncellenmiştir.'
      }
    ],
    ebays: [
      {
        id: 4,
        baslik: 'EBAYS Sistem Güncellemesi',
        tarih: '20.01.2024',
        yazar: 'Bilgi İşlem',
        kategori: 'EBAYS',
        ozet: 'EBAYS sisteminde yeni özellikler kullanıma sunulmuştur.'
      }
    ]
  };

  const kategoriBasliklari = {
    genel: 'Genel Duyurular',
    'bilgi-guvenligi': 'Bilgi Güvenliği Duyuruları',
    ebays: 'EBAYS Duyuruları'
  };

  const secilenDuyurular = duyurular[kategori as keyof typeof duyurular] || [];
  const kategoriBaslik = kategoriBasliklari[kategori as keyof typeof kategoriBasliklari] || 'Duyurular';

  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold">{kategoriBaslik}</h1>
        </div>
        
        <div className="space-y-4">
          {secilenDuyurular.map((duyuru) => (
            <a
              key={duyuru.id}
              href={`/duyurular/${duyuru.id}`}
              className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold mb-2">{duyuru.baslik}</h2>
              <p className="text-gray-600 mb-3">{duyuru.ozet}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{duyuru.tarih}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{duyuru.yazar}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>{duyuru.kategori}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Duyurular;