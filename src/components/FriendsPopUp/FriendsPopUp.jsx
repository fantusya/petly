import { TimeList, ItemTime } from './FriendsPopUp.styled';

import { DAYS_OF_WEEK, CURRENT_DAY_OF_WEEK } from 'constants/daysOfWeek';
import { EMPTY_FIELD } from 'constants/emptyField';

export const FriendsPopUp = ({ workDays }) => {
  let elements = [];

  if (workDays && workDays.length !== 0) {
    elements = workDays.map(({ from, to, isOpen }, index) => {
      const cuttedFrom = from && from.startsWith('0') ? from.slice(1) : from;

      return (
        <ItemTime key={index} currentDayOfWeek={CURRENT_DAY_OF_WEEK}>
          <p>{DAYS_OF_WEEK[index]}</p>
          <p>
            {isOpen ? (
              <span>
                {cuttedFrom}-{to}
              </span>
            ) : (
              <span>{EMPTY_FIELD}</span>
            )}
          </p>
        </ItemTime>
      );
    });
  }
  return (
    <>{elements && elements.length !== 0 && <TimeList>{elements}</TimeList>}</>
  );
};

export default FriendsPopUp;
