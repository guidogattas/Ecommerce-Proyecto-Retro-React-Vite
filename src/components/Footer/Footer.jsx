import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div className="bg-gray-800 mt-10 py-8 container mx-auto">
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="max-w-sm text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-sm mr-4">Seguinos:</p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-2"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-2"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}