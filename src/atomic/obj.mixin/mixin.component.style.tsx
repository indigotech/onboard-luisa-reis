// https://stackoverflow.com/a/13924997/3670829
export const textMaxLines = (maxLines: number, lineHeight: number, adjustment = 0) => `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${maxLines};
  line-height: ${lineHeight}px;
  max-height: ${lineHeight * maxLines + adjustment}px;
  margin: 0;
`;

// https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
export const highlightStyle = `
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0.05);
`;
