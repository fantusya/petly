import { ROUTES } from 'constants/routes';
import i18n from 'i18n';

export const NAV_LIST = [
  {
    label: i18n.t('News'),
    link: ROUTES.news,
  },
  {
    label: i18n.t('Find_pet'),
    link: `${ROUTES.notices}`,
  },
  {
    label: i18n.t('Our_friends'),
    link: ROUTES.friends,
  },
];
