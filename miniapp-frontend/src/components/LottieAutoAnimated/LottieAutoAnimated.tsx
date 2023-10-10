import React from "react";
import { LottieComponentProps, useLottie } from "lottie-react";
import clsx from "clsx";

export type LottieAutoAnimatedProps = LottieComponentProps & {
  className?: string;
};
export const LottieAutoAnimated: React.FC<LottieAutoAnimatedProps> = ({
  className,
  ...restProps
}) => {
  const Lottie = useLottie({ loop: false, ...restProps }, { height: "100%" });

  const togglePlaying = () => {
    Lottie.goToAndPlay(0);
  };

  return (
    <div className={clsx("h-full w-full", className)} onClick={togglePlaying}>
      {Lottie.View}
    </div>
  );
};
