import { reviewList } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex justify-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <div id="testimonials" className="lg:p-12 p-8">
      <h2 className="font-extrabold py-2 lg:mb-12 mb-8 capitalize text-primary text-xl lg:text-3xl">
        Student Reviews
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        {reviewList.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center justify-center text-center gap-4 basis-1/3"
          >
            <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
              <Image
                className="object-cover"
                src={review.image}
                width={150}
                height={150}
                alt={review.title}
              />
            </div>

            <h2 className="text-primary text-xl font-bold">{review.title}</h2>

            {renderStars(review.rating)}

            <p>{review.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
