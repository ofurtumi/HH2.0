import MyComponent from '../../../../slices/Texti';

export default {
  title: 'slices/Texti'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"texti","items":[],"primary":{"description":[{"type":"paragraph","text":"Cillum id anim magna. Nulla eu cupidatat laboris. Ex aute cillum tempor cupidatat pariatur proident sint occaecat ex cupidatat commodo nisi quis.","spans":[]}],"centered":false},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Link = () => <MyComponent slice={{"variation":"link","name":"Texti með link","slice_type":"texti","items":[],"primary":{"description":[{"type":"paragraph","text":"Magna deserunt eu ut amet laborum anim et ut cupidatat eu tempor sit.","spans":[]}],"centered":false,"link":"strategize customized blockchains"},"id":"_Link"}} />
_Link.storyName = 'Texti með link'
