import { Property } from 'csstype';

export const getValueColor = (value: number): Property.Color => {
  switch (value) {
    case 1:
      return 'blue';
    case 2:
      return 'green';
    case 3:
      return 'red';
    case 4:
      return 'darkblue';
    case 5:
      return 'brown';
    case 6:
      return 'cyan';
    case 7:
      return 'black';
    case 8:
      return 'grey';
    default:
      return 'transparent';
  }
};

export const getClickableProps = (clickable: boolean, handleClick: () => void): Pick<React.ComponentProps<'div'>, 'style' | 'onClick'> => {
  if (clickable) {
    return {
      style: {
        cursor: clickable ? 'pointer' : 'default'
      },
      onClick: clickable ? handleClick : undefined
    };
  }

  return {};
};