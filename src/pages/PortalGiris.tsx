import PageLayout from '../components/PageLayout';
import { LogIn, Key, Mail, Shield } from 'lucide-react';

const PortalGiris = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <LogIn className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
            <h1 className="text-2xl font-bold">Portal Giriş</h1>
            <p className="text-gray-600">Kurumsal hesabınızla giriş yapın</p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>E-posta</span>
                </div>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ornek@kurum.gov.tr"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  <span>Şifre</span>
                </div>
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Beni hatırla
                </label>
              </div>
              
              <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
                Şifremi unuttum
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default PortalGiris;