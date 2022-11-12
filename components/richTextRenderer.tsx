import { FunctionComponent } from 'react'
import {
  render,
  StoryblokRichtext,
  RenderOptions,
} from 'storyblok-rich-text-react-renderer'

export interface RichtextProps {
  document: StoryblokRichtext
  options?: RenderOptions
}

const RichtextRenderer: FunctionComponent<RichtextProps> = ({
  document,
  options,
}) => {
  return <section>{render(document, options)}</section>
}

export default RichtextRenderer
