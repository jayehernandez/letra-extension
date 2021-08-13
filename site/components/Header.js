import { useEffect, useState } from 'react';
import { styled } from 'stitches.config';
import Container from '~/ui/Container';
import TextLink, { ExternalLink } from '~/ui/TextLink';
import Logo from '~/Logo';
import Link from 'next/link';
import Button from './ui/Button';

const HeaderOuterWrapper = styled('header', {
  width: '100%',
  '@md': {
    top: '0px',
    justifyContent: 'space-between',
    zIndex: '10',
    position: 'sticky',
  },
  variants: {
    hasBackground: {
      true: {
        backdropFilter: 'saturate(30%) blur(40px)',
        backgroundColor: '$secondary3',
      },
    },
  },
});

const HeaderContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  px: '$2',
  height: '70px',
  '@md': {
    justifyContent: 'space-between',
    height: '70px',
  },
});

const LogoContainer = styled('div', {
  display: 'none',
  '@md': {
    display: 'block',
    px: '$6',
    width: '100px',
    cursor: 'pointer',
  },
});

const NavLinks = styled('div', {
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr 1fr auto',
  gridColumnGap: '$2',
  fontFamily: '$primary',
});

const NavLink = styled(TextLink, {
  display: 'grid',
  alignItems: 'center',
  fontWeight: '700',
  fontSize: '$xs',
  padding: '$3',
  textAlign: 'center',
  color: '$secondary',
  '@md': {
    padding: '$5',
    fontSize: '$sm',
  },
  variants: {
    active: {
      true: {
        color: '$primary',
      },
    },
  },
});

const links = [
  {
    title: 'About',
    route: '#about',
  },
  {
    title: 'Features',
    route: '#features',
  },
  {
    title: 'Support',
    route: '#support',
  },
];

const Header = () => {
  const [hasBackground, setHasBackground] = useState(false);

  const listenScrollEvent = (event) => {
    return setHasBackground(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <HeaderOuterWrapper hasBackground={hasBackground}>
      <HeaderContainer size={'lg'}>
        <LogoContainer>
          <Link href={'#'} passHref>
            <a>
              <Logo />
            </a>
          </Link>
        </LogoContainer>
        <NavLinks>
          {links.map((link) => (
            <Link key={link.title} href={link.route} passHref>
              <NavLink type="noBorder" active={false}>
                {link.title}
              </NavLink>
            </Link>
          ))}
          <ExternalLink href="https://bit.ly/letra-extension" type="simple">
            <Button
              color="primary"
              size="sm"
              css={{ ml: '$3', display: 'none', '@md': { display: 'block' } }}
            >
              Download
            </Button>
          </ExternalLink>
        </NavLinks>
      </HeaderContainer>
    </HeaderOuterWrapper>
  );
};

export default Header;
