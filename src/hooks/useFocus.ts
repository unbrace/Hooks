import * as React from 'react';

const useFocus = (): React.RefObject<any> => {
  const htmlElRef = React.useRef<any>(null);
  const setFocus = React.useCallback(() => {
    if (htmlElRef.current !== null) {
      htmlElRef.current.focus();
    }
  }, [htmlElRef]);

  React.useEffect(() => setFocus(), [setFocus]);

  return htmlElRef;
};

export default useFocus;
