import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [isDarkMode, setIsDarkMode] = useState<AvailableThemes>(() => {
    const storedTheme = localStorage.getItem('isDarkMode') as AvailableThemes | null;
    return storedTheme || 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon />,
  }
  
  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setIsDarkMode(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

   useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
  <nav className={styles.menu}>
    <a className={styles.menuLink} href='' aria-label='Ir para a Home' title='Home'>
      <HouseIcon />
    </a>
    <a className={styles.menuLink} href='' aria-label='Ir para o Histórico' title='Histórico'>
      <HistoryIcon />
    </a>
    <a className={styles.menuLink} href='' aria-label='Ir para as Configurações' title='Configurações'>
      <SettingsIcon />
    </a>
    <a className={styles.menuLink} href='#' aria-label='Ir para o Modo Claro' title='Modo Claro' onClick={toggleTheme}>
      {nextThemeIcon[isDarkMode]}
    </a>
  </nav> 
  )
}