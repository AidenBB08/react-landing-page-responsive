// Band.tsx
import logo1 from '../../../public/assets/logos/logo1.png';
import logo2 from '../../../public/assets/logos/logo2.png';
import logo3 from '../../../public/assets/logos/logo3.png';
import logo4 from '../../../public/assets/logos/logo4.png';
import logo5 from '../../../public/assets/logos/logo5.png';
import logo6 from '../../../public/assets/logos/logo6.png';
import { Title } from '../shared/Title';

// Duplicate for smooth infinite scrolling
const logos = [logo1, logo2, logo3, logo4, logo5, logo6,];
const duplicatedLogos = [...logos, ...logos];

export const Band = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center py-7 mb-15">
          <Title >Our Proud Partners</Title>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-[100px] animate-scroll-left w-max">
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
      </div>
    </div>

  );
}