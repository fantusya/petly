// import FriendsPopUp from "components/FriendsPopUp";

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
      const emptyField = '-----------------';
      const placeholder =
        'https://ucarecdn.com/63e1c87e-c59a-4af0-85f9-2eea65e645f3/placeholder_friend.png';
      let workTime = {};

      console.log(results.length % 2);

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
              <ItemFriendLogo src={imageUrl ? imageUrl : placeholder} alt={title} />
            </div>
            <div>
              <ul>
                <InfoFriendsItem>
                  <p>Time:</p>
                  {from && to ? (
                    <p>
                      {from} - {to}
                    </p>
                  ) : (
                    <p>{emptyField}</p>
                  )}
                </InfoFriendsItem>
                <InfoFriendsItem>
                <p>Address:</p>
                  {address ? (
                    <InfoFriendsLink target="_blank" rel="noreferrer" href={addressUrl}>
                      {address}
                    </InfoFriendsLink>
                  ) : (
                    <p>{emptyField}</p>
                  )}
                </InfoFriendsItem>
                <InfoFriendsItem>
                  <p>Email:</p>
                  {email ? (
                    <InfoFriendsLink href={`mailto:${email}`}>
                      {email}
                    </InfoFriendsLink>
                  ) : (
                    <p>{emptyField}</p>
                  )}
                </InfoFriendsItem>
                <InfoFriendsItem>
                  <p>Phone:</p>
                  {phone ? (
                    <InfoFriendsLink href={`tel:${phone}`}>
                      {phone}
                    </InfoFriendsLink>
                  ) : (
                    <p>{emptyField}</p>
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
