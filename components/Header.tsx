import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import ScrollProgressBar from './ScrollProgressBar';
import { SearchIcon } from './icons/SearchIcon';
import { CubeIcon } from './icons/CubeIcon';
import { CubeOutlineIcon } from './icons/CubeOutlineIcon';
import { RefreshIcon } from './icons/RefreshIcon';
import { curriculumData } from '../data/curriculumData';
import type { Section } from '../types';

// Utility to count total sections, including nested subsections
const countSections = (sections: Section[]): number => {
    let count = 0;
    sections.forEach(section => {
        count++; // Count the parent section
        if (section.subSections) {
            count += countSections(section.subSections);
        }
    });
    return count;
};
const totalSections = countSections(curriculumData.sections);

const Header: React.FC = () => {
  const { user, resetProgress } = useAuth();
  const [isResetPopupOpen, setIsResetPopupOpen] = useState(false);
  
  const completedSections = user?.progress.completedSections.length || 0;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  const handleReset = () => {
      resetProgress();
      setIsResetPopupOpen(false);
      const overviewElement = document.getElementById('overview');
      if (overviewElement) {
          overviewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  return (
    <>
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200/80">
            <ScrollProgressBar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
                            <span className="text-brand-primary">ZEN</span> VANGUARD
                        </h1>
                    </div>

                    {/* Center: Search */}
                    <div className="flex-1 flex justify-center px-8 lg:px-12">
                        <div className="w-full max-w-lg">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="block w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 pl-10 pr-20 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-colors"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <kbd className="inline-flex items-center px-2 py-1.5 rounded border border-gray-300 bg-white text-xs font-sans text-gray-500">
                                        ⌘K
                                    </kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats & Profile */}
                    {user && (
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="flex items-center gap-2" title={`${user.points} Points`}>
                                <CubeIcon />
                                <span className="font-semibold text-gray-800 hidden md:inline">{user.points} <span className="text-sm font-normal text-gray-500">Points</span></span>
                            </div>
                            <div className="flex items-center gap-2" title={`${completedSections} of ${totalSections} sections completed`}>
                                <CubeOutlineIcon />
                                <span className="font-semibold text-gray-800 hidden md:inline">{completedSections} <span className="text-sm font-normal text-gray-500">/ {totalSections}</span></span>
                            </div>
                            
                            <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>

                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors hidden sm:block" title="Reset Progress" onClick={() => setIsResetPopupOpen(true)}>
                                <RefreshIcon />
                            </button>
                            
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden lg:block">
                                    <p className="font-semibold text-sm text-gray-800 truncate">{user.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                </div>
                                <div className="h-11 w-11 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-base ring-2 ring-offset-2 ring-brand-primary/50 flex-shrink-0">
                                    {user.picture ? <img src={user.picture} alt={user.name} className="h-11 w-11 rounded-full"/> : getInitials(user.name)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>

        {isResetPopupOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fade-in">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all animate-fade-in-up">
                    <h3 className="text-xl font-bold text-gray-800">Reset Progress?</h3>
                    <p className="text-gray-600 mt-2">Are you sure you want to reset all your progress? This action cannot be undone.</p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button onClick={() => setIsResetPopupOpen(false)} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-colors">
                            Cancel
                        </button>
                        <button onClick={handleReset} className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default Header;