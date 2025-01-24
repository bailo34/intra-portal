import { Routes, Route } from 'react-router-dom';
import { Bell, Book, Calendar, BarChart as ChartBar, FileText, Home, Phone, User, Users } from 'lucide-react';
import TopNav from './components/TopNav';
import DashboardCard from './components/DashboardCard';
import AnnouncementSection from './components/AnnouncementSection';
import SidePanel from './components/SidePanel';
import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import BilisimHizmetleri from './pages/BilisimHizmetleri';
import BilgiGuvenligi from './pages/BilgiGuvenligi';
import ButceMaliRehber from './pages/ButceMaliRehber';
import Kutuphane from './pages/Kutuphane';
import PortalGiris from './pages/PortalGiris';
import BireyselOneri from './pages/BireyselOneri';
import KariyerTezleri from './pages/KariyerTezleri';
import Performans from './pages/Performans';
import KurumsalHedefler from './pages/KurumsalHedefler';
import TelefonRehberi from './pages/TelefonRehberi';
import SaglikPersoneli from './pages/SaglikPersoneli';
import Duyurular from './pages/Duyurular';
import DuyuruDetay from './pages/DuyuruDetay';

// Bilişim Hizmetleri Alt Sayfaları
import TeknikDestek from './pages/bilisim-hizmetleri/TeknikDestek';
import SistemYonetimi from './pages/bilisim-hizmetleri/SistemYonetimi';
import YazilimGelistirme from './pages/bilisim-hizmetleri/YazilimGelistirme';

// Bilgi Güvenliği Alt Sayfaları
import GuvenlikPolitikalari from './pages/bilgi-guvenligi/GuvenlikPolitikalari';
import SiberGuvenlik from './pages/bilgi-guvenligi/SiberGuvenlik';
import VeriKoruma from './pages/bilgi-guvenligi/VeriKoruma';

// Bütçe ve Mali Rehber Alt Sayfaları
import ButceYonetimi from './pages/butce-mali-rehber/ButceYonetimi';
import MaliRaporlar from './pages/butce-mali-rehber/MaliRaporlar';
import SatinAlma from './pages/butce-mali-rehber/SatinAlma';

// Kütüphane Alt Sayfaları
import EKaynaklar from './pages/kutuphane/EKaynaklar';
import SureliYayinlar from './pages/kutuphane/SureliYayinlar';
import Veritabanlari from './pages/kutuphane/Veritabanlari';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard
            title="Bireysel Öneri Sistemi"
            icon={<FileText className="w-6 h-6" />}
            bgColor="bg-blue-600"
            link="/bireysel-oneri"
          />
          <DashboardCard
            title="Kariyer Uzmanlık Tezleri"
            icon={<Book className="w-6 h-6" />}
            bgColor="bg-emerald-600"
            link="/kariyer-tezleri"
          />
          <DashboardCard
            title="Performans Değerlendirme"
            icon={<ChartBar className="w-6 h-6" />}
            bgColor="bg-cyan-600"
            link="/performans"
          />
          <DashboardCard
            title="Kurumsal Hedefler"
            icon={<Users className="w-6 h-6" />}
            bgColor="bg-rose-600"
            link="/kurumsal-hedefler"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnnouncementSection />
          </div>
          <div className="space-y-4">
            <SidePanel 
              title="Telefon Rehberi"
              icon={<Phone className="w-5 h-5" />}
            />
            <SidePanel 
              title="Günün Yemeği"
              icon={<Calendar className="w-5 h-5" />}
            />
            <SidePanel 
              title="Sağlık Servisi"
              icon={<User className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/bilisim-hizmetleri" element={<BilisimHizmetleri />} />
      <Route path="/bilgi-guvenligi" element={<BilgiGuvenligi />} />
      <Route path="/butce-mali-rehber" element={<ButceMaliRehber />} />
      <Route path="/kutuphane" element={<Kutuphane />} />
      <Route path="/portal-giris" element={<PortalGiris />} />
      <Route path="/bireysel-oneri" element={<BireyselOneri />} />
      <Route path="/kariyer-tezleri" element={<KariyerTezleri />} />
      <Route path="/performans" element={<Performans />} />
      <Route path="/kurumsal-hedefler" element={<KurumsalHedefler />} />
      <Route path="/telefon-rehberi" element={<TelefonRehberi />} />
      <Route path="/saglik/:personelId" element={<SaglikPersoneli />} />
      <Route path="/duyurular/:kategori" element={<Duyurular />} />
      <Route path="/duyurular/:id" element={<DuyuruDetay />} />

      {/* Bilişim Hizmetleri Alt Sayfaları */}
      <Route path="/bilisim-hizmetleri/teknik-destek" element={<TeknikDestek />} />
      <Route path="/bilisim-hizmetleri/sistem-yonetimi" element={<SistemYonetimi />} />
      <Route path="/bilisim-hizmetleri/yazilim-gelistirme" element={<YazilimGelistirme />} />

      {/* Bilgi Güvenliği Alt Sayfaları */}
      <Route path="/bilgi-guvenligi/politikalar" element={<GuvenlikPolitikalari />} />
      <Route path="/bilgi-guvenligi/siber-guvenlik" element={<SiberGuvenlik />} />
      <Route path="/bilgi-guvenligi/veri-koruma" element={<VeriKoruma />} />

      {/* Bütçe ve Mali Rehber Alt Sayfaları */}
      <Route path="/butce-mali-rehber/butce-yonetimi" element={<ButceYonetimi />} />
      <Route path="/butce-mali-rehber/mali-raporlar" element={<MaliRaporlar />} />
      <Route path="/butce-mali-rehber/satin-alma" element={<SatinAlma />} />

      {/* Kütüphane Alt Sayfaları */}
      <Route path="/kutuphane/e-kaynaklar" element={<EKaynaklar />} />
      <Route path="/kutuphane/sureli-yayinlar" element={<SureliYayinlar />} />
      <Route path="/kutuphane/veritabanlari" element={<Veritabanlari />} />
    </Routes>
  );
}

export default App;