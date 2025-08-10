// src/components/Grids.tsx
import img1 from '../../public/assets/BrandMarketing.jpg';
import img2 from '../../public/assets/Organising.jpg';

const cardData = [
  {
    title: 'Photography Impacts',
    image: img1,
    tags: ['Perspective', 'Operations', 'High Development'],
  },
  {
    title: 'Marketing Consultancy, Full Development Teams Controlled By One research Project.',
    image: img2,
    tags: ['ERP', 'Process Management', 'Enterprise Sales'],
  },
];

export const Grids = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 mx-auto floatIn">

      {cardData.map((card, index) => (
        <div className='bg-gradient-to-r from-blue-600 to-violet-600 p-1.5 rounded-xl'>
          <div
            key={index}
            className=" bg-box-bg text-heading-1 rounded-xl p-4 shadow-md w-90 flex flex-col justify-between min-h-[30rem] duration-[1s] hover:shadow-2xl"
          >
            <div>
              <img
                src={card.image}
                alt={card.title}
                className="rounded-md object-cover h-48 w-full mb-4"
              />
              <h3 className="text-heading-1 font-semibold text-base mb-3 break-words pointer-events-none">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-heading-1 border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="text-heading-1 text-sm font-bold underline-offset-2 hover:underline mt-auto "
            >
              Read Case Study →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};