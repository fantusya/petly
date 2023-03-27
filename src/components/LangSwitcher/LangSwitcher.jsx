import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from './LangSwitcher.styled';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('s');

  const handleLanguageToggle = () => {
    const newLanguage = language === 'uk' ? 'en' : 'uk';
    setLanguage(newLanguage);
    document.location.reload();
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const current = localStorage.getItem('i18nextLng');
    if (current) {
      i18n.changeLanguage(current);
      return setLanguage(current);
    }
    setLanguage('en');
  }, [i18n, language]);

  return (
    <Switch>
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={language === 'en'}
        onChange={handleLanguageToggle}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">UA</span>
      <span className="off">EN</span>
    </Switch>
  );
};
