import parse from 'html-react-parser'
import isEmpty from 'lodash.isempty';

/**
 * Handle wysiwyg fields from acf-pro
 * @param {*} content 
 * @returns string
 */
export default function handleParse (content) {
    
    return (
        <div className='mb-6 font-light parsed'>{!isEmpty(content) && parse(content, {
            replace: (domNode) => {
                if(domNode.name === 'a'){
                    if(!domNode?.attribs?.href?.includes('localhost:3000/') && domNode?.attribs.href?.charAt(0) !== '/'){
                        domNode.attribs.target = '_blank';
                    }
                }
            }
        })}
        </div>
    )
}