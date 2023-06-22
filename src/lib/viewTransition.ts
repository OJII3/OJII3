"use client";

import { useCallback } from "react";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Document {
    startViewTransition(_callback: Function): void;
  }
}

/**
 * callback を startViewTransition と useCallback でラップした関数を返すだけのhook
 */
export const useStartViewTransitionCallback: <T extends Function>(
  // eslint-disable-next-line no-unused-vars
  callback: T
) => T = (callback) => {
  return useCallback<typeof callback.arguments>(
    (args: typeof callback.arguments) => {
      // ブラウザが未対応の場合、元のcallbackをそのまま返す
      if (document.startViewTransition)
        document.startViewTransition(callback.bind(null, args));
      else callback;
    },
    [callback]
  );
};
