import { ListFriends, ItemFriend, ItemFriendBox, ItemFriendName } from "./FriendsList.styled";

export const FriendsList = ({ results }) => {

    const elements = results.map(({ title, url, address, addressUrl, email, imageUrl, phone, workDays, _id }) => {

        const emptyField = "-----------------";
        const placeholder = "https://ucarecdn.com/63e1c87e-c59a-4af0-85f9-2eea65e645f3/placeholder_friend.png"
        let workTime = {};

        if (workDays && workDays.length !== 0) {
            workTime = workDays.find(item => item.isOpen === true);
        }

        const { from, to } = workTime;
        
        return (
            <ItemFriend key={_id} resultsLength={results.length}>
                {url ? <ItemFriendName target="_blank" rel="noreferrer" href={url}>{title}</ItemFriendName> : <p>{title}</p>}
                <ItemFriendBox>
                    <div>
                        <img src={imageUrl ? imageUrl : placeholder} alt={title} />
                    </div>
                    <div>
                        <p>Time:</p>
                        {from && to ? <p>{from} - {to}</p> : <p>{emptyField}</p>}
                        <p>Address:</p>
                        {address ? <a target="_blank" rel="noreferrer" href={addressUrl}>{address}</a> : <p>{emptyField}</p>}
                        <p>Email:</p>
                        {email ? <a href={`mailto:${email}`}>{email}</a> : <p>{emptyField}</p>}
                        <p>Phone</p>
                        {phone ? <a href={`tel:${phone}`}>{phone}</a> : <p>{emptyField}</p>}
                    </div>
                </ItemFriendBox>
            </ItemFriend>
        )
    })

    return (
        <ListFriends>{elements}</ListFriends>
    );
  };
  export default FriendsList;