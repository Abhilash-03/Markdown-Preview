import React, { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

function Mardown({mark}) {

    const[text, setText] = useState("");
 
  return (
    <>
      <main className="main">
        <h2 className="heading">Markdown</h2>
     
          <textarea name="markdown" id="mark" cols="80" rows="20" placeholder='# Hello-markdown ### See-preview'  onChange={(e)=>{setText(e.target.value)}}></textarea>
        

          <h2 className='heading'>Preview</h2>
     
         <div className="preview" id='view'>
        {  
           (text.length === 0) ?
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{mark}</ReactMarkdown> 
             : <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            
            }
          </div>

      </main>
    </>
  )
}

export default Mardown
