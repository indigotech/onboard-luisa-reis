import * as React from 'react';

import { CarouselStyled } from './carousel.component.style';

//todo: import { hasWindow } from '@app/core/browser/platform';
const hasWindow = () => typeof window !== 'undefined';

interface SiblingFrames {
  current: React.ReactInstance;
  prev: React.ReactInstance;
  next: React.ReactInstance;
}

export interface CarouselProps {
  auto?: boolean;
  loop?: boolean;
  interval?: number;
  duration?: number;
  minMove?: number;
  children?: any;
  onIndexChanged?: any;
}

interface CarouselState {
  frames: any[];
  maxHeight: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  public static defaultProps: Partial<CarouselProps> = {
    auto: false,
    loop: true,
    interval: 5000,
    duration: 300,
    minMove: 42,
  };
  public state: CarouselState;

  private mounted = false;
  private wrapper: React.RefObject<HTMLDivElement>;
  private touchDown = false;

  private frameWidth = 0;
  private slideTimeoutID: any;
  private startX: number;
  private deltaX: number;
  private movingFrames: SiblingFrames;
  private currentIndex = 0;

  private frameRefs: Map<string, React.RefObject<HTMLDivElement>> = new Map();

  constructor(props: CarouselProps) {
    super(props);

    this.startX = 0;
    this.deltaX = 0;
    this.movingFrames = {} as SiblingFrames;
    this.state = {
      frames: [].concat(props.children || []),
      maxHeight: 0,
    };

    this.mounted = false;

    if (props.loop === false && props.auto) {
      console.warn('[Carousel] Auto-slide only works in loop mode.');
    }

    this.wrapper = React.createRef();
  }

  static getDerivedStateFromProps(nextProps: CarouselProps, prevState: CarouselState) {
    if (prevState.frames.length === nextProps.children.length) {
      return null;
    }

    return { frames: nextProps.children };
  }

