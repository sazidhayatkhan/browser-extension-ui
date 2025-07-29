import React from 'react';
import Image from 'next/image';
import Button from './Button';

type CardProps = {
  data?:any
  onRemove?: () => void;
};

const Card = ({
  data,  
  onRemove,
}: CardProps) => {
  return (
    <div className="bg-[#1F2535] border border-gray-600 rounded-3xl p-4">
      <div className="flex justify-start items-start gap-4">
        <div className="relative h-[60px] min-w-[60px] rounded-xl overflow-hidden">
          <Image
            src={data?.image}
            alt={data?.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="min-h-[150px]">
          <h2 className="text-white font-semibold text-xl">{data?.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-4">{data?.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <Button variant="outlined" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
