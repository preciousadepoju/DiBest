import React from 'react';
import './Cardcarousel.css'
import { Carousel } from 'flowbite-react';

function Cardcarousel() {
    return (
        <>
            <div className="h-96 sm:h-64 xl:h-80 2xl:h-100  z-0 relative" style={{ height: '500px' }}>
                <Carousel leftControl=" " rightControl=" " showIndicators={false}>
                    <div>
                        <a href="#" class="ecommerce flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl mb-2">
                            <img class="object-cover w-full  h-96 md:h-auto md:w-48 ecommerceImg" src="/src/assets/card 1.jfif" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">Ecommerce</h6>
                                <p class="mb-3 font-normal text-black">A culinary masterpiece awaits those seeking an extraordinary
                                    dining experience. A gem among gastronomic treasures,
                                    beckons patrons to embark on a journey through the senses.
                                    From the moment you step through its doors, the restaurant
                                    unveils a symphony of flavors, textures, and aromas that dance
                                    harmoniously on the palate.

                                    The ambiance is a carefully curated blend of modern elegance
                                    and timeless charm. </p>
                            </div>
                        </a>

                    </div>
                    <div>
                        <a href="#" class="ecommerce flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl mb-2">
                            <img class="object-cover w-full  h-96 md:h-auto md:w-48 ecommerceImg" src="/src/assets/card 2.jfif" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">Ewallet</h6>
                                <p class="mb-3 font-normal text-black">A culinary masterpiece awaits those seeking an extraordinary
                                    dining experience. A gem among gastronomic treasures,
                                    beckons patrons to embark on a journey through the senses.
                                    From the moment you step through its doors, the restaurant
                                    unveils a symphony of flavors, textures, and aromas that dance
                                    harmoniously on the palate.

                                    The ambiance is a carefully curated blend of modern elegance
                                    and timeless charm. </p>
                            </div>
                        </a>

                    </div>
                    <div>
                        <a href="#" class="ecommerce flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl mb-2">
                            <img class="object-cover w-full  h-96 md:h-auto md:w-48 ecommerceImg" src="/src/assets/card 4.jfif" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">Property Rental</h6>
                                <p class="mb-3 font-normal text-black">A culinary masterpiece awaits those seeking an extraordinary
                                    dining experience. A gem among gastronomic treasures,
                                    beckons patrons to embark on a journey through the senses.
                                    From the moment you step through its doors, the restaurant
                                    unveils a symphony of flavors, textures, and aromas that dance
                                    harmoniously on the palate.

                                    The ambiance is a carefully curated blend of modern elegance
                                    and timeless charm. </p>
                            </div>
                        </a>

                    </div>
                    <div>
                        <a href="#" class="ecommerce flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl mb-2">
                            <img class="object-cover w-full  h-96 md:h-auto md:w-48 ecommerceImg" src="/src/assets/card 3.jfif" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">Caribbean Region</h6>
                                <p class="mb-3 font-normal text-black">A culinary masterpiece awaits those seeking an extraordinary
                                    dining experience. A gem among gastronomic treasures,
                                    beckons patrons to embark on a journey through the senses.
                                    From the moment you step through its doors, the restaurant
                                    unveils a symphony of flavors, textures, and aromas that dance
                                    harmoniously on the palate.

                                    The ambiance is a carefully curated blend of modern elegance
                                    and timeless charm. </p>
                            </div>
                        </a>

                    </div>
                    <div>
                        <a href="#" class="ecommerce flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl mb-2">
                            <img class="object-cover w-full  h-96 md:h-auto md:w-48 ecommerceImg" src="/src/assets/card 5.jfif" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">Egift</h6>
                                <p class="mb-3 font-normal text-black">A culinary masterpiece awaits those seeking an extraordinary
                                    dining experience. A gem among gastronomic treasures,
                                    beckons patrons to embark on a journey through the senses.
                                    From the moment you step through its doors, the restaurant
                                    unveils a symphony of flavors, textures, and aromas that dance
                                    harmoniously on the palate.

                                    The ambiance is a carefully curated blend of modern elegance
                                    and timeless charm.</p>
                            </div>
                        </a>

                    </div>
                    
                </Carousel>
            </div>
        </>
    );
}

export default Cardcarousel
