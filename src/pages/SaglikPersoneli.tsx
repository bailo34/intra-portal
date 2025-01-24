import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { User, Phone, Mail, Calendar, Clock, MapPin } from 'lucide-react';

const SaglikPersoneli = () => {
  const { personelId } = useParams();

  // Normalde bu veriler API'den gelecek
  const personel = {
    'dr-ahmet-yilmaz': {
      ad: 'Dr. Ahmet Yılmaz',
      unvan: 'Kurum Hekimi',
      telefon: '4512',
      email: 'ahmet.yilmaz@kurum.gov.tr',
      calismaGunleri: 'Pazartesi - Cuma',
      calismaSaatleri: '09:00 - 17:00',
      konum: 'A Blok, Zemin Kat, No: 5',
      foto: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    'hemsire-ayse-kaya': {
      ad: 'Hemşire Ayşe Kaya',
      unvan: 'Kurum Hemşiresi',
      telefon: '4513',
      email: 'ayse.kaya@kurum.gov.tr',
      calismaGunleri: 'Pazartesi - Cuma',
      calismaSaatleri: '08:30 - 16:30',
      konum: 'A Blok, Zemin Kat, No: 6',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  };

  const personelBilgi = personel[personelId as keyof typeof personel];

  if (!personelBilgi) {
    return (
      <PageLayout>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-red-600">Personel bulunamadı</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src={personelBilgi.foto}
              alt={personelBilgi.ad}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-2">{personelBilgi.ad}</h1>
            <p className="text-gray-600 text-lg mb-6">{personelBilgi.unvan}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Telefon</p>
                  <p className="font-medium">{personelBilgi.telefon}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">E-posta</p>
                  <p className="font-medium">{personelBilgi.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Çalışma Günleri</p>
                  <p className="font-medium">{personelBilgi.calismaGunleri}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Çalışma Saatleri</p>
                  <p className="font-medium">{personelBilgi.calismaSaatleri}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:col-span-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Konum</p>
                  <p className="font-medium">{personelBilgi.konum}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SaglikPersoneli;