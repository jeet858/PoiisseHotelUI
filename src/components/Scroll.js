
import { useEffect } from "react";
import { withRouter } from "../utils/useHooks";

//.. 
const scrollTo = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
} 

/**
 * Scroll for Containers
 * @param {*} param0 
 */
const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {
      scrollTo();
    }, [pathname]);
    return children || null;
};
export default withRouter(ScrollToTop);

/**
 * Scroll for Components
 * @param {*} props 
 */
export const ScrollInView = props => {
  useEffect(() => {
    scrollTo();
  }, [props.trigger]);
  return props.children
} 

