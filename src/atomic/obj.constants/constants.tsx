export enum BrandColor {
  Blue = '#16AAE4',
  Pink = '#FF388B',
  Purple = '#663AE7',
}

// We used class rather than enums since enums don't support computed values
export class Color {
  public static readonly Black = 'black';
  public static readonly White = 'white';
  
  public static readonly GrayXLight = '#F8F8F8';
  public static readonly GrayLight = '#EBEBEB';
  public static readonly Gray = '#BDBDBD';
  public static readonly GrayDark = '#757575';
  public static readonly GrayXDark = '#525252';
  

  public static readonly Primary = BrandColor.Blue;
  public static readonly Secondary = '#F76464';
  public static readonly Accessory = BrandColor.Purple;
  public static readonly Neutral = Color.GrayDark;
  public static readonly CallToAction = BrandColor.Pink;
  public static readonly ActionButton = '#24B574';

  public static readonly Alert = '#DC2729';
  public static readonly Warning = '#F5A623';
  public static readonly Success = '#1ABC9C';
}

export enum FontFamily {
  Primary = 'Open Sans',
}

export enum FontWeight {
  Medium = 500,
  Bold = 'bold',
  Normal = 'normal',
  Lighter = 300,
}

export enum FontSize {
  XSmall = '12px',
  Small = '14px',
  Medium = '16px',
  Large = '18px',
  XLarge = '24px',
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
}

export const HeaderHeight = {
  Mobile: '64px',
  Desk: '80px',
};

export enum IconSize {
  Small = '12px',
  Medium = '16px',
  Large = '20px',
}

export enum FaIconSize {
  XSmall = 'xs',
  Large = 'lg',
  Small = 'sm',
  X1 = '1x',
  X2 = '2x',
  X3 = '3x',
  X4 = '4x',
  X5 = '5x',
  X6 = '6x',
  X7 = '7x',
  X8 = '8x',
  X9 = '9x',
  X10 = '10x',
}

export const DrawerWidth = '256px';

export const Navbar = {
  a: '1',
};

export const FieldHeight = '80px';
export const TransitionDuration = '.3s';

export const Border = {
  Color: Color.GrayLight,
  Width: '1px',
  Radius: '15px',
  RadiusLarge: '24px',
};

// Security recommendation: Failing to enforce passwords of at least 7 characters, a complexity
// of at least alpha and numeric characters increases the risk of a brute force attack.
export enum PasswordLength {
  Max = 18,
  Min = 7,
}

export enum AspectRatio {
  Square = 1,
}

export const Breakpoint = {
  xs: 0, // em
  sm: 32, // em
  md: 48, // em
  lg: 64, // em
};

export enum ZIndex {
  ground = 0,
  first = 1,
  second = 2,
  third = 3,
  top = 4,
}

export const Shadow = {
  Small: '0px 2px 2px 0px rgba(0,0,0,0.2)',
};
