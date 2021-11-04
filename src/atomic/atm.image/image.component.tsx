import * as React from 'react';

export const Image = {
    BtnClose: (props:any) => <img src='assets/img/Close.png' width={props.width ?? '40'} height={props.height ?? '40px'}/>,
    UserProfile: (props:any) => <img src='assets/img/img_user.png' width={props.width ?? '100px'} height={props.height ?? '100px'}/>,
    Image105: (props:any) => <img src='assets/img/image 105.png' />,
    Avatar: (props:any) => <img src='assets/img/image avatar.png' width={props.width ?? '100px'} height={props.height ?? '100px'}/>,
    EmojiDisapointed: (props:any) => <img src='assets/img/Disapointed.png' width={props.width ?? '45'} height={props.height ?? '45px'}/>,
    EmojiNeutral: (props:any) => <img src='assets/img/Neutral.png' width={props.width ?? '45'} height={props.height ?? '45px'}/>,
    EmojiSad: (props:any) => <img src='assets/img/Sad.png' width={props.width ?? '45'} height={props.height ?? '45px'}/>,
    EmojiSmile: (props:any) => <img src='assets/img/Smile.png' width={props.width ?? '45'} height={props.height ?? '45px'}/>,
    EmojiSuperHappy: (props:any) => <img src='assets/img/Super happy.png' width={props.width ?? '45'} height={props.height ?? '45px'}/>,
}