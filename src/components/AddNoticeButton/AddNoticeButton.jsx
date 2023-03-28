import { AddCardIcon } from './AddNoticeButton.styled';
import Media from 'react-media';
import { AddPetButton, AddButtonBox } from './AddNoticeButton.styled';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export const AddNoticeButton = ({ handleModalToggle }) => {
  const { t } = useTranslation();

  return (
    <AddButtonBox>
      <Media
        queries={{
          mobile: '(max-width: 767.98px)',
          tablet: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.tablet && (
              <>
                {t('Add_pet')}
                <AddPetButton type="button" onClick={handleModalToggle}>
                  <AddCardIcon />
                </AddPetButton>
              </>
            )}

            {matches.mobile && (
              <>
                <AddPetButton type="button" onClick={handleModalToggle}>
                  <AddCardIcon />
                  {t('Add_pet')}
                </AddPetButton>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </AddButtonBox>
  );
};

export default AddNoticeButton;
