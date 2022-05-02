import qrCode from '../../images/image-qr-code.png';
import './Container.css';

export default function Container() {
  return (
    <div className='bg-white my-container justify-center shadow-2xl shadow-lightGrey'>
      <div className='inner-container'>
        <img src={qrCode} className='qr-container' alt='' />
        <div className='prompt-container'>
          <h1 className='text-darkNavy my-heading'>Improve your front-end skills by building projects</h1>
          <p className='text-grey my-paragraph'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

// 24px from img to heading
