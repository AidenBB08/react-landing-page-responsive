// Band.tsx
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';


// Duplicate for smooth infinite scrolling
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const duplicatedLogos = [...logos, ...logos];

export const Band = () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex gap-8 animate-scroll-left w-max">
        {duplicatedLogos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-16 w-auto object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
};
