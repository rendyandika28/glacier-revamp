import {
  breakpointsTailwind,
  useBreakpoints as useBreakpointsCore,
} from "@vueuse/core";
const useBreakpoints = () => {
  const breakpoints = useBreakpointsCore(breakpointsTailwind);
  const isMobile = breakpoints.smallerOrEqual("sm");
  const { isMobile: isMobileDevice } = useDevice();
  const isBreakpointsGreaterSm = computed<boolean>(
    () => !isMobile.value && !isMobileDevice
  );
  return {};
};

export default useBreakpoints;