  componentDidMount() {
    this.mounted = true;
    this.prepareAutoSlide();

    if (hasWindow()) {
      window.addEventListener('mouseup', this.onTouchEnd, false);
      window.addEventListener('touchend', this.onTouchEnd, false);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    this.clearAutoTimeout();

    if (hasWindow()) {
      window.removeEventListener('mouseup', this.onTouchEnd, false);
      window.removeEventListener('touchend', this.onTouchEnd, false);
    }
  }

  onTouchStart = (e: any) => {
    if (this.state.frames.length < 2) {
      return;
    }

    this.touchDown = true;

    this.clearAutoTimeout();
    this.updateFrameSize();
    this.prepareSiblingFrames();

    const { pageX } = e.touches?.[0] || e;
    this.startX = pageX;
    this.deltaX = 0;
  };

  onTouchMove = (e: any) => {
    if (e.touches?.length > 1 || !this.touchDown) {
      return;
    }

    this.clearAutoTimeout();

    const { pageX } = e.touches?.[0] || e;
    this.deltaX = pageX - this.startX;

    // when reach frames edge in non-loop mode, reduce drag effect.
    if (!this.props.loop) {
      if (this.currentIndex === this.state.frames.length - 1) {
        if (this.deltaX < 0) {
          this.deltaX /= 3;
        }
      }
      if (this.currentIndex === 0) {
        if (this.deltaX > 0) {
          this.deltaX /= 3;
        }
      }
    }

    this.moveFramesBy(this.deltaX);
  };

  onTouchEnd = () => {
    if (!this.touchDown) {
      return;
    }
    this.touchDown = false;

    const direction = this.decideEndPosition();
    if (direction) {
      this.transitFramesTowards(direction);
    }
    setTimeout(() => this.prepareAutoSlide(), this.props.duration);
  };

  // auto slide to 'next' or 'prev'
  autoSlide = (rel: string) => {
    this.clearAutoTimeout();
    this.transitFramesTowards(rel === 'prev' ? 'right' : 'left');

    // prepare next move after animation
    setTimeout(() => this.prepareAutoSlide(), this.props.duration);
  };

  next = () => {
    const { frames } = this.state;

    if (!this.props.loop && this.currentIndex === frames.length - 1) {
      return;
    }
    this.autoSlide('next');
  };

  prev = () => {
    if (!this.props.loop && this.currentIndex === 0) {
      return;
    }
    this.autoSlide('prev');
  };

  decideEndPosition() {
    const { frames } = this.state;
    const { loop, minMove } = this.props;

    if (loop === false) {
      if (this.currentIndex === 0 && this.deltaX > 0) {
        return 'origin';
      }
      if (this.currentIndex === frames.length - 1 && this.deltaX < 0) {
        return 'origin';
      }
    }
    if (Math.abs(this.deltaX) < minMove) {
      return 'origin';
    }
    return this.deltaX > 0 ? 'right' : 'left';
  }

  moveFramesBy(deltaX: number) {
    const { prev, current, next } = this.movingFrames;

    translateXY(current, deltaX, 0);
    if (deltaX < 0) {
      translateXY(next, deltaX + this.frameWidth, 0);
    } else {
      translateXY(prev, deltaX - this.frameWidth, 0);
    }
  }

  prepareAutoSlide() {
    if (this.state.frames.length < 2) {
      return;
    }

    this.clearAutoTimeout();
    this.prepareSiblingFrames();

    // auto slide only avalible in loop mode
    if (this.mounted && this.props.loop && this.props.auto) {
      this.slideTimeoutID = setTimeout(this.autoSlide, this.props.interval);
    }
  }

  clearAutoTimeout() {
    clearTimeout(this.slideTimeoutID);
  }

  updateFrameSize() {
    const { width } = hasWindow() ? window.getComputedStyle(this.wrapper.current as Element) : { width: '0' };
    this.frameWidth = parseFloat(width.split('px')[0]);
  }

  hideAllFrames = () => {
    let maxHeight = 0;
    for (let i = 0; i < this.state.frames.length; i++) {
      const frame = this.frameRefs.get('f' + i).current;
      if (i > 0) {
        frame.style.opacity = '0';
      }

      const { height } = hasWindow() ? window.getComputedStyle(frame as Element) : { height: '0' };

      const parsedHeight = parseFloat(height.split('px')[0]);
      if (parsedHeight > maxHeight) {
        maxHeight = parsedHeight;
      }
    }
    this.setState({ maxHeight });
  };

  prepareSiblingFrames() {
    this.movingFrames = {
      current: this.frameRefs.get('f' + this.getFrameId()).current,
      prev: this.frameRefs.get('f' + this.getFrameId('prev')).current,
      next: this.frameRefs.get('f' + this.getFrameId('next')).current,
    };

    if (!this.props.loop) {
      if (this.currentIndex === 0) {
        this.movingFrames.prev = undefined;
      }
      if (this.currentIndex === this.state.frames.length - 1) {
        this.movingFrames.next = undefined;
      }
    }

    // prepare frames position
    translateXY(this.movingFrames.current, 0, 0);
    translateXY(this.movingFrames.prev, -this.frameWidth, 0);
    translateXY(this.movingFrames.next, this.frameWidth, 0);
    return this.movingFrames;
  }

  getFrameId(pos?: string): number {
    const { frames } = this.state;
    const total = frames.length;
    switch (pos) {
      case 'prev':
        return (this.currentIndex - 1 + total) % total;
      case 'next':
        return (this.currentIndex + 1) % total;
      default:
        return this.currentIndex;
    }
  }

  transitFramesTowards(direction: string) {
    const { prev, current, next } = this.movingFrames;
    const { duration } = this.props;

    let newCurrentId = this.currentIndex;
    switch (direction) {
      case 'left':
        translateXY(current, -this.frameWidth, 0, duration);
        translateXY(next, 0, 0, duration);
        newCurrentId = this.getFrameId('next');
        break;
      case 'right':
        translateXY(current, this.frameWidth, 0, duration);
        translateXY(prev, 0, 0, duration);
        newCurrentId = this.getFrameId('prev');
        break;
      default:
        // back to origin
        translateXY(current, 0, 0, duration);
        translateXY(prev, -this.frameWidth, 0, duration);
        translateXY(next, this.frameWidth, 0, duration);
    }
    this.currentIndex = newCurrentId;
    this.props.onIndexChanged?.(this.currentIndex);
  }

  render() {
    const { frames } = this.state;

    return (
      <CarouselStyled
        ref={this.wrapper}
        onTouchStart={this.onTouchStart}
        onMouseDown={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onMouseMove={this.onTouchMove}
      >
        {frames.map((frame, i) => {
          if (!this.frameRefs.get('f' + i)) {
            this.frameRefs.set('f' + i, React.createRef());
          }
          return (
            <div
              ref={this.frameRefs.get('f' + i)}
              key={i}
              style={
                i === 0
                  ? { zIndex: frames.length - i, position: 'relative', width: '100%', overflow: 'hidden' }
                  : { zIndex: frames.length - i, position: 'absolute', top: 0, width: '100%', overflow: 'hidden' }
              }
            >
              {frame}
            </div>
          );
        })}
      </CarouselStyled>
    );
  }
}

function translateXY(el: any, x: number, y: number, duration = 0) {
  if (!el) {
    return;
  }

  el.style.opacity = '1';

  // animation
  el.style.transitionDuration = duration + 'ms';
  el.style.webkitTransitionDuration = duration + 'ms';

  el.style.transfrom = `translate(${x}px, ${y}px)`;
  el.style.webkitTransform = `translate(${x}px, ${y}px) translateZ(0)`;
}
