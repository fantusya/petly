import { AddLinkBasic, AddLinkCircle, AddCardIcon } from "./AddNoticeButton.styled";

const AddPetBtnLink = ({ name = '', href = '', children }) => {
    return (
      <AddLinkBasic href={href} name={name}>
        {children}
        <>
          <AddCardIcon/>
        </>
      </AddLinkBasic>
    );
  };
  
const AddPetBtnCircleLink = ({ name = '', href = '', children }) => {
return (
    <AddLinkCircle href={href} name={name}>
    <AddCardIcon/>
    {children}
    </AddLinkCircle>
);
};
  
export { AddPetBtnLink, AddPetBtnCircleLink };