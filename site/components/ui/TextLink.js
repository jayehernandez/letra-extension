import { styled } from 'stitches.config';

const TextLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
  fontWeight: '700',
  transition: 'box-shadow 0.3s ease 0s',
  color: '$primary',
  boxShadow: '0px 0px 0px $colors$primary',
  '&:hover': {
    color: '$primary',
    boxShadow: '0px 2px 0px $colors$primary',
  },
  variants: {
    type: {
      simple: {
        fontWeight: '400',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      noBorder: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      container: {
        height: '100%',
        borderBottom: 'none',
        color: 'unset',
        fontWeight: 'unset',
        boxShadow: 'none',
        '&:hover': {
          color: 'unset',
          boxShadow: 'none',
        },
      },
    },
  },
});

export const ExternalLink = ({ href, type, children }) => {
  return (
    <TextLink href={href} target="_blank" rel="noopener noreferrer" type={type}>
      {children}
    </TextLink>
  );
};

export default TextLink;
