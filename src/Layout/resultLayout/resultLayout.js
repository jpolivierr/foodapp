import React from 'react'
import Results from '../../component/results/result'
import AdvanceSearch from '../../component/advanceSearch/advanceSearch'
import './resultLayout.css'

function resultLayout() {
    return (
        <div className='resultLayout'>
            <AdvanceSearch/>
            <Results/>
        </div>
    )
}

export default resultLayout
