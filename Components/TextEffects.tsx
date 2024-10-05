import { TypeAnimation } from 'react-type-animation';

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Wanna know more?',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Feel free to explore my page',
        1500,
        'I do simple web designs and programming',
        1500,
      ]}
      speed={40}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase' 
      repeat={Infinity}
    />
  );
};
export default TextEffects;