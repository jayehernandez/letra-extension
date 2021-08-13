import { useState } from 'react';
import { styled } from 'stitches.config';
import ItemsCarousel from 'react-items-carousel';
import Box from '~/ui/Box';
import Container from '~/ui/Container';
import ImageContainer from '~/ui/ImageContainer';

function Carousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <Container size="md">
      <Box css={{ padding: `0 ${chevronWidth}px`, maxWidth: '100%' }}>
        <ItemsCarousel
          gutter={12}
          activePosition={'center'}
          chevronWidth={chevronWidth}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={1}
          slidesToScroll={1}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={true}
          activeItemIndex={activeItemIndex}
          rightChevron={'>'}
          leftChevron={'<'}
        >
          {/* <ImageContainer src="/german.png" alt="Sample screenshot with German" />
          <ImageContainer src="/japanese.png" alt="Sample screenshot with German" />
          <ImageContainer src="/italian.png" alt="Sample screenshot with German" /> */}
          <Box>testestes</Box>
          <Box>testestes</Box>
          <Box>testestes</Box>
          <Box>testestes</Box>
          <Box>testestes</Box>
        </ItemsCarousel>
      </Box>
    </Container>
  );
}

export default Carousel;
