import React, { useEffect, useState } from 'react';
// icons
import {FaSearch} from 'react-icons/fa';
// useNavigate hook
import {useNavigate} from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm , setSearchTerm] = useState('');
  const [isAnimating , setIsAnimating] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout
    return () => clearTimeout(timeoutId);
  })
  

  const handleSearchInput = (e)=>{
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(searchTerm);
    if(searchTerm.length > 0){
      navigate(`/search?query=${searchTerm}`);
      // emptying the input box and resetting state
      document.querySelector('input').value = ''; 
      setSearchTerm('');
    }else{
      // if ip is empty set animation to true
      setIsAnimating(true);
      // console.log('please enter search text');
    }
  }
  return (<form className={`${isAnimating ? 'animate-shake' : 'animate-none' } 
  relative xl:w-full mt-4 xl:mt-0`} onSubmit={handleSubmit}>
    <input type="text" 
    onChange={handleSearchInput}
    className='input' placeholder='Search for a product...'/>
    <button className='btn btn-accent absolute top-0 right-0 
    rounded-tl-none rounded-bl-none'>
      <FaSearch className='text-xl'/>
    </button>
  </form>);
};

export default SearchForm;
