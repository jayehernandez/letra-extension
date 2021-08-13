import { styled } from 'stitches.config';
import Image from 'next/image';

const ImageContainerDiv = styled('div', {
  '& div': {
    position: 'unset !important',
  },
  '& .image': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
  },
  variants: {
    bordered: {
      true: {
        '& .image': {
          border: '4px solid $primary',
          borderRadius: '5px',
          '@md': {
            borderRadius: '15px',
          },
        },
      },
    },
  },
});

function ImageContainer({ src, bordered, alt }) {
  return (
    <ImageContainerDiv bordered={bordered}>
      <Image src={src} alt={alt} className="image" layout="fill" />
    </ImageContainerDiv>
  );
}

export default ImageContainer;
