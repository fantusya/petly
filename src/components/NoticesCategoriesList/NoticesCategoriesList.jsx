import NoticeCategoryItem from '../NoticeCategoryItem';
import { NoticesCardsList } from './NoticesCategoriesList.styled';

//
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { getNoticeByCategory } from 'api/notice';

export const NoticesCategoriesList = ({ data }) => {
  //  Remove when main logic is ready
  // const [data, setData] = useState([]);

  // const categoryName = 'for-free';
  // const search = '';

  // useEffect(() => {
  //   try {
  //     const fetch = async () => {
  //       const data = await getNoticeByCategory({ categoryName, search });
  //       console.log(data);
  //       setData(data.results);
  //     };
  //     fetch();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  /////////////////////////////////////////////

  return (
    <NoticesCardsList>
      {/* {data.length > 0 && data.map(item => <NoticeCategoryItem key={item._id} data={item} />)} */}
      {data.map(item => (
        <NoticeCategoryItem key={item._id} data={item} />
      ))}
    </NoticesCardsList>
  );
};

export default NoticesCategoriesList;
