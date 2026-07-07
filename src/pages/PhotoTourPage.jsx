import { useState, useEffect } from 'react';
import PhotoTourHeader from '../components/PhotoTour/PhotoTourHeader';
import PhotoCategoryBar from '../components/PhotoTour/PhotoCategoryBar';
import RoomSection from '../components/PhotoTour/RoomSection';
import PhotoViewer from '../components/PhotoTour/PhotoViewer';

// 1. Import All Photo Tour Images
import lr1_1 from '../assets/images/photo-tour/living-room-1/1.jpeg';
import lr1_2 from '../assets/images/photo-tour/living-room-1/2.jpeg';
import lr1_3 from '../assets/images/photo-tour/living-room-1/3.jpeg';

import lr2_1 from '../assets/images/photo-tour/living-room-2/1.jpeg';
import lr2_2 from '../assets/images/photo-tour/living-room-2/2.jpeg';
import lr2_3 from '../assets/images/photo-tour/living-room-2/3.jpeg';
import lr2_4 from '../assets/images/photo-tour/living-room-2/4.jpeg';
import lr2_5 from '../assets/images/photo-tour/living-room-2/5.jpeg';
import lr2_6 from '../assets/images/photo-tour/living-room-2/6.jpeg';
import lr2_7 from '../assets/images/photo-tour/living-room-2/7.jpeg';

import kit_1 from '../assets/images/photo-tour/kitchen/1.jpeg';
import kit_2 from '../assets/images/photo-tour/kitchen/2.jpeg';

import bed_1 from '../assets/images/photo-tour/bedroom/1.jpeg';
import bed_2 from '../assets/images/photo-tour/bedroom/2.jpeg';
import bed_3 from '../assets/images/photo-tour/bedroom/3.jpeg';
import bed_4 from '../assets/images/photo-tour/bedroom/4.jpeg';
import bed_5 from '../assets/images/photo-tour/bedroom/5.jpeg';
import bed_6 from '../assets/images/photo-tour/bedroom/6.jpeg';

import bath_1 from '../assets/images/photo-tour/bathroom/1.jpeg';

import gym_1 from '../assets/images/photo-tour/gym/1.jpeg';
import gym_2 from '../assets/images/photo-tour/gym/2.jpeg';
import gym_3 from '../assets/images/photo-tour/gym/3.jpeg';
import gym_4 from '../assets/images/photo-tour/gym/4.jpeg';
import gym_5 from '../assets/images/photo-tour/gym/5.jpeg';

import ext_1 from '../assets/images/photo-tour/exterior/1.jpeg';
import ext_2 from '../assets/images/photo-tour/exterior/2.jpeg';
import ext_3 from '../assets/images/photo-tour/exterior/3.jpeg';
import ext_4 from '../assets/images/photo-tour/exterior/4.jpeg';
import ext_5 from '../assets/images/photo-tour/exterior/5.jpeg';
import ext_6 from '../assets/images/photo-tour/exterior/6.jpeg';

import pool_1 from '../assets/images/photo-tour/pool/1.jpeg';
import pool_2 from '../assets/images/photo-tour/pool/2.jpeg';
import pool_3 from '../assets/images/photo-tour/pool/3.jpeg';

import add_1 from '../assets/images/photo-tour/additional/1.jpeg';
import add_2 from '../assets/images/photo-tour/additional/2.jpeg';
import add_3 from '../assets/images/photo-tour/additional/3.jpeg';
import add_4 from '../assets/images/photo-tour/additional/4.jpeg';
import add_5 from '../assets/images/photo-tour/additional/5.jpeg';
import add_6 from '../assets/images/photo-tour/additional/6.jpeg';
import add_7 from '../assets/images/photo-tour/additional/7.jpeg';
import add_8 from '../assets/images/photo-tour/additional/8.jpeg';
import add_9 from '../assets/images/photo-tour/additional/9.jpeg';
import add_10 from '../assets/images/photo-tour/additional/10.jpeg';

