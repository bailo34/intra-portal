import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const DuyuruDetay = () => {
  const { id } = useParams();

  // Normalde bu veriler API'den gelecek
  const duyurular = {
    1: {
      baslik: 'Bireysel Öneri Sistemi Kullanıma Açıldı',
      tarih: '27.01.2024',
      yazar: 'Sistem Yöneticisi',
      kategori: 'Genel',
      icerik: `
        <p>Değerli Çalışma Arkadaşlarımız,</p>
        
        <p>Kurumumuzun sürekli gelişim ve iyileştirme hedefleri doğrultusunda, tüm personelimizin katkı sağlayabileceği Bireysel Öneri Sistemi kullanıma açılmıştır.</p>
        
        <h3>Sistem Özellikleri:</h3>
        <ul>
          <li>Kolay ve kullanıcı dostu arayüz</li>
          <li>Anlık bildirim sistemi</li>
          <li>Detaylı raporlama özellikleri</li>
          <li>Mobil uyumlu tasarım</li>
        </ul>
        
        <p>Sisteme portal üzerinden "Bireysel Öneri" menüsünden ulaşabilirsiniz.</p>
        
        <p>İyi çalışmalar dileriz.</p>
      `
    },
    2: {
      baslik: '2024 Yılı Hizmet İçi Eğitim Planı',
      tarih: '25.01.2024',
      yazar: 'İnsan Kaynakları',
      kategori: 'Genel',
      icerik: `
        <p>Değerli Çalışma Arkadaşlarımız,</p>
        
        <p>2024 yılı Hizmet İçi Eğitim Planı yayınlanmıştır. Plan kapsamında;</p>
        
        <h3>Eğitim Başlıkları:</h3>
        <ul>
          <li>Proje Yönetimi</li>
          <li>İletişim Becerileri</li>
          <li>Bilgi Güvenliği</li>
          <li>Yabancı Dil</li>
        </ul>
        
        <p>Eğitimlere katılım için İnsan Kaynakları birimine başvurabilirsiniz.</p>
        
        <p>İyi çalışmalar dileriz.</p>
      `
    },
    3: {
      baslik: 'Yeni Şifre Politikası Uygulaması',
      tarih: '23.01.2024',
      yazar: 'Bilgi Güvenliği Birimi',
      kategori: 'Bilgi Güvenliği',
      icerik: `
        <p>Değerli Çalışma Arkadaşlarımız,</p>
        
        <p>Kurumsal bilgi güvenliğimizi artırmak amacıyla şifre politikamız güncellenmiştir.</p>
        
        <h3>Yeni Şifre Kuralları:</h3>
        <ul>
          <li>En az 8 karakter uzunluğunda</li>
          <li>En az 1 büyük harf</li>
          <li>En az 1 küçük harf</li>
          <li>En az 1 rakam</li>
          <li>En az 1 özel karakter</li>
        </ul>
        
        <p>Tüm personelimizin 1 hafta içinde şifrelerini yeni kurallara uygun olarak güncellemesi gerekmektedir.</p>
        
        <p>İyi çalışmalar dileriz.</p>
      `
    }
  };

  const duyuru = duyurular[Number(id) as keyof typeof duyurular];

  if (!duyuru) {
    return (
      <PageLayout>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-red-600">Duyuru bulunamadı</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <a href="/duyurular/genel" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Duyurular</span>
        </a>
        
        <h1 className="text-2xl font-bold mb-4">{duyuru.baslik}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
        
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: duyuru.icerik }}
        />
      </div>
    </PageLayout>
  );
};

export default DuyuruDetay;