import { styled } from 'stitches.config';
import Container, { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Button from '~/ui/Button';
import Box from '~/ui/Box';
import { ExternalLink } from '~/ui/TextLink';

function Languages({ languages }) {
  return (
    <Box id="languages">
      <Container
        size="xs"
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '$5',
        }}
      >
        <Text type="title" css={{ color: '$primary' }}>
          {Object.keys(languages).length}
        </Text>
        <Text type="h1" css={{ color: '$primary', ml: '$3', '@md': { ml: '$4', mt: '$1' } }}>
          Languages
        </Text>
      </Container>
      <GridContainer
        size="lg"
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          gridTemplateColumns: '1fr 1fr',
          gridRowGap: '$3',
          '@md': { gridTemplateColumns: '1fr 1fr 1fr' },
          '@lg': { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
          '@xl': { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
        }}
      >
        {Object.entries(languages).map((language, index) => {
          const splitWord = language[0].split('-');
          const titleLanguage = splitWord
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <Box key={index} css={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <i className={`twa twa-4x ${language[1].flag}`}></i>
              </Box>
              <Text css={{ ml: '$2', fontSize: '$md' }}>{titleLanguage}</Text>
            </Box>
          );
        })}
      </GridContainer>
    </Box>
  );
}

export default Languages;