const categories = [
  {
    id: 'living-room-1',
    name: 'Living room 1',
    thumbnail: lr1_1,
    amenities: 'Sofa • Air conditioning • Ceiling fan • TV',
    images: [lr1_1, lr1_2, lr1_3]
  },
  {
    id: 'living-room-2',
    name: 'Living room 2',
    thumbnail: lr2_1,
    amenities: 'Ceiling fan • Hot tub',
    images: [lr2_1, lr2_2, lr2_3, lr2_4, lr2_5, lr2_6, lr2_7]
  },
  {
    id: 'kitchen',
    name: 'Full kitchen',
    thumbnail: kit_1,
    amenities: 'Freezer • Fridge • Blender • Cooker • Cooking basics • Kettle • Microwave • Toaster • Wine glasses • Coffee • Crockery and cutlery',
    images: [kit_1, kit_2]
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    thumbnail: bed_1,
    amenities: 'Double bed • Air conditioning • Bed linen • Ceiling fan • Clothes storage • Cot • Hangers • Iron • Room-darkening blinds • Cleaning available during stay • Cleaning products • Long-term stays allowed • Private entrance • Wifi',
    images: [bed_1, bed_2, bed_3, bed_4, bed_5, bed_6]
  },
  {
    id: 'bathroom',
    name: 'Full bathroom',
    thumbnail: bath_1,
    amenities: 'Shower • Hair dryer • Hot water',
    images: [bath_1]
  },
  {
    id: 'gym',
    name: 'Gym',
    thumbnail: gym_1,
    amenities: 'Exercise equipment',
    images: [gym_1, gym_2, gym_3, gym_4, gym_5]
  },
  {
    id: 'exterior',
    name: 'Exterior',
    thumbnail: ext_1,
    amenities: 'Outdoor seating • Patio or balcony',
    images: [ext_1, ext_2, ext_3, ext_4, ext_5, ext_6]
  },
  {
    id: 'pool',
    name: 'Pool',
    thumbnail: pool_1,
    amenities: 'Shared pool',
    images: [pool_1, pool_2, pool_3]
  },
  {
    id: 'additional',
    name: 'Additional photos',
    thumbnail: add_1,
    amenities: 'Washing machine',
    images: [add_1, add_2, add_3, add_4, add_5, add_6, add_7, add_8, add_9, add_10]
  }
];

// Flattened ordered array of all photos containing room title metadata
const allPhotos = categories.flatMap(cat => 
  cat.images.map(img => ({
    src: img,
    roomTitle: cat.name
  }))
);

export default function PhotoTourPage() {

  const [activeCategoryId, setActiveCategoryId] = useState('living-room-1');
  const [viewerIndex, setViewerIndex] = useState(null);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // 2. Select category scroll handler
  const handleSelectCategory = (categoryId) => {
    setIsManualScrolling(true);
    setActiveCategoryId(categoryId);

    const element = document.getElementById(categoryId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 180;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsManualScrolling(false);
      }, 800);
    }
  };

  // 3. Sync Active Category on Scroll
  useEffect(() => {
    if (isManualScrolling || viewerIndex !== null) return;

    const observerOptions = {
      root: null,
      rootMargin: '-180px 0px -40% 0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        setActiveCategoryId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isManualScrolling, viewerIndex]);

  // 4. Handle opening lightbox on image click
  const handleImageClick = (imageSrc) => {
    const idx = allPhotos.findIndex(photo => photo.src === imageSrc);
    if (idx !== -1) {
      setViewerIndex(idx);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col w-full">
      {/* Sticky Header */}
      <PhotoTourHeader />

      {/* Sticky Photo Category Strip */}
      <PhotoCategoryBar 
        categories={categories}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Room list container */}
      <main className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col divide-y divide-gray-200">
        {categories.map((cat) => (
          <RoomSection 
            key={cat.id}
            id={cat.id}
            title={cat.name}
            amenities={cat.amenities}
            images={cat.images}
            onImageClick={handleImageClick}
          />
        ))}
      </main>

      {/* Fullscreen Photo Lightbox Viewer Overlay */}
      {viewerIndex !== null && (
        <PhotoViewer 
          photos={allPhotos}
          currentIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
          onPrev={() => setViewerIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setViewerIndex(prev => Math.min(allPhotos.length - 1, prev + 1))}
        />
      )}
    </div>
  );
}
