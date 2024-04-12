import { blockContent } from './schemaTypes/blockContent'
import { category } from './schemaTypes/category'
import pageInfo from './schemaTypes/pageInfo'
import { author } from './schemaTypes/author'

export const schema = {
  types: [pageInfo, author, category, blockContent],
}
