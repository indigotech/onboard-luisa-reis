import style from "styled-components"

const FloatingBtn = style.button`

    display: inline-block;
    cursor: pointer;
	width: 42px;
	line-height: 42px;
	vertical-align: middle;
	background: #00445f;
	border-radius: 50%;
    border: none;
    color: white;
	box-shadow: 0 2px 4px rgba(0,0,0,.2);
    text-align: center;
    position: absolute;
	right: 40px;
	bottom: 50px;
    height: 42px;
    font-size: 26px;
    text-align: center;
`
export default FloatingBtn;