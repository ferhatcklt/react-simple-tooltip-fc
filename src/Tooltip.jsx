import React, { useState, useId, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  trigger = 'hover',
  backgroundColor,
  textColor,
  borderRadius
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();
  
  // Callback ref yerine standart useRef kullanıyoruz. Bu en güvenilir yöntemdir.
  const wrapperRef = useRef(null); 

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const triggerProps = {
    'aria-describedby': isVisible ? tooltipId : undefined,
    ...(trigger === 'hover' && {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      onFocus: showTooltip,
      onBlur: hideTooltip,
    }),
    ...(trigger === 'click' && {
      onClick: () => setIsVisible(!isVisible),
    }),
  };

  const tooltipStyle = {};
  
  // Pozisyonu doğrudan useEffect içinde hesaplayıp style'a ekleyeceğiz.
  // Bu, ref'in güncel olduğundan emin olmamızı sağlar.
  useEffect(() => {
    if (isVisible && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const tooltipElement = document.getElementById(tooltipId);
      if (tooltipElement) {
        tooltipElement.style.setProperty('--wrapper-top', `${rect.top}px`);
        tooltipElement.style.setProperty('--wrapper-left', `${rect.left}px`);
        tooltipElement.style.setProperty('--wrapper-width', `${rect.width}px`);
        tooltipElement.style.setProperty('--wrapper-height', `${rect.height}px`);
      }
    }
  }, [isVisible, tooltipId]);


  // Dinamik stil objesini basitleştiriyoruz.
  const dynamicStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
  };

  return (
    // ref'i doğrudan div'e bağlıyoruz. Bu, hatanın olduğu satırdaki değişikliğin ta kendisi.
    <div className="tooltip-wrapper" ref={wrapperRef}>
      {React.cloneElement(children, triggerProps)}

      {isVisible && createPortal(
        <div 
          id={tooltipId}
          role="tooltip"
          className="tooltip-container"
          style={dynamicStyles}
          data-position={position}
        >
          <div className="tooltip-content">{content}</div>
          <div className="tooltip-arrow" style={{ borderTopColor: backgroundColor }} />
        </div>,
        document.body
      )}
    </div>
  );
};

export default Tooltip;