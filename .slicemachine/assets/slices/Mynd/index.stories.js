import MyComponent from '../../../../slices/Mynd';

export default {
  title: 'slices/Mynd'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _MyndMedTexta = () => <MyComponent slice={{"variation":"myndMedTexta","name":"mynd með texta","slice_type":"mynd","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1000&h=500&fit=crop"},"imageText":[{"type":"paragraph","text":"Labore ea ut consequat voluptate non irure aliqua ex dolore.","spans":[]}],"position":true},"id":"_MyndMedTexta"}} />
_MyndMedTexta.storyName = 'mynd með texta'
