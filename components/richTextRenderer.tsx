import { Document } from '@contentful/rich-text-types';
import { FunctionComponent } from 'react'




const RichtextRenderer: FunctionComponent<{document : Document}> = ({
  document,
}) => {

/*   if(document)
  {
    return <div>{documentToReactComponents(document)}</div>;
  } */

    return  <div 
    dangerouslySetInnerHTML={{ __html: document }} 
  />
}

export default RichtextRenderer
