import * as React from 'react';

import Observer from 'react-intersection-observer';

import {
  LazyLoadErrorImageStyled,
  LazyLoadImageStyled,
  LazyLoadPlaceholderImageStyled,
  LazyLoadPlaceholderStyled,
} from './lazy-load-image.component.style';

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes
export interface LazyLoadResponsiveImageProps {
  srcset: string;
  sizes: string;
}

export interface LazyLoadImageProps {
  src: string;
  alt?: string;
  aspectRatio?: number;
  onClick?: () => void;
  round?: boolean;
  responsive?: LazyLoadResponsiveImageProps;
}

enum Status {
  Loading,
  Error,
  Loaded,
}

interface ImageWrapperInterface {
  clientWidth: number;
}

export const LazyLoadImage: React.FC<LazyLoadImageProps> = (props) => {
  const imageWrapper = React.useRef<ImageWrapperInterface>({} as ImageWrapperInterface);
  const [status, setStatus] = React.useState(Status.Loading);
  const [imgHeight, setImgHeight] = React.useState(0);

  const handleError = () => {
    setStatus(Status.Error);
  };

  const handleLoad = () => {
    if (props.aspectRatio && imageWrapper.current) {
      const height = props.aspectRatio * imageWrapper.current.clientWidth;
      setImgHeight(height);
      setStatus(Status.Loaded);
    } else {
      setStatus(Status.Loaded);
    }
  };

  const referImageWrapper = (image: ImageWrapperInterface) => {
    imageWrapper.current = image;
  };

  return (
    <Observer triggerOnce>
      {({ inView, ref }) => {
        return (
          <div ref={ref}>
            {status === Status.Loading && (
              <LazyLoadPlaceholderStyled aspectRatio={props.aspectRatio}>
                <LazyLoadPlaceholderImageStyled />
              </LazyLoadPlaceholderStyled>
            )}
            {status === Status.Error && (
              <LazyLoadPlaceholderStyled aspectRatio={props.aspectRatio}>
                <LazyLoadErrorImageStyled />
              </LazyLoadPlaceholderStyled>
            )}
            {((inView && status === Status.Loading) || status === Status.Loaded) && (
              <div ref={referImageWrapper}>
                <LazyLoadImageStyled
                  onClick={props.onClick}
                  src={props.src}
                  alt={props.alt}
                  onLoad={handleLoad}
                  onError={handleError}
                  loaded={status === Status.Loaded}
                  round={props.round}
                  height={imgHeight}
                  srcSet={props.responsive?.srcset}
                  sizes={props.responsive?.sizes}
                />
              </div>
            )}
          </div>
        );
      }}
    </Observer>
  );
};
