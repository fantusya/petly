import FriendsPopUp from 'components/FriendsPopUp';

import { DEFAULT_IMAGE_FRIENDS } from 'constants/urls';
import { EMPTY_FIELD } from 'constants/emptyField';

import { useTranslation } from 'react-i18next';

import {
  ListFriends,
  ItemFriend,
  ItemFriendBox,
  ItemFriendName,
  ItemFriendLogo,
  InfoFriendsItem,
  InfoFriendsLink,
} from './FriendsList.styled';

export const FriendsList = ({ results }) => {
  const { t } = useTranslation();

  const elements = results.map(
    ({
      title,
      url,
      address,
      addressUrl,
      email,
      imageUrl,
      phone,
      workDays,
      _id,
    }) => {
      let workTime = {};

      if (workDays && workDays.length !== 0) {
        workTime = workDays.find(item => item.isOpen === true);
      }

      const { from, to } = workTime;

      return (
        <ItemFriend key={_id} resultsLength={results.length}>
          {url ? (
            <ItemFriendName target="_blank" rel="noreferrer" href={url}>
              {title}
            </ItemFriendName>
          ) : (
            <p>{title}</p>
          )}
          <ItemFriendBox>
            <div>
              <ItemFriendLogo
                src={imageUrl ? imageUrl : DEFAULT_IMAGE_FRIENDS}
                alt={title}
              />
            </div>
            <div>
              <ul>
                <InfoFriendsItem>
                  <p>{t('Time')}:</p>
                  {from && to ? (
                    <p className="time">
                      {from} - {to}
                    </p>
                  ) : (
                    <p>{EMPTY_FIELD}</p>
                  )}
                  <FriendsPopUp workDays={workDays} />
                </InfoFriendsItem>
                <InfoFriendsItem>
                  <p>{t('Address')}:</p>
                  {address ? (
                    <InfoFriendsLink
                      target="_blank"
                      rel="noreferrer"
                      href={addressUrl}
                    >
                      {address}
                    </InfoFriendsLink>
                  ) : (
                    <p>{EMPTY_FIELD}</p>
                  )}
                </InfoFriendsItem>
                <InfoFriendsItem>
                  <p>{t('Email')}:</p>
                  {email ? (
                    <InfoFriendsLink href={`mailto:${email}`}>
                      {email}
                    </InfoFriendsLink>
                  ) : (
                    <p>{EMPTY_FIELD}</p>
                  )}
                </InfoFriendsItem>
                <InfoFriendsItem>
                  <p>{t('Phone')}:</p>
                  {phone ? (
                    <InfoFriendsLink href={`tel:${phone}`}>
                      {phone}
                    </InfoFriendsLink>
                  ) : (
                    <p>{EMPTY_FIELD}</p>
                  )}
                </InfoFriendsItem>
              </ul>
            </div>
          </ItemFriendBox>
        </ItemFriend>
      );
    }
  );

  return <ListFriends>{elements}</ListFriends>;
};
export default FriendsList;
