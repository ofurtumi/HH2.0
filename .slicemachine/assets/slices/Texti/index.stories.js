import MyComponent from '../../../../slices/Texti';

export default {
  title: 'slices/Texti'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"texti","items":[],"primary":{"description":[{"type":"paragraph","text":"Voluptate in laboris tempor.","spans":[]}],"centered":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Link = () => <MyComponent slice={{"variation":"link","name":"Texti með link","slice_type":"texti","items":[],"primary":{"description":[{"type":"paragraph","text":"Sit consectetur veniam voluptate proident ipsum reprehenderit voluptate. Nisi mollit est esse ipsum ut reprehenderit duis cillum consequat sunt eu enim.","spans":[]}],"centered":false,"link":"grow dot-com blockchains"},"id":"_Link"}} />
_Link.storyName = 'Texti með link'
