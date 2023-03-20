import { useEffect, useState } from 'react';

export const MyReponsiveComponent = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);

  useEffect(() => {
    const mediaWatcherForMob = window.matchMedia('(max-width: 767.9px)');
    setIsMobileScreen(mediaWatcherForMob.matches);

    const mediaWatcherForTab = window.matchMedia(
      '(min-width: 768px) and (max-width: 1279.9px)'
    );
    setIsTabletScreen(mediaWatcherForTab.matches);

    const mediaWatcherForDesk = window.matchMedia('(min-width: 1280px)');
    setIsDesktopScreen(mediaWatcherForDesk.matches);

    function updateIsNarrowScreen(e) {
      setIsMobileScreen(mediaWatcherForMob.matches);
      setIsTabletScreen(mediaWatcherForTab.matches);
      setIsDesktopScreen(mediaWatcherForDesk.matches);
    }

    mediaWatcherForMob.addEventListener('change', updateIsNarrowScreen);
    mediaWatcherForTab.addEventListener('change', updateIsNarrowScreen);
    mediaWatcherForDesk.addEventListener('change', updateIsNarrowScreen);

    return function cleanup() {
      mediaWatcherForMob.removeEventListener('change', updateIsNarrowScreen);
      mediaWatcherForTab.removeEventListener('change', updateIsNarrowScreen);
      mediaWatcherForDesk.removeEventListener('change', updateIsNarrowScreen);
    };
  }, []);

  return { isMobileScreen, isTabletScreen, isDesktopScreen };
};
