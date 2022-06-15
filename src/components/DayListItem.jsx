import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss'

export default function DayListItem(props) {

  const itemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  })

  const formatSpots = () => {
    if(props.spots > 1) {
      return `${props.spots} spots remaining`
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`
    } else return 'no spots remaining';
  };

  return (
    <li className={itemClass} onClick={() => props.setDay(props.name)}>
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{formatSpots()}</h3>
    </li>
  );
};