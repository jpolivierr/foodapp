import React from 'react'
import './advanceSearch.css'

function advanceSearch() {
    return (
        <div className='advance-search'>
            <h2>search Result: 28</h2>
            
            <select name="" id="" className="rating">
                <option value=""> Rating</option>
                <option value=""> 5</option>
                <option value=""> 4</option>
                <option value=""> 3</option>
                <option value=""> 2</option>
                <option value=""> 1</option>
            </select>
            <select name="" id="" className="category">
                <option value=""> Category</option>
                <option value=""> rice</option>
                <option value=""> beans</option>
            </select>
            <select name="" id="" className="Miles">
                <option value=""> Miles</option>
                <option value=""> 5 miles</option>
                <option value=""> 10 miles</option>
                <option value=""> 20 miles</option>
                <option value=""> 30 miles</option>
            </select>
            <select name="" id="" className="Sort">
                <option value=""> Sort</option>
                <option value=""> A-Z</option>
                <option value=""> Z-A</option>
                
            </select>
            <button><i class="fas fa-search"></i>&nbsp;   Apply +</button>
        </div>
    )
}

export default advanceSearch
