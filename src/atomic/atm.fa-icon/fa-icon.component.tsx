/* eslint-disable react/display-name */
import React from 'react';

import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faBan,
  faBus,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faTimes,
  faUpload,
  faTimesCircle,
  faInfoCircle,
  faCheckCircle,
  faExclamationCircle,
  faHeart,
  faImage,
  faBars,
  faMicrophone,
  faStar,
  faStarHalf,
  faMinus,
  faPlus,
  faExclamationTriangle,
  faSearch,
  faCheckSquare,
  faDotCircle,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type MyFontAwesomeIconProps = Omit<FontAwesomeIconProps, 'icon'>;

export const FaIcon = {

  Ban: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faBan} />,
  Bus: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faBus} />,
  Circle: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faCircle} />,
  Check: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faCheck} />,
  CheckSquare: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faCheckSquare} />,
  ChevronDown: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faChevronDown} />,
  ChevronLeft: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faChevronLeft} />,
  ChevronRight: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faChevronRight} />,
  ChevronUp: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faChevronUp} />,
  Close: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faTimes} />,
  DotCircle: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faDotCircle} />,
  FileUpload: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faUpload} />,
  FlashAlert: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faTimesCircle} />,
  FlashInfo: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faInfoCircle} />,
  FlashSuccess: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faCheckCircle} />,
  FlashWarning: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faExclamationCircle} />,
  Heart: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faHeart} />,
  Image: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faImage} />,
  Menu: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faBars} />,
  Microphone: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faMicrophone} />,
  Search: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faSearch} />,
  Square: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faSquare} />,
  Star: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faStar} />,
  StarHalf: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faStarHalf} />,
  StepperMinus: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faMinus} />,
  StepperPlus: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faPlus} />,
  UserCircle: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faUserCircle} />,
  Warning: (props: MyFontAwesomeIconProps) => <FontAwesomeIcon {...props} icon={faExclamationTriangle} />,
};
