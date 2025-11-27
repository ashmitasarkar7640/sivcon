import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="newspaper-border slide-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 uppercase leading-tight">
        Global Leaders Convene For Annual MUN Conference
      </h2>
      <div className="border-t-2 border-b-2 border-black py-2 my-4 text-center italic text-sm sm:text-base">
        Young diplomats gather to debate world issues and forge international cooperation
      </div>
      
      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Students at MUN conference" 
          className="w-full h-48 sm:h-64 md:h-80 object-cover object-center border-2 border-black"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-xs sm:text-sm">
          Delegates from previous conferences engaged in diplomatic negotiations
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="newspaper-column sm:border-b md:border-b-0 sm:border-r-0 md:border-r pb-4 md:pb-0">
          <p className="newspaper-dropcap">
            The prestigious Model United Nations Conference returns this January, 
            bringing together talented students from across the globe. This annual gathering 
            offers a unique opportunity for young diplomats to tackle pressing international issues.
          </p>
        </div>
        
        <div className="newspaper-column border-b md:border-b-0 sm:border-r-0 md:border-r pb-4 md:pb-0">
          <p>
            "This year's conference will focus on sustainable development, international security, 
            and human rights," states Conference Director Sarah Johnson. "We believe these topics 
            are more relevant than ever in today's complex global landscape."
          </p>
        </div>
        
        <div className="newspaper-column">
          <p>
            Registration is now open for all interested participants. Early registration is 
            encouraged as spaces are limited. The organizing committee has prepared an 
            extensive program featuring workshops, debates, and social events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;