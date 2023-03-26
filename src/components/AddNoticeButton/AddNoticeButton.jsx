import { AddCardIcon } from "./AddNoticeButton.styled";
import Media from 'react-media';
import { AddPetButton, AddButtonBox } from './AddNoticeButton.styled';
import { Fragment } from "react";

export const AddNoticeButton = ({ handleModalToggle }) => {
  return (
    <AddButtonBox>
      <Media
        queries={{
          mobile: '(max-width: 767.9px)',
          tablet: '(min-width: 768px)',
        }}>
        {matches => (
          <Fragment>
            {matches.tablet && (
              <>
                Add pet
                <AddPetButton type="button" onClick={handleModalToggle}>
                  <AddCardIcon />
                </AddPetButton>
              </>
            )}

            {matches.mobile && (
              <>
                <AddPetButton type="button" onClick={handleModalToggle}>
                  <AddCardIcon />
                  Add pet
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