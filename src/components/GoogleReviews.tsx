'use client';

import { useState, useRef } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const GoogleReviews = () => {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Hardcoded reviews data from Google Maps
  const placeRating = 4.9;
  const totalReviews = 274;
  
  const reviews: Review[] = [
    {
      author_name: "Priya Sharma",
      rating: 5,
      text: "Recently had cataract operation of my mother. Doctor is very nice, and explained all the queries very well. His hand is very skillful. Operative the set up is very advanced. Treatment is precise accurate and affordable. Staff is very cooperative and humble. Overall nice experience. I highly recommend the doctor for all ophthalmic queries.",
      relative_time_description: "4 months ago"
    },
    {
      author_name: "Rajesh Patel",
      rating: 5,
      text: "We recently had a Cataract (moti bindu) surgery done for my grandmother at Dr. Partani's Eye Care Hospital, and the experience was truly excellent. From the initial consultation to the surgery and follow-up care, everything was handled with great professionalism and compassion. Dr. Sharad Partani is incredibly kind and patient, with a calm way of explaining everything so clearly.",
      relative_time_description: "2 months ago"
    },
    {
      author_name: "Amit Kumar",
      rating: 5,
      text: "I had the privilege of entrusting my father's eye surgery to Dr. Partani, and I am incredibly pleased with the entire experience. From the very beginning, Dr. Partani was not only highly professional but also very supportive, taking the time to explain the procedure thoroughly and addressing all our concerns with patience. The surgery itself was successful, and my father has shown remarkable improvement in his vision.",
      relative_time_description: "4 months ago"
    },
    {
      author_name: "Sunita Desai",
      rating: 5,
      text: "Huge thanks to Doctor Partani. Highly recommended and knowledgeable eye surgeon. He is the best surgeon in Nashik. My mother had a very critical eye situation, but the doctor was very confident in his knowledge that he could give her the best vision. His dedication towards patients is very commendable. Great facilities, great expertise. All staff is very supportive.",
      relative_time_description: "6 months ago"
    },
    {
      author_name: "Sujata Watve",
      rating: 5,
      text: "Contacted Dr Partani with one of my relatives reference for cataract operation of my wife Sujata Watve. Both eyes operation was done on 3rd & 7th June 2025. Now she can see the long distance things without spectacles. As an eye specialist Dr Partani is very nice person, soft spoken & answered our each query. Staff behaviour is also appreciated.",
      relative_time_description: "2 months ago"
    },
    {
      author_name: "Arvind Borse",
      rating: 5,
      text: "Dr Partani's hospital is too good, clean! Neatness is there! Eye care is taken very good! My right eye operation done so smoothly that I did not realize when my operation took place! Last day Dr Partani checked & gave spectacle no with that new number I am enjoying new vision! Thanks Dr Partani!",
      relative_time_description: "5 months ago"
    },
    {
      author_name: "Kavita Singh",
      rating: 5,
      text: "Dr. PARTANI SIR is truly a professional in every sense of the word. They took the time to listen to my concerns, answer all my questions, and explain everything in a way that was easy to understand. The exam itself was thorough and efficient, and I was impressed by the level of care and attention to detail. What really stood out was the doctor's ability to make me feel comfortable and relaxed throughout the entire process.",
      relative_time_description: "4 months ago"
    },
    {
      author_name: "Ramesh Gupta",
      rating: 5,
      text: "I am 67 years old male with no vision on left eye from past 25 years, I visited dr. Partani's eye clinic he suggested me the surgery with hopes and he done the wonderful job, with Dr's efforts and by the grace of God, I got my vision back, thank you very much.",
      relative_time_description: "2 months ago"
    },
    {
      author_name: "Neha Agarwal",
      rating: 5,
      text: "I want to thank you Dr. Partani for everything you are doing to help me. I am blessed to have you as my eye doctor. I appreciate your kindness and gentleness towards me and also thanks Dr. Sarika Partani for guiding me. I am incredibly pleased with the results my vision is significantly clearer, and I can see details I hadn't noticed before. World without glasses is very beautiful.",
      relative_time_description: "4 months ago"
    },
    {
      author_name: "Anita Joshi",
      rating: 5,
      text: "Best eye care clinic I have ever visited in Nashik. Doctor is so compassionate, warm, and kind hearted. He listens to you patiently, never in hurry. Latest facilities and great ambience. I had severe eye infection, was about to lose my vision, and he is the one who saved my eyes. Treatment suggested is accurate and on point. We are lucky to have such experienced gentleman in Nashik.",
      relative_time_description: "8 months ago"
    },
    {
      author_name: "Ravi Patil",
      rating: 5,
      text: "Recently had a cataract surgery done at Dr. Partani's Eye Care clinic and the procedure right from day 1 was just smooth sailing. I would like to express my heartfelt thanks to Dr. Partani and his staff. The ambience, the cleanliness, the behaviour of the always smiling staff puts you at ease the moment you enter. Dr. Partani is an amazing person who listens to you and immediately puts you at ease.",
      relative_time_description: "7 months ago"
    },
    {
      author_name: "Mahesh Kulkarni",
      rating: 5,
      text: "Dr Partani's (Maheshwari) eye care hospital is one among the best eye care hospital in Nashik. Doctor is so cooperative and kind hearted person. The hospital is well managed with quality staff. All tests and checkups were well coordinated. I am very happy with the hospitality, caring staff.",
      relative_time_description: "6 months ago"
    },
    {
      author_name: "Suresh Jadhav",
      rating: 5,
      text: "I recently underwent cataract surgery for both eyes with Dr. Sharad Partani, and my experience was exceptional. His clear and accurate diagnosis, coupled with honest and transparent communication about my eye health and the procedure, were truly commendable. The hospital maintains high hygiene standards and the support staff were very helpful.",
      relative_time_description: "8 months ago"
    },
    {
      author_name: "Deepak Sharma",
      rating: 5,
      text: "One of the Best Surgeon in Nashik. Treated very politely. Thank you for giving best treatment sir. Dr. Partani is an excellent ophthalmologist! After operation, my father said not even feeling that it was surgery. The wait time at the ophthalmologist's office is less. The cost of the operation is within common man's range.",
      relative_time_description: "1 month ago"
    },
    {
      author_name: "Vidya Deshmukh",
      rating: 5,
      text: "Overall great experience. We went there for cataract surgery on my mom's eyes. Dr. Partani is very knowledgeable and experienced surgeon, makes you feel very comfortable. Calm and humble by nature. The entire process was quick and smooth and we have got the desired result. My mom is feeling completely fine after the surgery.",
      relative_time_description: "2 years ago"
    },
    {
      author_name: "Santosh Pawar",
      rating: 5,
      text: "Dr. Partani for eyes, is a very intelligent and skillful Dr. in Nashik. Actually today there is a big business in the medical field. But it is not his business but he is serving the patient whole heartedly. Today their new building is a beautiful hospital with up-to-date machinery and friendly staff. I have known Dr. Partani from almost 10/11 years, every patient is 100% satisfied.",
      relative_time_description: "1 year ago"
    },
    {
      author_name: "Prakash Jain",
      rating: 5,
      text: "I cannot express enough gratitude for the exceptional care provided by Dr. Sharad Partani during my father's cataract surgery. Dr. Partani's extensive experience was evident from our first consultation, where he took the time to thoroughly explain the procedure and address our concerns. The surgery was conducted with precision, and my father experienced a remarkably smooth recovery.",
      relative_time_description: "1 year ago"
    },
    {
      author_name: "S P Jadhav",
      rating: 5,
      text: "Dr. Partani is an excellent eye surgeon. After my cataract surgery I do not feel that it was surgery. The staff behaviour is very professional. Thank you Dr.",
      relative_time_description: "10 months ago"
    }
  ];

  const handleReviewClick = (index: number) => {
    if (expandedReview === index) {
      setExpandedReview(null);
      setIsPaused(false);
    } else {
      setExpandedReview(index);
      setIsPaused(true);
      // Resume animation after 6 seconds
      setTimeout(() => {
        setIsPaused(false);
        setExpandedReview(null);
      }, 6000);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
  };

  const renderStars = (rating: number, size: string = 'w-4 h-4') => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${size} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };



  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ⭐ What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Real reviews from our patients on Google Maps. Your experience matters to us.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500">{placeRating.toFixed(1)}</div>
              <div className="flex justify-center mt-1">
                {renderStars(Math.round(placeRating), 'w-6 h-6')}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Based on {totalReviews} Google reviews
              </p>
            </div>
          </div>
        </div>

        {/* Moving Reviews Carousel */}
        <div className="overflow-hidden relative">
          {/* Scroll instructions */}
          <div className="absolute top-4 right-4 z-10 bg-black/70 text-white text-xs px-3 py-1 rounded-full opacity-75">
            👆 Drag to scroll
          </div>
          <div 
            ref={scrollContainerRef}
            className={`flex space-x-6 ${isPaused || isDragging ? '' : 'animate-scroll'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} overflow-x-auto scrollbar-hide`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer ${
                  expandedReview === index ? 'w-96 z-10 relative' : 'w-80'
                }`}
                onClick={() => handleReviewClick(index)}
              >
                {/* Review Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">{review.author_name}</h4>
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-xs text-gray-500">{review.relative_time_description}</span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className={`text-gray-600 text-sm leading-relaxed ${
                  expandedReview === index ? '' : 'line-clamp-4'
                }`}>
                  {review.text}
                </p>

                {/* Click indicator */}
                {expandedReview !== index && (
                  <div className="mt-2 text-xs text-blue-500 opacity-75">
                    Click to read full review
                  </div>
                )}

                {/* Google Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Posted on Google
                    </div>
                    {expandedReview === index && (
                      <div className="text-xs text-orange-500">
                        Click to close
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg font-medium">
            Please rate and leave a review on Google Maps after your visit
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;