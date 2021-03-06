import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose, error, title }) {
  return(
    <div className={`popup popup_info-tool ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_form">
        <button
          type="button"
          className={!error
            ? "popup__button-confirm popup__button-confirm_type_successful"
            : "popup__button-confirm popup__button-confirm_type_failed"
          }
          aria-label="close-form"
          onClick={onClose}
        >
        </button>
        <h2
          className="popup__title popup__title_type_info-tool"
        >
          {title}
        </h2>
        <button
          className="popup__close-form popup__close-form_infotool"
          type="button"
          aria-label="close-form"
          onClick={onClose}
        >
        </button>
      </div>
    </div>
  )
};

export default InfoTooltip;