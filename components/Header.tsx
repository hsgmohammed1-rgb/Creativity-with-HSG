/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { useLocalization } from '../localization/LocalizationContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLocalization();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <header className="w-full py-4 px-4 sm:px-8 border-b border-gray-700 bg-gray-800/30 backdrop-blur-sm sticky top-0 z-50 flex items-center justify-between">
      <div className="flex-1"></div> {/* Spacer */}
      <div className="flex items-center justify-center rtl:flex-row-reverse">
          <img src="https://i.postimg.cc/bJ4MsXmj/1000023429.png" alt="HSG Logo" className="w-12 h-12" />
      </div>
      <div className="flex-1 flex justify-end">
        <button
          onClick={toggleLanguage}
          className="bg-white/10 border border-white/20 text-gray-200 font-semibold py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-sm"
        >
          {t('header.language')}
        </button>
      </div>
    </header>
  );
};

export default Header;