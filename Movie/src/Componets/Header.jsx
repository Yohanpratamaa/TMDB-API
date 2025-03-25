import { useState, useEffect } from 'react';
import { HiHome, HiMagnifyingGlass, HiPlayCircle} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

export default function Header({ onSearch }) {
  const [toggle, setToggle] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'MOVIES', icon: HiPlayCircle },
  ];

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
    setToggle(false);
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <div className='flex items-center justify-center p-5'>
      <div className='flex gap-8 items-center mt-2 relative'>
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <div key={item.name} onClick={item.name === 'SEARCH' ? handleSearchClick : null}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index < 3 && (
            <div key={item.name} onClick={item.name === 'SEARCH' ? handleSearchClick : null}>
              <HeaderItem name={''} Icon={item.icon} />
            </div>
          ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle ? (
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.map((item, index) => index > 2 && (
                  <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
        {searchActive && (
          <div className='absolute top-16 left-0 right-0 mx-auto md:w-[320px] bg-[#121212] p-3 rounded-lg border border-gray-700'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder='Search for a movie...'
              className='w-full bg-transparent text-white outline-none p-2'
            />
          </div>
        )}
      </div>
    </div>
  );
}