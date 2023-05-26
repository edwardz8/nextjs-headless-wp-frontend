import { v4 as uuid } from 'uuid'

/* recommended way to convert blocks to stringified json 
   if you want to modify the result from apollo
*/

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON))

    /* assign ID to each block */
    /* use recursion to loop through as many deeply nested blocks that may be present */
    const assignIds = (b) => {
        b.forEach((block) => {
            block.id = uuid()
            if (block.innerBlocks?.length) {
                assignIds(block.innerBlocks)
            }
        })
    }

    assignIds(blocks)

    return blocks
}