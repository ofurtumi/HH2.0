import MyComponent from '../../../../slices/Mynd';

export default {
  title: 'slices/Mynd'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _MyndMedTexta = () => <MyComponent slice={{"variation":"myndMedTexta","name":"mynd með texta","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"imageText":[{"type":"paragraph","text":"Lorem non enim dolor sint excepteur. Sit sunt cillum et labore ipsum ad cupidatat aute nisi. Quis nisi non dolore ipsum sunt ex excepteur ipsum enim ipsum proident excepteur qui fugiat fugiat.","spans":[]}],"position":true},"id":"_MyndMedTexta"}} />
_MyndMedTexta.storyName = 'mynd með texta'
