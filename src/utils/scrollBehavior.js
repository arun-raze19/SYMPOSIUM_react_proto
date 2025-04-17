// Custom scroll behavior to only allow scrolling down
export const setupScrollBehavior = () => {
  let lastScrollTop = 0;
  
  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // If trying to scroll up (current scroll position is less than last position)
    if (st < lastScrollTop) {
      // Prevent the scroll by setting it back to the last position
      window.scrollTo(0, lastScrollTop);
    } else {
      // Allow scrolling down
      lastScrollTop = st <= 0 ? 0 : st;
    }
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: false });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
