import React from 'react'

const SearchTest = (delay) =>{
    const [searchText, setSearchText] = useState('');
    let timeoutId

    return function(...arg) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        // func(...arg)
        // const handleChange = (e) => {
            setSearchText(e.target.value)
        // }
          
      }, delay)
    }
}

export default SearchTest