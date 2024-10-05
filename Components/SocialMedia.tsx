// SocialMedia.tsx
import { FaFacebook, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/apsii.tese.1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/apsie-tese-6853b3233/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
      >
        <FaLinkedin size={30} />
      </a>
      
      <a
        href="https://www.youtube.com/@barataapsii2466"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800"
      >
        <FaYoutube size={30} />
      </a>
      <a
        href="https://www.instagram.com/barata.apsii/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800"
      >
        <FaInstagram size={30} />
      </a>

      <a
        href="https://github.com/BarataApsii"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
      >
        <FaGithub size={30} />
      </a>
      
    </div>
  );
};

export default SocialMedia;
