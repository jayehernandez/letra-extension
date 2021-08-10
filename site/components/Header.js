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
});

const HeaderContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  px: '$2',
  height: '50px',
  background: '$bodyBg',
  '@md': {
    justifyContent: 'space-between',
    height: '80px',
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
  padding: '$1',
  textAlign: 'center',
  color: '$body',
  '@md': {
    padding: '$6',
    fontSize: '$md',
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

const Header = () => (
  <HeaderOuterWrapper>
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

export default Header;
