/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = () => {
  const dialogRef = useRef(null);

  const updateModal = () => {
    dialogRef.current.addEventListener('click', (event) => {
      if (event.target === dialogRef.current) {
        dialogRef.current.close();
      }
    });
  };

  const { t } = useTranslation('shoppingassistantmodal');

  return (
    <dialog
      ref={dialogRef}
      onClick={updateModal}
      className='profile-modal modal-financial-goal'
      id='signup-modal'
    >
      <div className='profile-modal-wrapper'>
        <div className='profile-modal-content'>
          <p className='profile-modal-title'>{t('msg')}</p>
          <Link className='profile-modal-btn' to={'/signup'}>
            {t('signup')}
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
